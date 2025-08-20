export default {
  global: {
    Name: 'La ciencia de las cosas',
    Description:
      'La física estudia los fenómenos naturales mediante magnitudes como energía, materia, tiempo y espacio. Incluye el análisis de variables y unidades, movimientos rectilíneos, curvilíneos y circulares, así como fuerzas, leyes de Newton, equilibrio y gravedad. Considera la conservación de energía, termodinámica, electromagnetismo, oscilaciones y ondas, explicando cómo la materia interactúa, se transforma y se mueve en el universo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        titulo: 'Física',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables físicas y sistema de unidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Magnitudes físicas fundamentales del Sistema Internacional (SI)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Magnitudes escalares y vectoriales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Operaciones con vectores',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cinemática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Movimiento Uniforme (MU)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Movimiento Uniformemente Acelerado (MUA)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Caída libre',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Movimiento curvilíneo',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Movimiento de proyectiles',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Movimiento circular uniforme',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Segunda ley de Newton',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Equilibrio dinámico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tercera ley de Newton',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Inercia rotacional de los cuerpos sólidos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Equilibrio rotacional',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Ley de gravitación universal',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conservación de la energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Trabajo efectuado por una fuerza (constante y variable)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Energía cinética',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Termodinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Parámetros termodinámicos fundamentales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Escalas termométricas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procesos termodinámicos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Electromagnetismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Magnetismo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Electricidad y campo eléctrico',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Electromagnetismo y campo magnético inducido',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Oscilaciones y ondas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Oscilaciones',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Ondas',
            hash: 't_7_2',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Variables físicas y sistema de unidades',
      referencia:
        'Lara Barragán Gómez, A. & Núñez Trejo, H. (2015). Introducción a la física: ( ed.). Grupo Editorial Patria. ',
      tipo: 'Capítulo 1. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/39447 ',
    },
    {
      tema: 'Operaciones con vectores',
      referencia:
        'TuProfeVirtual. (2014). VECTORES. Suma de Vectores Gráficamente. Método del Triángulo y Método del Paralelogramo.[Archivo de video] Youtube. ',
      tipo: 'Video ',
      link: 'https://youtu.be/dh-ZVFDDC1M?si=kha5gSuhWzFPfVrG ',
    },
    {
      tema: 'Cinemática',
      referencia:
        'Köhler Carrasco, A. & Olivares Quiñones, L. (2007). Física I: estática y cinemática: (2 ed.). Grupo Editorial Éxodo. ',
      tipo: 'Capítulo 4.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/130346  ',
    },
    {
      tema: 'Segunda ley de Newton',
      referencia:
        'Es Ciencia (2014). Segunda Ley de Newton. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lPK9UGjoa8s&ab_channel=EsCiencia ',
    },
    {
      tema: 'Tercera ley de Newton',
      referencia:
        'Es Ciencia (2014). Tercera Ley de Newton. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/4qSqDZ6at-A?si=BU0tGUKYcHX5MOBV ',
    },
    {
      tema: 'Termodinámica',
      referencia:
        'Jiménez Bernal, J. A. & Gutiérrez Torres, C. D. C. (2015). Termodinámica: ( ed.). Grupo Editorial Patria. ',
      tipo: 'Capítulo 1. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39466 ',
    },
    {
      tema: 'Electromagnetismo',
      referencia:
        'Cordero, P. (2017). ELECTROMAGNETISMO. Universidad de Chile. ',
      tipo: 'Documento ',
      link: 'https://www.cec.uchile.cl/cinetica/pcordero/todos/EM_E.pdf ',
    },
    {
      tema: 'Oscilaciones y ondas',
      referencia:
        'Toribio, E. Toribio, E. & Albareda, A. (2008). Oscilaciones y ondas: (2 ed.). Universitat Politècnica de Catalunya.  ',
      tipo: 'Libro ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53816 ',
    },
  ],
  glosario: [
    {
      termino: 'Longitud',
      significado:
        'es la magnitud que determina la extensión de un objeto en el espacio o la distancia entre dos puntos.',
    },
    {
      termino: 'Masa',
      significado:
        'es la cantidad de materia contenida en un cuerpo y está relacionada con su inercia.',
    },
    {
      termino: 'Tiempo',
      significado:
        'es la magnitud que permite medir la duración de los fenómenos y el orden de los eventos.',
    },
    {
      termino: 'Velocidad',
      significado:
        'es una magnitud vectorial que indica la distancia recorrida en un tiempo determinado con dirección y sentido.',
    },
    {
      termino: 'Aceleración',
      significado:
        'es una magnitud vectorial que expresa el cambio de velocidad respecto al tiempo. ',
    },
    {
      termino: 'Fuerza',
      significado:
        'es toda acción capaz de modificar el estado de reposo o movimiento de un cuerpo.',
    },
    {
      termino: 'Energía cinética',
      significado:
        'es la energía asociada al movimiento de un cuerpo y depende de su masa y velocidad.',
    },
    {
      termino: 'Trabajo',
      significado:
        'es la transferencia de energía producida por una fuerza que desplaza un cuerpo una cierta distancia.',
    },
    {
      termino: 'Temperatura',
      significado:
        'es la magnitud que indica el grado de agitación de las partículas de un cuerpo.',
    },
    {
      termino: 'Ondas',
      significado:
        'son perturbaciones que se propagan en un medio o en el vacío, transportando energía sin transportar materia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, M., & Finn, E. J. (2017). Física: Volumen único. Fondo Educativo Interamericano.',
      link: '',
    },
    {
      referencia:
        'Giancoli, D. C. (2020). Física: Principios con aplicaciones (7.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Halliday, D., Resnick, R., & Walker, J. (2018). Fundamentos de física (10.ª ed.). Wiley. ',
      link: 'https://archive.org/details/fundamentals-of-physics ',
    },
    {
      referencia:
        'Hewitt, P. G. (2002). Física conceptual (9.ª ed.). Pearson.  ',
      link:
        'https://www.google.com.co/books/edition/Conceptual_Physics/1f-PUiU7w1gC?hl=es-419&gbpv=1&printsec=frontcover',
    },
    {
      referencia:
        'Sears, F. W., Zemansky, M. W., & Young, H. D. (2016). Física universitaria con física moderna (13.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Serway, R. A., & Jewett, J. W. (2019). Física para ciencias e ingeniería: Volumen 1 (10.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Tipler, P. A., & Mosca, G. (2021). Física para la ciencia y la tecnología (7.ª ed.). Editorial Reverté.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
