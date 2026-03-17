export default {
  global: {
    componenteFormativo:
      'Gestión de procesos de ciberseguridad en las organizaciones',
    descripcionCurso:
      'En este componente se reconocerá la importancia sobre la responsabilidad y acciones que se deben asumir cuando se trata de salvaguardar los activos informáticos ante ataques de ciberseguridad que cada vez son más frecuentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguridad informática en la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Privilegios de acceso y seguridad de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Monitoreo del almacenamiento de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos de mejora para el tratamiento de la información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión de las copias de seguridad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Actualización de bases de datos de activos de la información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Realización de informes técnicos de gestión de información',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228147_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Seguridad informática en la organización',
      referencia:
        'Cardador Cabello, A. L. (2018). <i>Ciberseguridad para Usuarios IFCT135PO</i>. IC Editorial.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000106036',
    },
    {
      tema: '1.3. Procesos de mejora para el tratamiento de la información',
      referencia:
        'Villalobos-Murillo, J. (2008). <i>Vulnerabilidad de sistemas gestores de bases de datos</i>. Uniciencia, 22 (1-2), p. 131-134',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0000922259',
    },
    {
      tema: '1.3. Procesos de mejora para el tratamiento de la información',
      referencia:
        'Rascagneres, P. (2020). <i>Seguridad informática y malwares: análisis de amenazas e implementación de contramedidas</i>. (3ª ed.) Barcelona: Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3MAL',
    },
    {
      tema: '1.4. Gestión de copias de seguridad',
      referencia:
        'Païola, P. (2021). <i>Microsoft Azure: Gestione su Sistema de Información en la Nube</i>. Barcelona: Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3AZWIN',
    },
    {
      tema: '2. Gestión de la información',
      referencia:
        'Balseca Chávez, F., Colina Vargas, A. & Espinoza Mina, M. A. (2021). <i>Identificación de amenazas informáticas aplicando arquitecturas de Big Data</i>. INNOVA Research Journal, 6(3).',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001502522',
    },
    {
      tema: '2. Gestión de la información',
      referencia:
        'Piattini Velthius, M. & Ruiz González, F. (2021). <i>Gobierno y gestión de las tecnologías y los sistemas de información</i>. Bogotá Ediciones de la U.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks00029',
    },
    {
      tema: '2. Gestión de la información',
      referencia:
        'Poggioli, J. & Demasson, J. (2021). <i>Gestión de un sistema de información: método y buenas prácticas</i>. Barcelona: Ediciones ENI',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniDPT2PILSI',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de riesgos',
      significado:
        'es un proceso que comprende la identificación de activos de información, sus vulnerabilidades y las amenazas a los que se encuentran expuestos, así como la probabilidad de ocurrencia y el impacto de las mismas, a fin de determinar los controles adecuados para tratar el riesgo.',
    },
    {
      termino: 'Auditoría de seguridad',
      significado:
        'es el estudio que comprende el análisis y gestión de sistemas llevado a cabo por profesionales en tecnologías de la información (TI) con el objetivo de identificar, enumerar y describir las diversas vulnerabilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones, servidores o aplicaciones.',
    },
    {
      termino: 'Aviso legal',
      significado:
        'es un documento, en una página web, donde se recogen las cuestiones legales que son exigidas por la normativa de aplicación.',
    },
    {
      termino: '<i>Backup</i>',
      significado:
        'copia de seguridad que se realiza sobre ficheros o aplicaciones contenidas en un ordenador con la finalidad de recuperar los datos en el caso de que el sistema de información sufra daños o pérdidas accidentales de los datos almacenados.',
    },
    {
      termino: 'Biometría',
      significado:
        'es un método de reconocimiento de personas basado en sus características fisiológicas (huellas dactilares, retinas, iris, cara, etc.) o de comportamiento (firma, forma de andar, tecleo, etc.). ',
    },
    {
      termino: '<i>Bug</i>',
      significado:
        'es un error o fallo en un programa de dispositivo o sistema de <i>software</i> que desencadena un resultado indeseado. ',
    },
    {
      termino: 'Centro de respaldo',
      significado:
        'un centro de respaldo es un centro de procesamiento de datos (CPD) específicamente diseñado para tomar el control de otro CPD principal en caso de contingencia.',
    },
    {
      termino: 'Certificado de autenticidad',
      significado:
        'el Certificado de autenticidad (COA) es una etiqueta especial de seguridad que acompaña a un <i>software</i> con licencia legal para impedir falsificaciones.',
    },
    {
      termino: 'Cortafuegos',
      significado:
        'sistema de seguridad compuesto o bien de programas (<i>software</i>) o de dispositivos <i>hardware</i> situados en los puntos limítrofes de una red que tienen el objetivo de permitir y limitar, el flujo de tráfico entre los diferentes ámbitos que protege sobre la base de un conjunto de normas y otros criterios.',
    },
    {
      termino: 'Denegación de servicio',
      significado:
        'se entiende, en términos de seguridad informática, a un conjunto de técnicas que tienen por objetivo dejar un servidor inoperativo. Mediante este tipo de ataques se busca sobrecargar un servidor y de esta forma impedir que los usuarios legítimos puedan utilizar los servicios por prestados por él.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'se trata de la capacidad de un servicio, un sistema o una información, a ser accesible y utilizable por los usuarios o procesos autorizados cuando éstos lo requieran.',
    },
    {
      termino: 'Fuga de datos',
      significado:
        'es la pérdida de la confidencialidad de la información privada de una persona o empresa. Información que, a priori, no debería ser conocida más que por un grupo de personas, en el ámbito de una organización, área o actividad, y que termina siendo visible o accesible para otros.',
    },
    {
      termino: 'Incidente de seguridad',
      significado:
        'cualquier suceso que afecte a la confidencialidad, integridad o disponibilidad de los activos de información de la empresa, por ejemplo: acceso o intento de acceso a los sistemas, uso, divulgación, modificación o destrucción no autorizada de información.',
    },
    {
      termino: 'Inyección SQL',
      significado:
        'es un tipo de ataque que se aprovecha de una vulnerabilidad en la validación de los contenidos introducidos en un formulario web y que puede permitir la obtención de forma ilegítima de los datos almacenados en la base de datos del sitio web, entre ellos las credenciales de acceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Intel (s.f.). <i>Intel® QuickAssist Adapter Family for Servers</i>. ',
      link:
        'https://www.intel.la/content/www/xl/es/products/docs/network-io/ethernet/10-25-40-gigabit-adapters/quickassist-adapter-for-servers.html ',
    },
    {
      referencia:
        'Logic technology. (s.f.). <i>Intel® oneAPI AI Analytics Toolkit</i>. ',
      link: 'https://www.logic.nl/ides/intel-oneapi-ai-analytics-toolkit/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto temático',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseño instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
