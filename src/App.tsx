import React, { useState, useEffect, useRef } from 'react';
import { DofaData, BrandingConfig, ActiveSheetTab } from './types';
import { INITIAL_DOFA_DATA, SAMPLE_CASES } from './data/sampleCases';
import { DofaSheet } from './components/DofaSheet';
import { CameSheet } from './components/CameSheet';
import { SmartSheet } from './components/SmartSheet';
import { KpiSheet } from './components/KpiSheet';
import { PlanEmpleoSheet } from './components/PlanEmpleoSheet';
import { DofaEditorPanel } from './components/DofaEditorPanel';
import { exportSheetToPdf, exportSheetToPng } from './utils/exportPdf';
import {
  FileDown,
  Printer,
  Sparkles,
  RotateCcw,
  Image as ImageIcon,
  CheckCircle2,
  Lock,
  ChevronDown,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  FolderOpen,
  Download,
  Upload,
  Edit3,
  Eye
} from 'lucide-react';

const STORAGE_KEY = 'dofa_matrix_data_v1';
const BRANDING_STORAGE_KEY = 'dofa_branding_config_v1';

export default function App() {
  const [data, setData] = useState<DofaData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_DOFA_DATA;
  });

  const [branding, setBranding] = useState<BrandingConfig>(() => {
    try {
      const saved = localStorage.getItem(BRANDING_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {
      showWatermarks: true,
      showComfamaBranding: true,
      customFooterMotto: 'Aprendemos • Conectamos • Transformamos',
      fontSize: 'normal'
    };
  });

  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(0.85);
  const [isAutoFit, setIsAutoFit] = useState(true);
  const [showCaseModal, setShowCaseModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [activeSheetTab, setActiveSheetTab] = useState<ActiveSheetTab>('dofa');
  const [activeViewMode, setActiveViewMode] = useState<'both' | 'sheet' | 'editor'>('both');

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(branding));
    } catch (e) {
      console.error('Failed to save branding', e);
    }
  }, [branding]);

  // Auto-fit calculation
  useEffect(() => {
    if (!isAutoFit) return;

    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth - 48; // padding
        // Native sheet width is 1280px
        const calculatedScale = Math.min(1.0, Math.max(0.45, availableWidth / 1280));
        setZoomLevel(Number(calculatedScale.toFixed(2)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isAutoFit, activeViewMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const getCleanFileName = (prefix: string) => {
    let sheetTag = 'DOFA';
    if (activeSheetTab === 'came') sheetTag = 'Plan_CAME';
    if (activeSheetTab === 'smart') sheetTag = 'Caso_Mi_Carrera_SMART';
    if (activeSheetTab === 'kpi') sheetTag = 'KPI_de_Resultado';
    if (activeSheetTab === 'empleo') sheetTag = 'Plan_de_Accion_Empleo';
    return data.companyName ? `${prefix}_${data.companyName}_${sheetTag}` : `${prefix}_${sheetTag}`;
  };

  const getSheetTitle = () => {
    if (activeSheetTab === 'dofa') return 'Matriz DOFA';
    if (activeSheetTab === 'came') return 'Plan CAME';
    if (activeSheetTab === 'smart') return 'Caso Mi Carrera SMART';
    if (activeSheetTab === 'kpi') return 'KPI de Resultado';
    return 'Plan de Acción para Conseguir Empleo';
  };

  const handleDownloadPdf = async () => {
    if (!sheetRef.current) return;
    try {
      setIsExporting(true);
      const title = getSheetTitle();
      setExportMessage(`Generando PDF de ${title} en alta definición...`);
      // Allow DOM state to update and render plain text divs
      await new Promise((resolve) => setTimeout(resolve, 200));
      await exportSheetToPdf(
        sheetRef.current,
        getCleanFileName('Analisis')
      );
      showToast(`¡Tu ${title} se descargó en PDF exitosamente!`);
    } catch (err: unknown) {
      console.error('Error generating PDF:', err);
      showToast('Descarga automática no completada. Abriendo asistente de impresión...');
      setTimeout(() => {
        window.print();
      }, 500);
    } finally {
      setIsExporting(false);
      setExportMessage(null);
    }
  };

  const handleDownloadPng = async () => {
    if (!sheetRef.current) return;
    try {
      setIsExporting(true);
      const title = getSheetTitle();
      setExportMessage(`Generando imagen de ${title}...`);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await exportSheetToPng(
        sheetRef.current,
        getCleanFileName('Grafico')
      );
      showToast(`¡Imagen PNG de ${title} descargada con éxito!`);
    } catch (err: unknown) {
      console.error('Error generating image:', err);
      showToast('Error al exportar la imagen. Intenta con la opción Imprimir.');
    } finally {
      setIsExporting(false);
      setExportMessage(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    setShowClearModal(true);
  };

  const executeClear = () => {
    setData({
      companyName: '',
      fortalezas: ['', '', '', '', ''],
      debilidades: ['', '', '', '', ''],
      oportunidades: ['', '', '', '', ''],
      amenazas: ['', '', '', '', ''],
      came: {
        corregir: ['', '', '', '', ''],
        afrontar: ['', '', '', '', ''],
        mantener: ['', '', '', '', ''],
        explotar: ['', '', '', '', '']
      },
      carrera: {
        fortaleza: ['', '', '', '', ''],
        mantener: ['', '', '', '', ''],
        objetivoSmart: ['', '', '', '', ''],
        specific: '',
        measurable: '',
        achievable: '',
        relevant: '',
        timeBound: ''
      },
      kpi: {
        smartEspecifico: '',
        smartMedible: '',
        smartAlcanzable: '',
        smartRelevante: '',
        smartTiempo: '',
        kpiResultado: '',
        impulsores: ['', '', ''],
        responsable: '',
        frecuencia: 'Mensual',
        otraFrecuencia: '',
        medicionFormula: '',
        conectadoEstrategico: ''
      },
      planEmpleo: {
        objetivoGeneral: '',
        fechaLimite: '',
        smartEspecifico: '',
        smartMedible: '',
        smartAlcanzable: '',
        smartRelevante: '',
        smartTiempo: '',
        userPhotoUrl: '',
        kpiResultado: '',
        kpiImpulsor1: '',
        kpiImpulsor2: '',
        kpiImpulsor3: '',
        kpiImpulsor4: '',
        accion1: '',
        accion2: '',
        accion3: '',
        accion4: '',
        accion5: '',
        modoEjemplo: false
      },
      facilitator: '',
      date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
    });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setShowClearModal(false);
    showToast('Documento reiniciado a blanco.');
  };

  const handleLoadCase = (presetData: DofaData) => {
    setData(presetData);
    setShowCaseModal(false);
    showToast(`Caso cargado: ${presetData.companyName}`);
  };

  const handleExportJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `Matriz_DOFA_${(data.companyName || 'Borrador').replace(/\s+/g, '_')}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Archivo JSON de respaldo descargado.');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.fortalezas && parsed.debilidades) {
          setData(parsed);
          showToast('Datos importados correctamente.');
        } else {
          showToast('El archivo no tiene el formato DOFA esperado.');
        }
      } catch (err) {
        showToast('Error al leer el archivo JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800">
      {/* Hidden file input for JSON import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImportJson}
        className="hidden"
      />

      {/* TOP BAR / NAVIGATION */}
      <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-50 px-4 lg:px-8 py-3 flex items-center justify-between gap-4 shadow-xs">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-black text-xl tracking-tight text-[#0d284f]">
              Matriz <span className="text-[#d80064]">DOFA</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
              Formato Comfama
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 pl-3 border-l border-slate-200">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] text-emerald-700 font-medium">100% Local en tu navegador</span>
          </div>
        </div>

        {/* Zone 2: Navigation / Quick Tools */}
        <div className="flex items-center gap-2">
          {/* Main Matrix / Strategy Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setActiveSheetTab('dofa')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSheetTab === 'dofa'
                  ? 'bg-[#0f2e59] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-300" />
              <span>Matriz DOFA</span>
            </button>
            <button
              onClick={() => setActiveSheetTab('came')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSheetTab === 'came'
                  ? 'bg-[#d80064] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-pink-300" />
              <span>Plan CAME</span>
            </button>
            <button
              onClick={() => setActiveSheetTab('smart')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSheetTab === 'smart'
                  ? 'bg-[#6d28d9] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-purple-300" />
              <span>Mi Carrera (SMART)</span>
            </button>
            <button
              onClick={() => setActiveSheetTab('kpi')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSheetTab === 'kpi'
                  ? 'bg-[#e11d48] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-300" />
              <span>KPI de Resultado</span>
            </button>
            <button
              onClick={() => setActiveSheetTab('empleo')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSheetTab === 'empleo'
                  ? 'bg-[#d80064] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-pink-300" />
              <span>Plan de Empleo</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setShowCaseModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Cargar Casos</span>
            </button>

            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              title="Borrar todos los campos"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>

            <div className="h-4 w-px bg-slate-200 mx-1" />

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setActiveViewMode('both')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeViewMode === 'both' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Dividida
              </button>
              <button
                onClick={() => setActiveViewMode('sheet')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeViewMode === 'sheet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Hoja
              </button>
              <button
                onClick={() => setActiveViewMode('editor')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeViewMode === 'editor' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Formulario
              </button>
            </div>
          </div>
        </div>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            title="Imprimir directamente o usar el diálogo nativo de PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir</span>
          </button>

          <button
            onClick={handleDownloadPng}
            disabled={isExporting}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            title="Descargar como imagen PNG para presentaciones o diapositivas"
          >
            <ImageIcon className="w-3.5 h-3.5 text-slate-600" />
            <span>PNG</span>
          </button>

          <button
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0f2e59] hover:bg-[#163e77] active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50"
          >
            {isExporting ? (
              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FileDown className="w-4 h-4 text-[#ff1493]" />
            )}
            <span className="whitespace-nowrap">
              {isExporting ? 'Generando...' : 'Descargar en PDF'}
            </span>
          </button>
        </div>
      </header>

      {/* SUB-HEADER TOOLBAR (ZOOM, BACKUP & INSTRUCTIONS) */}
      <div className="no-print bg-slate-50 border-b border-slate-200 px-4 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-600 flex items-center gap-1.5">
            <Edit3 className="w-3.5 h-3.5 text-[#009cb4]" />
            <span>Escribe directamente sobre la hoja o usa el formulario.</span>
          </span>

          <span className="text-slate-300">|</span>

          {/* Quick Preset Pill */}
          <div className="flex items-center gap-1">
            <span className="text-slate-500">Ejemplos rápidos:</span>
            {SAMPLE_CASES.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleLoadCase(sample.data)}
                className="text-[11px] text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded hover:bg-slate-100 transition-colors cursor-pointer truncate max-w-[140px]"
                title={sample.description}
              >
                {sample.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right side tools: Zoom & JSON Backup */}
        <div className="flex items-center gap-2">
          {/* Zoom controls (Only relevant when sheet is visible) */}
          {activeViewMode !== 'editor' && (
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-2xs">
              <button
                onClick={() => {
                  setIsAutoFit(false);
                  setZoomLevel((prev) => Math.max(0.4, Number((prev - 0.1).toFixed(2))));
                }}
                className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                title="Reducir zoom"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-semibold text-slate-700 w-12 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => {
                  setIsAutoFit(false);
                  setZoomLevel((prev) => Math.min(1.3, Number((prev + 0.1).toFixed(2))));
                }}
                className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                title="Aumentar zoom"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsAutoFit(true)}
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded cursor-pointer ${
                  isAutoFit ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:bg-slate-100'
                }`}
                title="Ajustar automáticamente al ancho de la ventana"
              >
                Ajustar
              </button>
            </div>
          )}

          {/* Backup dropdown */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleExportJson}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded border border-slate-200 cursor-pointer"
              title="Guardar archivo .JSON de respaldo"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded border border-slate-200 cursor-pointer"
              title="Abrir archivo .JSON guardado"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="grow p-4 lg:p-6 flex flex-col gap-6 max-w-7xl mx-auto w-full">
        {/* Dynamic Layout according to active view mode */}
        <div className="flex flex-col gap-6">
          {/* Editor Panel (Shown in 'both' or 'editor' mode) */}
          {activeViewMode !== 'sheet' && (
            <div className="w-full">
              <DofaEditorPanel
                data={data}
                onChange={setData}
                branding={branding}
                onBrandingChange={setBranding}
                activeSheetTab={activeSheetTab}
                onSheetTabChange={setActiveSheetTab}
              />
            </div>
          )}

          {/* Sheet Canvas Preview (Shown in 'both' or 'sheet' mode) */}
          {activeViewMode !== 'editor' && (
            <div
              ref={containerRef}
              className="w-full bg-slate-200/70 p-4 sm:p-6 rounded-2xl border border-slate-300 flex flex-col items-center justify-center min-h-[500px] overflow-hidden"
            >
              <div className="mb-2 text-xs font-semibold text-slate-500 flex items-center justify-between w-full max-w-[1280px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700">
                    Vista Previa: {
                      activeSheetTab === 'dofa'
                        ? 'Matriz DOFA (Diagnóstico)'
                        : activeSheetTab === 'came'
                        ? 'Plan CAME (Estrategias de Acción)'
                        : activeSheetTab === 'smart'
                        ? 'Caso Profesional: Mi Carrera (Objetivos SMART)'
                        : activeSheetTab === 'kpi'
                        ? 'Workbook Actividad: KPI de Resultado'
                        : 'Mapa Completo: Plan de Acción Para Conseguir Empleo'
                    }
                  </span>
                  <span className="text-[11px] text-slate-400">· Formato A4 Paisaje</span>
                </div>
                <span className="text-[11px] text-slate-400">Dimensiones de exportación: 1280 × 740 px</span>
              </div>

              {/* Scaled Wrapper for responsive view without shrinking actual printable sheet */}
              <div
                className="overflow-auto max-w-full flex justify-center py-2"
                style={{
                  width: '100%'
                }}
              >
                <div
                  style={{
                    transform: isExporting ? 'none' : `scale(${zoomLevel})`,
                    transformOrigin: 'top center',
                    width: '1280px',
                    height: isExporting ? '740px' : `${740 * zoomLevel + 20}px`
                  }}
                  className={isExporting ? '' : 'transition-transform duration-150'}
                >
                  {activeSheetTab === 'dofa' ? (
                    <DofaSheet
                      data={data}
                      onChange={setData}
                      branding={branding}
                      sheetRef={sheetRef}
                      isExporting={isExporting}
                    />
                  ) : activeSheetTab === 'came' ? (
                    <CameSheet
                      data={data}
                      onChange={setData}
                      branding={branding}
                      sheetRef={sheetRef}
                      isExporting={isExporting}
                    />
                  ) : activeSheetTab === 'smart' ? (
                    <SmartSheet
                      data={data}
                      onChange={setData}
                      branding={branding}
                      sheetRef={sheetRef}
                      isExporting={isExporting}
                    />
                  ) : activeSheetTab === 'kpi' ? (
                    <KpiSheet
                      data={data}
                      onChange={setData}
                      branding={branding}
                      sheetRef={sheetRef}
                      isExporting={isExporting}
                    />
                  ) : (
                    <PlanEmpleoSheet
                      data={data}
                      onChange={setData}
                      branding={branding}
                      sheetRef={sheetRef}
                      isExporting={isExporting}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER BAR */}
      <footer className="no-print bg-white border-t border-slate-200 py-3 px-6 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Herramienta pedagógica y estratégica para análisis DOFA (FODA / SWOT).
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
              Privado · Sin servidores · Descarga directa
            </span>
          </div>
        </div>
      </footer>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* EXPORT LOADING OVERLAY */}
      {isExporting && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-[#0f2e59]">
              <div className="w-6 h-6 border-3 border-[#0f2e59] border-t-transparent rounded-full animate-spin" />
            </div>
            <h3 className="font-outfit font-bold text-base text-slate-900">
              Exportando Documento
            </h3>
            <p className="text-xs text-slate-500">
              {exportMessage || 'Procesando gráficos vectoriales y texto en alta resolución...'}
            </p>
          </div>
        </div>
      )}

      {/* SAMPLE CASES MODAL */}
      {showCaseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="font-outfit font-bold text-lg text-slate-900">
                  Cargar Caso de Ejemplo
                </h3>
              </div>
              <button
                onClick={() => setShowCaseModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Selecciona un caso prediseñado para explorar cómo se estructura un análisis DOFA completo o para usarlo como punto de partida en tu taller:
            </p>

            <div className="space-y-3">
              {SAMPLE_CASES.map((sample, idx) => (
                <div
                  key={idx}
                  onClick={() => handleLoadCase(sample.data)}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#0f2e59] hover:bg-slate-50/80 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0f2e59]">
                      {sample.name}
                    </h4>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Cargar
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{sample.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCaseModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM CLEAR MODAL */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-outfit font-bold text-base text-slate-900">
                ¿Reiniciar documento?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Se vaciarán todos los campos de la Matriz DOFA, Plan CAME, Caso Profesional (SMART) y KPI de Resultado para empezar desde cero.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowClearModal(false)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={executeClear}
                className="px-4 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-98 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
