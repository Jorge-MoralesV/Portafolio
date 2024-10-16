export class Proyectos {

  proyectosEscire = [
    {
      nombre: 'Estudios Sociologicos de COLMEX',
      fecha: 'abril 2023.',
      empresa_asosiacion: 'eScire - Colmex',
      descripcion_corta: 'Sistema OJS (Sistemas de Gestión de Contenidos o CMS) rediseñado para el aniversario número 50 del Centro de Estudios Sociológicos.',
      descripcion: 'Estudios Sociológicos de El Colegio de México es una revista científica y electrónica, con arbitraje por pares ciegos, enfocada en la publicación de investigaciones empíricas y contribuciones teóricas en sociología y disciplinas afines. Desde su fundación en 1983, Estudios Sociológicos ha tenido como misión presentar los resultados de la investigación de la más alta calidad, con énfasis regional en América Latina, pero con proyección y alcance global.',
      img: ['assets/proyect-cards/escolmex/imagen1.webp', 'assets/proyect-cards/escolmex/imagen2.webp'],
      enlace: 'https://estudiossociologicos.colmex.mx/index.php/es',
      herramientas: ['OJS', 'HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
      extra: [
        { imagen: 'assets/proyect-cards/escolmex/colmex1.webp', texto: 'El trabajo fue reconocido por el director del sitio agradeciendo por los cambios realizados a la plataforma.' },
        { imagen: 'assets/proyect-cards/escolmex/colmex2.webp', texto: 'Así es como anteriormente se veía la revista (como se le conoce a este tipo de sistemas OJS).' }
      ]
    },
    {
      nombre: 'EduCA - Demo',
      fecha: 'nov. 2022 - dic. 2022.',
      empresa_asosiacion: 'eScire',
      descripcion_corta: 'Proyecto desarrollado en Angular, recreando los bocetos recibidos en plantillas HTML para ser visualizadas en la web.',
      descripcion: 'SciELO Brasil necesitaba encontrar una forma de ofrecer material de estudio y aprendizaje abierto a todo el público por su aniversario 25°, por lo que “EduCA” se formó a partir de estas necesidades.',
      img: ['assets/proyect-cards/educa/educa1.webp', 'assets/proyect-cards/educa/educa2.webp', 'assets/proyect-cards/educa/educa3.webp'],
      enlace: 'https://educa-demo-jmv.netlify.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
      extra: [
        { imagen: 'assets/proyect-cards/opendots/joinopen.webp', texto: 'Este sitio web posteriormente evolucionaria como la plataforma JoinOpenDonts' }
      ]
    },
    {
      nombre: 'JoinOpenDots',
      fecha: 'ene. 2023 - abr. 2023',
      empresa_asosiacion: 'eScire',
      descripcion_corta: 'Desarrollado en Laravel, junto con el equipo de eScire, se corrigieron detalles en el diseño de la web y se implementó un formulario de contacto.',
      descripcion: 'OpenDots nace como una iniciativa que busca establecer un canal de comunicación y formación masiva en el ámbito de la ciencia abierta.',
      img: ['assets/proyect-cards/opendots/joinopen.webp'],
      enlace: 'https://joinopendots.org/es',
      herramientas: ['Laravel', 'HTML', 'CSS', 'PHP'],
    },
  ]

  proyectos = [
    {
      nombre: 'PokeApiDex',
      fecha: 'nov. 2023 - feb. 2024',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'Pokedex desarrollada en Angular usando la PokeApi.',
      descripcion: 'Sitio web que desempeña la función de Pokedex, desarrollada con el framework de Angular, se implementó la PokeApi para extraer datos y mostrarlos a través de una interfaz estilizada haciendo uso de CSS y Bootstrap.',
      img: ['assets/proyect-cards/pokeapi/pokedex1.webp', 'assets/proyect-cards/pokeapi/pokedex2.webp', 'assets/proyect-cards/pokeapi/pokedex3.webp'],
      enlace: 'https://pokeapidex-jmv.netlify.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
    },
    {
      nombre: 'Cuestionario Clima Laboral',
      fecha: 'abr. 2022',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'Cuestionario Web Desarrollado en React para conocer el clima laboral, guardando los datos en Firebase.',
      descripcion: 'Cuestionario realizado para el Instituto Tecnológico Superior de El Mante, desarrollado para conocer el clima laboral en el que se encuentra el instituto a base de múltiples preguntas.',
      img: ['assets/proyect-cards/cuestionario/imagen1.webp', 'assets/proyect-cards/cuestionario/imagen2.webp', 'assets/proyect-cards/cuestionario/imagen3.webp'],
      enlace: 'https://cuestionario-clima-laboral.netlify.app/',
      herramientas: ['React', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'Firebase'],
    },
    {
      nombre: 'Control de clientes',
      fecha: 'ago. 2023',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'CRUD desarrollado en Angular para la gestión de clientes.',
      descripcion: 'Sistema el cual fue creado a partir de un curso, implementando mejores características al original, con un diseño mejorado y responsivo, manejando datos con Firebase.',
      img: ['assets/proyect-cards/control/imagen1.webp', 'assets/proyect-cards/control/imagen2.webp', 'assets/proyect-cards/control/imagen3.webp'],
      enlace: 'https://control-clientes-a2ac7.web.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap', 'Firebase'],
    },
  ]

  getItemsEscire() {
    return this.proyectosEscire;
  }

  getItems() {
    return this.proyectos;
  }
}
