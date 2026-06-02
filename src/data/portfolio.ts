export const portfolioData = {
  personalInfo: {
    name: "Ignacio Maidana",
    title: "Frontend Developer · Full Stack & Gestión de Proyectos",
    location: "Arroyito, Córdoba, Argentina",
    email: "ignacio.maidana001@gmail.com",
    phone: "93576414844",
    github: "https://github.com/IgnacioMaidana7",
    linkedin: "https://www.linkedin.com/in/ignacio-maidana-3a2b40265/",
    summary:
      "Desarrollador Frontend en Cloudnet Solutions. Estudiante avanzado de Ingeniería en Sistemas con experiencia en desarrollo Full Stack y liderazgo de proyectos con metodologías ágiles. Combino habilidades técnicas sólidas con una visión orientada a la gestión para construir software de calidad.",
  },
  education: [
    {
      institution:
        "Universidad Tecnológica Nacional - Facultad Regional San Francisco",
      degree: "Ingeniería en Sistemas de Información",
      period: "2022 - Actualidad",
    },
  ],
  skills: {
    technical: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React.js",
      "Node.js",
      "Express",
      "Next.js",
      "Django REST",
      "SQL (MySQL, PostgreSQL)",
      "Git/GitHub",
      "Postman",
      "Jest",
      "Supertest",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analysis",
      "Data Visualization",
      "IoT (ESP32)",
      "Linux",
      "Docker",
    ],
    soft: [
      "Liderazgo Colaborativo",
      "Pensamiento Analítico",
      "Comunicación Efectiva",
      "Resolución de Problemas",
      "Adaptabilidad",
      "Trabajo en Equipo",
      "Gestión del Tiempo",
      "Pensamiento Crítico",
      "Aprendizaje Continuo",
    ],
    tools: [
      "Jira",
      "Trello",
      "Metodologías Ágiles (SCRUM/Kanban)",
      "Notion",
      "Microsoft 365",
      "Figma (Básico)",
      "Análisis de Requerimientos",
      "Documentación Técnica",
    ],
  },
  projects: [
    {
      id: "supermarket-vision",
      title: "Sistema de Gestión de Supermercado con Visión Artificial",
      role: "PM & Desarrollador Full Stack",
      desc: "Sistema integral con roles diferenciados (Admin, Cajero, Reponedor). Implementa visión artificial para reconocer productos automáticamente mediante imágenes.",
      tech: ["Next.js", "Django REST Framework", "PostgreSQL", "Visión por Computadora"],
      highlights: [
        "Gestión de inventario",
        "Reconocimiento de imágenes en tiempo real",
        "Módulo de ventas",
      ],
      images: [
        "/images/proyectoSupermercado/1-Login.png",
        "/images/proyectoSupermercado/2-DashboardAdm.png",
        "/images/proyectoSupermercado/3-Empleados.png",
        "/images/proyectoSupermercado/4-RolCajero.png",
      ],
      details: {
        challenge: "Los supermercados pequeños enfrentan dificultades para digitalizar su gestión de inventario y ventas. El proceso manual de identificación de productos en caja es lento y propenso a errores, especialmente con productos sin código de barras como frutas y verduras.",
        solution: "Desarrollé un sistema web completo con autenticación por roles (Admin, Cajero, Reponedor), donde cada usuario tiene acceso a funcionalidades específicas. La innovación principal es un módulo de visión artificial que permite reconocer productos automáticamente mediante la cámara, eliminando la necesidad de códigos de barras.",
        decisions: "Elegí Next.js para el frontend por su renderizado híbrido y optimización de imágenes. Django REST Framework en el backend por su robustez y facilidad para crear APIs RESTful. PostgreSQL fue seleccionado por su excelente manejo de datos estructurados y soporte para queries complejas de inventario.",
        obstacles: "El mayor reto fue integrar el modelo de visión artificial con el flujo de ventas en tiempo real. Tuve que optimizar el procesamiento de imágenes para minimizar la latencia y garantizar una experiencia fluida para el cajero.",
        myRole: "Además de desarrollar, lideré al equipo aplicando SCRUM. Coordiné sprints, facilité dailies, y gestioné el backlog priorizando features según valor de negocio. También diseñé la arquitectura completa del sistema."
      }
    },
    {
      id: "iot-containers",
      title: "IoT: Control de Contenedores de Basura",
      role: "PM & Desarrollador Full Stack",
      desc: "Sistema de monitoreo de residuos en tiempo real integrando hardware y software. Arquitectura diseñada para comunicar sensores físicos con panel web.",
      tech: ["React", "Express.js", "ESP32", "Sensores Ultrasónicos"],
      highlights: [
        "Liderazgo de equipo SCRUM",
        "Diseño de arquitectura IoT",
        "API RESTful",
      ],
      images: [
        "/images/proyectoIoT/1-detalleSensor.png",
        "/images/proyectoIoT/2-reportes.png",
        "/images/proyectoIoT/3-gestionSensores.png",
      ],
      details: {
        challenge: "En el campus de la UTN FRSF, la gestión de residuos enfrentaba ineficiencias logísticas. No se contaba con información sobre el estado de los contenedores, lo que resultaba en recolecciones innecesarias o contenedores desbordados, afectando la limpieza del predio.",
        solution: "Desarrollé para la universidad un sistema IoT que monitorea el nivel de llenado de contenedores usando sensores ultrasónicos y ESP32. Los datos se visualizan en un panel web para que el personal de mantenimiento optimice sus rutas de recolección en tiempo real.",
        decisions: "Opté por ESP32 por su bajo consumo energético y WiFi integrado, ideal para dispositivos desplegados en campo. Express.js permite manejar conexiones WebSocket para actualizaciones en tiempo real. React proporciona una interfaz responsiva para el panel de control.",
        obstacles: "La integración hardware-software fue el mayor desafío. Tuve que diseñar un protocolo de comunicación confiable que maneje desconexiones temporales y sincronice datos cuando el sensor recupera conectividad.",
        myRole: "Lideré un equipo de 3 personas usando metodología SCRUM. Diseñé la arquitectura completa del sistema, desde el firmware del ESP32 hasta la API REST. Coordiné y desarrollé la integración entre el equipo de hardware y software."
      }
    },
    {
      id: "restaurant-reservations",
      title: "Plataforma de Reservas para Restaurantes",
      role: "Desarrollador Full Stack",
      desc: "Plataforma web para gestión de disponibilidad de mesas, reservas y carta de precios en línea. Incluye panel de administración para los restaurantes.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      highlights: [
        "Sistema de reservas",
        "Panel de administración",
        "Base de datos relacional",
      ],
      images: [
        "/images/proyectoMesaYa/1-inicio.png",
        "/images/proyectoMesaYa/2-reservas.png",
        "/images/proyectoMesaYa/3-dashboardGestion.png",
        "/images/proyectoMesaYa/4-gestionCarta.png",
        "/images/proyectoMesaYa/5-editorMesas.png",
      ],
      details: {
        challenge: "Los restaurantes pequeños gestionan reservas por teléfono o WhatsApp, resultando en sobreventas, mesas vacías por no-shows, y pérdida de clientes que no pueden reservar fuera de horario comercial.",
        solution: "Desarrollé una plataforma web donde los clientes pueden ver disponibilidad en tiempo real, reservar mesas y consultar el menú. Los restaurantes tienen un panel de administración para gestionar mesas, horarios, carta de precios y confirmar reservas.",
        decisions: "MySQL fue elegido por la naturaleza relacional de los datos (restaurantes, mesas, reservas, horarios). La estructura normalizada evita inconsistencias en las reservas. React permite una experiencia fluida para el usuario final, y Express maneja la lógica de negocio de forma eficiente.",
        obstacles: "El sistema de disponibilidad fue complejo: debía considerar capacidad de mesas, duración estimada de comidas, y evitar conflictos de horarios. Implementé un algoritmo que sugiere horarios alternativos cuando el solicitado no está disponible.",
        myRole: "Fui responsable del desarrollo full stack, desde el diseño de la base de datos hasta la implementación del frontend. Trabajé en estrecha colaboración con el equipo para definir los flujos de usuario y la experiencia de reserva."
      }
    },
    {
      id: "event-tickets",
      title: "Sistema de Venta de Entradas para Eventos",
      role: "QA Tester",
      desc: "Sistema de venta de entradas con generación de códigos QR para eventos. Incluye panel de administración para creadores de eventos y validación de entradas.",
      tech: ["Jest", "Supertest", "Testing Automatizado"],
      highlights: [
        "Pruebas unitarias y de integración",
        "Automatización de tests",
        "Validación de QR y flujos de compra",
      ],
      images: [
        "/images/proyectoEntradas/screen.png",
      ],
      details: {
        challenge: "Los organizadores de eventos necesitan un sistema confiable para vender entradas y validarlas en el acceso. Los fraudes con entradas falsas y la validación manual generan colas y pérdidas económicas.",
        solution: "El equipo desarrolló una plataforma de venta de entradas con generación automática de códigos QR únicos. Cada entrada puede validarse escaneando el QR, evitando duplicados y fraudes. Mi rol fue asegurar la calidad del software mediante testing exhaustivo.",
        decisions: "Elegí Jest como framework de testing por su velocidad y excelente integración con el ecosistema JavaScript. Supertest permite simular requests HTTP para probar la API sin levantar un servidor real, agilizando la suite de tests.",
        obstacles: "El mayor reto fue diseñar tests que cubrieran todos los edge cases del flujo de compra: pagos fallidos, timeouts, intentos de uso múltiple del mismo QR, y concurrencia en eventos con alta demanda de entradas.",
        myRole: "Diseñé e implementé la estrategia de testing del proyecto. Creé pruebas unitarias para la lógica de negocio, tests de integración para la API, y automaticé la ejecución en el pipeline de CI/CD. Documenté los casos de prueba y reporté bugs al equipo de desarrollo."
      }
    },
  ],
};
