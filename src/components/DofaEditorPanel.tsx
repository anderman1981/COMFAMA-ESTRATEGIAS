import React, { useState } from 'react';
import { DofaData, QuadrantKey, CameColumnKey, SmartStepKey, ActiveSheetTab, BrandingConfig, KpiData, PlanEmpleoData } from '../types';
import { SUGGESTIONS_BANK, INITIAL_KPI_DATA, EXAMPLE_PLAN_EMPLEO_DATA, INITIAL_PLAN_EMPLEO_DATA } from '../data/sampleCases';
import {
  DumbbellIcon,
  BrokenChainIcon,
  TargetIcon,
  AlertTriangleIcon,
  WrenchIcon,
  ShieldIcon,
  TrendingUpIcon,
  FlexArmIcon,
  CheckShieldIcon,
  TargetBullseyeIcon,
  TrophyKpiIcon,
  GearKpiIcon,
  CalendarClockKpiIcon,
  NetworkPeopleIcon,
  LinkedInSquareIcon,
  CertificateBadgeIcon,
  InterviewChatIcon,
  ProfileCvIcon
} from './DofaGraphics';
import { Plus, Trash2, Lightbulb, Settings, Building2, User, Sparkles, Award, BarChart3, Clock, Compass, Briefcase, Eye, Edit3 } from 'lucide-react';

interface DofaEditorPanelProps {
  data: DofaData;
  onChange: (data: DofaData) => void;
  branding: BrandingConfig;
  onBrandingChange: (branding: BrandingConfig) => void;
  activeSheetTab: ActiveSheetTab;
  onSheetTabChange: (tab: ActiveSheetTab) => void;
}

