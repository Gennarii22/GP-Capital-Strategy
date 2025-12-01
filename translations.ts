import { SectionId } from './types';

export const translations = {
  en: {
    nav: {
      status: "SYSTEM_STATUS: ONLINE",
    },
    hero: {
      badge: "Classified Briefing",
      titleStart: "42% of Seed Startups die with a product in hand",
      titleEnd: "but an empty bank account.",
      subtitle: "GPCS transforms your financial anxiety into military strategy. Get your free Stress Test and discover your true 'Game Over' date.",
      cta: "START STRESS TEST",
      trust: ["180 SECONDS", "NO CREDIT CARD", "CONFIDENTIAL"]
    },
    problem: {
      badge: "Calculated Agitation",
      titleStart: "Your Pitch Deck says you're fine.",
      titleEnd: "Your bank account tells the truth.",
      cards: [
        {
          title: "Opaque Burn Rate",
          desc: "You don't know how much you really spend each month. Variable costs are eating your seed round."
        },
        {
          title: "Phantom Runway",
          desc: "You calculate runway on cash in bank, not committed cash. Your death date is 3 months closer than you think."
        },
        {
          title: "Blind Fundraising",
          desc: "Talking to VCs without knowing your real Unit Economics. They will tear you apart during Due Diligence."
        }
      ]
    },
    solution: {
      badge: "Capital Architecture",
      titleStart: "You don't need an accountant.",
      titleEnd: "You need a Capital Architect.",
      sidebar: "GPCS does not record invoices. We build survival protocols.",
      cards: [
        {
          label: "01 // LIQUIDITY PROTOCOL",
          title: "Cash-Flow Engineering",
          desc: "Transforming burn rate from hemorrhage to controlled investment. Surgical optimization of outflows."
        },
        {
          label: "02 // RAISING STRATEGY",
          title: "Fundraising Readiness",
          desc: "We build the Data Room VCs want to see. Less storytelling, more defensible metrics."
        },
        {
          label: "03 // MANAGEMENT CONTROL",
          title: "Fractional CFO Operations",
          desc: "An expert CFO on your team, but only when needed. Enterprise-level financial governance for seed startups."
        }
      ]
    },
    protocol: {
      header: "ENGAGEMENT PROTOCOL",
      steps: [
        { title: "Input", desc: "Fill the Stress Test with raw data." },
        { title: "Analysis", desc: "Algorithm crosses burn and runway." },
        { title: "Verdict", desc: "Receive the verdict: Investable or Insolvent." }
      ]
    },
    author: {
      id: "ID: G_PANCIA",
      name: "Gennaro Pancia",
      role: "| Capital Strategy",
      bio: [
        "I am not a coach. I don't sell courses. I am a Fractional CFO operating in the trenches of Tech and Private Equity.",
        "I've seen startups burn 2 million in 6 months for 'marketing' with no ROI. I've seen founders lose control of their company due to fine print.",
        "My job is simple: I enter, analyze flows, cut the superfluous, structure capital, and prepare you for market warfare."
      ],
      stats: {
        capital: "Managed Capital",
        exits: "Strategic Exits"
      }
    },
    modal: {
      title: "Stress Test Initialization",
      subtitle: "Enter raw data. The system will calculate your real exposure.",
      labels: {
        cash: "Cash on Hand (€)",
        burn: "Monthly Burn (€)",
        revenue: "Monthly Revenue (€)",
        team: "Team Size"
      },
      placeholder: {
        cash: "Ex. 150000",
        burn: "Ex. 25000",
        revenue: "Ex. 5000",
        team: "Ex. 8"
      },
      cta: "CALCULATE RISK",
      disclaimer: "END-TO-END ENCRYPTED DATA. NO STORAGE ON EXTERNAL SERVERS.",
      loading: "DATA PROCESSING IN PROGRESS...",
      results: {
        reportId: "REPORT_ID",
        status: "STATUS",
        gameover: "Game Over Projection",
        analysis: "Vector Analysis",
        protocol: "Recommended Protocol",
        cta: "REQUEST FULL AUDIT (GPCS)"
      },
      fallback: {
        analysis: "Anomaly detected. Estimated runway less than 6 months based on partial data.",
        protocol: "Immediate hiring freeze. Operational expense audit required within 48h."
      }
    },
    shadow: {
      [SectionId.HERO]: "ANALYZING VISITOR METRICS... DETECTING LIQUIDITY ANXIETY.",
      [SectionId.PROBLEM]: "WARNING: MOST FOUNDERS OVERESTIMATE RUNWAY BY 32%.",
      [SectionId.SOLUTION]: "STRUCTURAL ARCHITECTURE REQUIRED. BOOKKEEPING IS NOT STRATEGY.",
      [SectionId.PROTOCOL]: "STANDARD PROCEDURE: INPUT > AUDIT > EXECUTION.",
      [SectionId.AUTHOR]: "OPERATOR IDENTITY VERIFIED. CLEARANCE LEVEL: MAXIMUM."
    }
  },
  it: {
    nav: {
      status: "SYSTEM_STATUS: ONLINE",
    },
    hero: {
      badge: "Briefing Classificato",
      titleStart: "Il 42% delle Startup Seed muore con il prodotto in mano",
      titleEnd: "ma la cassa vuota.",
      subtitle: "GPCS trasforma la tua ansia finanziaria in strategia militare. Ottieni il tuo Stress Test gratuito e scopri la tua vera data di 'Game Over'.",
      cta: "AVVIA LO STRESS TEST",
      trust: ["180 SECONDI", "NO CREDIT CARD", "CONFIDENZIALE"]
    },
    problem: {
      badge: "Agitazione Calcolata",
      titleStart: "Il tuo Pitch Deck dice che stai bene.",
      titleEnd: "Il tuo conto in banca dice la verità.",
      cards: [
        {
          title: "Burn Rate Opaco",
          desc: "Non sai quanto spendi davvero ogni mese. Le spese variabili stanno mangiando il tuo seed round."
        },
        {
          title: "Runway Fantasma",
          desc: "Calcoli la runway sui soldi in banca, non sui soldi impegnati. La tua data di morte è più vicina di 3 mesi."
        },
        {
          title: "Fundraising al Buio",
          desc: "Parli con i VC senza conoscere i tuoi Unit Economics reali. Ti faranno a pezzi durante la Due Diligence."
        }
      ]
    },
    solution: {
      badge: "Architettura del Capitale",
      titleStart: "Non ti serve un commercialista.",
      titleEnd: "Ti serve un Architetto del Capitale.",
      sidebar: "GPCS non registra fatture. Noi costruiamo protocolli di sopravvivenza.",
      cards: [
        {
          label: "01 // PROTOCOLLO DI LIQUIDITÀ",
          title: "Cash-Flow Engineering",
          desc: "Trasformiamo il burn rate da emorragia a investimento controllato. Ottimizzazione chirurgica delle uscite."
        },
        {
          label: "02 // STRATEGIA DI RACCOLTA",
          title: "Fundraising Readiness",
          desc: "Costruiamo la Data Room che i VC vogliono vedere. Meno storytelling, più metriche difendibili."
        },
        {
          label: "03 // CONTROLLO DI GESTIONE",
          title: "Fractional CFO Operations",
          desc: "Un CFO esperto nel tuo team, ma solo quando serve. Governance finanziaria di livello enterprise per startup seed."
        }
      ]
    },
    protocol: {
      header: "PROTOCOLLO DI INGAGGIO",
      steps: [
        { title: "Input", desc: "Compili lo Stress Test con i tuoi dati grezzi." },
        { title: "Analysis", desc: "L'algoritmo incrocia burn e runway." },
        { title: "Verdict", desc: "Ricevi il verdetto: Investibile o Insolvente." }
      ]
    },
    author: {
      id: "ID: G_PANCIA",
      name: "Gennaro Pancia",
      role: "| Capital Strategy",
      bio: [
        "Non sono un coach. Non vendo corsi. Sono un Fractional CFO che opera nelle trincee del Tech e del Private Equity.",
        "Ho visto startup bruciare 2 milioni in 6 mesi per 'marketing' senza ROI. Ho visto founder perdere il controllo della loro azienda per clausole scritte in piccolo.",
        "Il mio lavoro è semplice: entro, analizzo i flussi, taglio il superfluo, strutturo il capitale e ti preparo alla guerra del mercato."
      ],
      stats: {
        capital: "Capitale Gestito",
        exits: "Exit Strategiche"
      }
    },
    modal: {
      title: "Inizializzazione Stress Test",
      subtitle: "Inserisci i dati grezzi. Il sistema calcolerà la tua reale esposizione.",
      labels: {
        cash: "Cash on Hand (€)",
        burn: "Monthly Burn (€)",
        revenue: "Monthly Revenue (€)",
        team: "Team Size"
      },
      placeholder: {
        cash: "Es. 150000",
        burn: "Es. 25000",
        revenue: "Es. 5000",
        team: "Es. 8"
      },
      cta: "CALCOLA RISCHIO",
      disclaimer: "DATI CRITTOGRAFATI END-TO-END. NESSUN SALVATAGGIO SU SERVER ESTERNI.",
      loading: "ELABORAZIONE DATI IN CORSO...",
      results: {
        reportId: "REPORT_ID",
        status: "STATUS",
        gameover: "Proiezione Game Over",
        analysis: "Analisi Vettoriale",
        protocol: "Protocollo Consigliato",
        cta: "RICHIEDI AUDIT COMPLETO (GPCS)"
      },
      fallback: {
        analysis: "Anomalia rilevata. Runway stimata inferiore a 6 mesi basata sui dati parziali.",
        protocol: "Congelamento immediato assunzioni. Audit spese operative richiesto entro 48h."
      }
    },
    shadow: {
      [SectionId.HERO]: "ANALISI METRICHE VISITA... RILEVATA ANSIA LIQUIDITÀ.",
      [SectionId.PROBLEM]: "ATTENZIONE: IL 90% DEI FOUNDER SOVRASTIMA LA RUNWAY DEL 32%.",
      [SectionId.SOLUTION]: "ARCHITETTURA STRUTTURALE RICHIESTA. LA CONTABILITÀ NON È STRATEGIA.",
      [SectionId.PROTOCOL]: "PROCEDURA STANDARD: INPUT > AUDIT > ESECUZIONE.",
      [SectionId.AUTHOR]: "IDENTITÀ OPERATORE VERIFICATA. LIVELLO AUTORIZZAZIONE: MASSIMO."
    }
  },
  es: {
    nav: {
      status: "ESTADO_SISTEMA: ONLINE",
    },
    hero: {
      badge: "Informe Clasificado",
      titleStart: "El 42% de las Startups Seed mueren con el producto en mano",
      titleEnd: "pero la caja vacía.",
      subtitle: "GPCS transforma tu ansiedad financiera en estrategia militar. Obtén tu prueba de estrés gratuita y descubre tu verdadera fecha de 'Game Over'.",
      cta: "INICIAR PRUEBA DE ESTRÉS",
      trust: ["180 SEGUNDOS", "NO T. CRÉDITO", "CONFIDENCIAL"]
    },
    problem: {
      badge: "Agitación Calculada",
      titleStart: "Tu Pitch Deck dice que estás bien.",
      titleEnd: "Tu cuenta bancaria dice la verdad.",
      cards: [
        {
          title: "Burn Rate Opaco",
          desc: "No sabes cuánto gastas realmente cada mes. Los gastos variables se están comiendo tu ronda seed."
        },
        {
          title: "Runway Fantasma",
          desc: "Calculas el runway con dinero en banco, no comprometido. Tu fecha de muerte está 3 meses más cerca de lo que crees."
        },
        {
          title: "Fundraising a Ciegas",
          desc: "Hablas con VCs sin conocer tus verdaderos Unit Economics. Te destrozarán durante la Due Diligence."
        }
      ]
    },
    solution: {
      badge: "Arquitectura de Capital",
      titleStart: "No necesitas un contador.",
      titleEnd: "Necesitas un Arquitecto de Capital.",
      sidebar: "GPCS no registra facturas. Construimos protocolos de supervivencia.",
      cards: [
        {
          label: "01 // PROTOCOLO DE LIQUIDEZ",
          title: "Ingeniería de Cash-Flow",
          desc: "Transformamos el burn rate de hemorragia a inversión controlada. Optimización quirúrgica de salidas."
        },
        {
          label: "02 // ESTRATEGIA DE LEVANTAMIENTO",
          title: "Preparación para Fundraising",
          desc: "Construimos el Data Room que los VCs quieren ver. Menos storytelling, más métricas defendibles."
        },
        {
          label: "03 // CONTROL DE GESTIÓN",
          title: "Operaciones de CFO Fraccional",
          desc: "Un CFO experto en tu equipo, pero solo cuando sea necesario. Gobernanza financiera de nivel empresarial para startups seed."
        }
      ]
    },
    protocol: {
      header: "PROTOCOLO DE COMPROMISO",
      steps: [
        { title: "Input", desc: "Completa la Prueba de Estrés con datos brutos." },
        { title: "Análisis", desc: "El algoritmo cruza burn y runway." },
        { title: "Veredicto", desc: "Recibe el veredicto: Invertible o Insolvente." }
      ]
    },
    author: {
      id: "ID: G_PANCIA",
      name: "Gennaro Pancia",
      role: "| Capital Strategy",
      bio: [
        "No soy un coach. No vendo cursos. Soy un CFO Fraccional operando en las trincheras de Tech y Private Equity.",
        "He visto startups quemar 2 millones en 6 meses en 'marketing' sin ROI. He visto fundadores perder el control de su empresa por letra pequeña.",
        "Mi trabajo es simple: entro, analizo flujos, corto lo superfluo, estructuro capital y te preparo para la guerra del mercado."
      ],
      stats: {
        capital: "Capital Gestionado",
        exits: "Exits Estratégicos"
      }
    },
    modal: {
      title: "Inicialización Prueba de Estrés",
      subtitle: "Ingresa datos brutos. El sistema calculará tu exposición real.",
      labels: {
        cash: "Efectivo Disponible (€)",
        burn: "Burn Mensual (€)",
        revenue: "Ingresos Mensuales (€)",
        team: "Tamaño del Equipo"
      },
      placeholder: {
        cash: "Ej. 150000",
        burn: "Ej. 25000",
        revenue: "Ej. 5000",
        team: "Ej. 8"
      },
      cta: "CALCULAR RIESGO",
      disclaimer: "DATOS ENCRIPTADOS END-TO-END. SIN ALMACENAMIENTO EN SERVIDORES EXTERNOS.",
      loading: "PROCESANDO DATOS...",
      results: {
        reportId: "ID_REPORTE",
        status: "ESTADO",
        gameover: "Proyección Game Over",
        analysis: "Análisis Vectorial",
        protocol: "Protocolo Recomendado",
        cta: "SOLICITAR AUDITORÍA COMPLETA (GPCS)"
      },
      fallback: {
        analysis: "Anomalía detectada. Runway estimado menor a 6 meses basado en datos parciales.",
        protocol: "Congelación inmediata de contrataciones. Auditoría de gastos operativos requerida en 48h."
      }
    },
    shadow: {
      [SectionId.HERO]: "ANALIZANDO MÉTRICAS DE VISITA... DETECTANDO ANSIEDAD DE LIQUIDEZ.",
      [SectionId.PROBLEM]: "ADVERTENCIA: LA MAYORÍA DE FUNDADORES SOBRESTIMAN RUNWAY EN 32%.",
      [SectionId.SOLUTION]: "ARQUITECTURA ESTRUCTURAL REQUERIDA. CONTABILIDAD NO ES ESTRATEGIA.",
      [SectionId.PROTOCOL]: "PROCEDIMIENTO ESTÁNDAR: INPUT > AUDIT > EJECUCIÓN.",
      [SectionId.AUTHOR]: "IDENTIDAD DE OPERADOR VERIFICADA. NIVEL DE AUTORIZACIÓN: MÁXIMO."
    }
  }
};