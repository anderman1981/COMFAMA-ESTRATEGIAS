import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

/**
 * Validates whether a generated image DataURL actually contains painted graphic data
 * and is not an empty/blank 1x1 or transparent image.
 */
function isImageValid(dataUrl: string): boolean {
  // A valid 1280x740 rendered PNG with colors and text is typically > 50,000 bytes.
  // A blank/empty white canvas base64 string is usually < 5,000 bytes.
  return typeof dataUrl === 'string' && dataUrl.length > 10000;
}

/**
 * Captures the specified visible HTML element into a high-DPI PNG DataURL.
 * Captures directly from the live DOM element (no off-screen culling) with multi-engine fallback.
 */
async function captureElementToPng(element: HTMLElement): Promise<string> {
  // Tier 1: html2canvas with oklch stylesheet sanitization
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      width: 1280,
      height: 740,
      windowWidth: 1280,
      onclone: (clonedDoc) => {
        // Sanitize oklch CSS color functions in all stylesheets to avoid html2canvas parser crash
        const styles = clonedDoc.querySelectorAll('style');
        styles.forEach((styleTag) => {
          if (styleTag.textContent && styleTag.textContent.includes('oklch')) {
            styleTag.textContent = styleTag.textContent.replace(/oklch\([^)]+\)/g, '#475569');
          }
        });

        // Ensure cloned element is strictly visible and unscaled
        const sheet = clonedDoc.getElementById('dofa-printable-sheet');
        if (sheet) {
          sheet.style.transform = 'none';
          sheet.style.visibility = 'visible';
          sheet.style.display = 'block';
          sheet.style.width = '1280px';
          sheet.style.height = '740px';
        }
      }
    });

    if (canvas && canvas.width > 0 && canvas.height > 0) {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      if (isImageValid(dataUrl)) {
        return dataUrl;
      }
      console.warn('html2canvas produced a low-byte canvas, falling back to html-to-image...');
    }
  } catch (h2cError) {
    console.warn('html2canvas failed, attempting html-to-image fallback...', h2cError);
  }

  // Tier 2: htmlToImage direct on visible element with skipFonts (avoids CORS taint)
  try {
    const dataUrl = await htmlToImage.toPng(element, {
      quality: 0.98,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      width: 1280,
      height: 740,
      skipFonts: true,
      cacheBust: false
    });

    if (isImageValid(dataUrl)) {
      return dataUrl;
    }
  } catch (htiError) {
    console.warn('htmlToImage fallback also failed:', htiError);
  }

  throw new Error('No se pudo rasterizar la matriz DOFA. Usa la opción Imprimir.');
}

/**
 * Exports the sheet as a crisp, landscape A4 PDF.
 */
export async function exportSheetToPdf(
  element: HTMLElement,
  baseFileName: string = 'Matriz_DOFA'
): Promise<void> {
  const cleanName = (baseFileName.trim() || 'Matriz_DOFA')
    .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_ -]/g, '')
    .replace(/\s+/g, '_');

  const imgData = await captureElementToPng(element);

  // Landscape A4: 297mm x 210mm
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pdfWidth = pdf.internal.pageSize.getWidth(); // 297 mm
  const pdfHeight = pdf.internal.pageSize.getHeight(); // 210 mm

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(`${cleanName}.pdf`);
}

/**
 * Exports the sheet as a high-definition PNG image.
 */
export async function exportSheetToPng(
  element: HTMLElement,
  baseFileName: string = 'Matriz_DOFA'
): Promise<void> {
  const cleanName = (baseFileName.trim() || 'Matriz_DOFA')
    .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_ -]/g, '')
    .replace(/\s+/g, '_');

  const imgData = await captureElementToPng(element);

  const link = document.createElement('a');
  link.download = `${cleanName}.png`;
  link.href = imgData;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
