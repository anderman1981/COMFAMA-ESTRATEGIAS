import { DofaData, CameData, SmartGoalData, KpiData, PlanEmpleoData } from '../types';

export const EXAMPLE_PLAN_EMPLEO_DATA: PlanEmpleoData = {
  objetivoGeneral: 'Conseguir un empleo alineado a mi perfil antes del 30 de junio.',
  fechaLimite: '30 de junio',
  smartEspecifico: 'Empleo en marketing digital.',
  smartMedible: 'Obtener al menos 3 entrevistas.',
  smartAlcanzable: 'Postular a 20 vacantes.',
  smartRelevante: 'Crecer profesionalmente.',
  smartTiempo: 'Antes del 30 de junio.',
  userPhotoUrl: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_18.55.56_7ac43f92.jpeg',
  kpiResultado: 'Número de ofertas laborales recibidas.',
  kpiImpulsor1: 'Networking mensual.',
  kpiImpulsor2: 'Publicaciones en LinkedIn.',
  kpiImpulsor3: 'Certificaciones obtenidas.',
  kpiImpulsor4: 'Entrevistas realizadas.',
  accion1: 'Actualizar perfil y CV.',
  accion2: 'Generar contenido de valor.',
  accion3: 'Asistir a reuniones y eventos.',
  accion4: 'Tomar cursos y seguir aprendiendo.',
  accion5: 'Hacer seguimiento semanal y evaluar resultados.',
  modoEjemplo: true
};

export const INITIAL_PLAN_EMPLEO_DATA: PlanEmpleoData = {
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
};


export const INITIAL_CAME_DATA: CameData = {
  corregir: ['', '', '', '', ''],
  afrontar: ['', '', '', '', ''],
  mantener: ['', '', '', '', ''],
  explotar: ['', '', '', '', '']
};

export const INITIAL_SMART_DATA: SmartGoalData = {
  fortaleza: [
    'Liderazgo empático y capacidad comprobada para coordinar equipos multidisciplinarios',
    'Capacidad de resolución ágil de problemas técnicos bajo presión',
    'Comunicación asertiva con clientes y directivos en proyectos de innovación',
    'Pensamiento analítico y optimización continua de procesos operativos',
    'Compromiso constante con el aprendizaje autodidacta y actualización profesional'
  ],
  mantener: [
    'Facilitar retrospectivas y sesiones periódicas de feedback 360° con mi equipo',
    'Documentar lecciones aprendidas y metodologías en una base de conocimiento personal',
    'Participar como mentor en semilleros juveniles y talleres de innovación corporativa',
    'Estudiar 3 horas semanales casos prácticos y tendencias globales de mi disciplina',
    'Cuidar el balance personal y la inteligencia emocional en momentos de alta demanda'
  ],
  objetivoSmart: [
    'Obtener la certificación PMP (Project Management Professional) antes de junio del próximo año.',
    'Diseñar e implementar 3 nuevos tableros de gestión ágil para reducir tiempos de entrega un 20%.',
    'Publicar 2 artículos técnicos sobre gestión de proyectos en LinkedIn para posicionar mi perfil.',
    'Completar un curso avanzado de negociación estratégica de 40 horas en el segundo semestre.',
    'Asistir a 2 conferencias del sector y generar 10 nuevos contactos profesionales clave.'
  ],
  specific: 'Obtener la certificación profesional PMP (Project Management Professional).',
  measurable: 'Aprobar el examen oficial del PMI con certificación verificable expedida.',
  achievable: 'Tengo tiempo asignado de 5 horas semanales, recursos para simuladores y plan de estudio.',
  relevant: 'Me permitirá liderar proyectos de mayor envergadura y aspirar a gerencia de operaciones.',
  timeBound: 'Presentar y aprobar el examen antes del 30 de junio del próximo año.'
};

