import React from 'react';
import { DofaData, BrandingConfig, KpiData } from '../types';
import {
  TrophyKpiIcon,
  GearKpiIcon,
  UserAvatarKpiIcon,
  CalendarClockKpiIcon,
  PlusCircleConnector,
  TargetDartHeaderIllustration,
  RocketIllustration,
  LightbulbDoodle,
  TargetIcon,
  TrendingUpIcon
} from './DofaGraphics';

interface KpiSheetProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  sheetRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const KpiSheet: React.FC<KpiSheetProps> = ({
  data,
  onChange,
  branding,
  sheetRef,
  isExporting = false
}) => {
  const kpi: KpiData = data.kpi || {
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
  };

  const handleFieldChange = (field: keyof KpiData, value: any) => {
    onChange({
      ...data,
      kpi: {
        ...kpi,
        [field]: value
      }
    });
  };

  const handleImpulsorChange = (index: number, value: string) => {
    const updated = [...(kpi.impulsores || ['', '', ''])];
    updated[index] = value;
    handleFieldChange('impulsores', updated);
  };

  const frecuencias = ['Diaria', 'Semanal', 'Quincenal', 'Mensual', 'Trimestral', 'Anual'];

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
          padding: '16px 28px 12px 28px',
          backgroundColor: '#ffffff',
          color: '#0f172a'
        }}
      >
        {/* Top-Right Halftone dots spray */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-40">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
            {[...Array(24)].map((_, i) => (
              <circle
                key={i}
                cx={70 + (i % 6) * 9}
                cy={10 + Math.floor(i / 6) * 11}
                r={1.5 + (i % 3) * 0.7}
                fill="#e11d48"
              />
            ))}
          </svg>
        </div>

        {/* Bottom-Left Halftone dots spray */}
        <div className="absolute bottom-0 left-0 pointer-events-none opacity-40">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
            {[...Array(24)].map((_, i) => (
              <circle
                key={i}
                cx={10 + (i % 6) * 9}
                cy={40 + Math.floor(i / 6) * 11}
                r={1.5 + (i % 3) * 0.7}
                fill="#009cb4"
              />
            ))}
          </svg>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* HEADER SECTION */}
          <div className="flex items-center justify-between pb-1 relative">
            
            {/* Left: WORKBOOK ACTIVIDAD */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-start gap-1">
                {/* WORKBOOK brush badge */}
                <div className="relative inline-block transform -rotate-2">
                  <div className="px-4 py-1 rounded-xl bg-[#6d28d9] text-white shadow-xs">
                    <span
                      className="text-sm font-black tracking-wider uppercase"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      WORKBOOK
                    </span>
                  </div>
                  {/* Vibration marks */}
                  <div className="absolute -right-3 top-1 flex flex-col gap-0.5 text-[#6d28d9]">
                    <div className="w-2.5 h-0.5 bg-[#6d28d9] rounded-full transform rotate-12" />
                    <div className="w-3 h-0.5 bg-[#6d28d9] rounded-full" />
                    <div className="w-2.5 h-0.5 bg-[#6d28d9] rounded-full transform -rotate-12" />
                  </div>
                </div>

                {/* ACTIVIDAD teal badge */}
                <div className="px-3 py-0.5 rounded-lg bg-[#009cb4] text-white transform -rotate-1 ml-2 shadow-2xs">
                  <span className="text-[11px] font-black tracking-wide uppercase">
                    ACTIVIDAD
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Title & Subtitle */}
            <div className="text-center flex flex-col items-center">
              <div className="relative inline-block">
                <span className="text-3xl font-black text-[#0d1b3e] tracking-tight uppercase mr-2">
                  KPI DE
                </span>
                <span
                  className="text-3xl font-black italic text-[#e11d48] uppercase tracking-wide inline-block"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  RESULTADO
                </span>

                {/* Purple Underline */}
                <svg
                  className="w-full h-2.5 absolute -bottom-1 left-0"
                  viewBox="0 0 280 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 C 60 2, 180 7, 278 4"
                    stroke="#7c3aed"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Vibration marks */}
                <div className="absolute -right-4 -top-1 flex flex-col gap-0.5 text-[#0d1b3e]">
                  <div className="w-2.5 h-0.5 bg-[#0d1b3e] rounded-full transform rotate-12" />
                  <div className="w-3 h-0.5 bg-[#0d1b3e] rounded-full" />
                  <div className="w-2.5 h-0.5 bg-[#0d1b3e] rounded-full transform -rotate-12" />
                </div>
              </div>

              <p className="text-[11px] font-semibold text-slate-700 mt-1 max-w-xl text-center leading-tight">
                Define un KPI que ayude a medir el crecimiento y el éxito de nuestra empresa y los impulsores que nos llevarán a lograrlo.
              </p>
            </div>

            {/* Right: Target with Dart header illustration */}
            <div className="flex items-center gap-3">
              {data.companyName && (
                <div className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full max-w-[160px] truncate">
                  {data.companyName}
                </div>
              )}
              <TargetDartHeaderIllustration className="w-16 h-16" />
            </div>

          </div>

          {/* MAIN BODY: 2-COLUMN LAYOUT (LEFT: 1. SMART / RIGHT: 2. KPI + 4 CONNECTED BOXES) */}
          <div className="grid grid-cols-12 gap-3 my-auto items-stretch">
            
            {/* LEFT COLUMN: 1. OBJETIVO SMART (Cols 1 to 4) */}
            <div
              className="col-span-4 rounded-2xl relative flex flex-col justify-between overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0d1b3e',
                boxShadow: '0 4px 12px -2px rgba(13, 27, 62, 0.08)',
                minHeight: '430px'
              }}
            >
              {/* Header Banner */}
              <div
                className="px-3.5 py-2 flex items-center gap-2"
                style={{ backgroundColor: '#0d1b3e', color: '#ffffff' }}
              >
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                  <TargetIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <h3 className="font-black text-xs tracking-wider uppercase">
                  1. OBJETIVO SMART
                </h3>
              </div>

              {/* Sub-prompt */}
              <div className="px-3 pt-1.5 pb-1 text-center bg-slate-50/60 border-b border-slate-100">
                <p className="text-[10px] font-bold text-[#0d1b3e] leading-tight">
                  Define el objetivo estratégico de la empresa usando el método SMART.
                </p>
              </div>

              {/* 5 SMART Rows */}
              <div className="p-2.5 flex flex-col justify-between grow gap-1.5">
                {[
                  {
                    letter: 'S',
                    title: 'ESPECÍFICO',
                    question: '¿Qué queremos lograr?',
                    color: '#0284c7',
                    field: 'smartEspecifico' as const,
                    placeholder: 'Ej: Aumentar las ventas de la línea premium...'
                  },
                  {
                    letter: 'M',
                    title: 'MEDIBLE',
                    question: '¿Cómo sabremos que lo logramos?',
                    color: '#009cb4',
                    field: 'smartMedible' as const,
                    placeholder: 'Ej: Crecimiento de facturación en un 25%...'
                  },
                  {
                    letter: 'A',
                    title: 'ALCANZABLE',
                    question: '¿Es posible de lograr?',
                    color: '#7c3aed',
                    field: 'smartAlcanzable' as const,
                    placeholder: 'Ej: Con nuevo catálogo digital y dos distribuidores...'
                  },
                  {
                    letter: 'R',
                    title: 'RELEVANTE',
                    question: '¿Por qué es importante para nuestro negocio?',
                    color: '#e11d48',
                    field: 'smartRelevante' as const,
                    placeholder: 'Ej: Asegura el margen operativo y fideliza clientes...'
                  },
                  {
                    letter: 'T',
                    title: 'TIEMPO',
                    question: '¿En cuánto tiempo lo lograremos?',
                    color: '#f97316',
                    field: 'smartTiempo' as const,
                    placeholder: 'Ej: En un plazo de 6 meses (antes de diciembre)...'
                  }
                ].map((item) => (
                  <div key={item.field} className="flex items-start gap-2 border-b border-slate-100 pb-1">
                    {/* Square Badge */}
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center font-black text-white text-xs shrink-0 shadow-2xs mt-0.5"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.letter}
                    </div>

                    <div className="grow min-w-0">
                      <div className="flex items-baseline gap-1.5 leading-none mb-0.5">
                        <span
                          className="font-black text-[10px] uppercase tracking-wide"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </span>
                        <span className="text-[9px] font-semibold text-slate-500 truncate">
                          {item.question}
                        </span>
                      </div>

                      {isExporting ? (
                        <div
                          className="text-[11px] text-slate-800 leading-tight font-medium"
                          style={{
                            minHeight: '26px',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            lineHeight: 1.25
                          }}
                        >
                          {kpi[item.field] || ''}
                        </div>
                      ) : (
                        <textarea
                          rows={2}
                          value={kpi[item.field] || ''}
                          onChange={(e) => handleFieldChange(item.field, e.target.value)}
                          placeholder={item.placeholder}
                          className="w-full text-[11px] text-slate-800 bg-transparent border-0 outline-none resize-none leading-tight font-medium placeholder:text-slate-300 focus:bg-slate-50/80 rounded px-1"
                          style={{ minHeight: '26px', lineHeight: 1.25 }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION: 2. KPI DE RESULTADO + 4 CONNECTED BOXES (Cols 5 to 12) */}
            <div className="col-span-8 flex flex-col justify-between gap-2.5">
              
              {/* TOP: 2. KPI DE RESULTADO */}
              <div
                className="rounded-2xl p-2.5 relative flex flex-col justify-between"
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #f43f5e',
                  boxShadow: '0 4px 12px -2px rgba(244, 63, 94, 0.08)'
                }}
              >
                {/* Banner Pill */}
                <div className="flex items-center justify-between mb-1">
                  <div
                    className="px-3.5 py-1 rounded-xl flex items-center gap-1.5 shadow-2xs"
                    style={{ backgroundColor: '#e11d48', color: '#ffffff' }}
                  >
                    <TrendingUpIcon className="w-4 h-4 text-white" />
                    <span className="font-black text-xs tracking-wider uppercase">
                      2. KPI DE RESULTADO
                    </span>
                  </div>

                  <p className="text-[11px] font-bold text-[#0d1b3e] px-2 text-right">
                    ¿Qué resultado clave mediremos para saber que estamos avanzando hacia nuestro objetivo?
                  </p>
                </div>

                {/* Big Input container with Trophy */}
                <div
                  className="rounded-xl p-2 flex items-center gap-3 border"
                  style={{
                    backgroundColor: '#fff1f2',
                    borderColor: '#fecdd3'
                  }}
                >
                  <div className="shrink-0 pl-1">
                    <TrophyKpiIcon className="w-10 h-10" />
                  </div>

                  <div className="grow min-w-0">
                    {isExporting ? (
                      <div
                        className="text-xs font-bold text-[#0d1b3e] leading-snug"
                        style={{
                          minHeight: '44px',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                          lineHeight: 1.35
                        }}
                      >
                        {kpi.kpiResultado || ''}
                      </div>
                    ) : (
                      <textarea
                        rows={2}
                        value={kpi.kpiResultado || ''}
                        onChange={(e) => handleFieldChange('kpiResultado', e.target.value)}
                        placeholder="Ej: Crecimiento de Facturación Mensual Neta de la Línea Premium (Meta: +25% semestral)..."
                        className="w-full text-xs font-bold text-[#0d1b3e] bg-transparent border-0 outline-none resize-none leading-snug placeholder:text-slate-400 placeholder:font-normal focus:bg-white/60 rounded px-1.5 py-0.5"
                        style={{ minHeight: '44px', lineHeight: 1.35 }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* 4 CONNECTED BOXES ROW (IMPULSORES + RESPONSABLE + FRECUENCIA + MEDICIÓN) */}
              <div className="flex items-center gap-1.5 grow">
                
                {/* 3. IMPULSORES (Teal) */}
                <div
                  className="flex-1 rounded-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #009cb4',
                    minHeight: '265px'
                  }}
                >
                  <div className="px-2 py-1.5 bg-[#009cb4] text-white flex items-center gap-1">
                    <GearKpiIcon className="w-3.5 h-3.5 text-white" />
                    <span className="font-black text-[10px] tracking-wider uppercase truncate">
                      3. IMPULSORES
                    </span>
                  </div>

                  <div className="p-1.5 border-b border-slate-100 bg-slate-50/60">
                    <p className="text-[9px] font-bold text-slate-800 leading-tight">
                      ¿Qué factores o acciones clave impulsan este resultado?
                    </p>
                  </div>

                  <div className="p-2 flex flex-col justify-between grow gap-1.5">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="flex items-start gap-1 border-b border-slate-100 pb-1">
                        <span className="w-4.5 h-4.5 rounded-full bg-[#009cb4] text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          {idx + 1}
                        </span>
                        <div className="grow min-w-0">
                          {isExporting ? (
                            <div
                              className="text-[10px] text-slate-800 font-medium leading-tight"
                              style={{
                                minHeight: '34px',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                lineHeight: 1.25
                              }}
                            >
                              {kpi.impulsores[idx] || ''}
                            </div>
                          ) : (
                            <textarea
                              rows={2}
                              value={kpi.impulsores[idx] || ''}
                              onChange={(e) => handleImpulsorChange(idx, e.target.value)}
                              placeholder={`Impulsor ${idx + 1}...`}
                              className="w-full text-[10px] text-slate-800 bg-transparent border-0 outline-none resize-none leading-tight font-medium placeholder:text-slate-300 focus:bg-slate-50 rounded px-1"
                              style={{ minHeight: '34px', lineHeight: 1.25 }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONNECTOR (+) */}
                <div className="shrink-0 flex items-center justify-center">
                  <PlusCircleConnector className="w-5 h-5 text-[#0d1b3e]" />
                </div>

                {/* 4. RESPONSABLE (Purple) */}
                <div
                  className="flex-1 rounded-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #7c3aed',
                    minHeight: '265px'
                  }}
                >
                  <div className="px-2 py-1.5 bg-[#7c3aed] text-white flex items-center gap-1">
                    <UserAvatarKpiIcon className="w-3.5 h-3.5 text-white" />
                    <span className="font-black text-[10px] tracking-wider uppercase truncate">
                      4. RESPONSABLE
                    </span>
                  </div>

                  <div className="p-1.5 border-b border-slate-100 bg-slate-50/60">
                    <p className="text-[9px] font-bold text-slate-800 leading-tight">
                      ¿Quién o qué área de la empresa es responsable?
                    </p>
                  </div>

                  <div className="p-2 flex flex-col items-center justify-center grow gap-2 text-center">
                    <div className="py-1">
                      <UserAvatarKpiIcon className="w-12 h-12 text-[#7c3aed]" />
                    </div>

                    <div className="w-full border-t border-slate-200 pt-1.5">
                      {isExporting ? (
                        <div
                          className="text-[11px] font-bold text-[#0d1b3e] leading-tight"
                          style={{
                            minHeight: '32px',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word'
                          }}
                        >
                          {kpi.responsable || ''}
                        </div>
                      ) : (
                        <textarea
                          rows={2}
                          value={kpi.responsable || ''}
                          onChange={(e) => handleFieldChange('responsable', e.target.value)}
                          placeholder="Ej: Gerente Comercial / Líder E-commerce..."
                          className="w-full text-[11px] font-bold text-[#0d1b3e] bg-transparent border-0 outline-none resize-none leading-tight text-center placeholder:text-slate-300 placeholder:font-normal focus:bg-slate-50 rounded px-1"
                          style={{ minHeight: '32px' }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* CONNECTOR (+) */}
                <div className="shrink-0 flex items-center justify-center">
                  <PlusCircleConnector className="w-5 h-5 text-[#0d1b3e]" />
                </div>

                {/* 5. FRECUENCIA (Orange) */}
                <div
                  className="flex-1 rounded-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #f97316',
                    minHeight: '265px'
                  }}
                >
                  <div className="px-2 py-1.5 bg-[#f97316] text-white flex items-center gap-1">
                    <CalendarClockKpiIcon className="w-3.5 h-3.5 text-white" />
                    <span className="font-black text-[10px] tracking-wider uppercase truncate">
                      5. FRECUENCIA
                    </span>
                  </div>

                  <div className="p-1.5 border-b border-slate-100 bg-slate-50/60">
                    <p className="text-[9px] font-bold text-slate-800 leading-tight">
                      ¿Con qué frecuencia se revisará este KPI?
                    </p>
                  </div>

                  <div className="p-2 flex flex-col justify-between grow text-[10px] space-y-0.5">
                    {frecuencias.map((freq) => {
                      const isSelected = kpi.frecuencia === freq;
                      return (
                        <label
                          key={freq}
                          className="flex items-center gap-1.5 cursor-pointer hover:text-orange-600 transition-colors"
                          onClick={() => handleFieldChange('frecuencia', freq)}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-orange-500 flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: isSelected ? '#f97316' : '#ffffff'
                            }}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className={`font-semibold ${isSelected ? 'text-orange-700 font-bold' : 'text-slate-700'}`}>
                            {freq}
                          </span>
                        </label>
                      );
                    })}

                    {/* Otra Frecuencia */}
                    <div className="flex items-center gap-1 pt-0.5 border-t border-slate-100">
                      <span className="text-[9px] font-bold text-slate-500 shrink-0">Otra:</span>
                      <input
                        type="text"
                        value={kpi.otraFrecuencia || ''}
                        onChange={(e) => {
                          handleFieldChange('otraFrecuencia', e.target.value);
                          if (e.target.value) handleFieldChange('frecuencia', 'Otra');
                        }}
                        placeholder="..."
                        className="grow text-[10px] text-slate-800 bg-transparent border-b border-slate-300 outline-none px-1"
                      />
                    </div>
                  </div>
                </div>

                {/* CONNECTOR (+) */}
                <div className="shrink-0 flex items-center justify-center">
                  <PlusCircleConnector className="w-5 h-5 text-[#0d1b3e]" />
                </div>

                {/* 6. MEDICIÓN (Blue) */}
                <div
                  className="flex-1 rounded-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #1d4ed8',
                    minHeight: '265px'
                  }}
                >
                  <div className="px-2 py-1.5 bg-[#1d4ed8] text-white flex items-center gap-1">
                    <TrendingUpIcon className="w-3.5 h-3.5 text-white" />
                    <span className="font-black text-[10px] tracking-wider uppercase truncate">
                      6. MEDICIÓN
                    </span>
                  </div>

                  <div className="p-1.5 border-b border-slate-100 bg-slate-50/60">
                    <p className="text-[9px] font-bold text-slate-800 leading-tight">
                      ¿Cómo mediremos este KPI? Fórmula o unidad:
                    </p>
                  </div>

                  <div className="p-2 flex flex-col justify-between grow">
                    {/* Inner light blue card with icon */}
                    <div
                      className="rounded-xl p-2 flex flex-col items-center justify-center grow border border-blue-100"
                      style={{ backgroundColor: '#eff6ff' }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-1.5 shadow-2xs">
                        <TrendingUpIcon className="w-4 h-4 text-blue-600" />
                      </div>

                      {isExporting ? (
                        <div
                          className="text-[10px] font-bold text-[#0d1b3e] text-center leading-tight w-full"
                          style={{
                            minHeight: '44px',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            lineHeight: 1.25
                          }}
                        >
                          {kpi.medicionFormula || ''}
                        </div>
                      ) : (
                        <textarea
                          rows={3}
                          value={kpi.medicionFormula || ''}
                          onChange={(e) => handleFieldChange('medicionFormula', e.target.value)}
                          placeholder="Fórmula: [(Ventas Mes - Ventas Mes Base) / Base] * 100..."
                          className="w-full text-[10px] font-bold text-[#0d1b3e] bg-transparent border-0 outline-none resize-none text-center leading-tight placeholder:text-slate-400 placeholder:font-normal focus:bg-white/80 rounded px-1"
                          style={{ minHeight: '44px', lineHeight: 1.25 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM BAR: CONECTADO CON EL OBJETIVO ESTRATÉGICO */}
          <div
            className="rounded-2xl px-4 py-2 flex items-center justify-between gap-3 relative border"
            style={{
              backgroundColor: '#f8fafc',
              borderColor: '#cbd5e1'
            }}
          >
            {/* Left Lightbulb Doodle */}
            <div className="absolute -left-3 -top-3 pointer-events-none">
              <LightbulbDoodle className="w-10 h-10 opacity-90" />
            </div>

            {/* Center Connect Box */}
            <div className="flex items-start gap-3 grow pl-5 pr-10">
              <div className="w-9 h-9 rounded-full bg-[#0d1b3e] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <TargetIcon className="w-5 h-5 text-white" />
              </div>

              <div className="grow min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-black text-xs text-[#0d1b3e] uppercase tracking-wide">
                    CONECTADO CON EL OBJETIVO ESTRATÉGICO
                  </span>
                </div>
                <p className="text-[10px] font-bold text-slate-600 mb-1">
                  Este KPI se conecta con nuestro objetivo estratégico porque:
                </p>

                {isExporting ? (
                  <div
                    className="text-xs text-slate-800 font-medium leading-tight border-b border-slate-300"
                    style={{
                      minHeight: '28px',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      lineHeight: 1.3
                    }}
                  >
                    {kpi.conectadoEstrategico || ''}
                  </div>
                ) : (
                  <textarea
                    rows={2}
                    value={kpi.conectadoEstrategico || ''}
                    onChange={(e) => handleFieldChange('conectadoEstrategico', e.target.value)}
                    placeholder="Explica aquí cómo este indicador impacta el crecimiento del negocio..."
                    className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg px-2.5 py-1 outline-none resize-none leading-tight font-medium placeholder:text-slate-300 focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                    style={{ minHeight: '28px', lineHeight: 1.3 }}
                  />
                )}
              </div>
            </div>

            {/* Right Rocket Illustration */}
            <div className="shrink-0 flex items-center justify-center">
              <RocketIllustration className="w-12 h-12" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
