export class Proyectos {

  proyectosEscire = [
    {
      nombre: 'Estudios Sociologicos de COLMEX',
      empresa_asosiacion: 'Colmex',
      descripcion_corta: 'Es una revista científica y electrónica, enfocada en la publicación de investigaciones empíricas y contribuciones teóricas en sociología y disciplinas afines.',
      descripcion: 'Estudios Sociológicos de El Colegio de México es una revista científica y electrónica, con arbitraje por pares ciegos, enfocada en la publicación de investigaciones empíricas y contribuciones teóricas en sociología y disciplinas afines. Desde su fundación en 1983, Estudios Sociológicos ha tenido como misión presentar los resultados de la investigación de la más alta calidad, con énfasis regional en América Latina, pero con proyección y alcance global.',
      img: ['assets/proyect-cards/escolmex/imagen1.webp', 'assets/proyect-cards/escolmex/imagen2.webp'],
      enlace: 'https://estudiossociologicos.colmex.mx/index.php/es',
      herramientas: ['OJS', 'HTML', 'CSS', 'Php', 'MySQL', 'JavaScript'],
      texto_extra: 'El trabajo ',
      img_extra: 'assets/proyect-cards/escolmex/colmex.webp'
    },
    {
      nombre: 'EduCA - Demo',
      empresa_asosiacion: 'eScire',
      descripcion_corta: 'Es una revista científica y electrónica, enfocada en la publicación de investigaciones empíricas y contribuciones teóricas en sociología y disciplinas afines.',
      descripcion: 'Estudios Sociológicos de El Colegio de México es una revista científica y electrónica, con arbitraje por pares ciegos, enfocada en la publicación de investigaciones empíricas y contribuciones teóricas en sociología y disciplinas afines. Desde su fundación en 1983, Estudios Sociológicos ha tenido como misión presentar los resultados de la investigación de la más alta calidad, con énfasis regional en América Latina, pero con proyección y alcance global.',
      img: ['assets/proyect-cards/educa/educa1.webp', 'assets/proyect-cards/educa/educa2.webp', 'assets/proyect-cards/educa/educa3.webp'],
      enlace: 'https://educa-demo-jmv.netlify.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
      texto_extra: 'Este sitio web posteriormente se desarrollaria como JoinOpenDonts',
      img_extra: 'assets/proyect-cards/opendots/joinopen.webp'
    },
    {
      nombre: 'JoinOpenDots',
      empresa_asosiacion: 'eScire',
      descripcion_corta: 'OpenDots nace como una iniciativa que busca establecer un canal de comunicación y formación masiva en el ámbito de la ciencia abierta.',
      descripcion: 'OpenDots nace como una iniciativa que busca establecer un canal de comunicación y formación masiva en el ámbito de la ciencia abierta.',
      img: ['assets/proyect-cards/opendots/joinopen.webp'],
      enlace: 'https://joinopendots.org/es',
      herramientas: ['Laravel', 'HTML', 'CSS', 'Php'],
      img_extra: ''
    },
  ]

  proyectos = [
    {
      nombre: 'PokeApiDex',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'Pokedex desarrollada en Angular usando la PokeApi.',
      descripcion: 'Pokedex desarrollada en Angular usando la PokeApi.',
      img: ['assets/proyect-cards/pokeapi/pokedex1.webp', 'assets/proyect-cards/pokeapi/pokedex2.webp', 'assets/proyect-cards/pokeapi/pokedex3.webp'],
      enlace: 'https://pokeapidex-jmv.netlify.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
      img_extra: ''
    },
    {
      nombre: 'Cuestionario Clima Laboral',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'Pokedex desarrollada en Angular usando la PokeApi.',
      descripcion: 'Pokedex desarrollada en Angular usando la PokeApi.',
      img: ['assets/proyect-cards/cuestionario/imagen1.webp', 'assets/proyect-cards/cuestionario/imagen2.webp'],
      enlace: 'https://react-fb-auth-5e96c.web.app/',
      herramientas: ['React', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'Firebase'],
      img_extra: ''
    },
    {
      nombre: 'Control-clientes',
      empresa_asosiacion: 'Jorge',
      descripcion_corta: 'Pokedex desarrollada en Angular usando la PokeApi.',
      descripcion: 'Pokedex desarrollada en Angular usando la PokeApi.',
      img: ['assets/proyect-cards/control/imagen1.webp', 'assets/proyect-cards/control/imagen2.webp', 'assets/proyect-cards/control/imagen3.webp'],
      enlace: 'https://control-clientes-a2ac7.web.app/',
      herramientas: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap', 'Firebase'],
      img_extra: ''
    },
  ]

  getItemsEscire() {
    return this.proyectosEscire;
  }

  getItems() {
    return this.proyectos;
  }
}