export const INITIAL_KPI_DATA: KpiData = {
  smartEspecifico: 'Incrementar las ventas de la línea premium de productos',
  smartMedible: 'Alcanzar un crecimiento del 25% en facturación mensual',
  smartAlcanzable: 'Con ampliación del canal digital y 2 nuevos distribuidores',
  smartRelevante: 'Asegura la rentabilidad operativa y liderazgo de mercado',
  smartTiempo: 'En un plazo de 6 meses (antes de diciembre)',
  kpiResultado: 'Crecimiento de Facturación Mensual Neta de la Línea Premium (%)',
  impulsores: [
    'Tasa de conversión en campañas digitales y tienda online',
    'Ticket promedio de compra por cliente recurrente',
    'Cumplimiento y velocidad de entrega logística en menos de 24h'
  ],
  responsable: 'Gerencia Comercial & Equipo de Marketing Digital',
  frecuencia: 'Mensual',
  otraFrecuencia: '',
  medicionFormula: '[(Ventas Mes Actual - Ventas Mes Anterior) / Ventas Mes Anterior] × 100',
  conectadoEstrategico: 'Alinea las acciones comerciales con la visión corporativa de rentabilidad sostenible y satisfacción garantizada al cliente.'
};

export const INITIAL_DOFA_DATA: DofaData = {
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
  carrera: INITIAL_SMART_DATA,
  kpi: INITIAL_KPI_DATA,
  planEmpleo: INITIAL_PLAN_EMPLEO_DATA,
  facilitator: '',
  date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
};

