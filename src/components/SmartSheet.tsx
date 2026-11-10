import React from 'react';
import { DofaData, BrandingConfig, SmartStepKey } from '../types';
import {
  FlexArmIcon,
  CheckShieldIcon,
  TargetBullseyeIcon,
  FlowRightArrow,
  DiplomaIllustration
} from './DofaGraphics';

interface SmartSheetProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  sheetRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const SmartSheet: React.FC<SmartSheetProps> = ({
  data,
  onChange,
  branding,
  sheetRef,
  isExporting = false
}) => {
  const carrera = data.carrera || {
    fortaleza: ['', '', '', '', ''],
    mantener: ['', '', '', '', ''],
    objetivoSmart: ['', '', '', '', ''],
    specific: 'Obtener la certificación PMP.',
    measurable: 'Certificación obtenida.',
    achievable: 'Tengo tiempo, recursos y plan de estudio.',
    relevant: 'Me ayudará a crecer profesionalmente y acceder a mejores oportunidades.',
    timeBound: 'Antes de junio del próximo año.'
  };

  const handleItemChange = (step: SmartStepKey, index: number, value: string) => {
    const updated = [...(carrera[step] || ['', '', '', '', ''])];
    updated[index] = value;
    onChange({
      ...data,
      carrera: {
        ...carrera,
        [step]: updated
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, step: SmartStepKey, index: number) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const stepOrder: SmartStepKey[] = ['fortaleza', 'mantener', 'objetivoSmart'];
      const nextIndex = index + 1;
      if (nextIndex < 5) {
        const nextElem = document.getElementById(`smart-input-${step}-${nextIndex}`);
        if (nextElem) nextElem.focus();
      } else {
        const currentIdx = stepOrder.indexOf(step);
        if (currentIdx < stepOrder.length - 1) {
          const nextStep = stepOrder[currentIdx + 1];
          const nextElem = document.getElementById(`smart-input-${nextStep}-0`);
          if (nextElem) nextElem.focus();
        }
      }
    }
  };

  const stepsConfig: {
    key: SmartStepKey;
    stepNumber: string;
    title: string;
    question: string;
    badgeBg: string;
    borderColor: string;
    numberColor: string;
    accentColor: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: 'fortaleza',
      stepNumber: '1',
      title: '1. FORTALEZA',
      question: '¿Cuál es una de tus principales fortalezas profesionales?',
      badgeBg: '#6d28d9',
      borderColor: '#8b5cf6',
      numberColor: '#6d28d9',
      accentColor: '#7c3aed',
      icon: <FlexArmIcon className="w-8 h-8 text-white" />
    },
    {
      key: 'mantener',
      stepNumber: '2',
      title: '2. MANTENER',
      question: '¿Cómo puedes mantener y seguir desarrollando esta fortaleza?',
      badgeBg: '#16a34a',
      borderColor: '#22c55e',
      numberColor: '#16a34a',
      accentColor: '#15803d',
      icon: <CheckShieldIcon className="w-8 h-8 text-white" />
    },
    {
      key: 'objetivoSmart',
      stepNumber: '3',
      title: '3. OBJETIVO SMART',
      question: 'Define un objetivo SMART para potenciar esta fortaleza en tu carrera.',
      badgeBg: '#1d4ed8',
      borderColor: '#3b82f6',
      numberColor: '#1d4ed8',
      accentColor: '#1e40af',
      icon: <TargetBullseyeIcon className="w-8 h-8 text-white" />
    }
  ];

  const smartBreakdown = [
    {
      letter: 'S',
      title: 'SPECIFIC (ESPECÍFICO):',
      text: carrera.specific || 'Obtener la certificación PMP.',
      bg: '#e11d48'
    },
    {
      letter: 'M',
      title: 'MEASURABLE (MEDIBLE):',
      text: carrera.measurable || 'Certificación obtenida.',
      bg: '#ea580c'
    },
    {
      letter: 'A',
      title: 'ACHIEVABLE (ALCANZABLE):',
      text: carrera.achievable || 'Tengo tiempo, recursos y plan de estudio.',
      bg: '#16a34a'
    },
    {
      letter: 'R',
      title: 'RELEVANT (RELEVANTE):',
      text: carrera.relevant || 'Me ayudará a crecer profesionalmente y acceder a mejores oportunidades.',
      bg: '#2563eb'
    },
    {
      letter: 'T',
      title: 'TIME BOUND (CON TIEMPO):',
      text: carrera.timeBound || 'Antes de junio del próximo año.',
      bg: '#7c3aed'
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
          padding: '24px 38px 20px 38px',
          backgroundColor: '#ffffff',
          color: '#0f172a'
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* HEADER: CASO PROFESIONAL - MI CARRERA */}
          <div className="flex items-center justify-center relative mb-2">
            <div className="flex items-center gap-4">
              
              {/* CASO PROFESIONAL Badge */}
              <div className="relative inline-block transform -rotate-1">
                {/* Crown/sparkle doodles on top */}
                <div className="absolute -top-3.5 left-6 flex items-center gap-1 text-[#e11d48]">
                  <svg className="w-5 h-3 text-[#e11d48]" viewBox="0 0 24 14" fill="currentColor">
                    <path d="M2 12L6 2l6 7 6-7 4 10z" />
                  </svg>
                </div>
                <div className="absolute -top-3.5 right-8 flex items-center gap-1 text-[#e11d48]">
                  <svg className="w-5 h-3 text-[#e11d48]" viewBox="0 0 24 14" fill="currentColor">
                    <path d="M2 12L6 2l6 7 6-7 4 10z" />
                  </svg>
                </div>

                {/* Left vibration lines */}
                <div className="absolute -left-4 top-2 flex flex-col gap-1 text-[#e11d48]">
                  <div className="w-3 h-0.5 bg-[#e11d48] rounded-full transform -rotate-12" />
                  <div className="w-3.5 h-0.5 bg-[#e11d48] rounded-full" />
                  <div className="w-3 h-0.5 bg-[#e11d48] rounded-full transform rotate-12" />
                </div>

                <div
                  className="px-5 py-1.5 rounded-2xl shadow-sm"
                  style={{
                    backgroundColor: '#e11d48',
                    color: '#ffffff'
                  }}
                >
                  <span
                    className="text-xl md:text-2xl font-black tracking-wider uppercase"
                    style={{
                      fontFamily: 'Outfit, Montserrat, sans-serif',
                      letterSpacing: '0.04em'
                    }}
                  >
                    CASO PROFESIONAL
                  </span>
                </div>
              </div>

              {/* MI CARRERA Title */}
              <div className="relative inline-block pl-2">
                <span
                  className="text-3xl md:text-4xl font-black uppercase text-[#0d1b3e]"
                  style={{
                    fontFamily: 'Outfit, Montserrat, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  MI CARRERA
                </span>

                {/* Purple Brush Underline */}
                <svg
                  className="w-full h-3.5 absolute -bottom-2 left-0"
                  viewBox="0 0 260 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 7 C 45 4, 130 9, 255 5"
                    stroke="#7c3aed"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 9 C 65 7, 180 11, 245 8"
                    stroke="#6d28d9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>

                {/* Right vibration lines */}
                <div className="absolute -right-5 -top-1 flex flex-col gap-1 text-[#e11d48]">
                  <div className="w-3 h-0.5 bg-[#e11d48] rounded-full transform rotate-12" />
                  <div className="w-3.5 h-0.5 bg-[#e11d48] rounded-full" />
                  <div className="w-3 h-0.5 bg-[#e11d48] rounded-full transform -rotate-12" />
                </div>
              </div>

            </div>

            {/* Optional company/person tag if provided */}
            {data.companyName && (
              <div className="absolute right-0 top-1 text-xs font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                {data.companyName}
              </div>
            )}
          </div>

          {/* MAIN 3-STEP FLOW CARDS */}
          <div className="flex items-center justify-between gap-3 my-auto pt-2 pb-2">
            {stepsConfig.map((step, stepIdx) => (
              <React.Fragment key={step.key}>
                {/* Flow Arrow between cards */}
                {stepIdx > 0 && (
                  <div className="shrink-0 flex items-center justify-center px-0.5">
                    <FlowRightArrow className="w-8 h-6 text-[#0d1b3e]" />
                  </div>
                )}

                {/* STEP CARD */}
                <div
                  className="flex-1 rounded-2xl relative flex flex-col justify-between"
                  style={{
                    backgroundColor: '#ffffff',
                    border: `2px solid ${step.borderColor}`,
                    boxShadow: '0 4px 14px -3px rgba(0, 0, 0, 0.05)',
                    padding: '24px 16px 14px 16px',
                    minHeight: '340px'
                  }}
                >
                  {/* Top Circle Icon + Badge (Centered and floating slightly above) */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    {/* Circle Icon */}
                    <div
                      className="w-13 h-13 rounded-full flex items-center justify-center shadow-md relative"
                      style={{
                        backgroundColor: step.badgeBg,
                        border: '3px solid #ffffff'
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Step Title Badge Banner */}
                    <div
                      className="px-4 py-1 rounded-xl shadow-xs -mt-1 z-10"
                      style={{
                        backgroundColor: step.badgeBg,
                        color: '#ffffff'
                      }}
                    >
                      <span className="text-xs font-black tracking-wider uppercase whitespace-nowrap">
                        {step.title}
                      </span>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="pt-5 pb-2 text-center border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold text-[#0d1b3e] leading-snug px-1">
                      {step.question}
                    </p>
                  </div>

                  {/* 5 Rows with numbered lines */}
                  <div className="flex flex-col justify-between grow pt-1">
                    {[0, 1, 2, 3, 4].map((itemIndex) => {
                      const value = (carrera[step.key] && carrera[step.key][itemIndex]) || '';
                      return (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-1.5 border-b border-slate-200/80 py-1"
                          style={{ minHeight: '44px' }}
                        >
                          <span
                            className="font-black text-xs shrink-0 select-none pt-0.5"
                            style={{ color: step.numberColor, minWidth: '16px' }}
                          >
                            {itemIndex + 1}.
                          </span>

                          <div className="grow min-w-0">
                            {isExporting ? (
                              <div
                                className="w-full text-xs text-slate-800 leading-tight font-medium"
                                style={{
                                  minHeight: '36px',
                                  whiteSpace: 'pre-wrap',
                                  wordBreak: 'break-word',
                                  lineHeight: 1.35
                                }}
                              >
                                {value || ''}
                              </div>
                            ) : (
                              <textarea
                                id={`smart-input-${step.key}-${itemIndex}`}
                                rows={2}
                                value={value}
                                onChange={(e) => handleItemChange(step.key, itemIndex, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, step.key, itemIndex)}
                                placeholder="Escribe aquí..."
                                className="w-full text-xs text-slate-800 bg-transparent border-0 outline-none resize-none leading-tight font-medium placeholder:text-slate-300 focus:bg-slate-50/80 rounded px-1"
                                style={{
                                  minHeight: '36px',
                                  lineHeight: 1.35
                                }}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* BOTTOM REFERENCE CONTAINER: EJEMPLO + SMART BREAKDOWN + DIPLOMA */}
          <div
            className="rounded-2xl p-3 flex items-center justify-between gap-4 border"
            style={{
              backgroundColor: '#f1f5f9',
              borderColor: '#cbd5e1'
            }}
          >
            {/* Zone 1: Example Box */}
            <div
              className="rounded-xl p-3.5 bg-white border border-blue-100 shadow-2xs relative flex flex-col justify-center"
              style={{
                width: '320px',
                minWidth: '320px',
                minHeight: '120px'
              }}
            >
              {/* Badge: EJEMPLO */}
              <div className="absolute -top-3 left-3 bg-[#1d4ed8] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                <span>★</span>
                <span>EJEMPLO</span>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] font-black text-[#1d4ed8] tracking-wide block uppercase mb-1.5">
                  OBJETIVO SMART DE EJEMPLO:
                </span>
                <p className="text-xs font-bold text-[#0d1b3e] leading-snug italic relative inline-block px-1">
                  “ Obtener la certificación PMP antes de <br />
                  <span className="relative inline-block">
                    junio del próximo año.
                    {/* Hand-drawn scribble underline under deadline */}
                    <svg
                      className="w-full h-2 absolute -bottom-1 left-0"
                      viewBox="0 0 160 8"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 5 C 40 2, 100 7, 158 4"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  ”
                </p>
              </div>
            </div>

            {/* Zone 2: SMART breakdown list */}
            <div className="grow flex flex-col justify-between py-0.5 gap-1.5 px-2">
              {smartBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <div
                    className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-white font-black text-[10px] shrink-0 shadow-2xs"
                    style={{ backgroundColor: item.bg }}
                  >
                    {item.letter}
                  </div>
                  <div className="truncate">
                    <span className="font-black text-slate-800 text-[11px] mr-1">
                      {item.title}
                    </span>
                    <span className="font-semibold text-slate-600 text-[11px]">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Zone 3: PMP Diploma Illustration */}
            <div className="shrink-0 pr-2 flex items-center justify-center">
              <DiplomaIllustration className="w-22 h-26" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
