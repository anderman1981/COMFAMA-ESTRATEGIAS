export interface CameData {
  corregir: string[];
  afrontar: string[];
  mantener: string[];
  explotar: string[];
}

export interface SmartGoalData {
  fortaleza: string[];
  mantener: string[];
  objetivoSmart: string[];
  specific?: string;
  measurable?: string;
  achievable?: string;
  relevant?: string;
  timeBound?: string;
}

export interface KpiData {
  // 1. Objetivo SMART
  smartEspecifico: string;
  smartMedible: string;
  smartAlcanzable: string;
  smartRelevante: string;
  smartTiempo: string;
  // 2. KPI de Resultado
  kpiResultado: string;
  // 3. Impulsores (3 puntos)
  impulsores: string[];
  // 4. Responsable
  responsable: string;
  // 5. Frecuencia
  frecuencia: string;
  otraFrecuencia?: string;
  // 6. Medición
  medicionFormula: string;
  // Conexión estratégica inferior
  conectadoEstrategico: string;
}

export interface PlanEmpleoData {
  // Objetivo general y fecha límite
  objetivoGeneral: string;
  fechaLimite: string;
  // SMART
  smartEspecifico: string;
  smartMedible: string;
  smartAlcanzable: string;
  smartRelevante: string;
  smartTiempo: string;
  // Foto opcional del usuario (dataURL o avatar)
  userPhotoUrl?: string;
  // KPIs (1 resultado + 4 impulsores)
  kpiResultado: string;
  kpiImpulsor1: string;
  kpiImpulsor2: string;
  kpiImpulsor3: string;
  kpiImpulsor4: string;
  // 5 Acciones Clave
  accion1: string;
  accion2: string;
  accion3: string;
  accion4: string;
  accion5: string;
  // Modo de visualización: ejemplo resuelto o diligenciar
  modoEjemplo?: boolean;
}

export interface DofaData {
  companyName: string;
  fortalezas: string[];
  debilidades: string[];
  oportunidades: string[];
  amenazas: string[];
  came?: CameData;
  carrera?: SmartGoalData;
  kpi?: KpiData;
  planEmpleo?: PlanEmpleoData;
  facilitator?: string;
  date?: string;
}

export type QuadrantKey = 'fortalezas' | 'debilidades' | 'oportunidades' | 'amenazas';
export type CameColumnKey = 'corregir' | 'afrontar' | 'mantener' | 'explotar';
export type SmartStepKey = 'fortaleza' | 'mantener' | 'objetivoSmart';

export type ActiveSheetTab = 'dofa' | 'came' | 'smart' | 'kpi' | 'empleo';

export interface QuadrantMeta {
  key: QuadrantKey;
  title: string;
  question: string;
  headerColor: string;
  headerBg: string;
  accentColor: string;
  lightBg: string;
  borderColor: string;
  iconName: 'dumbbell' | 'broken-chain' | 'target' | 'alert-triangle';
}

export interface BrandingConfig {
  showWatermarks: boolean;
  showComfamaBranding: boolean;
  customFooterMotto: string;
  fontSize: 'compact' | 'normal' | 'large';
}