export const SAMPLE_CASES: { name: string; description: string; data: DofaData }[] = [
  {
    name: 'Cafetería de Especialidad & Tostaduría',
    description: 'Negocio local de café de origen con venta en mesa y suscripción de grano.',
    data: {
      companyName: 'Café Origen & Raíces',
      fortalezas: [
        'Relación directa con caficultores locales de alta calidad',
        'Baristas certificados y experiencia personalizada al cliente',
        'Ubicación estratégica en zona universitaria y corporativa',
        'Comunidad activa y leal en redes sociales y club de fidelidad',
        'Tueste propio con perfiles exclusivos y empaques compostables'
      ],
      debilidades: [
        'Espacio físico reducido en horas pico (cuello de botella en mesas)',
        'Dependencia de insumos importados para maquinaria espresso',
        'Falta de un sistema automatizado para envíos de suscripción',
        'Presupuesto limitado para pauta y marketing masivo',
        'Rotación estacional de personal de servicio en barra'
      ],
      oportunidades: [
        'Creciente tendencia de consumo de café premium y métodos filtrados',
        'Alianzas con empresas para suministrar café en oficinas híbridas',
        'Talleres y catas de café los fines de semana como línea de ingreso',
        'Expansión a venta online nacional de café molido y accesorios',
        'Programas de apoyo municipal a emprendimientos sostenibles'
      ],
      amenazas: [
        'Volatilidad en el precio internacional del café y materias primas',
        'Llegada de grandes cadenas internacionales a dos cuadras',
        'Aumento en los cánones de arrendamiento en la zona comercial',
        'Inflación que impacta el gasto discrecional de consumidores jóvenes',
        'Problemas logísticos y bloqueos viales que retrasen despachos de grano'
      ],
      came: {
        corregir: [
          'Habilitar barra rápida para pedidos "para llevar" (takeaway) y reducir filas en horas pico',
          'Homologar proveedores técnicos locales para repuestos y mantenimiento de máquinas',
          'Implementar software de automatización logística para cobros y entregas de suscripción',
          'Fortalecer marketing de referidos orgánico incentivando a clientes habituales con café gratis',
          'Diseñar plan de carrera y bonos por desempeño para fidelizar al equipo de baristas'
        ],
        afrontar: [
          'Firmar contratos a precio futuro con caficultores para blindarse ante fluctuaciones',
          'Destacar la frescura del tueste semanal y trazabilidad frente a cadenas industriales',
          'Negociar contrato de arrendamiento a largo plazo con cláusula de tope de incremento',
          'Crear combos accesibles de café del día con repostería para mantener ticket promedio',
          'Mantener stock de seguridad de grano verde para 45 días de contingencia'
        ],
        mantener: [
          'Cuidar el pago justo y las visitas periódicas a las fincas cafeteras aliadas',
          'Realizar sesiones mensuales de calibración sensorial y servicio al cliente',
          'Monitorear el tráfico peatonal y mantener convenio de parqueaderos cercanos',
          'Organizar eventos exclusivos de cata para los miembros de la comunidad VIP',
          'Continuar innovando en perfiles de tueste y comunicar el impacto ambiental del empaque'
        ],
        explotar: [
          'Lanzar menú degustación con métodos filtrados exclusivos (V60, Chemex, Aeropress)',
          'Diseñar paquetes corporativos B2B para salas de juntas y eventos ejecutivos',
          'Monetizar catas guiadas los sábados y domingos con certificación básica para aficionados',
          'Crear tienda online con pasarela de pagos para despachar café tostado en todo el país',
          'Postular a fondos de fomento para adquirir una tostadora de mayor capacidad energética'
        ]
      },
      facilitator: 'Taller de Innovación Comfama',
      date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
  {
    name: 'Agencia de Soluciones de IA & Software',
    description: 'Empresa tecnológica que ayuda a PYMEs a automatizar procesos operativos.',
    data: {
      companyName: 'NovaTech Inteligencia Operativa',
      fortalezas: [
        'Equipo senior multidisciplinario en arquitectura de IA y nube',
        'Casos de éxito comprobables con reducción de costos del 40%',
        'Metodología ágil que entrega prototipos funcionales en 2 semanas',
        'Soporte técnico cercano y asesoría estratégica personalizada',
        'Propiedad intelectual propia en conectores y flujos de trabajo'
      ],
      debilidades: [
        'Ciclo de ventas largo en clientes corporativos medianos',
        'Escasa presencia de marca fuera del canal de recomendaciones',
        'Dependencia de un cliente mayoritario que aporta el 35% de ingresos',
        'Falta de un producto empaquetado SaaS de autoservicio',
        'Dificultad para contratar talento especializado en IA a costo competitivo'
      ],
      oportunidades: [
        'Adopción acelerada de asistentes y modelos de lenguaje en empresas',
        'Fondos y subsidios gubernamentales para transformación digital',
        'Integración con plataformas populares como WhatsApp CRM y ERPs locales',
        'Expansión del mercado hacia clientes en México, Chile y España',
        'Demanda de auditoría de seguridad y privacidad en datos de clientes'
      ],
      amenazas: [
        'Rápida evolución de modelos fundacionales que vuelven obsoletas ciertas apps',
        'Saturación de ofertas de freelancers y agencias de bajo costo',
        'Incertidumbre regulatoria sobre el uso comercial de datos de IA',
        'Recortes en presupuestos de innovación ante panoramas económicos inciertos',
        'Riesgo de cambios inesperados en precios de APIs de proveedores en la nube'
      ],
      came: {
        corregir: [
          'Diseñar paquetes de consultoría inicial "Sprint de 5 días" para acortar el cierre de ventas',
          'Publicar casos de estudio documentados y contenido técnico en LinkedIn y YouTube',
          'Diversificar cartera captando clientes medianos para que ningún cliente supere el 15%',
          'Empaquetar el flujo más solicitado en un conector SaaS autogestionable',
          'Crear semillero interno de desarrollo en alianza con universidades locales'
        ],
        afrontar: [
          'Diseñar arquitectura agnóstica de modelos que permita cambiar de proveedor sin fricción',
          'Enfocar la propuesta de valor en ROI garantizado y SLA corporativo frente a freelancers',
          'Auditar soluciones bajo normativas de protección de datos y entregar certificación',
          'Ofrecer esquemas de pago basados en ahorro obtenido ("Success fee")',
          'Implementar caché inteligente y modelos locales de código abierto para optimizar costos de API'
        ],
        mantener: [
          'Asignar horas semanales de I+D para que el equipo pruebe los últimos modelos y librerías',
          'Medir y auditar métricas de ahorro de costos en cada cliente cada 90 días',
          'Mantener la disciplina de entregas quincenales funcionales para no alargar proyectos',
          'Garantizar atención directa por parte de los arquitectos principales en cuentas clave',
          'Registrar patentes y marcas de los algoritmos propios desarrollados'
        ],
        explotar: [
          'Lanzar oferta de agentes de IA para atención al cliente y operaciones 24/7',
          'Formular proyectos para convocatorias de financiamiento en innovación y base tecnológica',
          'Desarrollar integración certificada oficial para WhatsApp Business y ERPs de la región',
          'Abrir canal de prospección comercial outbound enfocado en empresas de habla hispana',
          'Ofrecer servicio especializado de consultoría en gobierno de datos y ética en IA'
        ]
      },
      facilitator: 'Planeación Estratégica 2026',
      date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
  {
    name: 'Clínica de Fisioterapia & Bienestar',
    description: 'Centro de rehabilitación física, medicina deportiva y ergonomía.',
    data: {
      companyName: 'Vitalis Centro de Rendimiento & Salud',
      fortalezas: [
        'Especialistas con maestría en rehabilitación deportiva y biomecánica',
        'Equipos de electroestimulación y ultrasonido de última generación',
        'Alta tasa de recuperación y satisfacción del paciente (98% NPS)',
        'Instalaciones modernas con estacionamiento propio y accesibilidad universal',
        'Convenios con clubes deportivos y academias de entrenamiento'
      ],
      debilidades: [
        'Baja digitalización en el agendamiento y recordatorios de citas',
        'Horarios limitados de atención los domingos y festivos',
        'Dependencia de la presencia física de los directores médicos',
        'Poca oferta de paquetes preventivos corporativos estructurados',
        'Espacio subutilizado en las mañanas de lunes a miércoles'
      ],
      oportunidades: [
        'Auge del teletrabajo que incrementa problemas posturales y cervicales',
        'Programas de pausas activas y bienestar para empresas con pólizas',
        'Lanzamiento de consultas virtuales de seguimiento y tele-rehabilitación',
        'Alianzas con médicos traumatólogos para derivación preferente de pacientes',
        'Venta cruzada de productos ortopédicos y suplementos nutricionales'
      ],
      amenazas: [
        'Proliferación de centros no certificados ofreciendo masajes a bajo precio',
        'Demoras en pagos por parte de aseguradoras y entidades prestadoras de salud',
        'Incremento de costos en mantenimiento y calibración de tecnología médica',
        'Cambios normativos en habilitación sanitaria de consultorios privados',
        'Pérdida de pacientes ante mudanza a zonas periféricas de la ciudad'
      ],
      came: {
        corregir: [
          'Instalar plataforma de agendamiento online 24/7 y confirmaciones automáticas por WhatsApp',
          'Habilitar turnos especiales rotativos los domingos en la mañana con personal voluntario',
          'Documentar protocolos clínicos para que los terapeutas asociados operen con autonomía',
          'Diseñar folleto y propuesta comercial de salud ocupacional para empresas',
          'Lanzar tarifas especiales matutinas para adultos mayores en días de baja ocupación'
        ],
        afrontar: [
          'Comunicar en redes la acreditación profesional del equipo y riesgos del intrusismo',
          'Fomentar el pago directo con tarifas preferenciales para reducir dependencia de aseguradoras',
          'Firmar póliza de mantenimiento preventivo anual con el distribuidor oficial de equipos',
          'Contratar asesoría jurídica externa para auditoría continua de habilitación en salud',
          'Abrir sede satélite o servicio domiciliario para pacientes en zonas residenciales alejadas'
        ],
        mantener: [
          'Financiar formación continua y congresos internacionales al equipo clínico',
          'Mantener la rigurosa calibración semestral de los equipos biomédicos',
          'Aplicar encuesta de satisfacción post-alta y solicitar testimonios en Google Reviews',
          'Cuidar el estado impecable, climatización e higiene de las instalaciones físicas',
          'Renovar anualmente los acuerdos con federaciones y atletas de alto rendimiento'
        ],
        explotar: [
          'Lanzar programa "Espalda Sana" específico para colaboradores en teletrabajo',
          'Crear talleres corporativos de ergonomía y pausas activas presenciales y virtuales',
          'Habilitar plataforma de tele-fisioterapia para ejercicios guiados en casa',
          'Establecer reuniones periódicas con traumatólogos para reportar evolución de sus derivados',
          'Habilitar vitrina física y catálogo digital de implementos ergonómicos y ortesis'
        ]
      },
      facilitator: 'Comité Directivo Vitalis',
      date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
];

export const SUGGESTIONS_BANK: Record<string, string[]> = {
  // DOFA
  fortalezas: [
    'Excelente reputación y recomendaciones de clientes satisfechos',
    'Equipo capacitado, motivado y con baja rotación de talento',
    'Procesos operativos estandarizados y alta eficiencia en costos',
    'Canales de atención al cliente rápidos y personalizados',
    'Producto con características únicas difíciles de replicar',
    'Solidez financiera y flujo de caja positivo',
    'Ubicación estratégica o excelente cobertura logística',
    'Capacidad de adaptación rápida ante requerimientos del cliente'
  ],
  debilidades: [
    'Falta de presencia o estrategia digital consolidada',
    'Dependencia excesiva del fundador o de personal clave',
    'Capacidad de producción o almacenamiento al límite',
    'Falta de herramientas tecnológicas para automatizar tareas repetitivas',
    'Presupuesto comercial y de mercadeo limitado',
    'Poco seguimiento post-venta o métricas de retención de clientes',
    'Falta de reservas financieras para contingencias',
    'Procesos manuales propensos a errores humanos'
  ],
  oportunidades: [
    'Aparición de nuevos nichos de mercado desatendidos por la competencia',
    'Adopción de nuevas tecnologías para optimizar costos de entrega',
    'Alianzas estratégicas con proveedores u otras marcas complementarias',
    'Cambios en hábitos de consumo hacia productos sostenibles o saludables',
    'Acceso a convocatorias de financiamiento, subsidios o programas de fomento',
    'Crecimiento del comercio electrónico en la región',
    'Expansión geográfica a ciudades intermedias o mercados cercanos',
    'Demanda creciente de servicios personalizados y suscripciones'
  ],
  amenazas: [
    'Entrada de nuevos competidores con precios agresivos o mayor capital',
    'Incremento en el costo de materias primas, energía o transporte',
    'Cambios en la legislación fiscal, laboral o regulaciones del sector',
    'Disminución del poder adquisitivo de los consumidores por inflación',
    'Falta de abastecimiento oportuno por problemas en la cadena de suministros',
    'Cambios drásticos en las plataformas o algoritmos de donde provienen los clientes',
    'Aparición de productos sustitutos más rápidos o económicos',
    'Riesgos climáticos o situaciones sociales que afecten la movilidad'
  ],
  // CAME
  corregir: [
    'Implementar software de automatización para reducir errores manuales',
    'Delegar y documentar procesos operativos para no depender del fundador',
    'Rediseñar los canales digitales y fortalecer la presencia en redes sociales',
    'Establecer indicadores clave (KPIs) y seguimiento quincenal de objetivos',
    'Optimizar la distribución del espacio físico o capacidad operativa',
    'Capacitar al equipo en habilidades técnicas y de servicio al cliente',
    'Negociar mejores condiciones crediticias o plazos de pago con proveedores',
    'Crear manuales de bienvenida y protocolos de inducción para nuevos empleados'
  ],
  afrontar: [
    'Construir un fondo de reserva para contingencias financieras imprevistas',
    'Diversificar la cartera de proveedores para no depender de una sola fuente',
    'Diferenciar la marca por calidad y experiencia ante guerras de precios bajos',
    'Monitorear cambios regulatorios y anticipar ajustes legales requeridos',
    'Fidelizar a los clientes actuales mediante programas de lealtad y beneficios',
    'Desarrollar productos o servicios sustitutos más accesibles para tiempos de crisis',
    'Asegurar contratos a largo plazo con clientes estratégicos',
    'Establecer pólizas de seguros y planes de continuidad del negocio'
  ],
  mantener: [
    'Invertir continuamente en la capacitación y bienestar del equipo clave',
    'Proteger la calidad del producto o servicio mediante auditorías periódicas',
    'Mantener la comunicación cercana y trato personalizado con los clientes',
    'Actualizar periódicamente la tecnología y herramientas de trabajo',
    'Revisar y optimizar la estructura de costos para preservar la rentabilidad',
    'Cuidar la reputación de marca y la transparencia en cada interacción',
    'Fomentar la cultura de innovación y mejora continua interna',
    'Mantener alianzas sólidas con aliados comerciales y distribuidores'
  ],
  explotar: [
    'Lanzar nuevas líneas de producto o servicios complementarios al mercado',
    'Expandir la cobertura geográfica a nuevas ciudades o regiones vecinas',
    'Aprovechar convocatorias gubernamentales o subsidios de transformación',
    'Formalizar alianzas estratégicas con marcas del mismo ecosistema',
    'Desarrollar un canal de ventas digital o modelo de suscripción recurrente',
    'Captar clientes corporativos B2B mediante propuestas empaquetadas',
    'Crear programas educativos o contenidos para posicionarse como líderes del sector',
    'Aprovechar tendencias emergentes de sostenibilidad y consumo responsable'
  ],
  // CASO PROFESIONAL - MI CARRERA (SMART)
  smart_fortaleza: [
    'Liderazgo empático y capacidad comprobada para coordinar equipos multidisciplinarios',
    'Capacidad de resolución ágil de problemas técnicos bajo alta presión',
    'Comunicación asertiva con clientes y directivos en proyectos estratégicos',
    'Pensamiento analítico y optimización continua de procesos operativos',
    'Compromiso constante con el aprendizaje autodidacta y actualización tecnológica',
    'Habilidad de negociación y facilitación de acuerdos en entornos complejos',
    'Orientación a resultados con alta atención al detalle y calidad',
    'Capacidad de adaptación rápida ante cambios organizacionales o del mercado'
  ],
  smart_mantener: [
    'Facilitar retrospectivas y sesiones periódicas de feedback 360° con mi equipo',
    'Documentar lecciones aprendidas y metodologías en una base de conocimiento personal',
    'Participar como mentor en semilleros juveniles y talleres de innovación corporativa',
    'Estudiar 3 horas semanales casos prácticos y tendencias globales de mi disciplina',
    'Cuidar el balance personal y la inteligencia emocional en momentos de alta demanda',
    'Mantener activa mi red de contactos profesionales asistiendo a eventos del sector',
    'Asumir retos que desafíen mi zona de confort en nuevos proyectos transversales',
    'Solicitar retroalimentación constante a líderes y compañeros de trabajo'
  ],
  smart_objetivoSmart: [
    'Obtener la certificación PMP (Project Management Professional) antes de junio del próximo año.',
    'Diseñar e implementar 3 nuevos tableros de gestión ágil para reducir tiempos de entrega un 20%.',
    'Publicar 2 artículos técnicos sobre gestión de proyectos en LinkedIn para posicionar mi perfil.',
    'Completar un curso avanzado de negociación estratégica de 40 horas en el segundo semestre.',
    'Asistir a 2 conferencias del sector y generar 10 nuevos contactos profesionales clave.',
    'Liderar exitosamente la migración digital del departamento antes de diciembre de este año.',
    'Alcanzar nivel C1 en inglés técnico realizando 4 horas de práctica conversacional al mes.',
    'Capacitar a 15 miembros del equipo en metodologías ágiles durante el primer trimestre.'
  ],
  // KPI DE RESULTADO
  kpi_resultado: [
    'Crecimiento de Facturación Mensual Neta (%)',
    'Tasa de Retención de Clientes / Churn Rate (%)',
    'Margen de Utilidad Operativa por Línea de Negocio (%)',
    'Net Promoter Score (NPS) - Nivel de Satisfacción del Cliente',
    'Costo de Adquisición de Clientes (CAC) vs. Valor de Vida (LTV)',
    'Cumplimiento del Plan Operativo / Entregas a Tiempo (OTIF %)',
    'Rotación de Inventario y Días de Permanencia en Bodega',
    'Productividad por Empleado o Ingreso Medio por Colaborador'
  ],
  kpi_impulsores: [
    'Tasa de conversión en campañas digitales y tienda online',
    'Ticket promedio de compra por cliente recurrente',
    'Cumplimiento y velocidad de entrega logística en menos de 24h',
    'Tiempo medio de respuesta en soporte técnico y servicio al cliente',
    'Horas de capacitación continua por colaborador al mes',
    'Número de demostraciones o cotizaciones comerciales cerradas por semana',
    'Porcentaje de recompra mensual de clientes fidelizados',
    'Nivel de disponibilidad operativa del sistema sin caídas (Uptime 99.9%)'
  ]
};


