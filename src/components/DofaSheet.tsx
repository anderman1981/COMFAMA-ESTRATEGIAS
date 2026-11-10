import React from 'react';
import { DofaData, BrandingConfig } from '../types';
import {
  ComfamaLogo,
  TopLeftBrush,
  TopRightBrush,
  BottomRightHalftone,
  DumbbellIcon,
  BrokenChainIcon,
  TargetIcon,
  AlertTriangleIcon
} from './DofaGraphics';
import { Star } from 'lucide-react';

interface DofaSheetProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  sheetRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const DofaSheet: React.FC<DofaSheetProps> = ({
  data,
  onChange,
  branding,
  sheetRef,
  isExporting = false
}) => {
  const handleItemChange = (
    quadrant: 'fortalezas' | 'debilidades' | 'oportunidades' | 'amenazas',
    index: number,
    value: string
  ) => {
    const updated = [...data[quadrant]];
    updated[index] = value;
    onChange({
      ...data,
      [quadrant]: updated
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    quadrant: 'fortalezas' | 'debilidades' | 'oportunidades' | 'amenazas',
    index: number
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const nextId = `dofa-input-${quadrant}-${index + 1}`;
      const nextElem = document.getElementById(nextId);
      if (nextElem) {
        nextElem.focus();
      }
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div
        ref={sheetRef}
        id="dofa-printable-sheet"
        className="print-sheet-container relative overflow-hidden select-text transition-all"
        style={{
          width: '1280px',
          minWidth: '1280px',
          maxWidth: '1280px',
          height: '740px',
          minHeight: '740px',
          maxHeight: '740px',
          boxSizing: 'border-box',
          padding: '24px 36px 18px 36px',
          backgroundColor: '#ffffff',
          color: '#0f172a'
        }}
      >
        {/* Decorative corner artwork - identical to original worksheet */}
        {branding.showWatermarks && (
          <>
            <div className="absolute top-0 left-0 pointer-events-none z-0">
              <TopLeftBrush className="w-64 h-36 opacity-95" />
            </div>
            <div className="absolute top-0 right-0 pointer-events-none z-0">
              <TopRightBrush className="w-64 h-36 opacity-95" />
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none z-0">
              <BottomRightHalftone className="w-64 h-40 opacity-95" />
            </div>
          </>
        )}

        {/* Content Container (Layered above background art) */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* HEADER TITLE */}
          <div className="text-center pt-1 pb-2">
            <h1
              className="font-outfit text-2xl font-black tracking-tight leading-tight uppercase"
              style={{ color: '#0d284f' }}
            >
              REALIZA EL{' '}
              <span style={{ color: '#d80064' }} className="font-black">
                ANÁLISIS DOFA
              </span>{' '}
              DE LA{' '}
              <span style={{ color: '#d80064' }} className="font-black">
                EMPRESA
              </span>
              <br />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: '#0d284f' }}
              >
                QUE SELECCIONES O DEL CASO QUE TE PROPONGAS.
              </span>
            </h1>
          </div>

          {/* EMPRESA O CASO SELECTOR BAR */}
          <div className="mt-1 mb-3">
            <div
              className="rounded-2xl px-4 py-2 flex items-center gap-3"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#d80064' }}
              >
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex items-center gap-2 grow">
                <span
                  className="font-outfit font-extrabold text-sm uppercase tracking-wide shrink-0"
                  style={{ color: '#d80064' }}
                >
                  EMPRESA O CASO QUE SELECCIONAS:
                </span>
                {isExporting ? (
                  <div
                    className="grow font-outfit font-bold text-base px-1 py-0.5 truncate"
                    style={{
                      borderBottom: '2px solid #cbd5e1',
                      color: '#0d284f',
                      minHeight: '26px'
                    }}
                  >
                    {data.companyName || '\u00A0'}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={data.companyName}
                    onChange={(e) => onChange({ ...data, companyName: e.target.value })}
                    placeholder="Escribe aquí el nombre de la empresa, producto o caso de estudio..."
                    className="grow font-outfit font-bold text-base bg-transparent border-b-2 border-slate-300 focus:border-[#d80064] outline-none px-1 py-0.5 placeholder:text-slate-400 placeholder:font-normal placeholder:italic transition-colors"
                    style={{ color: '#0d284f' }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* 2X2 QUADRANTS GRID */}
          <div className="grid grid-cols-2 gap-4 grow mb-2">
            {/* 1. FORTALEZAS */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Header Banner */}
              <div
                className="px-3 py-2 flex items-center gap-3 relative text-white"
                style={{ backgroundColor: '#0f2e59' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #0f2e59'
                  }}
                >
                  <DumbbellIcon className="w-5 h-5 text-[#0f2e59]" />
                </div>
                <div className="grow">
                  <div className="font-outfit font-black text-sm uppercase tracking-wider text-white">
                    FORTALEZAS
                  </div>
                  <div className="text-xs text-blue-100 font-medium">
                    ¿Qué hace que nuestros clientes nos sigan eligiendo?
                  </div>
                </div>
              </div>
              {/* Rows */}
              <div className="p-3 grow flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex items-start gap-1.5 mb-1 last:mb-0">
                    <span
                      className="font-outfit font-bold text-xs w-4 shrink-0 pt-0.5 select-none"
                      style={{ color: '#0f2e59' }}
                    >
                      {idx + 1}.
                    </span>
                    {isExporting ? (
                      <div
                        className="grow text-xs pb-0.5 px-1"
                        style={{
                          borderBottom: '1px solid #cbd5e1',
                          color: '#1e293b',
                          minHeight: '30px',
                          lineHeight: '1.35',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word'
                        }}
                      >
                        {data.fortalezas[idx] || '\u00A0'}
                      </div>
                    ) : (
                      <textarea
                        id={`dofa-input-fortalezas-${idx}`}
                        rows={2}
                        value={data.fortalezas[idx] || ''}
                        onChange={(e) => handleItemChange('fortalezas', idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, 'fortalezas', idx)}
                        placeholder={`Fortaleza ${idx + 1}...`}
                        className="grow bg-transparent border-b outline-none text-xs leading-tight text-slate-800 pb-0.5 px-1 placeholder:text-slate-300 placeholder:italic transition-colors resize-none overflow-hidden"
                        style={{
                          borderColor: '#cbd5e1',
                          lineHeight: '1.35',
                          minHeight: '30px',
                          maxHeight: '48px'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. DEBILIDADES */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Header Banner */}
              <div
                className="px-3 py-2 flex items-center gap-3 relative text-white"
                style={{ backgroundColor: '#d80064' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #d80064'
                  }}
                >
                  <BrokenChainIcon className="w-5 h-5 text-[#d80064]" />
                </div>
                <div className="grow">
                  <div className="font-outfit font-black text-sm uppercase tracking-wider text-white">
                    DEBILIDADES
                  </div>
                  <div className="text-xs text-pink-100 font-medium">
                    ¿Qué limita nuestro crecimiento?
                  </div>
                </div>
              </div>
              {/* Rows */}
              <div className="p-3 grow flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex items-start gap-1.5 mb-1 last:mb-0">
                    <span
                      className="font-outfit font-bold text-xs w-4 shrink-0 pt-0.5 select-none"
                      style={{ color: '#d80064' }}
                    >
                      {idx + 1}.
                    </span>
                    {isExporting ? (
                      <div
                        className="grow text-xs pb-0.5 px-1"
                        style={{
                          borderBottom: '1px solid #cbd5e1',
                          color: '#1e293b',
                          minHeight: '30px',
                          lineHeight: '1.35',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word'
                        }}
                      >
                        {data.debilidades[idx] || '\u00A0'}
                      </div>
                    ) : (
                      <textarea
                        id={`dofa-input-debilidades-${idx}`}
                        rows={2}
                        value={data.debilidades[idx] || ''}
                        onChange={(e) => handleItemChange('debilidades', idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, 'debilidades', idx)}
                        placeholder={`Debilidad ${idx + 1}...`}
                        className="grow bg-transparent border-b outline-none text-xs leading-tight text-slate-800 pb-0.5 px-1 placeholder:text-slate-300 placeholder:italic transition-colors resize-none overflow-hidden"
                        style={{
                          borderColor: '#cbd5e1',
                          lineHeight: '1.35',
                          minHeight: '30px',
                          maxHeight: '48px'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. OPORTUNIDADES */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Header Banner */}
              <div
                className="px-3 py-2 flex items-center gap-3 relative text-white"
                style={{ backgroundColor: '#009cb4' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #009cb4'
                  }}
                >
                  <TargetIcon className="w-5 h-5 text-[#009cb4]" />
                </div>
                <div className="grow">
                  <div className="font-outfit font-black text-sm uppercase tracking-wider text-white">
                    OPORTUNIDADES
                  </div>
                  <div className="text-xs text-teal-100 font-medium">
                    ¿Qué está cambiando que podríamos aprovechar?
                  </div>
                </div>
              </div>
              {/* Rows */}
              <div className="p-3 grow flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex items-start gap-1.5 mb-1 last:mb-0">
                    <span
                      className="font-outfit font-bold text-xs w-4 shrink-0 pt-0.5 select-none"
                      style={{ color: '#009cb4' }}
                    >
                      {idx + 1}.
                    </span>
                    {isExporting ? (
                      <div
                        className="grow text-xs pb-0.5 px-1"
                        style={{
                          borderBottom: '1px solid #cbd5e1',
                          color: '#1e293b',
                          minHeight: '30px',
                          lineHeight: '1.35',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word'
                        }}
                      >
                        {data.oportunidades[idx] || '\u00A0'}
                      </div>
                    ) : (
                      <textarea
                        id={`dofa-input-oportunidades-${idx}`}
                        rows={2}
                        value={data.oportunidades[idx] || ''}
                        onChange={(e) => handleItemChange('oportunidades', idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, 'oportunidades', idx)}
                        placeholder={`Oportunidad ${idx + 1}...`}
                        className="grow bg-transparent border-b outline-none text-xs leading-tight text-slate-800 pb-0.5 px-1 placeholder:text-slate-300 placeholder:italic transition-colors resize-none overflow-hidden"
                        style={{
                          borderColor: '#cbd5e1',
                          lineHeight: '1.35',
                          minHeight: '30px',
                          maxHeight: '48px'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. AMENAZAS */}
            <div
              className="rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Header Banner */}
              <div
                className="px-3 py-2 flex items-center gap-3 relative text-white"
                style={{ backgroundColor: '#f39200' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #f39200'
                  }}
                >
                  <AlertTriangleIcon className="w-5 h-5 text-[#f39200]" />
                </div>
                <div className="grow">
                  <div className="font-outfit font-black text-sm uppercase tracking-wider text-white">
                    AMENAZAS
                  </div>
                  <div className="text-xs text-amber-100 font-medium">
                    ¿Qué podría cambiar nuestro negocio aunque no hagamos nada?
                  </div>
                </div>
              </div>
              {/* Rows */}
              <div className="p-3 grow flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex items-start gap-1.5 mb-1 last:mb-0">
                    <span
                      className="font-outfit font-bold text-xs w-4 shrink-0 pt-0.5 select-none"
                      style={{ color: '#f39200' }}
                    >
                      {idx + 1}.
                    </span>
                    {isExporting ? (
                      <div
                        className="grow text-xs pb-0.5 px-1"
                        style={{
                          borderBottom: '1px solid #cbd5e1',
                          color: '#1e293b',
                          minHeight: '30px',
                          lineHeight: '1.35',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word'
                        }}
                      >
                        {data.amenazas[idx] || '\u00A0'}
                      </div>
                    ) : (
                      <textarea
                        id={`dofa-input-amenazas-${idx}`}
                        rows={2}
                        value={data.amenazas[idx] || ''}
                        onChange={(e) => handleItemChange('amenazas', idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, 'amenazas', idx)}
                        placeholder={`Amenaza ${idx + 1}...`}
                        className="grow bg-transparent border-b outline-none text-xs leading-tight text-slate-800 pb-0.5 px-1 placeholder:text-slate-300 placeholder:italic transition-colors resize-none overflow-hidden"
                        style={{
                          borderColor: '#cbd5e1',
                          lineHeight: '1.35',
                          minHeight: '30px',
                          maxHeight: '48px'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER BAR */}
          <div
            className="flex items-center justify-between pt-1"
            style={{ borderTop: '1px solid #f1f5f9' }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              {branding.showComfamaBranding ? (
                <div style={{ color: '#d80064' }}>
                  <ComfamaLogo className="h-6" />
                </div>
              ) : (
                <span
                  className="font-outfit font-extrabold text-sm tracking-wider uppercase"
                  style={{ color: '#0f2e59' }}
                >
                  ANÁLISIS ESTRATÉGICO
                </span>
              )}
            </div>

            {/* Slogan Motto */}
            <div
              className="font-outfit font-bold text-xs tracking-wide flex items-center gap-2"
              style={{ color: '#0f2e59' }}
            >
              <span>Aprendemos</span>
              <span style={{ color: '#009cb4' }} className="font-black text-sm">
                •
              </span>
              <span>Conectamos</span>
              <span style={{ color: '#d80064' }} className="font-black text-sm">
                •
              </span>
              <span>Transformamos</span>
            </div>

            {/* Subdued Date or Facilitator if entered */}
            <div className="text-[10px] text-slate-400 font-medium">
              {data.facilitator ? `Facilitador: ${data.facilitator} | ` : ''}
              {data.date || 'Formato DOFA'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
