export default {
  global: {
    componenteFormativo:
      'Riesgos asociados al uso prolongado de las nuevas tecnologías ',
    descripcionCurso:
      'El mundo digital brinda herramientas y servicios para el desarrollo personal y profesional de las personas, pero es indispensable conocer los riesgos asociados del uso de tecnologías que están en tendencia; este componente busca identificar y establecer los riesgos asociados al uso prolongado de la tecnología, su uso responsable, las repercusiones en la salud y los delitos, fraudes y amenazas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
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
        titulo: 'Riesgos o amenazas asociados al uso de las nuevas tecnologías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Uso prolongado de dispositivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Riesgos y recomendaciones de buen uso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Uso prolongado de redes sociales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fraude electrónico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Delitos contra la propiedad intelectual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Amenazas a la privacidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ciberbullying o ciberacoso',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Riesgos o amenazas asociados al uso de las nuevas tecnologías',
      referencia:
        'Cartilla de Seguridad para Internet. (s.f.). <em>Navegar es necesario, ¡Arriesgarse NO!</em>',
      tipo: 'Página web',
      link: 'https://cartilla.cert.br/',
    },
    {
      tema: 'Fraude electrónico',
      referencia:
        'Sánchez, G. (2012). Delitos en Internet: clases de fraudes y estafas y las medidas para prevenirlos. <em>Boletín de Información</em>, 324, pp. 67-88.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4198948.pdf ',
    },
    {
      tema: '<em>Ciberbullying</em> o ciberacoso',
      referencia:
        'Molina, M., Furnari, A. & Hagelstrom, I. (2017). <em>Guía de sensibilización sobre Convivencia Digital</em>.',
      tipo: 'PDF',
      link:
        'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      tema: '<em>Ciberbullying</em> o ciberacoso',
      referencia:
        'Ministerio de Justicia y Derechos Humanos – Presidencia de la Nación. (2014). <em>Cyberbullying - Guía práctica para adultos</em>.',
      tipo: 'PDF',
      link:
        'http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos/file',
    },
    {
      tema: '<em>Ciberbullying</em> o ciberacoso',
      referencia:
        'Flores, J. y Casal, M. (2008). CiberBullying. <em>Guía rápida para la prevención del acoso</em>.',
      tipo: 'PDF',
      link: 'https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'peligro latente de que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales (Ley 1523 de 2012).',
    },
    {
      termino: 'Amenaza tecnológica',
      significado:
        'amenaza relacionada con accidentes tecnológicos o industriales, procedimientos peligrosos, fallos de infraestructura o de ciertas actividades humanas, que pueden causar muerte o lesiones, daños materiales, interrupción de la actividad social y económica o degradación ambiental. Algunas veces llamadas amenazas antropogénicas. Ejemplos incluyen contaminación industrial, descargas nucleares y radioactividad, desechos tóxicos, ruptura de presas, explosiones e incendios (Lavell, 2007, en UNGRD, 2017).',
    },
    {
      termino: 'Bloquear',
      significado:
        'impedir o restringir el acceso de una persona o usuario concreto a un entorno digital determinado. Este puede ser un videojuego, un canal de chat, o una red social. Cualquier contexto en el que el acoso pueda tener lugar. Para entenderlo en el contexto del ciberacoso, “será importante bloquear a los acosadores” para que no ejerzan el hostigamiento.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'tácticas utilizadas para obtener información y datos sensibles de la víctima. Muchas veces son claves o códigos de una persona. Estas técnicas de persuasión suelen valerse de la buena voluntad y la falta de precaución de la víctima.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente o situación con capacidad de producir daño en términos de lesiones, daños a la propiedad, daños al medio ambiente o una combinación de ellos (ARL Sura, 2017).',
    },
    {
      termino: 'Phishing',
      terminoHtml: '<em>Phishing</em>',
      significado:
        'tipo de estafa que combina <i>e-mails</i> falsos supuestamente enviados desde instituciones de confianza (bancos, empresas de internet, tiendas, entre otras), y que enlazan con sitios web ficticios. Esto, con el fin de engañar a los consumidores y convencerlos de entregar sus datos financieros como números de tarjeta de crédito, de cuenta bancaria, nombres de usuario y passwords, entre otros (SERNAC, 2021).',
    },
    {
      termino: 'Privacidad',
      significado:
        'es el tratamiento que se debe brindar a la información sensible que se comparte en Internet. Esta información debe protegerse, a través de configuraciones y canales que permitan  preservar la integridad de los datos que la constituyen.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos (ARL Sura, 2017).',
    },
    {
      termino: 'Sextorsión',
      significado:
        'una vez alguien posee material sexual sobre otra persona, puede utilizarlo para realizar algún tipo de chantaje bajo la amenaza de publicar ese contenido sexual y privado de la otra persona.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. (2017) <i>Cartillas de seguridad para internet.</i>',
      link: 'https://cartilla.cert.br',
    },
    {
      referencia:
        'Díaz y García Conlledo, M. (s.f.). Delitos contra la propiedad intelectual e industrial especial atención a la aplicación práctica en España. <i>Derecho Penal y Criminología</i>, 30(88), 93-134.',
      link:
        'https://revistas.uexternado.edu.co/index.php/derpen/article/view/612',
    },
    {
      referencia:
        'Edusalta. (2015). <i>Cyberbullying - Guía práctica para adultos.</i>',
      link:
        'http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos',
    },
    {
      referencia:
        'Eset. (2014). <i>Top 5 de riesgos para la privacidad que debes conocer.</i>',
      link:
        'https://www.welivesecurity.com/la-es/2014/08/29/top-5-riesgos-privacidad-debes-conocer/',
    },
    {
      referencia:
        'Fernández, J. (2018). <i>Ciberbullying. Guía rápida para la prevención del acoso</i>',
      link: 'https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf',
    },
    {
      referencia:
        'Iniseg. (2018). <i>Ciberseguridad al día, qué es oversharing, la sobreexposición en redes que nos persigue.</i>',
      link:
        'https://www.iniseg.es/blog/ciberseguridad/oversharing-conocelo-y-frenalo/',
    },
    {
      referencia:
        'Molina, M., Furnari, A., y Hagelstrom, I. (2017). <i>Guía de sensibilización sobre convivencia digital.</i>',
      link:
        'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      referencia:
        'OMPI, Organización Mundial de la Privacidad. (2021). <i>¿Qué es la propiedad intelectual?</i>',
      link: 'https://www.wipo.int/about-ip/es/',
    },
    {
      referencia:
        'Portafolio. (28 de octubre de 2015). <i>Amenazas que afectan la privacidad en Internet.</i>',
      link:
        'https://www.portafolio.co/negocios/empresas/amenazas-afectan-privacidad-internet-36348',
    },
    {
      referencia:
        'Sánchez, G. (2012). Delitos en internet: clases de fraudes y estafas y las medidas para prevenirlos. <i>Boletín de Información</i>, 324, 67-88.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4198948.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
