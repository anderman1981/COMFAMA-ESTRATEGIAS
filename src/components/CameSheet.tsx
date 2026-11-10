import React from 'react';
import { DofaData, BrandingConfig, CameColumnKey } from '../types';
import {
  ComfamaLogo,
  UPBHeaderLogo,
  ClipboardCheckIcon,
  WrenchIcon,
  AlertTriangleIcon,
  ShieldIcon,
  TrendingUpIcon,
  BottomLeftWash,
  BottomRightCameHalftone
} from './DofaGraphics';

interface CameSheetProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  sheetRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const CameSheet: React.FC<CameSheetProps> = ({
  data,
  onChange,
  branding,
  sheetRef,
  isExporting = false
}) => {
  const came = data.came || {
    corregir: ['', '', '', '', ''],
    afrontar: ['', '', '', '', ''],
    mantener: ['', '', '', '', ''],
    explotar: ['', '', '', '', '']
  };

  const handleItemChange = (column: CameColumnKey, index: number, value: string) => {
    const updatedCol = [...(came[column] || ['', '', '', '', ''])];
    updatedCol[index] = value;
    onChange({
      ...data,
      came: {
        ...came,
        [column]: updatedCol
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, column: CameColumnKey, index: number) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const colOrder: CameColumnKey[] = ['corregir', 'afrontar', 'mantener', 'explotar'];
      const nextIndex = index + 1;
      if (nextIndex < 5) {
        const nextElem = document.getElementById(`came-input-${column}-${nextIndex}`);
        if (nextElem) nextElem.focus();
      } else {
        const currentColIdx = colOrder.indexOf(column);
        if (currentColIdx < colOrder.length - 1) {
          const nextCol = colOrder[currentColIdx + 1];
          const nextElem = document.getElementById(`came-input-${nextCol}-0`);
          if (nextElem) nextElem.focus();
        }
      }
    }
  };

  const columns: {
    key: CameColumnKey;
    letter: string;
    title: string;
    subtitle: string;
    question: string;
    color: string;
    borderColor: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: 'corregir',
      letter: 'C',
      title: 'C - CORREGIR',
      subtitle: '(Debilidades)',
      question: '¿Qué acciones tomarás para corregir o reducir tus debilidades?',
      color: '#00838f',
      borderColor: '#00838f',
      icon: <WrenchIcon className="w-5 h-5 text-[#00838f]" />
    },
    {
      key: 'afrontar',
      letter: 'A',
      title: 'A - AFRONTAR',
      subtitle: '(Amenazas)',
      question: '¿Qué acciones tomarás para afrontar o minimizar el impacto de las amenazas?',
      color: '#f39200',
      borderColor: '#f39200',
      icon: <AlertTriangleIcon className="w-5 h-5 text-[#f39200]" />
    },
    {
      key: 'mantener',
      letter: 'M',
      title: 'M - MANTENER',
      subtitle: '(Fortalezas)',
      question: '¿Qué acciones tomarás para mantener y potenciar tus fortalezas?',
      color: '#5c2d91',
      borderColor: '#5c2d91',
      icon: <ShieldIcon className="w-5 h-5 text-[#5c2d91]" />
    },
    {
      key: 'explotar',
      letter: 'E',
      title: 'E - EXPLOTAR',
      subtitle: '(Oportunidades)',
      question: '¿Qué acciones tomarás para aprovechar al máximo las oportunidades?',
      color: '#d80064',
      borderColor: '#d80064',
      icon: <TrendingUpIcon className="w-5 h-5 text-[#d80064]" />
    }
  ];

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
          padding: '20px 36px 16px 36px',
          backgroundColor: '#ffffff',
          color: '#0f172a'
        }}
      >
        {/* Decorative corner artwork */}
        {branding.showWatermarks && (
          <>
            <div className="absolute bottom-0 left-0 pointer-events-none z-0">
              <BottomLeftWash className="w-56 h-32 opacity-90" />
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none z-0">
              <BottomRightCameHalftone className="w-56 h-36 opacity-90" />
            </div>
          </>
        )}

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* TOP LOGO BAR */}
          <div>
            <div className="flex items-center justify-between pb-1.5">
              <div style={{ color: '#d80064' }}>
                <ComfamaLogo className="h-6" />
              </div>
              <div className="flex items-center gap-3">
                <UPBHeaderLogo className="h-6" />
              </div>
            </div>
            <div
              className="w-full h-0.5"
              style={{
                backgroundColor: '#d80064',
                opacity: 0.8
              }}
            />
          </div>

          {/* TITLE & OBJECTIVE SECTION */}
          <div className="flex items-start gap-3 pt-2 pb-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
              style={{ backgroundColor: '#d80064' }}
            >
              <ClipboardCheckIcon className="w-6 h-6 text-white" />
            </div>
            <div className="grow">
              <div className="flex items-baseline justify-between">
                <h1
                  className="font-outfit text-2xl font-black uppercase tracking-tight"
                  style={{ color: '#0d284f' }}
                >
                  PLAN CAME
                </h1>
                {data.companyName && (
                  <span
                    className="font-outfit font-bold text-xs uppercase px-2 py-0.5 rounded-md"
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#0d284f'
                    }}
                  >
                    Caso: {data.companyName}
                  </span>
                )}
              </div>
              <p
                className="text-xs font-semibold leading-relaxed"
                style={{ color: '#1e293b' }}
              >
                A partir del análisis DOFA realizado, define acciones concretas que permitan mejorar y fortalecer la empresa seleccionada.
              </p>
            </div>
          </div>

          {/* 4 COLUMNS (C - A - M - E) */}
          <div className="grid grid-cols-4 gap-3.5 grow my-2">
            {columns.map((col) => {
              const items = came[col.key] || ['', '', '', '', ''];
              return (
                <div
                  key={col.key}
                  className="rounded-3xl flex flex-col p-3.5 overflow-hidden transition-shadow"
                  style={{
                    backgroundColor: '#ffffff',
                    border: `2px solid ${col.borderColor}`,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.04)'
                  }}
                >
                  {/* Column Header: Letter Badge & Sub-Icon */}
                  <div className="flex items-start justify-between mb-1.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-outfit font-black text-lg text-white shadow-xs"
                      style={{ backgroundColor: col.color }}
                    >
                      {col.letter}
                    </div>
                    <div className="p-1">{col.icon}</div>
                  </div>

                  {/* Title & Question */}
                  <div className="mb-2">
                    <div
                      className="font-outfit font-black text-sm uppercase tracking-wide leading-tight"
                      style={{ color: col.color }}
                    >
                      {col.title}
                    </div>
                    <div
                      className="font-outfit font-bold text-xs leading-tight"
                      style={{ color: col.color }}
                    >
                      {col.subtitle}
                    </div>
                    <p
                      className="text-[11px] leading-tight font-medium mt-1 text-slate-700 min-h-[28px]"
                      style={{ color: '#334155' }}
                    >
                      {col.question}
                    </p>
                  </div>

                  {/* 5 Action Lines */}
                  <div className="grow flex flex-col justify-between pt-1">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <div key={idx} className="flex items-start gap-1.5 mb-1 last:mb-0">
                        <span
                          className="font-outfit font-bold text-[11px] w-3.5 shrink-0 pt-0.5 text-center select-none"
                          style={{ color: col.color }}
                        >
                          {idx + 1}.
                        </span>
                        {isExporting ? (
                          <div
                            className="grow text-[10.5px] pb-1 px-1"
                            style={{
                              borderBottom: '1px solid #cbd5e1',
                              color: '#1e293b',
                              minHeight: '34px',
                              lineHeight: '1.35',
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word'
                            }}
                          >
                            {items[idx] || '\u00A0'}
                          </div>
                        ) : (
                          <textarea
                            id={`came-input-${col.key}-${idx}`}
                            rows={2}
                            value={items[idx] || ''}
                            onChange={(e) => handleItemChange(col.key, idx, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, col.key, idx)}
                            placeholder={`Acción ${idx + 1}...`}
                            className="grow bg-transparent border-b outline-none text-[10.5px] leading-tight text-slate-800 pb-1 px-1 placeholder:text-slate-300 placeholder:italic transition-colors resize-none overflow-hidden"
                            style={{
                              borderColor: '#cbd5e1',
                              lineHeight: '1.35',
                              minHeight: '34px',
                              maxHeight: '52px'
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER BAR */}
          <div
            className="flex items-center justify-between pt-1 relative z-10"
            style={{ borderTop: '1px solid #f1f5f9' }}
          >
            {/* Left Motto */}
            <div className="font-outfit font-black text-xs tracking-wider uppercase text-[#d80064] pl-2">
              Sin límites
            </div>

            {/* Center Web */}
            <div className="font-outfit font-bold text-xs tracking-wide text-[#b50053]">
              www.upb.edu.co
            </div>

            {/* Right Brand Marks */}
            <div className="flex items-center gap-3">
              <div style={{ color: '#d80064' }}>
                <ComfamaLogo className="h-4" />
              </div>
              <div className="h-3 w-px bg-slate-300" />
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="font-outfit font-extrabold text-[10px] text-[#2d1b69] tracking-tight uppercase">
                  Universidad Pontificia Bolivariana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
