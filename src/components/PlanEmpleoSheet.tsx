import React, { useRef } from 'react';
import { DofaData, BrandingConfig, PlanEmpleoData } from '../types';
import { EXAMPLE_PLAN_EMPLEO_DATA, INITIAL_PLAN_EMPLEO_DATA } from '../data/sampleCases';
import {
  TrophyKpiIcon,
  NetworkPeopleIcon,
  LinkedInSquareIcon,
  CertificateBadgeIcon,
  InterviewChatIcon,
  ProfileCvIcon,
  ContentPencilIcon,
  MeetingTableIcon,
  GraduationCapIcon,
  ChecklistWeeklyIcon,
  CameraPlaceholderIcon,
  TargetIcon,
  TrendingUpIcon
} from './DofaGraphics';
import { Eye, Edit3, Sparkles, Upload, RotateCcw } from 'lucide-react';

interface PlanEmpleoSheetProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  sheetRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const PlanEmpleoSheet: React.FC<PlanEmpleoSheetProps> = ({
  data,
  onChange,
  branding,
  sheetRef,
  isExporting = false
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const plan: PlanEmpleoData = data.planEmpleo || INITIAL_PLAN_EMPLEO_DATA;
  const isEjemplo = plan.modoEjemplo === true;

  const activeValues = isEjemplo ? EXAMPLE_PLAN_EMPLEO_DATA : plan;

  const handleFieldChange = (field: keyof PlanEmpleoData, value: any) => {
    onChange({
      ...data,
      planEmpleo: {
        ...plan,
        modoEjemplo: false,
        [field]: value
      }
    });
  };

  const handleToggleEjemplo = (showEjemplo: boolean) => {
    onChange({
      ...data,
      planEmpleo: {
        ...plan,
        modoEjemplo: showEjemplo
      }
    });
  };

  const handleLoadExampleData = () => {
    onChange({
      ...data,
      planEmpleo: {
        ...EXAMPLE_PLAN_EMPLEO_DATA,
        modoEjemplo: false
      }
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        handleFieldChange('userPhotoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* MODE SWITCHER TOOLBAR (NON-PRINTABLE) */}
      {!isExporting && (
        <div className="no-print mb-3 flex items-center justify-between w-full max-w-[1280px] bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 mr-1">Modo de visualización:</span>
            
            <button
              onClick={() => handleToggleEjemplo(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                isEjemplo
                  ? 'bg-[#d80064] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>1. Ver Ejemplo Completo Resuelto</span>
            </button>

            <button
              onClick={() => handleToggleEjemplo(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                !isEjemplo
                  ? 'bg-[#0f2e59] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>2. Diligenciar Mi Plan (Editable)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLoadExampleData}
              className="px-3 py-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg cursor-pointer flex items-center gap-1.5 transition-colors"
              title="Copiar los textos de ejemplo a tu hoja para adaptarlos fácilmente"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Copiar ejemplo como plantilla editable</span>
            </button>
          </div>
        </div>
      )}

      {/* PRINTABLE CANVAS SHEET */}
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
          padding: '16px 30px 14px 30px',
          backgroundColor: '#ffffff',
          color: '#0f172a'
        }}
      >
        {/* Decorative corner artwork (bottom-left purple halftone) */}
        <div className="absolute bottom-0 left-0 pointer-events-none opacity-40 z-0">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
            {[...Array(28)].map((_, i) => (
              <circle
                key={i}
                cx={10 + (i % 7) * 9}
                cy={35 + Math.floor(i / 7) * 11}
                r={1.5 + (i % 3) * 0.8}
                fill="#6d28d9"
              />
            ))}
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* HEADER: TITLE + MOTTO + PHOTO */}
          <div className="flex items-center justify-between relative mb-1">
            
            {/* Left: PLAN DE ACCIÓN PARA CONSEGUIR EMPLEO */}
            <div className="flex flex-col relative">
              {/* Top red vibration lines */}
              <div className="flex items-center gap-1 text-[#e11d48] -mb-1">
                <div className="w-2.5 h-0.5 bg-[#e11d48] rounded-full transform -rotate-45" />
                <div className="w-3 h-0.5 bg-[#e11d48] rounded-full transform -rotate-12" />
                <div className="w-2 h-0.5 bg-[#e11d48] rounded-full" />
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#0d1b3e] tracking-tight uppercase">
                  PLAN DE
                </span>
                <span className="text-3xl font-black text-[#0d1b3e] tracking-tight uppercase">
                  ACCIÓN
                </span>
                {/* Yellow swooping curved arrow */}
                <svg className="w-6 h-6 text-[#f59e0b] -ml-1 inline-block" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18 C 14 18, 18 12, 16 4 M 12 6 L 16 3 L 19 8" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex items-baseline gap-2 -mt-1">
                <span className="text-xs font-black text-[#0d1b3e] tracking-wider uppercase">
                  PARA CONSEGUIR
                </span>
                <span
                  className="text-3xl font-black italic text-[#d80064] uppercase tracking-wide inline-block"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  EMPLEO
                </span>
              </div>

              {/* Purple underline brush */}
              <svg className="w-56 h-2 -mt-0.5" viewBox="0 0 240 8" fill="none">
                <path d="M2 5 C 60 2, 160 7, 238 4" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Center: Star + TU PRÓXIMA OPORTUNIDAD TE ESTÁ BUSCANDO */}
            <div className="text-center flex flex-col items-center">
              <div className="text-teal-500 mb-0.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#009cb4" strokeWidth="2.2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div className="text-center leading-none">
                <span className="text-xs font-black text-[#0d1b3e] tracking-wider uppercase block">
                  TU PRÓXIMA
                </span>
                <span className="text-sm font-black text-[#e11d48] tracking-wider uppercase block">
                  OPORTUNIDAD
                </span>
                <span className="text-xs font-black text-[#0d1b3e] tracking-wider uppercase block">
                  TE ESTÁ
                </span>
                <span
                  className="text-lg font-black text-[#009cb4] tracking-wide inline-block italic"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  BUSCANDO.
                </span>
              </div>
            </div>

            {/* Right: PHOTO CONTAINER (Or Example Model photo) */}
            <div className="flex items-center gap-3">
              {/* Floating doodles around photo */}
              <div className="flex flex-col gap-2 text-slate-400">
                {/* Purple magnifying glass doodle */}
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {/* Yellow checkmark circle */}
                <div className="w-6 h-6 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-500 font-black text-xs">
                  ✓
                </div>
                {/* Teal trending bars */}
                <TrendingUpIcon className="w-6 h-6 text-[#009cb4]" />
              </div>

              {/* Photo Box */}
              <div
                className="w-48 h-32 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center group"
                style={{
                  boxShadow: '0 4px 14px -3px rgba(0, 0, 0, 0.06)'
                }}
              >
                {activeValues.userPhotoUrl ? (
                  <>
                    <img
                      src={activeValues.userPhotoUrl}
                      alt="Foto Profesional"
                      className="w-full h-full object-cover object-top"
                    />
                    {!isExporting && !isEjemplo && (
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 bg-slate-900/40 text-white font-bold text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        Cambiar Foto
                      </button>
                    )}
                  </>
                ) : (
                  <div
                    onClick={() => !isExporting && fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center p-2 text-center cursor-pointer hover:bg-slate-100 transition-colors w-full h-full"
                  >
                    <CameraPlaceholderIcon className="w-8 h-8 text-slate-400 mb-1" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                      TU FOTO AQUÍ
                    </span>
                    {!isExporting && (
                      <span className="text-[9px] text-blue-600 font-semibold mt-0.5">
                        (Haz clic para subir)
                      </span>
                    )}
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>
            </div>

          </div>

          {/* MAIN FLOW: OBJETIVO + SMART + 5 KPI CARDS */}
          <div className="grid grid-cols-12 gap-2 my-auto items-stretch pt-1 pb-1">
            
            {/* CARD 1: OBJETIVO (Cols 1-2) */}
            <div
              className="col-span-2 rounded-2xl p-2.5 flex flex-col justify-between"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #009cb4',
                boxShadow: '0 2px 8px rgba(0, 156, 180, 0.08)',
                minHeight: '260px'
              }}
            >
              <div className="text-center pb-1">
                <span className="text-[11px] font-black text-[#009cb4] tracking-wider uppercase block mb-1">
                  OBJETIVO
                </span>
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-[#009cb4]">
                  <TargetIcon className="w-6 h-6 text-[#009cb4]" />
                </div>
              </div>

              <div className="grow flex flex-col justify-center py-1">
                {isExporting || isEjemplo ? (
                  <div
                    className="text-[11px] font-bold text-[#0d1b3e] text-center leading-snug"
                    style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', lineHeight: 1.3 }}
                  >
                    {activeValues.objetivoGeneral || 'Conseguir un empleo alineado a mi perfil antes del 30 de junio.'}
                  </div>
                ) : (
                  <textarea
                    rows={4}
                    value={activeValues.objetivoGeneral || ''}
                    onChange={(e) => handleFieldChange('objetivoGeneral', e.target.value)}
                    placeholder="Escribe tu objetivo general aquí..."
                    className="w-full text-[11px] font-bold text-[#0d1b3e] bg-transparent border-0 outline-none resize-none text-center leading-snug placeholder:text-slate-300 placeholder:font-normal focus:bg-slate-50 rounded"
                    style={{ minHeight: '65px', lineHeight: 1.3 }}
                  />
                )}
              </div>

              {/* Fecha Límite */}
              <div className="border-t border-slate-100 pt-1 text-center">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-wide block">
                  FECHA LÍMITE:
                </span>
                {isExporting || isEjemplo ? (
                  <span className="text-[11px] font-black text-[#009cb4]">
                    {activeValues.fechaLimite || '30 de junio'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={activeValues.fechaLimite || ''}
                    onChange={(e) => handleFieldChange('fechaLimite', e.target.value)}
                    placeholder="__ / __ / __"
                    className="text-[11px] font-black text-[#009cb4] text-center bg-transparent border-b border-teal-300 outline-none w-full"
                  />
                )}
              </div>
            </div>

            {/* CARD 2: SMART (Cols 3-4) */}
            <div
              className="col-span-2 rounded-2xl p-2.5 flex flex-col justify-between"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #7c3aed',
                boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)',
                minHeight: '260px'
              }}
            >
              <div className="text-center pb-1 flex items-center justify-center gap-1.5 border-b border-purple-100">
                <span className="text-[11px] font-black text-[#7c3aed] tracking-wider uppercase">
                  SMART
                </span>
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[#7c3aed]">
                  <TargetIcon className="w-3.5 h-3.5 text-[#7c3aed]" />
                </div>
              </div>

              <div className="flex flex-col justify-between grow py-1 gap-1 text-[10px]">
                {[
                  { label: 'ESPECÍFICO:', field: 'smartEspecifico' as const, color: '#0284c7' },
                  { label: 'MEDIBLE:', field: 'smartMedible' as const, color: '#009cb4' },
                  { label: 'ALCANZABLE:', field: 'smartAlcanzable' as const, color: '#7c3aed' },
                  { label: 'RELEVANTE:', field: 'smartRelevante' as const, color: '#e11d48' },
                  { label: 'TIEMPO:', field: 'smartTiempo' as const, color: '#f97316' }
                ].map((item) => (
                  <div key={item.field} className="border-b border-slate-100 pb-0.5">
                    <span className="font-bold text-[9px] block" style={{ color: item.color }}>
                      {item.label}
                    </span>
                    {isExporting || isEjemplo ? (
                      <div className="font-medium text-slate-800 text-[10px] leading-tight truncate">
                        {activeValues[item.field] || '—'}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={activeValues[item.field] || ''}
                        onChange={(e) => handleFieldChange(item.field, e.target.value)}
                        placeholder="Escribe aquí..."
                        className="w-full font-medium text-slate-800 text-[10px] bg-transparent outline-none border-b border-slate-200"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CARDS 3 TO 7: THE 5 KPI CARDS (Cols 5 to 12) */}
            <div className="col-span-8 flex items-center justify-between gap-1.5">
              {[
                {
                  type: 'KPI RESULTADO',
                  titleColor: '#6d28d9',
                  borderColor: '#7c3aed',
                  icon: <TrophyKpiIcon className="w-8 h-8 text-[#6d28d9]" />,
                  field: 'kpiResultado' as const,
                  placeholder: 'Ej: Número de ofertas laborales recibidas.'
                },
                {
                  type: 'KPI IMPULSOR',
                  titleColor: '#e11d48',
                  borderColor: '#e11d48',
                  icon: <NetworkPeopleIcon className="w-8 h-8 text-[#e11d48]" />,
                  field: 'kpiImpulsor1' as const,
                  placeholder: 'Ej: Networking mensual.'
                },
                {
                  type: 'KPI IMPULSOR',
                  titleColor: '#f97316',
                  borderColor: '#f97316',
                  icon: <LinkedInSquareIcon className="w-8 h-8" />,
                  field: 'kpiImpulsor2' as const,
                  placeholder: 'Ej: Publicaciones en LinkedIn.'
                },
                {
                  type: 'KPI IMPULSOR',
                  titleColor: '#009cb4',
                  borderColor: '#009cb4',
                  icon: <CertificateBadgeIcon className="w-8 h-8 text-[#009cb4]" />,
                  field: 'kpiImpulsor3' as const,
                  placeholder: 'Ej: Certificaciones obtenidas.'
                },
                {
                  type: 'KPI IMPULSOR',
                  titleColor: '#eab308',
                  borderColor: '#eab308',
                  icon: <InterviewChatIcon className="w-8 h-8 text-[#eab308]" />,
                  field: 'kpiImpulsor4' as const,
                  placeholder: 'Ej: Entrevistas realizadas.'
                }
              ].map((kpiCard, idx) => (
                <React.Fragment key={kpiCard.field}>
                  {/* Arrow between KPI cards */}
                  {idx > 0 && (
                    <span className="font-black text-[#0d1b3e] text-sm shrink-0">→</span>
                  )}

                  <div
                    className="flex-1 rounded-2xl p-2 flex flex-col justify-between text-center"
                    style={{
                      backgroundColor: '#ffffff',
                      border: `2px solid ${kpiCard.borderColor}`,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      minHeight: '260px'
                    }}
                  >
                    <div className="pb-1">
                      <span
                        className="text-[10px] font-black tracking-wider uppercase block"
                        style={{ color: kpiCard.titleColor }}
                      >
                        {kpiCard.type}
                      </span>
                    </div>

                    <div className="flex items-center justify-center py-2">
                      {kpiCard.icon}
                    </div>

                    <div className="grow flex flex-col justify-center border-t border-slate-100 pt-1">
                      {isExporting || isEjemplo ? (
                        <div
                          className="text-[11px] font-bold text-[#0d1b3e] leading-snug"
                          style={{
                            minHeight: '40px',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            lineHeight: 1.3
                          }}
                        >
                          {activeValues[kpiCard.field] || ''}
                        </div>
                      ) : (
                        <textarea
                          rows={2}
                          value={activeValues[kpiCard.field] || ''}
                          onChange={(e) => handleFieldChange(kpiCard.field, e.target.value)}
                          placeholder={kpiCard.placeholder}
                          className="w-full text-[11px] font-bold text-[#0d1b3e] bg-transparent border-0 outline-none resize-none text-center leading-snug placeholder:text-slate-300 placeholder:font-normal focus:bg-slate-50 rounded"
                          style={{ minHeight: '40px', lineHeight: 1.3 }}
                        />
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* BOTTOM SECTION: ACCIONES CLAVE */}
          <div
            className="rounded-2xl p-2.5 border"
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#0d1b3e'
            }}
          >
            <div className="text-center pb-1">
              <span className="text-xs font-black text-[#0d1b3e] tracking-wider uppercase">
                ACCIONES CLAVE
              </span>
            </div>

            <div className="grid grid-cols-5 gap-3 pt-1">
              {[
                {
                  number: '1.',
                  icon: <ProfileCvIcon className="w-5 h-5 text-[#009cb4]" />,
                  field: 'accion1' as const,
                  placeholder: 'Actualizar perfil y CV.'
                },
                {
                  number: '2.',
                  icon: <ContentPencilIcon className="w-5 h-5 text-[#e11d48]" />,
                  field: 'accion2' as const,
                  placeholder: 'Generar contenido de valor.'
                },
                {
                  number: '3.',
                  icon: <MeetingTableIcon className="w-5 h-5 text-[#f97316]" />,
                  field: 'accion3' as const,
                  placeholder: 'Asistir a reuniones y eventos.'
                },
                {
                  number: '4.',
                  icon: <GraduationCapIcon className="w-5 h-5 text-[#009cb4]" />,
                  field: 'accion4' as const,
                  placeholder: 'Tomar cursos y seguir aprendiendo.'
                },
                {
                  number: '5.',
                  icon: <ChecklistWeeklyIcon className="w-5 h-5 text-[#f59e0b]" />,
                  field: 'accion5' as const,
                  placeholder: 'Hacer seguimiento semanal y evaluar resultados.'
                }
              ].map((act) => (
                <div key={act.field} className="flex items-start gap-1.5 border-r last:border-r-0 border-slate-100 pr-2">
                  <div className="shrink-0 mt-0.5">
                    {act.icon}
                  </div>
                  <div className="grow min-w-0">
                    <span className="text-[10px] font-black text-slate-800 mr-1">
                      {act.number}
                    </span>
                    {isExporting || isEjemplo ? (
                      <div
                        className="text-[10px] font-bold text-slate-700 leading-tight"
                        style={{
                          minHeight: '26px',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                          lineHeight: 1.25
                        }}
                      >
                        {activeValues[act.field] || act.placeholder}
                      </div>
                    ) : (
                      <textarea
                        rows={2}
                        value={activeValues[act.field] || ''}
                        onChange={(e) => handleFieldChange(act.field, e.target.value)}
                        placeholder={act.placeholder}
                        className="w-full text-[10px] font-bold text-slate-700 bg-transparent border-0 outline-none resize-none leading-tight placeholder:text-slate-300 placeholder:font-normal focus:bg-slate-50 rounded"
                        style={{ minHeight: '26px', lineHeight: 1.25 }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