export const DofaEditorPanel: React.FC<DofaEditorPanelProps> = ({
  data,
  onChange,
  branding,
  onBrandingChange,
  activeSheetTab,
  onSheetTabChange
}) => {
  const [dofaSubTab, setDofaSubTab] = useState<QuadrantKey>('fortalezas');
  const [cameSubTab, setCameSubTab] = useState<CameColumnKey>('corregir');
  const [smartSubTab, setSmartSubTab] = useState<SmartStepKey | 'breakdown'>('fortaleza');
  const [kpiSubTab, setKpiSubTab] = useState<'smart' | 'resultado' | 'impulsores' | 'gestion'>('smart');
  const [empleoSubTab, setEmpleoSubTab] = useState<'smart' | 'kpis' | 'acciones'>('smart');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const came = data.came || {
    corregir: ['', '', '', '', ''],
    afrontar: ['', '', '', '', ''],
    mantener: ['', '', '', '', ''],
    explotar: ['', '', '', '', '']
  };

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

  const kpi: KpiData = data.kpi || INITIAL_KPI_DATA;
  const planEmpleo: PlanEmpleoData = data.planEmpleo || INITIAL_PLAN_EMPLEO_DATA;




  const dofaTabs: {
    key: QuadrantKey;
    label: string;
    color: string;
    icon: React.ReactNode;
    question: string;
    cameRelation: string;
  }[] = [
    {
      key: 'fortalezas',
      label: 'Fortalezas',
      color: '#0f2e59',
      icon: <DumbbellIcon className="w-4 h-4 text-white" />,
      question: '¿Qué hace que nuestros clientes nos sigan eligiendo?',
      cameRelation: 'Se transforman en "M - Mantener"'
    },
    {
      key: 'debilidades',
      label: 'Debilidades',
      color: '#d80064',
      icon: <BrokenChainIcon className="w-4 h-4 text-white" />,
      question: '¿Qué limita nuestro crecimiento?',
      cameRelation: 'Se transforman en "C - Corregir"'
    },
    {
      key: 'oportunidades',
      label: 'Oportunidades',
      color: '#009cb4',
      icon: <TargetIcon className="w-4 h-4 text-white" />,
      question: '¿Qué está cambiando que podríamos aprovechar?',
      cameRelation: 'Se transforman en "E - Explotar"'
    },
    {
      key: 'amenazas',
      label: 'Amenazas',
      color: '#f39200',
      icon: <AlertTriangleIcon className="w-4 h-4 text-white" />,
      question: '¿Qué podría cambiar nuestro negocio aunque no hagamos nada?',
      cameRelation: 'Se transforman en "A - Afrontar"'
    }
  ];

  const cameTabs: {
    key: CameColumnKey;
    letter: string;
    label: string;
    targetDofa: QuadrantKey;
    dofaLabel: string;
    color: string;
    icon: React.ReactNode;
    question: string;
  }[] = [
    {
      key: 'corregir',
      letter: 'C',
      label: 'C - Corregir',
      targetDofa: 'debilidades',
      dofaLabel: 'Debilidades detectadas en DOFA',
      color: '#00838f',
      icon: <WrenchIcon className="w-4 h-4 text-white" />,
      question: '¿Qué acciones tomarás para corregir o reducir tus debilidades?'
    },
    {
      key: 'afrontar',
      letter: 'A',
      label: 'A - Afrontar',
      targetDofa: 'amenazas',
      dofaLabel: 'Amenazas detectadas en DOFA',
      color: '#f39200',
      icon: <AlertTriangleIcon className="w-4 h-4 text-white" />,
      question: '¿Qué acciones tomarás para afrontar o minimizar el impacto de las amenazas?'
    },
    {
      key: 'mantener',
      letter: 'M',
      label: 'M - Mantener',
      targetDofa: 'fortalezas',
      dofaLabel: 'Fortalezas detectadas en DOFA',
      color: '#5c2d91',
      icon: <ShieldIcon className="w-4 h-4 text-white" />,
      question: '¿Qué acciones tomarás para mantener y potenciar tus fortalezas?'
    },
    {
      key: 'explotar',
      letter: 'E',
      label: 'E - Explotar',
      targetDofa: 'oportunidades',
      dofaLabel: 'Oportunidades detectadas en DOFA',
      color: '#d80064',
      icon: <TrendingUpIcon className="w-4 h-4 text-white" />,
      question: '¿Qué acciones tomarás para aprovechar al máximo las oportunidades?'
    }
  ];

  const smartTabs: {
    key: SmartStepKey;
    stepNumber: string;
    label: string;
    color: string;
    icon: React.ReactNode;
    question: string;
    suggestionKey: string;
  }[] = [
    {
      key: 'fortaleza',
      stepNumber: '1',
      label: '1. Fortaleza',
      color: '#6d28d9',
      icon: <FlexArmIcon className="w-4 h-4 text-white" />,
      question: '¿Cuál es una de tus principales fortalezas profesionales?',
      suggestionKey: 'smart_fortaleza'
    },
    {
      key: 'mantener',
      stepNumber: '2',
      label: '2. Mantener',
      color: '#16a34a',
      icon: <CheckShieldIcon className="w-4 h-4 text-white" />,
      question: '¿Cómo puedes mantener y seguir desarrollando esta fortaleza?',
      suggestionKey: 'smart_mantener'
    },
    {
      key: 'objetivoSmart',
      stepNumber: '3',
      label: '3. Objetivo SMART',
      color: '#1d4ed8',
      icon: <TargetBullseyeIcon className="w-4 h-4 text-white" />,
      question: 'Define un objetivo SMART para potenciar esta fortaleza en tu carrera.',
      suggestionKey: 'smart_objetivoSmart'
    }
  ];

  const handleDofaItemChange = (quadrant: QuadrantKey, index: number, value: string) => {
    const nextList = [...data[quadrant]];
    nextList[index] = value;
    onChange({
      ...data,
      [quadrant]: nextList
    });
  };

  const handleCameItemChange = (column: CameColumnKey, index: number, value: string) => {
    const nextCol = [...(came[column] || ['', '', '', '', ''])];
    nextCol[index] = value;
    onChange({
      ...data,
      came: {
        ...came,
        [column]: nextCol
      }
    });
  };

  const handleSmartItemChange = (step: SmartStepKey, index: number, value: string) => {
    const nextList = [...(carrera[step] || ['', '', '', '', ''])];
    nextList[index] = value;
    onChange({
      ...data,
      carrera: {
        ...carrera,
        [step]: nextList
      }
    });
  };

  const handleSmartBreakdownChange = (field: keyof typeof carrera, value: string) => {
    onChange({
      ...data,
      carrera: {
        ...carrera,
        [field]: value
      }
    });
  };

  const handleKpiChange = (field: keyof KpiData, value: any) => {
    onChange({
      ...data,
      kpi: {
        ...kpi,
        [field]: value
      }
    });
  };

  const handleKpiImpulsorChange = (index: number, value: string) => {
    const updated = [...(kpi.impulsores || ['', '', ''])];
    updated[index] = value;
    handleKpiChange('impulsores', updated);
  };

  const handleEmpleoChange = (field: keyof PlanEmpleoData, value: any) => {
    onChange({
      ...data,
      planEmpleo: {
        ...planEmpleo,
        modoEjemplo: false,
        [field]: value
      }
    });
  };

  const handleAddSuggestion = (key: string, text: string) => {
    if (activeSheetTab === 'dofa') {
      const qKey = dofaSubTab;
      const list = [...data[qKey]];
      const emptyIndex = list.findIndex((item) => !item.trim());
      if (emptyIndex !== -1) {
        list[emptyIndex] = text;
      } else {
        list[list.length - 1] = text;
      }
      onChange({
        ...data,
        [qKey]: list
      });
    } else if (activeSheetTab === 'came') {
      const cKey = cameSubTab;
      const list = [...(came[cKey] || ['', '', '', '', ''])];
      const emptyIndex = list.findIndex((item) => !item.trim());
      if (emptyIndex !== -1) {
        list[emptyIndex] = text;
      } else {
        list[list.length - 1] = text;
      }
      onChange({
        ...data,
        came: {
          ...came,
          [cKey]: list
        }
      });
    } else if (activeSheetTab === 'smart') {
      if (smartSubTab === 'breakdown') return;
      const sKey = smartSubTab;
      const list = [...(carrera[sKey] || ['', '', '', '', ''])];
      const emptyIndex = list.findIndex((item) => !item.trim());
      if (emptyIndex !== -1) {
        list[emptyIndex] = text;
      } else {
        list[list.length - 1] = text;
      }
      onChange({
        ...data,
        carrera: {
          ...carrera,
          [sKey]: list
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col gap-4">
      {/* General Case Meta */}
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
              <Building2 className="w-3.5 h-3.5 text-[#d80064]" />
              Empresa o Caso que seleccionas:
            </label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => onChange({ ...data, companyName: e.target.value })}
              placeholder="Ej: Cafetería de Especialidad, Clínica Dental, Mi Emprendimiento..."
              className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#d80064]/20 focus:border-[#d80064] transition-all"
            />
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
              <User className="w-3.5 h-3.5 text-slate-500" />
              Facilitador / Equipo:
            </label>
            <input
              type="text"
              value={data.facilitator || ''}
              onChange={(e) => onChange({ ...data, facilitator: e.target.value })}
              placeholder="Opcional: Tu nombre"
              className="w-full text-sm bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* MATRIX SELECTOR: DOFA vs CAME */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-2">
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => {
              onSheetTabChange('dofa');
              setIsSettingsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSheetTab === 'dofa' && !isSettingsOpen
                ? 'bg-white text-[#0f2e59] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0f2e59]" />
            <span>Matriz DOFA (Diagnóstico)</span>
          </button>

          <button
            onClick={() => {
              onSheetTabChange('came');
              setIsSettingsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSheetTab === 'came' && !isSettingsOpen
                ? 'bg-white text-[#d80064] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#d80064]" />
            <span>Plan CAME (Estrategia)</span>
          </button>

          <button
            onClick={() => {
              onSheetTabChange('smart');
              setIsSettingsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSheetTab === 'smart' && !isSettingsOpen
                ? 'bg-white text-[#6d28d9] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#6d28d9]" />
            <span>Mi Carrera (SMART)</span>
          </button>

          <button
            onClick={() => {
              onSheetTabChange('kpi');
              setIsSettingsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSheetTab === 'kpi' && !isSettingsOpen
                ? 'bg-white text-[#e11d48] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
            <span>KPI de Resultado</span>
          </button>

          <button
            onClick={() => {
              onSheetTabChange('empleo');
              setIsSettingsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSheetTab === 'empleo' && !isSettingsOpen
                ? 'bg-white text-[#d80064] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#d80064]" />
            <span>Plan de Empleo</span>
          </button>
        </div>

        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            isSettingsOpen
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Opciones de Formato</span>
        </button>
      </div>

      {/* SUB-TABS (DOFA or CAME or SETTINGS) */}
      {!isSettingsOpen && activeSheetTab === 'dofa' && (
        <div className="space-y-4">
          {/* 4 DOFA Subtabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {dofaTabs.map((tab) => {
              const isActive = dofaSubTab === tab.key;
              const filledCount = data[tab.key].filter((x) => x.trim().length > 0).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setDofaSubTab(tab.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: tab.color }}
                  >
                    {tab.icon}
                  </div>
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {filledCount}/5
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active DOFA Quadrant Fields */}
          {(() => {
            const currentTab = dofaTabs.find((t) => t.key === dofaSubTab)!;
            const suggestions = SUGGESTIONS_BANK[dofaSubTab] || [];
            return (
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: currentTab.color }}
                    >
                      {currentTab.icon}
                    </div>
                    <div>
                      <h4
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: currentTab.color }}
                      >
                        {currentTab.label}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {currentTab.question}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updated = { ...data, [dofaSubTab]: ['', '', '', '', ''] };
                      onChange(updated);
                    }}
                    className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer"
                    title="Borrar renglones de esta sección"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Limpiar</span>
                  </button>
                </div>

                {/* 5 Input rows */}
                <div className="space-y-2">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-5 text-right font-bold text-xs shrink-0"
                        style={{ color: currentTab.color }}
                      >
                        {idx + 1}.
                      </span>
                      <input
                        type="text"
                        value={data[dofaSubTab][idx] || ''}
                        onChange={(e) => handleDofaItemChange(dofaSubTab, idx, e.target.value)}
                        placeholder={`Escribe la ${currentTab.label.toLowerCase()} número ${idx + 1}...`}
                        className="grow text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-all"
                      />
                      {data[dofaSubTab][idx] && (
                        <button
                          onClick={() => handleDofaItemChange(dofaSubTab, idx, '')}
                          className="text-slate-300 hover:text-slate-500 p-1 cursor-pointer"
                          title="Borrar línea"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Suggestions Bank */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Ideas para inspirarte en {currentTab.label} (haz clic para añadir):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleAddSuggestion(dofaSubTab, sug)}
                        className="text-[11px] text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 rounded-md px-2.5 py-1 text-left flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{sug}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* CAME SUBTABS */}
      {!isSettingsOpen && activeSheetTab === 'came' && (
        <div className="space-y-4">
          {/* 4 CAME Subtabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {cameTabs.map((tab) => {
              const isActive = cameSubTab === tab.key;
              const items = came[tab.key] || [];
              const filledCount = items.filter((x) => x.trim().length > 0).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setCameSubTab(tab.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 font-black text-xs text-white"
                    style={{ backgroundColor: tab.color }}
                  >
                    {tab.letter}
                  </div>
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {filledCount}/5
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active CAME Column Fields */}
          {(() => {
            const currentTab = cameTabs.find((t) => t.key === cameSubTab)!;
            const items = came[cameSubTab] || ['', '', '', '', ''];
            const dofaItems = data[currentTab.targetDofa] || [];
            const suggestions = SUGGESTIONS_BANK[cameSubTab] || [];

            return (
              <div className="space-y-3">
                {/* Header card with guiding question */}
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-black text-white text-sm shadow-xs"
                      style={{ backgroundColor: currentTab.color }}
                    >
                      {currentTab.letter}
                    </div>
                    <div>
                      <h4
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: currentTab.color }}
                      >
                        {currentTab.label}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {currentTab.question}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updatedCame = { ...came, [cameSubTab]: ['', '', '', '', ''] };
                      onChange({ ...data, came: updatedCame });
                    }}
                    className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer"
                    title="Borrar renglones de esta acción"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Limpiar</span>
                  </button>
                </div>

                {/* DOFA Cross-reference helper box: Shows what was identified in DOFA! */}
                {dofaItems.some((x) => x.trim().length > 0) && (
                  <div className="bg-blue-50/70 border border-blue-200/80 rounded-lg p-2.5 text-xs">
                    <div className="font-bold text-[#0d284f] flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>{currentTab.dofaLabel} (Referencia para definir tus acciones):</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                      {dofaItems
                        .filter((item) => item.trim().length > 0)
                        .map((item, idx) => (
                          <li key={idx} className="truncate">
                            <span className="font-medium text-slate-900">{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* 5 Input rows */}
                <div className="space-y-2">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-5 text-right font-bold text-xs shrink-0"
                        style={{ color: currentTab.color }}
                      >
                        {idx + 1}.
                      </span>
                      <input
                        type="text"
                        value={items[idx] || ''}
                        onChange={(e) => handleCameItemChange(cameSubTab, idx, e.target.value)}
                        placeholder={`Escribe la acción estratégica número ${idx + 1}...`}
                        className="grow text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-all"
                      />
                      {items[idx] && (
                        <button
                          onClick={() => handleCameItemChange(cameSubTab, idx, '')}
                          className="text-slate-300 hover:text-slate-500 p-1 cursor-pointer"
                          title="Borrar línea"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Suggestions Bank for CAME actions */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Acciones recomendadas para {currentTab.label} (haz clic para añadir):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleAddSuggestion(cameSubTab, sug)}
                        className="text-[11px] text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 rounded-md px-2.5 py-1 text-left flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{sug}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* SMART CAREER SUBTABS */}
      {!isSettingsOpen && activeSheetTab === 'smart' && (
        <div className="space-y-4">
          {/* Subtabs for Step 1, Step 2, Step 3, plus Breakdown */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {smartTabs.map((tab) => {
              const isActive = smartSubTab === tab.key;
              const items = carrera[tab.key] || [];
              const filledCount = items.filter((x) => x.trim().length > 0).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSmartSubTab(tab.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-black text-xs text-white"
                    style={{ backgroundColor: tab.color }}
                  >
                    {tab.stepNumber}
                  </div>
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {filledCount}/5
                  </span>
                </button>
              );
            })}

            {/* Subtab for S-M-A-R-T Criteria */}
            <button
              onClick={() => setSmartSubTab('breakdown')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                smartSubTab === 'breakdown'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Criterios S-M-A-R-T</span>
            </button>
          </div>

          {/* Subtab Content: Steps 1, 2, or 3 */}
          {smartSubTab !== 'breakdown' && (() => {
            const currentTab = smartTabs.find((t) => t.key === smartSubTab)!;
            const items = carrera[currentTab.key] || ['', '', '', '', ''];
            const suggestions = (SUGGESTIONS_BANK as Record<string, string[]>)[currentTab.suggestionKey] || [];
            const dofaFortalezas = data.fortalezas || [];

            return (
              <div className="space-y-3">
                {/* Header card with guiding question */}
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: currentTab.color }}
                    >
                      {currentTab.icon}
                    </div>
                    <div>
                      <h4
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: currentTab.color }}
                      >
                        {currentTab.label}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {currentTab.question}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updatedCarrera = { ...carrera, [currentTab.key]: ['', '', '', '', ''] };
                      onChange({ ...data, carrera: updatedCarrera });
                    }}
                    className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer"
                    title="Borrar renglones de este paso"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Limpiar</span>
                  </button>
                </div>

                {/* DOFA Fortalezas helper if on Step 1 (Fortaleza) */}
                {currentTab.key === 'fortaleza' && dofaFortalezas.some((x) => x.trim().length > 0) && (
                  <div className="bg-purple-50/70 border border-purple-200/80 rounded-lg p-2.5 text-xs">
                    <div className="font-bold text-[#3b1263] flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>Fortalezas que registraste en tu DOFA (puedes aprovecharlas):</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                      {dofaFortalezas
                        .filter((item) => item.trim().length > 0)
                        .map((item, idx) => (
                          <li key={idx} className="truncate">
                            <span className="font-medium text-slate-900">{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* 5 Input rows */}
                <div className="space-y-2">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-5 text-right font-bold text-xs shrink-0"
                        style={{ color: currentTab.color }}
                      >
                        {idx + 1}.
                      </span>
                      <input
                        type="text"
                        value={items[idx] || ''}
                        onChange={(e) => handleSmartItemChange(currentTab.key, idx, e.target.value)}
                        placeholder={`Escribe el punto número ${idx + 1}...`}
                        className="grow text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-all"
                      />
                      {items[idx] && (
                        <button
                          onClick={() => handleSmartItemChange(currentTab.key, idx, '')}
                          className="text-slate-300 hover:text-slate-500 p-1 cursor-pointer"
                          title="Borrar línea"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Suggestions Bank */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Ideas para inspirarte en {currentTab.label} (haz clic para añadir):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleAddSuggestion(currentTab.key, sug)}
                        className="text-[11px] text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 rounded-md px-2.5 py-1 text-left flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{sug}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Subtab Content: Breakdown S-M-A-R-T */}
          {smartSubTab === 'breakdown' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Personaliza el desglose de los 5 Criterios SMART</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Estos textos se reflejan en la tarjeta inferior de tu hoja imprimible.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { key: 'specific', letter: 'S', title: 'SPECIFIC (ESPECÍFICO)', color: '#e11d48', placeholder: '¿Qué se quiere lograr de forma concreta?' },
                  { key: 'measurable', letter: 'M', title: 'MEASURABLE (MEDIBLE)', color: '#ea580c', placeholder: '¿Cómo sabrás que lo lograste? Indicador o evidencia' },
                  { key: 'achievable', letter: 'A', title: 'ACHIEVABLE (ALCANZABLE)', color: '#16a34a', placeholder: '¿Cuentas con el tiempo, recursos y capacidades?' },
                  { key: 'relevant', letter: 'R', title: 'RELEVANT (RELEVANTE)', color: '#2563eb', placeholder: '¿Por qué es importante para tu carrera profesional?' },
                  { key: 'timeBound', letter: 'T', title: 'TIME BOUND (CON TIEMPO)', color: '#7c3aed', placeholder: '¿Cuál es la fecha límite exacta para cumplirlo?' }
                ].map((crit) => (
                  <div key={crit.key} className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                    <div className="w-48 shrink-0 flex items-center gap-1.5">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0"
                        style={{ backgroundColor: crit.color }}
                      >
                        {crit.letter}
                      </span>
                      <span className="font-bold text-[11px] text-slate-800">
                        {crit.title}:
                      </span>
                    </div>
                    <input
                      type="text"
                      value={(carrera as Record<string, any>)[crit.key] || ''}
                      onChange={(e) => handleSmartBreakdownChange(crit.key as any, e.target.value)}
                      placeholder={crit.placeholder}
                      className="grow text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* KPI WORKSHEET SUBTABS & EDITOR */}
      {!isSettingsOpen && activeSheetTab === 'kpi' && (
        <div className="space-y-4">
          {/* Subtabs for KPI Sections */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { key: 'smart' as const, label: '1. Objetivo SMART', color: '#0d1b3e', icon: <TargetIcon className="w-3.5 h-3.5 text-white" /> },
              { key: 'resultado' as const, label: '2. KPI de Resultado', color: '#e11d48', icon: <TrendingUpIcon className="w-3.5 h-3.5 text-white" /> },
              { key: 'impulsores' as const, label: '3. Impulsores Clave', color: '#009cb4', icon: <GearKpiIcon className="w-3.5 h-3.5 text-white" /> },
              { key: 'gestion' as const, label: '4. Gestión & Medición', color: '#7c3aed', icon: <CalendarClockKpiIcon className="w-3.5 h-3.5 text-white" /> }
            ].map((tab) => {
              const isActive = kpiSubTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setKpiSubTab(tab.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: tab.color }}
                  >
                    {tab.icon}
                  </div>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Subtab 1: Objetivo SMART */}
          {kpiSubTab === 'smart' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <TargetIcon className="w-4 h-4 text-[#0d1b3e]" />
                    <span>1. Objetivo Estratégico de la Empresa (Método SMART)</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Define las 5 dimensiones clave que fundamentan el indicador de resultado.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { key: 'smartEspecifico' as const, letter: 'S', title: 'ESPECÍFICO', question: '¿Qué queremos lograr?', color: '#0284c7', placeholder: 'Ej: Incrementar las ventas de la línea premium...' },
                  { key: 'smartMedible' as const, letter: 'M', title: 'MEDIBLE', question: '¿Cómo sabremos que lo logramos?', color: '#009cb4', placeholder: 'Ej: Alcanzar un crecimiento del 25% en facturación...' },
                  { key: 'smartAlcanzable' as const, letter: 'A', title: 'ALCANZABLE', question: '¿Es posible de lograr?', color: '#7c3aed', placeholder: 'Ej: Con ampliación del canal digital y 2 distribuidores...' },
                  { key: 'smartRelevante' as const, letter: 'R', title: 'RELEVANTE', question: '¿Por qué es importante para el negocio?', color: '#e11d48', placeholder: 'Ej: Asegura el margen operativo y liderazgo en el mercado...' },
                  { key: 'smartTiempo' as const, letter: 'T', title: 'TIEMPO', question: '¿En cuánto tiempo lo lograremos?', color: '#f97316', placeholder: 'Ej: En un plazo de 6 meses (antes de diciembre)...' }
                ].map((item) => (
                  <div key={item.key} className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                    <div className="w-48 shrink-0 flex items-center gap-1.5">
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[10px] font-black shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.letter}
                      </span>
                      <div>
                        <span className="font-bold text-[11px] text-slate-800 block leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[9px] text-slate-400 block leading-none">
                          {item.question}
                        </span>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={kpi[item.key] || ''}
                      onChange={(e) => handleKpiChange(item.key, e.target.value)}
                      placeholder={item.placeholder}
                      className="grow text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 2: KPI de Resultado */}
          {kpiSubTab === 'resultado' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <TrophyKpiIcon className="w-4 h-4 text-[#e11d48]" />
                    <span>2. Definición del KPI de Resultado</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    ¿Qué resultado clave mediremos para saber que estamos avanzando hacia nuestro objetivo?
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  rows={3}
                  value={kpi.kpiResultado || ''}
                  onChange={(e) => handleKpiChange('kpiResultado', e.target.value)}
                  placeholder="Ej: Crecimiento de Facturación Mensual Neta de la Línea Premium (%) - Meta: +25% semestral..."
                  className="w-full text-xs font-bold text-[#0d1b3e] bg-white border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#e11d48]/20 focus:border-[#e11d48]"
                />
              </div>

              {/* Suggestions Bank for KPI de Resultado */}
              <div className="mt-3 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ejemplos recomendados de KPIs de resultado (haz clic para insertar):</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {(SUGGESTIONS_BANK as any).kpi_resultado?.map((sug: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => handleKpiChange('kpiResultado', sug)}
                      className="text-[11px] text-slate-600 bg-white hover:bg-slate-200 hover:text-slate-900 border border-slate-200 rounded-md px-2.5 py-1 text-left flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{sug}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Subtab 3: Impulsores */}
          {kpiSubTab === 'impulsores' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <GearKpiIcon className="w-4 h-4 text-[#009cb4]" />
                    <span>3. Impulsores (Factores o Acciones Clave)</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Las 3 palancas operativas que impulsarán directamente este resultado.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#009cb4] text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={kpi.impulsores[idx] || ''}
                      onChange={(e) => handleKpiImpulsorChange(idx, e.target.value)}
                      placeholder={`Acción o factor impulsor número ${idx + 1}...`}
                      className="grow text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009cb4]/20 focus:border-[#009cb4]"
                    />
                  </div>
                ))}
              </div>

              {/* Suggestions Bank for Impulsores */}
              <div className="mt-3 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ideas de factores impulsores (haz clic para añadir a una línea vacía):</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {(SUGGESTIONS_BANK as any).kpi_impulsores?.map((sug: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => {
                        const list = [...(kpi.impulsores || ['', '', ''])];
                        const emptyIdx = list.findIndex((x) => !x.trim());
                        if (emptyIdx !== -1) {
                          list[emptyIdx] = sug;
                        } else {
                          list[2] = sug;
                        }
                        handleKpiChange('impulsores', list);
                      }}
                      className="text-[11px] text-slate-600 bg-white hover:bg-slate-200 hover:text-slate-900 border border-slate-200 rounded-md px-2.5 py-1 text-left flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{sug}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Subtab 4: Gestión & Medición */}
          {kpiSubTab === 'gestion' && (
            <div className="space-y-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 4. Responsable */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>4. Responsable (Persona o Área)</span>
                  </label>
                  <input
                    type="text"
                    value={kpi.responsable || ''}
                    onChange={(e) => handleKpiChange('responsable', e.target.value)}
                    placeholder="Ej: Gerencia Comercial & Equipo de Marketing..."
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>

                {/* 5. Frecuencia */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>5. Frecuencia de Revisión</span>
                  </label>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {['Diaria', 'Semanal', 'Quincenal', 'Mensual', 'Trimestral', 'Anual'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => handleKpiChange('frecuencia', f)}
                        className={`text-xs px-2.5 py-1 rounded-md border font-semibold cursor-pointer transition-all ${
                          kpi.frecuencia === f
                            ? 'bg-orange-500 text-white border-orange-600 shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* 6. Medición */}
              <div className="space-y-1.5 border-t border-slate-200 pt-3">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>6. Medición (Fórmula o Unidad de Medida)</span>
                </label>
                <input
                  type="text"
                  value={kpi.medicionFormula || ''}
                  onChange={(e) => handleKpiChange('medicionFormula', e.target.value)}
                  placeholder="Ej: [(Ventas Mes Actual - Ventas Mes Anterior) / Ventas Mes Anterior] * 100..."
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>

              {/* Conectado con el Objetivo Estratégico */}
              <div className="space-y-1.5 border-t border-slate-200 pt-3">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#0d1b3e]" />
                  <span>Conectado con el Objetivo Estratégico</span>
                </label>
                <textarea
                  rows={2}
                  value={kpi.conectadoEstrategico || ''}
                  onChange={(e) => handleKpiChange('conectadoEstrategico', e.target.value)}
                  placeholder="Explica cómo este indicador clave respalda la meta estratégica de la empresa..."
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* PLAN DE ACCIÓN PARA CONSEGUIR EMPLEO SUBTABS & EDITOR */}
      {!isSettingsOpen && activeSheetTab === 'empleo' && (
        <div className="space-y-4">
          {/* Header row with Mode Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Modo de visualización:</span>
              <button
                type="button"
                onClick={() => handleEmpleoChange('modoEjemplo', true)}
                className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  planEmpleo.modoEjemplo
                    ? 'bg-[#d80064] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                1. Ver Ejemplo Resuelto
              </button>
              <button
                type="button"
                onClick={() => handleEmpleoChange('modoEjemplo', false)}
                className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  !planEmpleo.modoEjemplo
                    ? 'bg-[#0f2e59] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                2. Diligenciar Mi Plan
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onChange({
                  ...data,
                  planEmpleo: {
                    ...EXAMPLE_PLAN_EMPLEO_DATA,
                    modoEjemplo: false
                  }
                });
              }}
              className="text-xs text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Copiar ejemplo para editarlo</span>
            </button>
          </div>

          {/* Subtabs: Objetivo & SMART, KPIs en Secuencia, Acciones Clave */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { key: 'smart' as const, label: '1. Objetivo & SMART', color: '#009cb4', icon: <TargetIcon className="w-3.5 h-3.5 text-white" /> },
              { key: 'kpis' as const, label: '2. KPIs (Resultado + 4 Impulsores)', color: '#d80064', icon: <TrendingUpIcon className="w-3.5 h-3.5 text-white" /> },
              { key: 'acciones' as const, label: '3. Las 5 Acciones Clave', color: '#f59e0b', icon: <ChecklistWeeklyIcon className="w-3.5 h-3.5 text-white" /> }
            ].map((tab) => {
              const isActive = empleoSubTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setEmpleoSubTab(tab.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: tab.color }}
                  >
                    {tab.icon}
                  </div>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Subtab 1: Objetivo & SMART */}
          {empleoSubTab === 'smart' && (
            <div className="space-y-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
              {/* Objetivo General & Fecha */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-slate-200 pb-3">
                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <TargetIcon className="w-3.5 h-3.5 text-[#009cb4]" />
                    <span>Objetivo General de Búsqueda</span>
                  </label>
                  <input
                    type="text"
                    value={planEmpleo.objetivoGeneral || ''}
                    onChange={(e) => handleEmpleoChange('objetivoGeneral', e.target.value)}
                    placeholder="Ej: Conseguir un empleo alineado a mi perfil antes del 30 de junio..."
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    <span>Fecha Límite</span>
                  </label>
                  <input
                    type="text"
                    value={planEmpleo.fechaLimite || ''}
                    onChange={(e) => handleEmpleoChange('fechaLimite', e.target.value)}
                    placeholder="Ej: 30 de junio / 15 de diciembre..."
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>
              </div>

              {/* 5 SMART Fields */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Desglose SMART del Objetivo
                </h4>

                {[
                  { key: 'smartEspecifico' as const, label: 'ESPECÍFICO:', color: '#0284c7', placeholder: 'Ej: Empleo en marketing digital / desarrollo de software...' },
                  { key: 'smartMedible' as const, label: 'MEDIBLE:', color: '#009cb4', placeholder: 'Ej: Obtener al menos 3 entrevistas y 1 oferta formal...' },
                  { key: 'smartAlcanzable' as const, label: 'ALCANZABLE:', color: '#7c3aed', placeholder: 'Ej: Postular a 20 vacantes estratégicas y optimizar perfil...' },
                  { key: 'smartRelevante' as const, label: 'RELEVANTE:', color: '#e11d48', placeholder: 'Ej: Crecer profesionalmente y mejorar mis ingresos...' },
                  { key: 'smartTiempo' as const, label: 'TIEMPO:', color: '#f97316', placeholder: 'Ej: Antes del 30 de junio del presente año...' }
                ].map((s) => (
                  <div key={s.key} className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                    <span className="w-32 shrink-0 text-xs font-bold" style={{ color: s.color }}>
                      {s.label}
                    </span>
                    <input
                      type="text"
                      value={planEmpleo[s.key] || ''}
                      onChange={(e) => handleEmpleoChange(s.key, e.target.value)}
                      placeholder={s.placeholder}
                      className="grow text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 2: KPIs (Resultado + 4 Impulsores) */}
          {empleoSubTab === 'kpis' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                <TrendingUpIcon className="w-4 h-4 text-[#d80064]" />
                <span>Secuencia de KPIs de Empleabilidad</span>
              </h4>

              <div className="space-y-3">
                {/* 1. KPI Resultado */}
                <div className="p-2.5 rounded-lg border border-purple-200 bg-purple-50/50">
                  <label className="text-xs font-bold text-[#6d28d9] flex items-center gap-1.5 mb-1">
                    <TrophyKpiIcon className="w-4 h-4 text-[#6d28d9]" />
                    <span>KPI RESULTADO (El impacto final esperado)</span>
                  </label>
                  <input
                    type="text"
                    value={planEmpleo.kpiResultado || ''}
                    onChange={(e) => handleEmpleoChange('kpiResultado', e.target.value)}
                    placeholder="Ej: Número de ofertas laborales recibidas..."
                    className="w-full text-xs font-semibold bg-white border border-purple-300 rounded-lg px-2.5 py-1.5 text-slate-800"
                  />
                </div>

                {/* 4 KPIs Impulsores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: 'kpiImpulsor1' as const, label: 'KPI IMPULSOR 1 (Networking)', icon: <NetworkPeopleIcon className="w-4 h-4 text-[#e11d48]" />, color: '#e11d48', placeholder: 'Ej: Networking mensual...' },
                    { key: 'kpiImpulsor2' as const, label: 'KPI IMPULSOR 2 (LinkedIn / Presencia)', icon: <LinkedInSquareIcon className="w-4 h-4" />, color: '#f97316', placeholder: 'Ej: Publicaciones en LinkedIn...' },
                    { key: 'kpiImpulsor3' as const, label: 'KPI IMPULSOR 3 (Certificaciones / Skills)', icon: <CertificateBadgeIcon className="w-4 h-4 text-[#009cb4]" />, color: '#009cb4', placeholder: 'Ej: Certificaciones obtenidas...' },
                    { key: 'kpiImpulsor4' as const, label: 'KPI IMPULSOR 4 (Entrevistas / Contacto)', icon: <InterviewChatIcon className="w-4 h-4 text-[#eab308]" />, color: '#eab308', placeholder: 'Ej: Entrevistas realizadas...' }
                  ].map((kpiItem) => (
                    <div key={kpiItem.key} className="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
                      <label className="text-[11px] font-bold flex items-center gap-1.5" style={{ color: kpiItem.color }}>
                        {kpiItem.icon}
                        <span>{kpiItem.label}</span>
                      </label>
                      <input
                        type="text"
                        value={planEmpleo[kpiItem.key] || ''}
                        onChange={(e) => handleEmpleoChange(kpiItem.key, e.target.value)}
                        placeholder={kpiItem.placeholder}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Subtab 3: Acciones Clave */}
          {empleoSubTab === 'acciones' && (
            <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                <ChecklistWeeklyIcon className="w-4 h-4 text-amber-500" />
                <span>Las 5 Acciones Clave que empujan cada KPI</span>
              </h4>

              <div className="space-y-2">
                {[
                  { key: 'accion1' as const, num: '1.', title: 'Actualizar perfil y CV', icon: <ProfileCvIcon className="w-4 h-4 text-[#009cb4]" />, placeholder: 'Actualizar perfil y CV en bolsas de empleo...' },
                  { key: 'accion2' as const, num: '2.', title: 'Generar contenido de valor', icon: <ContentPencilIcon className="w-4 h-4 text-[#e11d48]" />, placeholder: 'Generar contenido y compartir aprendizajes en redes...' },
                  { key: 'accion3' as const, num: '3.', title: 'Asistir a reuniones y eventos', icon: <MeetingTableIcon className="w-4 h-4 text-[#f97316]" />, placeholder: 'Asistir a ferias de empleo, meetups o charlas...' },
                  { key: 'accion4' as const, num: '4.', title: 'Tomar cursos y seguir aprendiendo', icon: <GraduationCapIcon className="w-4 h-4 text-[#009cb4]" />, placeholder: 'Capacitarme en herramientas demandadas en mi sector...' },
                  { key: 'accion5' as const, num: '5.', title: 'Hacer seguimiento semanal', icon: <ChecklistWeeklyIcon className="w-4 h-4 text-[#f59e0b]" />, placeholder: 'Hacer seguimiento semanal y evaluar resultados de postulaciones...' }
                ].map((act) => (
                  <div key={act.key} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200">
                    <span className="font-black text-xs text-slate-900 w-5">{act.num}</span>
                    <div className="shrink-0">{act.icon}</div>
                    <input
                      type="text"
                      value={planEmpleo[act.key] || ''}
                      onChange={(e) => handleEmpleoChange(act.key, e.target.value)}
                      placeholder={act.placeholder}
                      className="grow text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-slate-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Settings Panel */}
      {isSettingsOpen && (
        <div className="space-y-4 text-xs text-slate-700">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Opciones de Presentación y PDF</h4>

            <label className="flex items-center justify-between cursor-pointer py-1">
              <div>
                <span className="font-semibold block text-slate-800">
                  Texturas y Salpicaduras de Pintura
                </span>
                <span className="text-[11px] text-slate-500">
                  Incluye las esquinas artísticas en acuarela y tramas de semitono.
                </span>
              </div>
              <input
                type="checkbox"
                checked={branding.showWatermarks}
                onChange={(e) => onBrandingChange({ ...branding, showWatermarks: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer py-1">
              <div>
                <span className="font-semibold block text-slate-800">
                  Logotipos Institucionales (Comfama / UPB)
                </span>
                <span className="text-[11px] text-slate-500">
                  Muestra la identidad gráfica oficial en encabezados y pies de página.
                </span>
              </div>
              <input
                type="checkbox"
                checked={branding.showComfamaBranding}
                onChange={(e) => onBrandingChange({ ...branding, showComfamaBranding: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 cursor-pointer"
              />
            </label>
          </div>

          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs">
            <p className="font-semibold mb-1">🔒 Privacidad y Almacenamiento Local</p>
            <p className="text-[11px] text-emerald-700 leading-relaxed">
              Tus matrices DOFA y planes CAME se almacenan 100% de manera privada en tu navegador (LocalStorage).
              No se envía ningún dato a internet y puedes exportar copias de seguridad en formato JSON cuando desees.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
