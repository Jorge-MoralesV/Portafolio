export class Proyectos {

  proyectosEscire = [
    {
      nombre: 'Estudios Sociologicos de COLMEX',
      empresa_asosiacion: 'Colmex',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore enim ratione, vel veniam molestiae quaerat voluptatum cum minus minima, ut nesciunt quae. Sapiente aliquid quae ut ea veritatis adipisci. Mollitia commodi nemo veniam eveniet assumenda cumque voluptas perspiciatis pariatur.',
      img: ['../assets/proyect-cards/escolmex/es colmex.png', '../assets/proyect-cards/escolmex/image.png'],
      enlace: 'https://estudiossociologicos.colmex.mx/index.php/es'
    },
    {
      nombre: 'JoinOpenDots',
      empresa_asosiacion: 'eScire',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore enim ratione, vel veniam molestiae quaerat voluptatum cum minus minima, ut nesciunt quae. Sapiente aliquid quae ut ea veritatis adipisci. Mollitia commodi nemo veniam eveniet assumenda cumque voluptas perspiciatis pariatur.',
      img: ['../assets/proyect-cards/opendots/joinopen.png'],
      enlace: 'https://joinopendots.org/es'
    },
  ]

  proyectos = [
    {
      nombre: 'PokeApiDex',
      empresa_asosiacion: 'Jorge',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore enim ratione, vel veniam molestiae quaerat voluptatum cum minus minima, ut nesciunt quae. Sapiente aliquid quae ut ea veritatis adipisci. Mollitia commodi nemo veniam eveniet assumenda cumque voluptas perspiciatis pariatur.',
      img: ['../assets/proyect-cards/pokeapi/pokedex1.png', '../assets/proyect-cards/pokeapi/pokedex2.png'],
      enlace: 'https://pokeapidex-jmv.netlify.app/'
    },
  ]

  getItemsEscire() {
    return this.proyectosEscire;
  }

  getItems() {
    return this.proyectos;
  }
}
