export default {
  global: {
    Name: 'Conceptos básicos de patronaje',
    Description:
      'Comprender los fundamentos del patronaje industrial es clave para alcanzar eficiencia, sostenibilidad, calidad y precisión en la producción textil masiva. Partiendo del estudio de la antropometría, los puntos de referencia anatómicos, la toma y clasificación de medidas, el uso de herramientas, las convenciones de señalización y el procedimiento para trazar patrones masculinos, de acuerdo con los cuadros de tallas estandarizados y las especificaciones técnicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia del patronaje',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Antropometría, anatomía y ejes del cuerpo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Convenciones en la señalización de patrones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Figuras geométricas y materiales requeridos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medidas del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Puntos de referencia corporales anatómicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Toma de medidas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación y aplicación de medidas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimiento del patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elaboración de patrones',
            hash: 't_3_1',
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
      tema: 'Procedimiento del patronaje',
      referencia:
        'SENA. (2011). Manual de patronaje básico e interpretación de diseños. ',
      tipo: 'PDF',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF?sequence=1&isAllowed=y',
    },
    {
      tema: 'Medidas del cuerpo',
      referencia:
        'Ecosistema de Recursos Educativos. (2020). Patronaje industrial masculino: toma de medidas',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UkwF4YVTnLU',
    },
  ],
  glosario: [
    {
      termino: 'Acromio',
      significado:
        'parte más elevada del omóplato, articulada con la extremidad externa de la clavícula.',
    },
    {
      termino: 'Anatomía',
      significado:
        'es la ciencia que estudia la estructura, forma y relaciones de las diferentes partes del cuerpo humano.',
    },
    {
      termino: 'Antropometría',
      significado:
        '(del griego <i>ánthropos</i>, hombre y metro, medida; y el sufijo - ia, cualidad) estudia las medidas y dimensiones de partes del cuerpo humano, ya que estas varían de un individuo a otro. Esta se clasifica en estática o estructural (estudia las medidas de cabeza, troncos y extremidades en posiciones fijas) y funcional (estudio de medidas del cuerpo mientras está en movimiento).',
    },
    {
      termino: 'Aumentos de costura',
      significado:
        'parte más elevada del omóplato, articulada con la extremidad externa de la clavícula.',
    },
    {
      termino: 'Desahogos',
      significado:
        'amplitud que se le asigna al patrón base para variar o modificar los diferentes tipos de siluetas.',
    },
    {
      termino: 'Escalado',
      significado:
        'proceso que, partiendo de los patrones básicos, se elaboran los correspondientes a las diferentes tallas en las que se desee producir un modelo específico. Se asocia a la graduación que obedece al proceso de dilatación de la figura.',
    },
    {
      termino: 'Industrialización',
      significado:
        'recibe este nombre la serie de operaciones que consisten en preparar al patronaje para para facilitar el proceso de corte y confección de las prendas.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso que permite desglosar por piezas las prendas, de forma que al unirlas se logre una prenda de vestir cumpliendo especificaciones requeridas.',
    },
    {
      termino: 'Símbolos de patronaje',
      significado:
        'son convenciones que permiten entender fácilmente las gráficas de construcción y señalización de los patrones.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar las personas para el uso de prendas de vestir. Medida usada para indicar el tamaño de las prendas de vestir o del calzado, ajustadas a las dimensiones de cada persona.',
    },
  ],
  referencias: [
    {
      referencia:
        'Antón, Pilar Cristóbal (2012). Escalar el patrón modelo. Editorial: Ministerio de Educación, Cultura y Deporte de España / CIDE Mediascopio.',
      link: '',
    },
    {
      referencia:
        'Ayuso, José Luis. (2008). Anatomía funcional del aparato locomotor. Editorial Wanceulen.',
      link: '',
    },
    {
      referencia:
        'Camps, J. (1995). Manual Técnico de Patronaje Industrial Ropa Masculina. Medellín, Colombia: Comité Técnico de Costura 3.',
      link: '',
    },
    {
      referencia: 'Chunman, D. (2011). Patronaje. Barcelona, España: Ed Blume.',
      link: '',
    },
    {
      referencia:
        'De Azevedo, R. (2019). Planos Anatómicos y Ejes del Cuerpo Humano. Recuperado de ',
      link: 'https://www.lifeder.com/planos-anatomicos-ejes/',
    },
    {
      referencia:
        'Feyerabend, F. V. y Ghosh, F. (2009). Ilustración de Moda, Plantillas. Barcelona, España: Ed. Gustavo Gili, S.L.',
      link: '',
    },
    {
      referencia:
        'Fuenmayor, O. (2014). Tallas y medidas: la importancia de la Antropometría en la empresa de Moda. Recuperado de ',
      link:
        'http://web.archive.org/web/20180421154541/http://www.modaytecnologia.com/tallas-y-medidas-la-importancia-de-la-antropometria/',
    },
    {
      referencia:
        'Kiisel, K. (2014). Drapeados. Curso Completo pata crear Prendas sobre un Maniquí. Barcelona, España: Ed Blume.',
      link: '',
    },
    {
      referencia:
        'Serra, R. (1998). Método Práctico de Corte y Confección. Barcelona, España: Ed Edicomunicacion S.A.',
      link: '',
    },
    {
      referencia:
        'Soto, Jesús. (2009). Anatomía de superficie. Editorial Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Szkutnicka, B. (2010). El Dibujo Técnico de Moda Paso a Paso. Barcelona, España: Ed Gustavo Gili, SL.',
      link: '',
    },
    {
      referencia:
        'Takamura, Z. (2007). Diseño de Moda, Conceptos Básicos y Aplicaciones Prácticas de Ilustración de Moda. Barcelona, España: Ed. Promopress.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Herrera Sánchez',
          cargo: 'Desarrolladora de contenidos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Nohora Amparo Nieto Cárdenas',
          cargo: 'Desarrolladora de contenidos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
