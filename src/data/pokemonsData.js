const pokemonsData = [
  {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    }
  },
  {
    id: 2,
    name: 'ivysaur',
    height: 10,
    weight: 130,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    }
  },
  {
    id: 3,
    name: 'venusaur',
    height: 20,
    weight: 1000,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    }
  },
  {
    id: 4,
    name: 'charmander',
    height: 6,
    weight: 85,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    }
  },
  {
    id: 5,
    name: 'charmeleon',
    height: 11,
    weight: 190,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
    }
  },
  {
    id: 6,
    name: 'charizard',
    height: 17,
    weight: 905,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    }
  },
  {
    id: 7,
    name: 'squirtle',
    height: 5,
    weight: 90,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    }
  },
  {
    id: 8,
    name: 'wartortle',
    height: 10,
    weight: 225,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
    }
  },
  {
    id: 9,
    name: 'blastoise',
    height: 16,
    weight: 855,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    }
  },
  {
    id: 10,
    name: 'caterpie',
    height: 3,
    weight: 29,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
    }
  },
  {
    id: 11,
    name: 'metapod',
    height: 7,
    weight: 99,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png'
    }
  },
  {
    id: 12,
    name: 'butterfree',
    height: 11,
    weight: 320,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png'
    }
  },
  {
    id: 13,
    name: 'weedle',
    height: 3,
    weight: 32,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png'
    }
  },
  {
    id: 14,
    name: 'kakuna',
    height: 6,
    weight: 100,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png'
    }
  },
  {
    id: 15,
    name: 'beedrill',
    height: 10,
    weight: 295,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png'
    }
  },
  {
    id: 16,
    name: 'pidgey',
    height: 3,
    weight: 18,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
    }
  },
  {
    id: 17,
    name: 'pidgeotto',
    height: 11,
    weight: 300,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png'
    }
  },
  {
    id: 18,
    name: 'pidgeot',
    height: 15,
    weight: 395,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png'
    }
  },
  {
    id: 19,
    name: 'rattata',
    height: 3,
    weight: 35,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
    }
  },
  {
    id: 20,
    name: 'raticate',
    height: 7,
    weight: 185,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png'
    }
  },
  {
    id: 21,
    name: 'spearow',
    height: 3,
    weight: 20,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png'
    }
  },
  {
    id: 22,
    name: 'fearow',
    height: 12,
    weight: 380,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png'
    }
  },
  {
    id: 23,
    name: 'ekans',
    height: 20,
    weight: 69,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    }
  },
  {
    id: 24,
    name: 'arbok',
    height: 35,
    weight: 650,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png'
    }
  },
  {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    }
  },
  {
    id: 26,
    name: 'raichu',
    height: 8,
    weight: 300,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
    }
  },
  {
    id: 27,
    name: 'sandshrew',
    height: 6,
    weight: 120,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png'
    }
  },
  {
    id: 28,
    name: 'sandslash',
    height: 10,
    weight: 295,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png'
    }
  },
  {
    id: 29,
    name: 'nidoran-f',
    height: 4,
    weight: 70,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png'
    }
  },
  {
    id: 30,
    name: 'nidorina',
    height: 8,
    weight: 200,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png'
    }
  },
  {
    id: 31,
    name: 'nidoqueen',
    height: 13,
    weight: 600,
    types: [
      'poison',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png'
    }
  },
  {
    id: 32,
    name: 'nidoran-m',
    height: 5,
    weight: 90,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png'
    }
  },
  {
    id: 33,
    name: 'nidorino',
    height: 9,
    weight: 195,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png'
    }
  },
  {
    id: 34,
    name: 'nidoking',
    height: 14,
    weight: 620,
    types: [
      'poison',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png'
    }
  },
  {
    id: 35,
    name: 'clefairy',
    height: 6,
    weight: 75,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
    }
  },
  {
    id: 36,
    name: 'clefable',
    height: 13,
    weight: 400,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png'
    }
  },
  {
    id: 37,
    name: 'vulpix',
    height: 6,
    weight: 99,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
    }
  },
  {
    id: 38,
    name: 'ninetales',
    height: 11,
    weight: 199,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'
    }
  },
  {
    id: 39,
    name: 'jigglypuff',
    height: 5,
    weight: 55,
    types: [
      'normal',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
    }
  },
  {
    id: 40,
    name: 'wigglytuff',
    height: 10,
    weight: 120,
    types: [
      'normal',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png'
    }
  },
  {
    id: 41,
    name: 'zubat',
    height: 8,
    weight: 75,
    types: [
      'poison',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png'
    }
  },
  {
    id: 42,
    name: 'golbat',
    height: 16,
    weight: 550,
    types: [
      'poison',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png'
    }
  },
  {
    id: 43,
    name: 'oddish',
    height: 5,
    weight: 54,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png'
    }
  },
  {
    id: 44,
    name: 'gloom',
    height: 8,
    weight: 86,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png'
    }
  },
  {
    id: 45,
    name: 'vileplume',
    height: 12,
    weight: 186,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png'
    }
  },
  {
    id: 46,
    name: 'paras',
    height: 3,
    weight: 54,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png'
    }
  },
  {
    id: 47,
    name: 'parasect',
    height: 10,
    weight: 295,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png'
    }
  },
  {
    id: 48,
    name: 'venonat',
    height: 10,
    weight: 300,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png'
    }
  },
  {
    id: 49,
    name: 'venomoth',
    height: 15,
    weight: 125,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png'
    }
  },
  {
    id: 50,
    name: 'diglett',
    height: 2,
    weight: 8,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png'
    }
  },
  {
    id: 51,
    name: 'dugtrio',
    height: 7,
    weight: 333,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png'
    }
  },
  {
    id: 52,
    name: 'meowth',
    height: 4,
    weight: 42,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
    }
  },
  {
    id: 53,
    name: 'persian',
    height: 10,
    weight: 320,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png'
    }
  },
  {
    id: 54,
    name: 'psyduck',
    height: 8,
    weight: 196,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
    }
  },
  {
    id: 55,
    name: 'golduck',
    height: 17,
    weight: 766,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png'
    }
  },
  {
    id: 56,
    name: 'mankey',
    height: 5,
    weight: 280,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png'
    }
  },
  {
    id: 57,
    name: 'primeape',
    height: 10,
    weight: 320,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png'
    }
  },
  {
    id: 58,
    name: 'growlithe',
    height: 7,
    weight: 190,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png'
    }
  },
  {
    id: 59,
    name: 'arcanine',
    height: 19,
    weight: 1550,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
    }
  },
  {
    id: 60,
    name: 'poliwag',
    height: 6,
    weight: 124,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png'
    }
  },
  {
    id: 61,
    name: 'poliwhirl',
    height: 10,
    weight: 200,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png'
    }
  },
  {
    id: 62,
    name: 'poliwrath',
    height: 13,
    weight: 540,
    types: [
      'water',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
    }
  },
  {
    id: 63,
    name: 'abra',
    height: 9,
    weight: 195,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png'
    }
  },
  {
    id: 64,
    name: 'kadabra',
    height: 13,
    weight: 565,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png'
    }
  },
  {
    id: 65,
    name: 'alakazam',
    height: 15,
    weight: 480,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
    }
  },
  {
    id: 66,
    name: 'machop',
    height: 8,
    weight: 195,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
    }
  },
  {
    id: 67,
    name: 'machoke',
    height: 15,
    weight: 705,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png'
    }
  },
  {
    id: 68,
    name: 'machamp',
    height: 16,
    weight: 1300,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png'
    }
  },
  {
    id: 69,
    name: 'bellsprout',
    height: 7,
    weight: 40,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png'
    }
  },
  {
    id: 70,
    name: 'weepinbell',
    height: 10,
    weight: 64,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png'
    }
  },
  {
    id: 71,
    name: 'victreebel',
    height: 17,
    weight: 155,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png'
    }
  },
  {
    id: 72,
    name: 'tentacool',
    height: 9,
    weight: 455,
    types: [
      'water',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png'
    }
  },
  {
    id: 73,
    name: 'tentacruel',
    height: 16,
    weight: 550,
    types: [
      'water',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png'
    }
  },
  {
    id: 74,
    name: 'geodude',
    height: 4,
    weight: 200,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png'
    }
  },
  {
    id: 75,
    name: 'graveler',
    height: 10,
    weight: 1050,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png'
    }
  },
  {
    id: 76,
    name: 'golem',
    height: 14,
    weight: 3000,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
    }
  },
  {
    id: 77,
    name: 'ponyta',
    height: 10,
    weight: 300,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png'
    }
  },
  {
    id: 78,
    name: 'rapidash',
    height: 17,
    weight: 950,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png'
    }
  },
  {
    id: 79,
    name: 'slowpoke',
    height: 12,
    weight: 360,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png'
    }
  },
  {
    id: 80,
    name: 'slowbro',
    height: 16,
    weight: 785,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png'
    }
  },
  {
    id: 81,
    name: 'magnemite',
    height: 3,
    weight: 60,
    types: [
      'electric',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png'
    }
  },
  {
    id: 82,
    name: 'magneton',
    height: 10,
    weight: 600,
    types: [
      'electric',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png'
    }
  },
  {
    id: 83,
    name: 'farfetchd',
    height: 8,
    weight: 150,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png'
    }
  },
  {
    id: 84,
    name: 'doduo',
    height: 14,
    weight: 392,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png'
    }
  },
  {
    id: 85,
    name: 'dodrio',
    height: 18,
    weight: 852,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png'
    }
  },
  {
    id: 86,
    name: 'seel',
    height: 11,
    weight: 900,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png'
    }
  },
  {
    id: 87,
    name: 'dewgong',
    height: 17,
    weight: 1200,
    types: [
      'water',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png'
    }
  },
  {
    id: 88,
    name: 'grimer',
    height: 9,
    weight: 300,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png'
    }
  },
  {
    id: 89,
    name: 'muk',
    height: 12,
    weight: 300,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png'
    }
  },
  {
    id: 90,
    name: 'shellder',
    height: 3,
    weight: 40,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png'
    }
  },
  {
    id: 91,
    name: 'cloyster',
    height: 15,
    weight: 1325,
    types: [
      'water',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png'
    }
  },
  {
    id: 92,
    name: 'gastly',
    height: 13,
    weight: 1,
    types: [
      'ghost',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png'
    }
  },
  {
    id: 93,
    name: 'haunter',
    height: 16,
    weight: 1,
    types: [
      'ghost',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png'
    }
  },
  {
    id: 94,
    name: 'gengar',
    height: 15,
    weight: 405,
    types: [
      'ghost',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
    }
  },
  {
    id: 95,
    name: 'onix',
    height: 88,
    weight: 2100,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
    }
  },
  {
    id: 96,
    name: 'drowzee',
    height: 10,
    weight: 324,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png'
    }
  },
  {
    id: 97,
    name: 'hypno',
    height: 16,
    weight: 756,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png'
    }
  },
  {
    id: 98,
    name: 'krabby',
    height: 4,
    weight: 65,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png'
    }
  },
  {
    id: 99,
    name: 'kingler',
    height: 13,
    weight: 600,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png'
    }
  },
  {
    id: 100,
    name: 'voltorb',
    height: 5,
    weight: 104,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
    }
  },
  {
    id: 101,
    name: 'electrode',
    height: 12,
    weight: 666,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png'
    }
  },
  {
    id: 102,
    name: 'exeggcute',
    height: 4,
    weight: 25,
    types: [
      'grass',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png'
    }
  },
  {
    id: 103,
    name: 'exeggutor',
    height: 20,
    weight: 1200,
    types: [
      'grass',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png'
    }
  },
  {
    id: 104,
    name: 'cubone',
    height: 4,
    weight: 65,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png'
    }
  },
  {
    id: 105,
    name: 'marowak',
    height: 10,
    weight: 450,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png'
    }
  },
  {
    id: 106,
    name: 'hitmonlee',
    height: 15,
    weight: 498,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png'
    }
  },
  {
    id: 107,
    name: 'hitmonchan',
    height: 14,
    weight: 502,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png'
    }
  },
  {
    id: 108,
    name: 'lickitung',
    height: 12,
    weight: 655,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png'
    }
  },
  {
    id: 109,
    name: 'koffing',
    height: 6,
    weight: 10,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png'
    }
  },
  {
    id: 110,
    name: 'weezing',
    height: 12,
    weight: 95,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png'
    }
  },
  {
    id: 111,
    name: 'rhyhorn',
    height: 10,
    weight: 1150,
    types: [
      'ground',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png'
    }
  },
  {
    id: 112,
    name: 'rhydon',
    height: 19,
    weight: 1200,
    types: [
      'ground',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png'
    }
  },
  {
    id: 113,
    name: 'chansey',
    height: 11,
    weight: 346,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png'
    }
  },
  {
    id: 114,
    name: 'tangela',
    height: 10,
    weight: 350,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png'
    }
  },
  {
    id: 115,
    name: 'kangaskhan',
    height: 22,
    weight: 800,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png'
    }
  },
  {
    id: 116,
    name: 'horsea',
    height: 4,
    weight: 80,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png'
    }
  },
  {
    id: 117,
    name: 'seadra',
    height: 12,
    weight: 250,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png'
    }
  },
  {
    id: 118,
    name: 'goldeen',
    height: 6,
    weight: 150,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png'
    }
  },
  {
    id: 119,
    name: 'seaking',
    height: 13,
    weight: 390,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png'
    }
  },
  {
    id: 120,
    name: 'staryu',
    height: 8,
    weight: 345,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png'
    }
  },
  {
    id: 121,
    name: 'starmie',
    height: 11,
    weight: 800,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
    }
  },
  {
    id: 122,
    name: 'mr-mime',
    height: 13,
    weight: 545,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png'
    }
  },
  {
    id: 123,
    name: 'scyther',
    height: 15,
    weight: 560,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png'
    }
  },
  {
    id: 124,
    name: 'jynx',
    height: 14,
    weight: 406,
    types: [
      'ice',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png'
    }
  },
  {
    id: 125,
    name: 'electabuzz',
    height: 11,
    weight: 300,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png'
    }
  },
  {
    id: 126,
    name: 'magmar',
    height: 13,
    weight: 445,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png'
    }
  },
  {
    id: 127,
    name: 'pinsir',
    height: 15,
    weight: 550,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png'
    }
  },
  {
    id: 128,
    name: 'tauros',
    height: 14,
    weight: 884,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png'
    }
  },
  {
    id: 129,
    name: 'magikarp',
    height: 9,
    weight: 100,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png'
    }
  },
  {
    id: 130,
    name: 'gyarados',
    height: 65,
    weight: 2350,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
    }
  },
  {
    id: 131,
    name: 'lapras',
    height: 25,
    weight: 2200,
    types: [
      'water',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
    }
  },
  {
    id: 132,
    name: 'ditto',
    height: 3,
    weight: 40,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
    }
  },
  {
    id: 133,
    name: 'eevee',
    height: 3,
    weight: 65,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
    }
  },
  {
    id: 134,
    name: 'vaporeon',
    height: 10,
    weight: 290,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'
    }
  },
  {
    id: 135,
    name: 'jolteon',
    height: 8,
    weight: 245,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png'
    }
  },
  {
    id: 136,
    name: 'flareon',
    height: 9,
    weight: 250,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'
    }
  },
  {
    id: 137,
    name: 'porygon',
    height: 8,
    weight: 365,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png'
    }
  },
  {
    id: 138,
    name: 'omanyte',
    height: 4,
    weight: 75,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png'
    }
  },
  {
    id: 139,
    name: 'omastar',
    height: 10,
    weight: 350,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png'
    }
  },
  {
    id: 140,
    name: 'kabuto',
    height: 5,
    weight: 115,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png'
    }
  },
  {
    id: 141,
    name: 'kabutops',
    height: 13,
    weight: 405,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png'
    }
  },
  {
    id: 142,
    name: 'aerodactyl',
    height: 18,
    weight: 590,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png'
    }
  },
  {
    id: 143,
    name: 'snorlax',
    height: 21,
    weight: 4600,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
    }
  },
  {
    id: 144,
    name: 'articuno',
    height: 17,
    weight: 554,
    types: [
      'ice',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
    }
  },
  {
    id: 145,
    name: 'zapdos',
    height: 16,
    weight: 526,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png'
    }
  },
  {
    id: 146,
    name: 'moltres',
    height: 20,
    weight: 600,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png'
    }
  },
  {
    id: 147,
    name: 'dratini',
    height: 18,
    weight: 33,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png'
    }
  },
  {
    id: 148,
    name: 'dragonair',
    height: 40,
    weight: 165,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png'
    }
  },
  {
    id: 149,
    name: 'dragonite',
    height: 22,
    weight: 2100,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
    }
  },
  {
    id: 150,
    name: 'mewtwo',
    height: 20,
    weight: 1220,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
    }
  },
  {
    id: 151,
    name: 'mew',
    height: 4,
    weight: 40,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
    }
  },
  {
    id: 152,
    name: 'chikorita',
    height: 9,
    weight: 64,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png'
    }
  },
  {
    id: 153,
    name: 'bayleef',
    height: 12,
    weight: 158,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/153.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png'
    }
  },
  {
    id: 154,
    name: 'meganium',
    height: 18,
    weight: 1005,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png'
    }
  },
  {
    id: 155,
    name: 'cyndaquil',
    height: 5,
    weight: 79,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/155.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png'
    }
  },
  {
    id: 156,
    name: 'quilava',
    height: 9,
    weight: 190,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/156.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png'
    }
  },
  {
    id: 157,
    name: 'typhlosion',
    height: 17,
    weight: 795,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/157.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png'
    }
  },
  {
    id: 158,
    name: 'totodile',
    height: 6,
    weight: 95,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png'
    }
  },
  {
    id: 159,
    name: 'croconaw',
    height: 11,
    weight: 250,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/159.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png'
    }
  },
  {
    id: 160,
    name: 'feraligatr',
    height: 23,
    weight: 888,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/160.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png'
    }
  },
  {
    id: 161,
    name: 'sentret',
    height: 8,
    weight: 60,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/161.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png'
    }
  },
  {
    id: 162,
    name: 'furret',
    height: 18,
    weight: 325,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/162.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png'
    }
  },
  {
    id: 163,
    name: 'hoothoot',
    height: 7,
    weight: 212,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/163.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png'
    }
  },
  {
    id: 164,
    name: 'noctowl',
    height: 16,
    weight: 408,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/164.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png'
    }
  },
  {
    id: 165,
    name: 'ledyba',
    height: 10,
    weight: 108,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/165.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png'
    }
  },
  {
    id: 166,
    name: 'ledian',
    height: 14,
    weight: 356,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/166.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png'
    }
  },
  {
    id: 167,
    name: 'spinarak',
    height: 5,
    weight: 85,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/167.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png'
    }
  },
  {
    id: 168,
    name: 'ariados',
    height: 11,
    weight: 335,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/168.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png'
    }
  },
  {
    id: 169,
    name: 'crobat',
    height: 18,
    weight: 750,
    types: [
      'poison',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/169.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png'
    }
  },
  {
    id: 170,
    name: 'chinchou',
    height: 5,
    weight: 120,
    types: [
      'water',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/170.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png'
    }
  },
  {
    id: 171,
    name: 'lanturn',
    height: 12,
    weight: 225,
    types: [
      'water',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/171.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png'
    }
  },
  {
    id: 172,
    name: 'pichu',
    height: 3,
    weight: 20,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
    }
  },
  {
    id: 173,
    name: 'cleffa',
    height: 3,
    weight: 30,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/173.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png'
    }
  },
  {
    id: 174,
    name: 'igglybuff',
    height: 3,
    weight: 10,
    types: [
      'normal',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/174.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png'
    }
  },
  {
    id: 175,
    name: 'togepi',
    height: 3,
    weight: 15,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/175.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png'
    }
  },
  {
    id: 176,
    name: 'togetic',
    height: 6,
    weight: 32,
    types: [
      'fairy',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/176.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png'
    }
  },
  {
    id: 177,
    name: 'natu',
    height: 2,
    weight: 20,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/177.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png'
    }
  },
  {
    id: 178,
    name: 'xatu',
    height: 15,
    weight: 150,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/178.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png'
    }
  },
  {
    id: 179,
    name: 'mareep',
    height: 6,
    weight: 78,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/179.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png'
    }
  },
  {
    id: 180,
    name: 'flaaffy',
    height: 8,
    weight: 133,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/180.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png'
    }
  },
  {
    id: 181,
    name: 'ampharos',
    height: 14,
    weight: 615,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/181.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png'
    }
  },
  {
    id: 182,
    name: 'bellossom',
    height: 4,
    weight: 58,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/182.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png'
    }
  },
  {
    id: 183,
    name: 'marill',
    height: 4,
    weight: 85,
    types: [
      'water',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/183.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png'
    }
  },
  {
    id: 184,
    name: 'azumarill',
    height: 8,
    weight: 285,
    types: [
      'water',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/184.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png'
    }
  },
  {
    id: 185,
    name: 'sudowoodo',
    height: 12,
    weight: 380,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/185.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png'
    }
  },
  {
    id: 186,
    name: 'politoed',
    height: 11,
    weight: 339,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/186.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png'
    }
  },
  {
    id: 187,
    name: 'hoppip',
    height: 4,
    weight: 5,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/187.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png'
    }
  },
  {
    id: 188,
    name: 'skiploom',
    height: 6,
    weight: 10,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/188.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png'
    }
  },
  {
    id: 189,
    name: 'jumpluff',
    height: 8,
    weight: 30,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/189.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png'
    }
  },
  {
    id: 190,
    name: 'aipom',
    height: 8,
    weight: 115,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/190.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png'
    }
  },
  {
    id: 191,
    name: 'sunkern',
    height: 3,
    weight: 18,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/191.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png'
    }
  },
  {
    id: 192,
    name: 'sunflora',
    height: 8,
    weight: 85,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/192.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png'
    }
  },
  {
    id: 193,
    name: 'yanma',
    height: 12,
    weight: 380,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/193.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png'
    }
  },
  {
    id: 194,
    name: 'wooper',
    height: 4,
    weight: 85,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/194.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png'
    }
  },
  {
    id: 195,
    name: 'quagsire',
    height: 14,
    weight: 750,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/195.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png'
    }
  },
  {
    id: 196,
    name: 'espeon',
    height: 9,
    weight: 265,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/196.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png'
    }
  },
  {
    id: 197,
    name: 'umbreon',
    height: 10,
    weight: 270,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png'
    }
  },
  {
    id: 198,
    name: 'murkrow',
    height: 5,
    weight: 21,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/198.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png'
    }
  },
  {
    id: 199,
    name: 'slowking',
    height: 20,
    weight: 795,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/199.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png'
    }
  },
  {
    id: 200,
    name: 'misdreavus',
    height: 7,
    weight: 10,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/200.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png'
    }
  },
  {
    id: 201,
    name: 'unown',
    height: 5,
    weight: 50,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/201.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png'
    }
  },
  {
    id: 202,
    name: 'wobbuffet',
    height: 13,
    weight: 285,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/202.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png'
    }
  },
  {
    id: 203,
    name: 'girafarig',
    height: 15,
    weight: 415,
    types: [
      'normal',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/203.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png'
    }
  },
  {
    id: 204,
    name: 'pineco',
    height: 6,
    weight: 72,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/204.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png'
    }
  },
  {
    id: 205,
    name: 'forretress',
    height: 12,
    weight: 1258,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/205.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png'
    }
  },
  {
    id: 206,
    name: 'dunsparce',
    height: 15,
    weight: 140,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/206.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png'
    }
  },
  {
    id: 207,
    name: 'gligar',
    height: 11,
    weight: 648,
    types: [
      'ground',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/207.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png'
    }
  },
  {
    id: 208,
    name: 'steelix',
    height: 92,
    weight: 4000,
    types: [
      'steel',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/208.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png'
    }
  },
  {
    id: 209,
    name: 'snubbull',
    height: 6,
    weight: 78,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/209.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png'
    }
  },
  {
    id: 210,
    name: 'granbull',
    height: 14,
    weight: 487,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/210.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png'
    }
  },
  {
    id: 211,
    name: 'qwilfish',
    height: 5,
    weight: 39,
    types: [
      'water',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/211.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png'
    }
  },
  {
    id: 212,
    name: 'scizor',
    height: 18,
    weight: 1180,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/212.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png'
    }
  },
  {
    id: 213,
    name: 'shuckle',
    height: 6,
    weight: 205,
    types: [
      'bug',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/213.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png'
    }
  },
  {
    id: 214,
    name: 'heracross',
    height: 15,
    weight: 540,
    types: [
      'bug',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/214.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png'
    }
  },
  {
    id: 215,
    name: 'sneasel',
    height: 9,
    weight: 280,
    types: [
      'dark',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/215.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png'
    }
  },
  {
    id: 216,
    name: 'teddiursa',
    height: 6,
    weight: 88,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/216.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png'
    }
  },
  {
    id: 217,
    name: 'ursaring',
    height: 18,
    weight: 1258,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/217.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png'
    }
  },
  {
    id: 218,
    name: 'slugma',
    height: 7,
    weight: 350,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/218.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png'
    }
  },
  {
    id: 219,
    name: 'magcargo',
    height: 8,
    weight: 550,
    types: [
      'fire',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/219.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png'
    }
  },
  {
    id: 220,
    name: 'swinub',
    height: 4,
    weight: 65,
    types: [
      'ice',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/220.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png'
    }
  },
  {
    id: 221,
    name: 'piloswine',
    height: 11,
    weight: 558,
    types: [
      'ice',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/221.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png'
    }
  },
  {
    id: 222,
    name: 'corsola',
    height: 6,
    weight: 50,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/222.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png'
    }
  },
  {
    id: 223,
    name: 'remoraid',
    height: 6,
    weight: 120,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/223.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png'
    }
  },
  {
    id: 224,
    name: 'octillery',
    height: 9,
    weight: 285,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/224.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png'
    }
  },
  {
    id: 225,
    name: 'delibird',
    height: 9,
    weight: 160,
    types: [
      'ice',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/225.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png'
    }
  },
  {
    id: 226,
    name: 'mantine',
    height: 21,
    weight: 2200,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/226.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png'
    }
  },
  {
    id: 227,
    name: 'skarmory',
    height: 17,
    weight: 505,
    types: [
      'steel',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/227.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png'
    }
  },
  {
    id: 228,
    name: 'houndour',
    height: 6,
    weight: 108,
    types: [
      'dark',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/228.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png'
    }
  },
  {
    id: 229,
    name: 'houndoom',
    height: 14,
    weight: 350,
    types: [
      'dark',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/229.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png'
    }
  },
  {
    id: 230,
    name: 'kingdra',
    height: 18,
    weight: 1520,
    types: [
      'water',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/230.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png'
    }
  },
  {
    id: 231,
    name: 'phanpy',
    height: 5,
    weight: 335,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/231.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png'
    }
  },
  {
    id: 232,
    name: 'donphan',
    height: 11,
    weight: 1200,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/232.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png'
    }
  },
  {
    id: 233,
    name: 'porygon2',
    height: 6,
    weight: 325,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/233.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png'
    }
  },
  {
    id: 234,
    name: 'stantler',
    height: 14,
    weight: 712,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/234.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png'
    }
  },
  {
    id: 235,
    name: 'smeargle',
    height: 12,
    weight: 580,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/235.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png'
    }
  },
  {
    id: 236,
    name: 'tyrogue',
    height: 7,
    weight: 210,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/236.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png'
    }
  },
  {
    id: 237,
    name: 'hitmontop',
    height: 14,
    weight: 480,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/237.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png'
    }
  },
  {
    id: 238,
    name: 'smoochum',
    height: 4,
    weight: 60,
    types: [
      'ice',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/238.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png'
    }
  },
  {
    id: 239,
    name: 'elekid',
    height: 6,
    weight: 235,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/239.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png'
    }
  },
  {
    id: 240,
    name: 'magby',
    height: 7,
    weight: 214,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/240.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png'
    }
  },
  {
    id: 241,
    name: 'miltank',
    height: 12,
    weight: 755,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/241.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png'
    }
  },
  {
    id: 242,
    name: 'blissey',
    height: 15,
    weight: 468,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/242.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png'
    }
  },
  {
    id: 243,
    name: 'raikou',
    height: 19,
    weight: 1780,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/243.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png'
    }
  },
  {
    id: 244,
    name: 'entei',
    height: 21,
    weight: 1980,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/244.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png'
    }
  },
  {
    id: 245,
    name: 'suicune',
    height: 20,
    weight: 1870,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/245.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png'
    }
  },
  {
    id: 246,
    name: 'larvitar',
    height: 6,
    weight: 720,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/246.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png'
    }
  },
  {
    id: 247,
    name: 'pupitar',
    height: 12,
    weight: 1520,
    types: [
      'rock',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/247.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png'
    }
  },
  {
    id: 248,
    name: 'tyranitar',
    height: 20,
    weight: 2020,
    types: [
      'rock',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/248.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png'
    }
  },
  {
    id: 249,
    name: 'lugia',
    height: 52,
    weight: 2160,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/249.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png'
    }
  },
  {
    id: 250,
    name: 'ho-oh',
    height: 38,
    weight: 1990,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/250.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png'
    }
  },
  {
    id: 251,
    name: 'celebi',
    height: 6,
    weight: 50,
    types: [
      'psychic',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/251.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png'
    }
  },
  {
    id: 252,
    name: 'treecko',
    height: 5,
    weight: 50,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png'
    }
  },
  {
    id: 253,
    name: 'grovyle',
    height: 9,
    weight: 216,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/253.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png'
    }
  },
  {
    id: 254,
    name: 'sceptile',
    height: 17,
    weight: 522,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/254.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png'
    }
  },
  {
    id: 255,
    name: 'torchic',
    height: 4,
    weight: 25,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png'
    }
  },
  {
    id: 256,
    name: 'combusken',
    height: 9,
    weight: 195,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/256.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png'
    }
  },
  {
    id: 257,
    name: 'blaziken',
    height: 19,
    weight: 520,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/257.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png'
    }
  },
  {
    id: 258,
    name: 'mudkip',
    height: 4,
    weight: 76,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/258.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png'
    }
  },
  {
    id: 259,
    name: 'marshtomp',
    height: 7,
    weight: 280,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/259.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png'
    }
  },
  {
    id: 260,
    name: 'swampert',
    height: 15,
    weight: 819,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/260.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png'
    }
  },
  {
    id: 261,
    name: 'poochyena',
    height: 5,
    weight: 136,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/261.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png'
    }
  },
  {
    id: 262,
    name: 'mightyena',
    height: 10,
    weight: 370,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/262.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png'
    }
  },
  {
    id: 263,
    name: 'zigzagoon',
    height: 4,
    weight: 175,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/263.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png'
    }
  },
  {
    id: 264,
    name: 'linoone',
    height: 5,
    weight: 325,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/264.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png'
    }
  },
  {
    id: 265,
    name: 'wurmple',
    height: 3,
    weight: 36,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/265.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png'
    }
  },
  {
    id: 266,
    name: 'silcoon',
    height: 6,
    weight: 100,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/266.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png'
    }
  },
  {
    id: 267,
    name: 'beautifly',
    height: 10,
    weight: 284,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/267.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png'
    }
  },
  {
    id: 268,
    name: 'cascoon',
    height: 7,
    weight: 115,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/268.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png'
    }
  },
  {
    id: 269,
    name: 'dustox',
    height: 12,
    weight: 316,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/269.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png'
    }
  },
  {
    id: 270,
    name: 'lotad',
    height: 5,
    weight: 26,
    types: [
      'water',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/270.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png'
    }
  },
  {
    id: 271,
    name: 'lombre',
    height: 12,
    weight: 325,
    types: [
      'water',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/271.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png'
    }
  },
  {
    id: 272,
    name: 'ludicolo',
    height: 15,
    weight: 550,
    types: [
      'water',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/272.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png'
    }
  },
  {
    id: 273,
    name: 'seedot',
    height: 5,
    weight: 40,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/273.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png'
    }
  },
  {
    id: 274,
    name: 'nuzleaf',
    height: 10,
    weight: 280,
    types: [
      'grass',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/274.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png'
    }
  },
  {
    id: 275,
    name: 'shiftry',
    height: 13,
    weight: 596,
    types: [
      'grass',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/275.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png'
    }
  },
  {
    id: 276,
    name: 'taillow',
    height: 3,
    weight: 23,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/276.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png'
    }
  },
  {
    id: 277,
    name: 'swellow',
    height: 7,
    weight: 198,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/277.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png'
    }
  },
  {
    id: 278,
    name: 'wingull',
    height: 6,
    weight: 95,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/278.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png'
    }
  },
  {
    id: 279,
    name: 'pelipper',
    height: 12,
    weight: 280,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/279.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png'
    }
  },
  {
    id: 280,
    name: 'ralts',
    height: 4,
    weight: 66,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/280.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png'
    }
  },
  {
    id: 281,
    name: 'kirlia',
    height: 8,
    weight: 202,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/281.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png'
    }
  },
  {
    id: 282,
    name: 'gardevoir',
    height: 16,
    weight: 484,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/282.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png'
    }
  },
  {
    id: 283,
    name: 'surskit',
    height: 5,
    weight: 17,
    types: [
      'bug',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/283.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png'
    }
  },
  {
    id: 284,
    name: 'masquerain',
    height: 8,
    weight: 36,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/284.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png'
    }
  },
  {
    id: 285,
    name: 'shroomish',
    height: 4,
    weight: 45,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/285.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png'
    }
  },
  {
    id: 286,
    name: 'breloom',
    height: 12,
    weight: 392,
    types: [
      'grass',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/286.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png'
    }
  },
  {
    id: 287,
    name: 'slakoth',
    height: 8,
    weight: 240,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/287.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png'
    }
  },
  {
    id: 288,
    name: 'vigoroth',
    height: 14,
    weight: 465,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/288.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png'
    }
  },
  {
    id: 289,
    name: 'slaking',
    height: 20,
    weight: 1305,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/289.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png'
    }
  },
  {
    id: 290,
    name: 'nincada',
    height: 5,
    weight: 55,
    types: [
      'bug',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/290.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png'
    }
  },
  {
    id: 291,
    name: 'ninjask',
    height: 8,
    weight: 120,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/291.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png'
    }
  },
  {
    id: 292,
    name: 'shedinja',
    height: 8,
    weight: 12,
    types: [
      'bug',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/292.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png'
    }
  },
  {
    id: 293,
    name: 'whismur',
    height: 6,
    weight: 163,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/293.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png'
    }
  },
  {
    id: 294,
    name: 'loudred',
    height: 10,
    weight: 405,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/294.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png'
    }
  },
  {
    id: 295,
    name: 'exploud',
    height: 15,
    weight: 840,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/295.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png'
    }
  },
  {
    id: 296,
    name: 'makuhita',
    height: 10,
    weight: 864,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/296.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png'
    }
  },
  {
    id: 297,
    name: 'hariyama',
    height: 23,
    weight: 2538,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/297.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png'
    }
  },
  {
    id: 298,
    name: 'azurill',
    height: 2,
    weight: 20,
    types: [
      'normal',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/298.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png'
    }
  },
  {
    id: 299,
    name: 'nosepass',
    height: 10,
    weight: 970,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/299.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png'
    }
  },
  {
    id: 300,
    name: 'skitty',
    height: 6,
    weight: 110,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/300.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png'
    }
  },
  {
    id: 301,
    name: 'delcatty',
    height: 11,
    weight: 326,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/301.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png'
    }
  },
  {
    id: 302,
    name: 'sableye',
    height: 5,
    weight: 110,
    types: [
      'dark',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/302.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png'
    }
  },
  {
    id: 303,
    name: 'mawile',
    height: 6,
    weight: 115,
    types: [
      'steel',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/303.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png'
    }
  },
  {
    id: 304,
    name: 'aron',
    height: 4,
    weight: 600,
    types: [
      'steel',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/304.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png'
    }
  },
  {
    id: 305,
    name: 'lairon',
    height: 9,
    weight: 1200,
    types: [
      'steel',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/305.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png'
    }
  },
  {
    id: 306,
    name: 'aggron',
    height: 21,
    weight: 3600,
    types: [
      'steel',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/306.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png'
    }
  },
  {
    id: 307,
    name: 'meditite',
    height: 6,
    weight: 112,
    types: [
      'fighting',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/307.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png'
    }
  },
  {
    id: 308,
    name: 'medicham',
    height: 13,
    weight: 315,
    types: [
      'fighting',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/308.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png'
    }
  },
  {
    id: 309,
    name: 'electrike',
    height: 6,
    weight: 152,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/309.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png'
    }
  },
  {
    id: 310,
    name: 'manectric',
    height: 15,
    weight: 402,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/310.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png'
    }
  },
  {
    id: 311,
    name: 'plusle',
    height: 4,
    weight: 42,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/311.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png'
    }
  },
  {
    id: 312,
    name: 'minun',
    height: 4,
    weight: 42,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/312.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png'
    }
  },
  {
    id: 313,
    name: 'volbeat',
    height: 7,
    weight: 177,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/313.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png'
    }
  },
  {
    id: 314,
    name: 'illumise',
    height: 6,
    weight: 177,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/314.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png'
    }
  },
  {
    id: 315,
    name: 'roselia',
    height: 3,
    weight: 20,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/315.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png'
    }
  },
  {
    id: 316,
    name: 'gulpin',
    height: 4,
    weight: 103,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/316.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png'
    }
  },
  {
    id: 317,
    name: 'swalot',
    height: 17,
    weight: 800,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/317.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png'
    }
  },
  {
    id: 318,
    name: 'carvanha',
    height: 8,
    weight: 208,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/318.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png'
    }
  },
  {
    id: 319,
    name: 'sharpedo',
    height: 18,
    weight: 888,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/319.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png'
    }
  },
  {
    id: 320,
    name: 'wailmer',
    height: 20,
    weight: 1300,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/320.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png'
    }
  },
  {
    id: 321,
    name: 'wailord',
    height: 145,
    weight: 3980,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/321.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png'
    }
  },
  {
    id: 322,
    name: 'numel',
    height: 7,
    weight: 240,
    types: [
      'fire',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/322.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png'
    }
  },
  {
    id: 323,
    name: 'camerupt',
    height: 19,
    weight: 2200,
    types: [
      'fire',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/323.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png'
    }
  },
  {
    id: 324,
    name: 'torkoal',
    height: 5,
    weight: 804,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/324.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png'
    }
  },
  {
    id: 325,
    name: 'spoink',
    height: 7,
    weight: 306,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/325.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png'
    }
  },
  {
    id: 326,
    name: 'grumpig',
    height: 9,
    weight: 715,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/326.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png'
    }
  },
  {
    id: 327,
    name: 'spinda',
    height: 11,
    weight: 50,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/327.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png'
    }
  },
  {
    id: 328,
    name: 'trapinch',
    height: 7,
    weight: 150,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/328.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png'
    }
  },
  {
    id: 329,
    name: 'vibrava',
    height: 11,
    weight: 153,
    types: [
      'ground',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/329.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png'
    }
  },
  {
    id: 330,
    name: 'flygon',
    height: 20,
    weight: 820,
    types: [
      'ground',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/330.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png'
    }
  },
  {
    id: 331,
    name: 'cacnea',
    height: 4,
    weight: 513,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/331.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png'
    }
  },
  {
    id: 332,
    name: 'cacturne',
    height: 13,
    weight: 774,
    types: [
      'grass',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/332.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png'
    }
  },
  {
    id: 333,
    name: 'swablu',
    height: 4,
    weight: 12,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/333.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png'
    }
  },
  {
    id: 334,
    name: 'altaria',
    height: 11,
    weight: 206,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/334.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png'
    }
  },
  {
    id: 335,
    name: 'zangoose',
    height: 13,
    weight: 403,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/335.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png'
    }
  },
  {
    id: 336,
    name: 'seviper',
    height: 27,
    weight: 525,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/336.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png'
    }
  },
  {
    id: 337,
    name: 'lunatone',
    height: 10,
    weight: 1680,
    types: [
      'rock',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/337.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png'
    }
  },
  {
    id: 338,
    name: 'solrock',
    height: 12,
    weight: 1540,
    types: [
      'rock',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/338.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png'
    }
  },
  {
    id: 339,
    name: 'barboach',
    height: 4,
    weight: 19,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/339.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png'
    }
  },
  {
    id: 340,
    name: 'whiscash',
    height: 9,
    weight: 236,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/340.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png'
    }
  },
  {
    id: 341,
    name: 'corphish',
    height: 6,
    weight: 115,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/341.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png'
    }
  },
  {
    id: 342,
    name: 'crawdaunt',
    height: 11,
    weight: 328,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/342.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png'
    }
  },
  {
    id: 343,
    name: 'baltoy',
    height: 5,
    weight: 215,
    types: [
      'ground',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/343.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png'
    }
  },
  {
    id: 344,
    name: 'claydol',
    height: 15,
    weight: 1080,
    types: [
      'ground',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/344.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png'
    }
  },
  {
    id: 345,
    name: 'lileep',
    height: 10,
    weight: 238,
    types: [
      'rock',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/345.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png'
    }
  },
  {
    id: 346,
    name: 'cradily',
    height: 15,
    weight: 604,
    types: [
      'rock',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/346.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png'
    }
  },
  {
    id: 347,
    name: 'anorith',
    height: 7,
    weight: 125,
    types: [
      'rock',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/347.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png'
    }
  },
  {
    id: 348,
    name: 'armaldo',
    height: 15,
    weight: 682,
    types: [
      'rock',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/348.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png'
    }
  },
  {
    id: 349,
    name: 'feebas',
    height: 6,
    weight: 74,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/349.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png'
    }
  },
  {
    id: 350,
    name: 'milotic',
    height: 62,
    weight: 1620,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/350.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png'
    }
  },
  {
    id: 351,
    name: 'castform',
    height: 3,
    weight: 8,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/351.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png'
    }
  },
  {
    id: 352,
    name: 'kecleon',
    height: 10,
    weight: 220,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/352.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png'
    }
  },
  {
    id: 353,
    name: 'shuppet',
    height: 6,
    weight: 23,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/353.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png'
    }
  },
  {
    id: 354,
    name: 'banette',
    height: 11,
    weight: 125,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/354.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png'
    }
  },
  {
    id: 355,
    name: 'duskull',
    height: 8,
    weight: 150,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/355.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png'
    }
  },
  {
    id: 356,
    name: 'dusclops',
    height: 16,
    weight: 306,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/356.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png'
    }
  },
  {
    id: 357,
    name: 'tropius',
    height: 20,
    weight: 1000,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/357.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png'
    }
  },
  {
    id: 358,
    name: 'chimecho',
    height: 6,
    weight: 10,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/358.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png'
    }
  },
  {
    id: 359,
    name: 'absol',
    height: 12,
    weight: 470,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/359.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png'
    }
  },
  {
    id: 360,
    name: 'wynaut',
    height: 6,
    weight: 140,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/360.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png'
    }
  },
  {
    id: 361,
    name: 'snorunt',
    height: 7,
    weight: 168,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/361.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png'
    }
  },
  {
    id: 362,
    name: 'glalie',
    height: 15,
    weight: 2565,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/362.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png'
    }
  },
  {
    id: 363,
    name: 'spheal',
    height: 8,
    weight: 395,
    types: [
      'ice',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/363.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png'
    }
  },
  {
    id: 364,
    name: 'sealeo',
    height: 11,
    weight: 876,
    types: [
      'ice',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/364.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png'
    }
  },
  {
    id: 365,
    name: 'walrein',
    height: 14,
    weight: 1506,
    types: [
      'ice',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/365.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png'
    }
  },
  {
    id: 366,
    name: 'clamperl',
    height: 4,
    weight: 525,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/366.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png'
    }
  },
  {
    id: 367,
    name: 'huntail',
    height: 17,
    weight: 270,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/367.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png'
    }
  },
  {
    id: 368,
    name: 'gorebyss',
    height: 18,
    weight: 226,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/368.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png'
    }
  },
  {
    id: 369,
    name: 'relicanth',
    height: 10,
    weight: 234,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png'
    }
  },
  {
    id: 370,
    name: 'luvdisc',
    height: 6,
    weight: 87,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/370.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png'
    }
  },
  {
    id: 371,
    name: 'bagon',
    height: 6,
    weight: 421,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/371.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png'
    }
  },
  {
    id: 372,
    name: 'shelgon',
    height: 11,
    weight: 1105,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/372.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png'
    }
  },
  {
    id: 373,
    name: 'salamence',
    height: 15,
    weight: 1026,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/373.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png'
    }
  },
  {
    id: 374,
    name: 'beldum',
    height: 6,
    weight: 952,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/374.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png'
    }
  },
  {
    id: 375,
    name: 'metang',
    height: 12,
    weight: 2025,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/375.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png'
    }
  },
  {
    id: 376,
    name: 'metagross',
    height: 16,
    weight: 5500,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/376.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png'
    }
  },
  {
    id: 377,
    name: 'regirock',
    height: 17,
    weight: 2300,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/377.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png'
    }
  },
  {
    id: 378,
    name: 'regice',
    height: 18,
    weight: 1750,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/378.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png'
    }
  },
  {
    id: 379,
    name: 'registeel',
    height: 19,
    weight: 2050,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/379.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png'
    }
  },
  {
    id: 380,
    name: 'latias',
    height: 14,
    weight: 400,
    types: [
      'dragon',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/380.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png'
    }
  },
  {
    id: 381,
    name: 'latios',
    height: 20,
    weight: 600,
    types: [
      'dragon',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/381.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png'
    }
  },
  {
    id: 382,
    name: 'kyogre',
    height: 45,
    weight: 3520,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/382.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png'
    }
  },
  {
    id: 383,
    name: 'groudon',
    height: 35,
    weight: 9500,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/383.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png'
    }
  },
  {
    id: 384,
    name: 'rayquaza',
    height: 70,
    weight: 2065,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/384.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png'
    }
  },
  {
    id: 385,
    name: 'jirachi',
    height: 3,
    weight: 11,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/385.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png'
    }
  },
  {
    id: 386,
    name: 'deoxys-normal',
    height: 17,
    weight: 608,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/386.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png'
    }
  },
  {
    id: 387,
    name: 'turtwig',
    height: 4,
    weight: 102,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png'
    }
  },
  {
    id: 388,
    name: 'grotle',
    height: 11,
    weight: 970,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/388.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png'
    }
  },
  {
    id: 389,
    name: 'torterra',
    height: 22,
    weight: 3100,
    types: [
      'grass',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/389.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png'
    }
  },
  {
    id: 390,
    name: 'chimchar',
    height: 5,
    weight: 62,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/390.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png'
    }
  },
  {
    id: 391,
    name: 'monferno',
    height: 9,
    weight: 220,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/391.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png'
    }
  },
  {
    id: 392,
    name: 'infernape',
    height: 12,
    weight: 550,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/392.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png'
    }
  },
  {
    id: 393,
    name: 'piplup',
    height: 4,
    weight: 52,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png'
    }
  },
  {
    id: 394,
    name: 'prinplup',
    height: 8,
    weight: 230,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/394.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png'
    }
  },
  {
    id: 395,
    name: 'empoleon',
    height: 17,
    weight: 845,
    types: [
      'water',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/395.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png'
    }
  },
  {
    id: 396,
    name: 'starly',
    height: 3,
    weight: 20,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/396.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png'
    }
  },
  {
    id: 397,
    name: 'staravia',
    height: 6,
    weight: 155,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/397.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png'
    }
  },
  {
    id: 398,
    name: 'staraptor',
    height: 12,
    weight: 249,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/398.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png'
    }
  },
  {
    id: 399,
    name: 'bidoof',
    height: 5,
    weight: 200,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/399.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png'
    }
  },
  {
    id: 400,
    name: 'bibarel',
    height: 10,
    weight: 315,
    types: [
      'normal',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/400.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png'
    }
  },
  {
    id: 401,
    name: 'kricketot',
    height: 3,
    weight: 22,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/401.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png'
    }
  },
  {
    id: 402,
    name: 'kricketune',
    height: 10,
    weight: 255,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/402.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png'
    }
  },
  {
    id: 403,
    name: 'shinx',
    height: 5,
    weight: 95,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/403.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png'
    }
  },
  {
    id: 404,
    name: 'luxio',
    height: 9,
    weight: 305,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/404.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png'
    }
  },
  {
    id: 405,
    name: 'luxray',
    height: 14,
    weight: 420,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/405.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png'
    }
  },
  {
    id: 406,
    name: 'budew',
    height: 2,
    weight: 12,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/406.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png'
    }
  },
  {
    id: 407,
    name: 'roserade',
    height: 9,
    weight: 145,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/407.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png'
    }
  },
  {
    id: 408,
    name: 'cranidos',
    height: 9,
    weight: 315,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/408.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png'
    }
  },
  {
    id: 409,
    name: 'rampardos',
    height: 16,
    weight: 1025,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/409.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png'
    }
  },
  {
    id: 410,
    name: 'shieldon',
    height: 5,
    weight: 570,
    types: [
      'rock',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/410.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png'
    }
  },
  {
    id: 411,
    name: 'bastiodon',
    height: 13,
    weight: 1495,
    types: [
      'rock',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/411.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png'
    }
  },
  {
    id: 412,
    name: 'burmy',
    height: 2,
    weight: 34,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/412.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png'
    }
  },
  {
    id: 413,
    name: 'wormadam-plant',
    height: 5,
    weight: 65,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/413.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png'
    }
  },
  {
    id: 414,
    name: 'mothim',
    height: 9,
    weight: 233,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/414.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png'
    }
  },
  {
    id: 415,
    name: 'combee',
    height: 3,
    weight: 55,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/415.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png'
    }
  },
  {
    id: 416,
    name: 'vespiquen',
    height: 12,
    weight: 385,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/416.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png'
    }
  },
  {
    id: 417,
    name: 'pachirisu',
    height: 4,
    weight: 39,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/417.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png'
    }
  },
  {
    id: 418,
    name: 'buizel',
    height: 7,
    weight: 295,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/418.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png'
    }
  },
  {
    id: 419,
    name: 'floatzel',
    height: 11,
    weight: 335,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/419.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png'
    }
  },
  {
    id: 420,
    name: 'cherubi',
    height: 4,
    weight: 33,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/420.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png'
    }
  },
  {
    id: 421,
    name: 'cherrim',
    height: 5,
    weight: 93,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/421.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png'
    }
  },
  {
    id: 422,
    name: 'shellos',
    height: 3,
    weight: 63,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/422.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png'
    }
  },
  {
    id: 423,
    name: 'gastrodon',
    height: 9,
    weight: 299,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/423.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png'
    }
  },
  {
    id: 424,
    name: 'ambipom',
    height: 12,
    weight: 203,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/424.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png'
    }
  },
  {
    id: 425,
    name: 'drifloon',
    height: 4,
    weight: 12,
    types: [
      'ghost',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/425.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png'
    }
  },
  {
    id: 426,
    name: 'drifblim',
    height: 12,
    weight: 150,
    types: [
      'ghost',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/426.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png'
    }
  },
  {
    id: 427,
    name: 'buneary',
    height: 4,
    weight: 55,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/427.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png'
    }
  },
  {
    id: 428,
    name: 'lopunny',
    height: 12,
    weight: 333,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/428.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png'
    }
  },
  {
    id: 429,
    name: 'mismagius',
    height: 9,
    weight: 44,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/429.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png'
    }
  },
  {
    id: 430,
    name: 'honchkrow',
    height: 9,
    weight: 273,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/430.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png'
    }
  },
  {
    id: 431,
    name: 'glameow',
    height: 5,
    weight: 39,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/431.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png'
    }
  },
  {
    id: 432,
    name: 'purugly',
    height: 10,
    weight: 438,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/432.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png'
    }
  },
  {
    id: 433,
    name: 'chingling',
    height: 2,
    weight: 6,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/433.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png'
    }
  },
  {
    id: 434,
    name: 'stunky',
    height: 4,
    weight: 192,
    types: [
      'poison',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/434.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png'
    }
  },
  {
    id: 435,
    name: 'skuntank',
    height: 10,
    weight: 380,
    types: [
      'poison',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/435.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png'
    }
  },
  {
    id: 436,
    name: 'bronzor',
    height: 5,
    weight: 605,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/436.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png'
    }
  },
  {
    id: 437,
    name: 'bronzong',
    height: 13,
    weight: 1870,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/437.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png'
    }
  },
  {
    id: 438,
    name: 'bonsly',
    height: 5,
    weight: 150,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/438.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png'
    }
  },
  {
    id: 439,
    name: 'mime-jr',
    height: 6,
    weight: 130,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/439.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png'
    }
  },
  {
    id: 440,
    name: 'happiny',
    height: 6,
    weight: 244,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/440.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png'
    }
  },
  {
    id: 441,
    name: 'chatot',
    height: 5,
    weight: 19,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/441.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png'
    }
  },
  {
    id: 442,
    name: 'spiritomb',
    height: 10,
    weight: 1080,
    types: [
      'ghost',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/442.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png'
    }
  },
  {
    id: 443,
    name: 'gible',
    height: 7,
    weight: 205,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/443.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png'
    }
  },
  {
    id: 444,
    name: 'gabite',
    height: 14,
    weight: 560,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/444.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png'
    }
  },
  {
    id: 445,
    name: 'garchomp',
    height: 19,
    weight: 950,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/445.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png'
    }
  },
  {
    id: 446,
    name: 'munchlax',
    height: 6,
    weight: 1050,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/446.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png'
    }
  },
  {
    id: 447,
    name: 'riolu',
    height: 7,
    weight: 202,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/447.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png'
    }
  },
  {
    id: 448,
    name: 'lucario',
    height: 12,
    weight: 540,
    types: [
      'fighting',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/448.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png'
    }
  },
  {
    id: 449,
    name: 'hippopotas',
    height: 8,
    weight: 495,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/449.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png'
    }
  },
  {
    id: 450,
    name: 'hippowdon',
    height: 20,
    weight: 3000,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/450.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png'
    }
  },
  {
    id: 451,
    name: 'skorupi',
    height: 8,
    weight: 120,
    types: [
      'poison',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/451.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png'
    }
  },
  {
    id: 452,
    name: 'drapion',
    height: 13,
    weight: 615,
    types: [
      'poison',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/452.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png'
    }
  },
  {
    id: 453,
    name: 'croagunk',
    height: 7,
    weight: 230,
    types: [
      'poison',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/453.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png'
    }
  },
  {
    id: 454,
    name: 'toxicroak',
    height: 13,
    weight: 444,
    types: [
      'poison',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/454.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png'
    }
  },
  {
    id: 455,
    name: 'carnivine',
    height: 14,
    weight: 270,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/455.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png'
    }
  },
  {
    id: 456,
    name: 'finneon',
    height: 4,
    weight: 70,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/456.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png'
    }
  },
  {
    id: 457,
    name: 'lumineon',
    height: 12,
    weight: 240,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/457.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png'
    }
  },
  {
    id: 458,
    name: 'mantyke',
    height: 10,
    weight: 650,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/458.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png'
    }
  },
  {
    id: 459,
    name: 'snover',
    height: 10,
    weight: 505,
    types: [
      'grass',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/459.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png'
    }
  },
  {
    id: 460,
    name: 'abomasnow',
    height: 22,
    weight: 1355,
    types: [
      'grass',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/460.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png'
    }
  },
  {
    id: 461,
    name: 'weavile',
    height: 11,
    weight: 340,
    types: [
      'dark',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/461.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png'
    }
  },
  {
    id: 462,
    name: 'magnezone',
    height: 12,
    weight: 1800,
    types: [
      'electric',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/462.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png'
    }
  },
  {
    id: 463,
    name: 'lickilicky',
    height: 17,
    weight: 1400,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/463.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png'
    }
  },
  {
    id: 464,
    name: 'rhyperior',
    height: 24,
    weight: 2828,
    types: [
      'ground',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/464.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png'
    }
  },
  {
    id: 465,
    name: 'tangrowth',
    height: 20,
    weight: 1286,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/465.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png'
    }
  },
  {
    id: 466,
    name: 'electivire',
    height: 18,
    weight: 1386,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/466.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png'
    }
  },
  {
    id: 467,
    name: 'magmortar',
    height: 16,
    weight: 680,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/467.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png'
    }
  },
  {
    id: 468,
    name: 'togekiss',
    height: 15,
    weight: 380,
    types: [
      'fairy',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/468.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png'
    }
  },
  {
    id: 469,
    name: 'yanmega',
    height: 19,
    weight: 515,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/469.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png'
    }
  },
  {
    id: 470,
    name: 'leafeon',
    height: 10,
    weight: 255,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/470.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png'
    }
  },
  {
    id: 471,
    name: 'glaceon',
    height: 8,
    weight: 259,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/471.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png'
    }
  },
  {
    id: 472,
    name: 'gliscor',
    height: 20,
    weight: 425,
    types: [
      'ground',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/472.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png'
    }
  },
  {
    id: 473,
    name: 'mamoswine',
    height: 25,
    weight: 2910,
    types: [
      'ice',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/473.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png'
    }
  },
  {
    id: 474,
    name: 'porygon-z',
    height: 9,
    weight: 340,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/474.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png'
    }
  },
  {
    id: 475,
    name: 'gallade',
    height: 16,
    weight: 520,
    types: [
      'psychic',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/475.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png'
    }
  },
  {
    id: 476,
    name: 'probopass',
    height: 14,
    weight: 3400,
    types: [
      'rock',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/476.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png'
    }
  },
  {
    id: 477,
    name: 'dusknoir',
    height: 22,
    weight: 1066,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/477.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png'
    }
  },
  {
    id: 478,
    name: 'froslass',
    height: 13,
    weight: 266,
    types: [
      'ice',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/478.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png'
    }
  },
  {
    id: 479,
    name: 'rotom',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/479.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png'
    }
  },
  {
    id: 480,
    name: 'uxie',
    height: 3,
    weight: 3,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/480.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png'
    }
  },
  {
    id: 481,
    name: 'mesprit',
    height: 3,
    weight: 3,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/481.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png'
    }
  },
  {
    id: 482,
    name: 'azelf',
    height: 3,
    weight: 3,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/482.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png'
    }
  },
  {
    id: 483,
    name: 'dialga',
    height: 54,
    weight: 6830,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/483.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png'
    }
  },
  {
    id: 484,
    name: 'palkia',
    height: 42,
    weight: 3360,
    types: [
      'water',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/484.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png'
    }
  },
  {
    id: 485,
    name: 'heatran',
    height: 17,
    weight: 4300,
    types: [
      'fire',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/485.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png'
    }
  },
  {
    id: 486,
    name: 'regigigas',
    height: 37,
    weight: 4200,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/486.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png'
    }
  },
  {
    id: 487,
    name: 'giratina-altered',
    height: 45,
    weight: 7500,
    types: [
      'ghost',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/487.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png'
    }
  },
  {
    id: 488,
    name: 'cresselia',
    height: 15,
    weight: 856,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/488.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png'
    }
  },
  {
    id: 489,
    name: 'phione',
    height: 4,
    weight: 31,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/489.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png'
    }
  },
  {
    id: 490,
    name: 'manaphy',
    height: 3,
    weight: 14,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/490.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png'
    }
  },
  {
    id: 491,
    name: 'darkrai',
    height: 15,
    weight: 505,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/491.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png'
    }
  },
  {
    id: 492,
    name: 'shaymin-land',
    height: 2,
    weight: 21,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/492.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png'
    }
  },
  {
    id: 493,
    name: 'arceus',
    height: 32,
    weight: 3200,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png'
    }
  },
  {
    id: 494,
    name: 'victini',
    height: 4,
    weight: 40,
    types: [
      'psychic',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/494.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png'
    }
  },
  {
    id: 495,
    name: 'snivy',
    height: 6,
    weight: 81,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/495.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png'
    }
  },
  {
    id: 496,
    name: 'servine',
    height: 8,
    weight: 160,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/496.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png'
    }
  },
  {
    id: 497,
    name: 'serperior',
    height: 33,
    weight: 630,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/497.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png'
    }
  },
  {
    id: 498,
    name: 'tepig',
    height: 5,
    weight: 99,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/498.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png'
    }
  },
  {
    id: 499,
    name: 'pignite',
    height: 10,
    weight: 555,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/499.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png'
    }
  },
  {
    id: 500,
    name: 'emboar',
    height: 16,
    weight: 1500,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png'
    }
  },
  {
    id: 501,
    name: 'oshawott',
    height: 5,
    weight: 59,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/501.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png'
    }
  },
  {
    id: 502,
    name: 'dewott',
    height: 8,
    weight: 245,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/502.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png'
    }
  },
  {
    id: 503,
    name: 'samurott',
    height: 15,
    weight: 946,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/503.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png'
    }
  },
  {
    id: 504,
    name: 'patrat',
    height: 5,
    weight: 116,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/504.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png'
    }
  },
  {
    id: 505,
    name: 'watchog',
    height: 11,
    weight: 270,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/505.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png'
    }
  },
  {
    id: 506,
    name: 'lillipup',
    height: 4,
    weight: 41,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/506.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png'
    }
  },
  {
    id: 507,
    name: 'herdier',
    height: 9,
    weight: 147,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/507.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png'
    }
  },
  {
    id: 508,
    name: 'stoutland',
    height: 12,
    weight: 610,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/508.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png'
    }
  },
  {
    id: 509,
    name: 'purrloin',
    height: 4,
    weight: 101,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/509.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png'
    }
  },
  {
    id: 510,
    name: 'liepard',
    height: 11,
    weight: 375,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/510.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png'
    }
  },
  {
    id: 511,
    name: 'pansage',
    height: 6,
    weight: 105,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/511.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png'
    }
  },
  {
    id: 512,
    name: 'simisage',
    height: 11,
    weight: 305,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/512.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png'
    }
  },
  {
    id: 513,
    name: 'pansear',
    height: 6,
    weight: 110,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/513.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png'
    }
  },
  {
    id: 514,
    name: 'simisear',
    height: 10,
    weight: 280,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/514.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png'
    }
  },
  {
    id: 515,
    name: 'panpour',
    height: 6,
    weight: 135,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/515.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png'
    }
  },
  {
    id: 516,
    name: 'simipour',
    height: 10,
    weight: 290,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/516.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png'
    }
  },
  {
    id: 517,
    name: 'munna',
    height: 6,
    weight: 233,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/517.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png'
    }
  },
  {
    id: 518,
    name: 'musharna',
    height: 11,
    weight: 605,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/518.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png'
    }
  },
  {
    id: 519,
    name: 'pidove',
    height: 3,
    weight: 21,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/519.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png'
    }
  },
  {
    id: 520,
    name: 'tranquill',
    height: 6,
    weight: 150,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/520.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png'
    }
  },
  {
    id: 521,
    name: 'unfezant',
    height: 12,
    weight: 290,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/521.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png'
    }
  },
  {
    id: 522,
    name: 'blitzle',
    height: 8,
    weight: 298,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/522.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png'
    }
  },
  {
    id: 523,
    name: 'zebstrika',
    height: 16,
    weight: 795,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/523.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png'
    }
  },
  {
    id: 524,
    name: 'roggenrola',
    height: 4,
    weight: 180,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/524.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png'
    }
  },
  {
    id: 525,
    name: 'boldore',
    height: 9,
    weight: 1020,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/525.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png'
    }
  },
  {
    id: 526,
    name: 'gigalith',
    height: 17,
    weight: 2600,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/526.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png'
    }
  },
  {
    id: 527,
    name: 'woobat',
    height: 4,
    weight: 21,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/527.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png'
    }
  },
  {
    id: 528,
    name: 'swoobat',
    height: 9,
    weight: 105,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/528.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png'
    }
  },
  {
    id: 529,
    name: 'drilbur',
    height: 3,
    weight: 85,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/529.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png'
    }
  },
  {
    id: 530,
    name: 'excadrill',
    height: 7,
    weight: 404,
    types: [
      'ground',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/530.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png'
    }
  },
  {
    id: 531,
    name: 'audino',
    height: 11,
    weight: 310,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/531.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png'
    }
  },
  {
    id: 532,
    name: 'timburr',
    height: 6,
    weight: 125,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/532.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png'
    }
  },
  {
    id: 533,
    name: 'gurdurr',
    height: 12,
    weight: 400,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/533.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png'
    }
  },
  {
    id: 534,
    name: 'conkeldurr',
    height: 14,
    weight: 870,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/534.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png'
    }
  },
  {
    id: 535,
    name: 'tympole',
    height: 5,
    weight: 45,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/535.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png'
    }
  },
  {
    id: 536,
    name: 'palpitoad',
    height: 8,
    weight: 170,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/536.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png'
    }
  },
  {
    id: 537,
    name: 'seismitoad',
    height: 15,
    weight: 620,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/537.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png'
    }
  },
  {
    id: 538,
    name: 'throh',
    height: 13,
    weight: 555,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/538.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png'
    }
  },
  {
    id: 539,
    name: 'sawk',
    height: 14,
    weight: 510,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/539.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png'
    }
  },
  {
    id: 540,
    name: 'sewaddle',
    height: 3,
    weight: 25,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/540.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png'
    }
  },
  {
    id: 541,
    name: 'swadloon',
    height: 5,
    weight: 73,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/541.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png'
    }
  },
  {
    id: 542,
    name: 'leavanny',
    height: 12,
    weight: 205,
    types: [
      'bug',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/542.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png'
    }
  },
  {
    id: 543,
    name: 'venipede',
    height: 4,
    weight: 53,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/543.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png'
    }
  },
  {
    id: 544,
    name: 'whirlipede',
    height: 12,
    weight: 585,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/544.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png'
    }
  },
  {
    id: 545,
    name: 'scolipede',
    height: 25,
    weight: 2005,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/545.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png'
    }
  },
  {
    id: 546,
    name: 'cottonee',
    height: 3,
    weight: 6,
    types: [
      'grass',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/546.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png'
    }
  },
  {
    id: 547,
    name: 'whimsicott',
    height: 7,
    weight: 66,
    types: [
      'grass',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/547.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png'
    }
  },
  {
    id: 548,
    name: 'petilil',
    height: 5,
    weight: 66,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/548.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png'
    }
  },
  {
    id: 549,
    name: 'lilligant',
    height: 11,
    weight: 163,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/549.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png'
    }
  },
  {
    id: 550,
    name: 'basculin-red-striped',
    height: 10,
    weight: 180,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/550.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png'
    }
  },
  {
    id: 551,
    name: 'sandile',
    height: 7,
    weight: 152,
    types: [
      'ground',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/551.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png'
    }
  },
  {
    id: 552,
    name: 'krokorok',
    height: 10,
    weight: 334,
    types: [
      'ground',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/552.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png'
    }
  },
  {
    id: 553,
    name: 'krookodile',
    height: 15,
    weight: 963,
    types: [
      'ground',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/553.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png'
    }
  },
  {
    id: 554,
    name: 'darumaka',
    height: 6,
    weight: 375,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/554.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png'
    }
  },
  {
    id: 555,
    name: 'darmanitan-standard',
    height: 13,
    weight: 929,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/555.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png'
    }
  },
  {
    id: 556,
    name: 'maractus',
    height: 10,
    weight: 280,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/556.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png'
    }
  },
  {
    id: 557,
    name: 'dwebble',
    height: 3,
    weight: 145,
    types: [
      'bug',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/557.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png'
    }
  },
  {
    id: 558,
    name: 'crustle',
    height: 14,
    weight: 2000,
    types: [
      'bug',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/558.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png'
    }
  },
  {
    id: 559,
    name: 'scraggy',
    height: 6,
    weight: 118,
    types: [
      'dark',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/559.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png'
    }
  },
  {
    id: 560,
    name: 'scrafty',
    height: 11,
    weight: 300,
    types: [
      'dark',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/560.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png'
    }
  },
  {
    id: 561,
    name: 'sigilyph',
    height: 14,
    weight: 140,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/561.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png'
    }
  },
  {
    id: 562,
    name: 'yamask',
    height: 5,
    weight: 15,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/562.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png'
    }
  },
  {
    id: 563,
    name: 'cofagrigus',
    height: 17,
    weight: 765,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/563.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png'
    }
  },
  {
    id: 564,
    name: 'tirtouga',
    height: 7,
    weight: 165,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/564.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png'
    }
  },
  {
    id: 565,
    name: 'carracosta',
    height: 12,
    weight: 810,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/565.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png'
    }
  },
  {
    id: 566,
    name: 'archen',
    height: 5,
    weight: 95,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/566.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png'
    }
  },
  {
    id: 567,
    name: 'archeops',
    height: 14,
    weight: 320,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/567.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png'
    }
  },
  {
    id: 568,
    name: 'trubbish',
    height: 6,
    weight: 310,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/568.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png'
    }
  },
  {
    id: 569,
    name: 'garbodor',
    height: 19,
    weight: 1073,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/569.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png'
    }
  },
  {
    id: 570,
    name: 'zorua',
    height: 7,
    weight: 125,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/570.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png'
    }
  },
  {
    id: 571,
    name: 'zoroark',
    height: 16,
    weight: 811,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/571.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png'
    }
  },
  {
    id: 572,
    name: 'minccino',
    height: 4,
    weight: 58,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/572.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png'
    }
  },
  {
    id: 573,
    name: 'cinccino',
    height: 5,
    weight: 75,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/573.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png'
    }
  },
  {
    id: 574,
    name: 'gothita',
    height: 4,
    weight: 58,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/574.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png'
    }
  },
  {
    id: 575,
    name: 'gothorita',
    height: 7,
    weight: 180,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/575.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png'
    }
  },
  {
    id: 576,
    name: 'gothitelle',
    height: 15,
    weight: 440,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/576.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png'
    }
  },
  {
    id: 577,
    name: 'solosis',
    height: 3,
    weight: 10,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/577.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png'
    }
  },
  {
    id: 578,
    name: 'duosion',
    height: 6,
    weight: 80,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/578.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png'
    }
  },
  {
    id: 579,
    name: 'reuniclus',
    height: 10,
    weight: 201,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/579.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png'
    }
  },
  {
    id: 580,
    name: 'ducklett',
    height: 5,
    weight: 55,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/580.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png'
    }
  },
  {
    id: 581,
    name: 'swanna',
    height: 13,
    weight: 242,
    types: [
      'water',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/581.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png'
    }
  },
  {
    id: 582,
    name: 'vanillite',
    height: 4,
    weight: 57,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/582.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png'
    }
  },
  {
    id: 583,
    name: 'vanillish',
    height: 11,
    weight: 410,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/583.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png'
    }
  },
  {
    id: 584,
    name: 'vanilluxe',
    height: 13,
    weight: 575,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/584.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png'
    }
  },
  {
    id: 585,
    name: 'deerling',
    height: 6,
    weight: 195,
    types: [
      'normal',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/585.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png'
    }
  },
  {
    id: 586,
    name: 'sawsbuck',
    height: 19,
    weight: 925,
    types: [
      'normal',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/586.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png'
    }
  },
  {
    id: 587,
    name: 'emolga',
    height: 4,
    weight: 50,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/587.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png'
    }
  },
  {
    id: 588,
    name: 'karrablast',
    height: 5,
    weight: 59,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/588.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png'
    }
  },
  {
    id: 589,
    name: 'escavalier',
    height: 10,
    weight: 330,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/589.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png'
    }
  },
  {
    id: 590,
    name: 'foongus',
    height: 2,
    weight: 10,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/590.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png'
    }
  },
  {
    id: 591,
    name: 'amoonguss',
    height: 6,
    weight: 105,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/591.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png'
    }
  },
  {
    id: 592,
    name: 'frillish',
    height: 12,
    weight: 330,
    types: [
      'water',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/592.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png'
    }
  },
  {
    id: 593,
    name: 'jellicent',
    height: 22,
    weight: 1350,
    types: [
      'water',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/593.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png'
    }
  },
  {
    id: 594,
    name: 'alomomola',
    height: 12,
    weight: 316,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/594.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png'
    }
  },
  {
    id: 595,
    name: 'joltik',
    height: 1,
    weight: 6,
    types: [
      'bug',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/595.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png'
    }
  },
  {
    id: 596,
    name: 'galvantula',
    height: 8,
    weight: 143,
    types: [
      'bug',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/596.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png'
    }
  },
  {
    id: 597,
    name: 'ferroseed',
    height: 6,
    weight: 188,
    types: [
      'grass',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/597.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png'
    }
  },
  {
    id: 598,
    name: 'ferrothorn',
    height: 10,
    weight: 1100,
    types: [
      'grass',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/598.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png'
    }
  },
  {
    id: 599,
    name: 'klink',
    height: 3,
    weight: 210,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/599.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png'
    }
  },
  {
    id: 600,
    name: 'klang',
    height: 6,
    weight: 510,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/600.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png'
    }
  },
  {
    id: 601,
    name: 'klinklang',
    height: 6,
    weight: 810,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/601.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png'
    }
  },
  {
    id: 602,
    name: 'tynamo',
    height: 2,
    weight: 3,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/602.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png'
    }
  },
  {
    id: 603,
    name: 'eelektrik',
    height: 12,
    weight: 220,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/603.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png'
    }
  },
  {
    id: 604,
    name: 'eelektross',
    height: 21,
    weight: 805,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/604.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png'
    }
  },
  {
    id: 605,
    name: 'elgyem',
    height: 5,
    weight: 90,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/605.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png'
    }
  },
  {
    id: 606,
    name: 'beheeyem',
    height: 10,
    weight: 345,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/606.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png'
    }
  },
  {
    id: 607,
    name: 'litwick',
    height: 3,
    weight: 31,
    types: [
      'ghost',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/607.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png'
    }
  },
  {
    id: 608,
    name: 'lampent',
    height: 6,
    weight: 130,
    types: [
      'ghost',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/608.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png'
    }
  },
  {
    id: 609,
    name: 'chandelure',
    height: 10,
    weight: 343,
    types: [
      'ghost',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/609.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png'
    }
  },
  {
    id: 610,
    name: 'axew',
    height: 6,
    weight: 180,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/610.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png'
    }
  },
  {
    id: 611,
    name: 'fraxure',
    height: 10,
    weight: 360,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/611.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png'
    }
  },
  {
    id: 612,
    name: 'haxorus',
    height: 18,
    weight: 1055,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/612.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png'
    }
  },
  {
    id: 613,
    name: 'cubchoo',
    height: 5,
    weight: 85,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/613.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png'
    }
  },
  {
    id: 614,
    name: 'beartic',
    height: 26,
    weight: 2600,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/614.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png'
    }
  },
  {
    id: 615,
    name: 'cryogonal',
    height: 11,
    weight: 1480,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/615.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png'
    }
  },
  {
    id: 616,
    name: 'shelmet',
    height: 4,
    weight: 77,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/616.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png'
    }
  },
  {
    id: 617,
    name: 'accelgor',
    height: 8,
    weight: 253,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/617.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png'
    }
  },
  {
    id: 618,
    name: 'stunfisk',
    height: 7,
    weight: 110,
    types: [
      'ground',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/618.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png'
    }
  },
  {
    id: 619,
    name: 'mienfoo',
    height: 9,
    weight: 200,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/619.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png'
    }
  },
  {
    id: 620,
    name: 'mienshao',
    height: 14,
    weight: 355,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/620.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png'
    }
  },
  {
    id: 621,
    name: 'druddigon',
    height: 16,
    weight: 1390,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/621.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png'
    }
  },
  {
    id: 622,
    name: 'golett',
    height: 10,
    weight: 920,
    types: [
      'ground',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/622.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png'
    }
  },
  {
    id: 623,
    name: 'golurk',
    height: 28,
    weight: 3300,
    types: [
      'ground',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/623.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png'
    }
  },
  {
    id: 624,
    name: 'pawniard',
    height: 5,
    weight: 102,
    types: [
      'dark',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/624.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png'
    }
  },
  {
    id: 625,
    name: 'bisharp',
    height: 16,
    weight: 700,
    types: [
      'dark',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/625.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png'
    }
  },
  {
    id: 626,
    name: 'bouffalant',
    height: 16,
    weight: 946,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/626.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png'
    }
  },
  {
    id: 627,
    name: 'rufflet',
    height: 5,
    weight: 105,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/627.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png'
    }
  },
  {
    id: 628,
    name: 'braviary',
    height: 15,
    weight: 410,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/628.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png'
    }
  },
  {
    id: 629,
    name: 'vullaby',
    height: 5,
    weight: 90,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/629.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png'
    }
  },
  {
    id: 630,
    name: 'mandibuzz',
    height: 12,
    weight: 395,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/630.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png'
    }
  },
  {
    id: 631,
    name: 'heatmor',
    height: 14,
    weight: 580,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/631.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png'
    }
  },
  {
    id: 632,
    name: 'durant',
    height: 3,
    weight: 330,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/632.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png'
    }
  },
  {
    id: 633,
    name: 'deino',
    height: 8,
    weight: 173,
    types: [
      'dark',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/633.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png'
    }
  },
  {
    id: 634,
    name: 'zweilous',
    height: 14,
    weight: 500,
    types: [
      'dark',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/634.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png'
    }
  },
  {
    id: 635,
    name: 'hydreigon',
    height: 18,
    weight: 1600,
    types: [
      'dark',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/635.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png'
    }
  },
  {
    id: 636,
    name: 'larvesta',
    height: 11,
    weight: 288,
    types: [
      'bug',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/636.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png'
    }
  },
  {
    id: 637,
    name: 'volcarona',
    height: 16,
    weight: 460,
    types: [
      'bug',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/637.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png'
    }
  },
  {
    id: 638,
    name: 'cobalion',
    height: 21,
    weight: 2500,
    types: [
      'steel',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/638.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png'
    }
  },
  {
    id: 639,
    name: 'terrakion',
    height: 19,
    weight: 2600,
    types: [
      'rock',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/639.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png'
    }
  },
  {
    id: 640,
    name: 'virizion',
    height: 20,
    weight: 2000,
    types: [
      'grass',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/640.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png'
    }
  },
  {
    id: 641,
    name: 'tornadus-incarnate',
    height: 15,
    weight: 630,
    types: [
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/641.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png'
    }
  },
  {
    id: 642,
    name: 'thundurus-incarnate',
    height: 15,
    weight: 610,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/642.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png'
    }
  },
  {
    id: 643,
    name: 'reshiram',
    height: 32,
    weight: 3300,
    types: [
      'dragon',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/643.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png'
    }
  },
  {
    id: 644,
    name: 'zekrom',
    height: 29,
    weight: 3450,
    types: [
      'dragon',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/644.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png'
    }
  },
  {
    id: 645,
    name: 'landorus-incarnate',
    height: 15,
    weight: 680,
    types: [
      'ground',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/645.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png'
    }
  },
  {
    id: 646,
    name: 'kyurem',
    height: 30,
    weight: 3250,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/646.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png'
    }
  },
  {
    id: 647,
    name: 'keldeo-ordinary',
    height: 14,
    weight: 485,
    types: [
      'water',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/647.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png'
    }
  },
  {
    id: 648,
    name: 'meloetta-aria',
    height: 6,
    weight: 65,
    types: [
      'normal',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/648.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png'
    }
  },
  {
    id: 649,
    name: 'genesect',
    height: 15,
    weight: 825,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/649.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png'
    }
  },
  {
    id: 650,
    name: 'chespin',
    height: 4,
    weight: 90,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/650.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png'
    }
  },
  {
    id: 651,
    name: 'quilladin',
    height: 7,
    weight: 290,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/651.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png'
    }
  },
  {
    id: 652,
    name: 'chesnaught',
    height: 16,
    weight: 900,
    types: [
      'grass',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/652.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png'
    }
  },
  {
    id: 653,
    name: 'fennekin',
    height: 4,
    weight: 94,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/653.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png'
    }
  },
  {
    id: 654,
    name: 'braixen',
    height: 10,
    weight: 145,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/654.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png'
    }
  },
  {
    id: 655,
    name: 'delphox',
    height: 15,
    weight: 390,
    types: [
      'fire',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/655.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png'
    }
  },
  {
    id: 656,
    name: 'froakie',
    height: 3,
    weight: 70,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/656.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png'
    }
  },
  {
    id: 657,
    name: 'frogadier',
    height: 6,
    weight: 109,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/657.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png'
    }
  },
  {
    id: 658,
    name: 'greninja',
    height: 15,
    weight: 400,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/658.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png'
    }
  },
  {
    id: 659,
    name: 'bunnelby',
    height: 4,
    weight: 50,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/659.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png'
    }
  },
  {
    id: 660,
    name: 'diggersby',
    height: 10,
    weight: 424,
    types: [
      'normal',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/660.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png'
    }
  },
  {
    id: 661,
    name: 'fletchling',
    height: 3,
    weight: 17,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/661.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png'
    }
  },
  {
    id: 662,
    name: 'fletchinder',
    height: 7,
    weight: 160,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/662.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png'
    }
  },
  {
    id: 663,
    name: 'talonflame',
    height: 12,
    weight: 245,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/663.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png'
    }
  },
  {
    id: 664,
    name: 'scatterbug',
    height: 3,
    weight: 25,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/664.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png'
    }
  },
  {
    id: 665,
    name: 'spewpa',
    height: 3,
    weight: 84,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/665.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png'
    }
  },
  {
    id: 666,
    name: 'vivillon',
    height: 12,
    weight: 170,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/666.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png'
    }
  },
  {
    id: 667,
    name: 'litleo',
    height: 6,
    weight: 135,
    types: [
      'fire',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/667.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png'
    }
  },
  {
    id: 668,
    name: 'pyroar',
    height: 15,
    weight: 815,
    types: [
      'fire',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/668.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png'
    }
  },
  {
    id: 669,
    name: 'flabebe',
    height: 1,
    weight: 1,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/669.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png'
    }
  },
  {
    id: 670,
    name: 'floette',
    height: 2,
    weight: 9,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/670.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png'
    }
  },
  {
    id: 671,
    name: 'florges',
    height: 11,
    weight: 100,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/671.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png'
    }
  },
  {
    id: 672,
    name: 'skiddo',
    height: 9,
    weight: 310,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/672.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png'
    }
  },
  {
    id: 673,
    name: 'gogoat',
    height: 17,
    weight: 910,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/673.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png'
    }
  },
  {
    id: 674,
    name: 'pancham',
    height: 6,
    weight: 80,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/674.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png'
    }
  },
  {
    id: 675,
    name: 'pangoro',
    height: 21,
    weight: 1360,
    types: [
      'fighting',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/675.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png'
    }
  },
  {
    id: 676,
    name: 'furfrou',
    height: 12,
    weight: 280,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/676.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png'
    }
  },
  {
    id: 677,
    name: 'espurr',
    height: 3,
    weight: 35,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/677.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png'
    }
  },
  {
    id: 678,
    name: 'meowstic-male',
    height: 6,
    weight: 85,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/678.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png'
    }
  },
  {
    id: 679,
    name: 'honedge',
    height: 8,
    weight: 20,
    types: [
      'steel',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/679.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png'
    }
  },
  {
    id: 680,
    name: 'doublade',
    height: 8,
    weight: 45,
    types: [
      'steel',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/680.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png'
    }
  },
  {
    id: 681,
    name: 'aegislash-shield',
    height: 17,
    weight: 530,
    types: [
      'steel',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png'
    }
  },
  {
    id: 682,
    name: 'spritzee',
    height: 2,
    weight: 5,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/682.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png'
    }
  },
  {
    id: 683,
    name: 'aromatisse',
    height: 8,
    weight: 155,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/683.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png'
    }
  },
  {
    id: 684,
    name: 'swirlix',
    height: 4,
    weight: 35,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/684.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png'
    }
  },
  {
    id: 685,
    name: 'slurpuff',
    height: 8,
    weight: 50,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/685.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png'
    }
  },
  {
    id: 686,
    name: 'inkay',
    height: 4,
    weight: 35,
    types: [
      'dark',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/686.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png'
    }
  },
  {
    id: 687,
    name: 'malamar',
    height: 15,
    weight: 470,
    types: [
      'dark',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/687.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png'
    }
  },
  {
    id: 688,
    name: 'binacle',
    height: 5,
    weight: 310,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/688.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png'
    }
  },
  {
    id: 689,
    name: 'barbaracle',
    height: 13,
    weight: 960,
    types: [
      'rock',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/689.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png'
    }
  },
  {
    id: 690,
    name: 'skrelp',
    height: 5,
    weight: 73,
    types: [
      'poison',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/690.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png'
    }
  },
  {
    id: 691,
    name: 'dragalge',
    height: 18,
    weight: 815,
    types: [
      'poison',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/691.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png'
    }
  },
  {
    id: 692,
    name: 'clauncher',
    height: 5,
    weight: 83,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/692.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png'
    }
  },
  {
    id: 693,
    name: 'clawitzer',
    height: 13,
    weight: 353,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/693.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png'
    }
  },
  {
    id: 694,
    name: 'helioptile',
    height: 5,
    weight: 60,
    types: [
      'electric',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/694.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png'
    }
  },
  {
    id: 695,
    name: 'heliolisk',
    height: 10,
    weight: 210,
    types: [
      'electric',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/695.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png'
    }
  },
  {
    id: 696,
    name: 'tyrunt',
    height: 8,
    weight: 260,
    types: [
      'rock',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/696.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png'
    }
  },
  {
    id: 697,
    name: 'tyrantrum',
    height: 25,
    weight: 2700,
    types: [
      'rock',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/697.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png'
    }
  },
  {
    id: 698,
    name: 'amaura',
    height: 13,
    weight: 252,
    types: [
      'rock',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/698.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png'
    }
  },
  {
    id: 699,
    name: 'aurorus',
    height: 27,
    weight: 2250,
    types: [
      'rock',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/699.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png'
    }
  },
  {
    id: 700,
    name: 'sylveon',
    height: 10,
    weight: 235,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/700.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png'
    }
  },
  {
    id: 701,
    name: 'hawlucha',
    height: 8,
    weight: 215,
    types: [
      'fighting',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/701.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png'
    }
  },
  {
    id: 702,
    name: 'dedenne',
    height: 2,
    weight: 22,
    types: [
      'electric',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/702.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png'
    }
  },
  {
    id: 703,
    name: 'carbink',
    height: 3,
    weight: 57,
    types: [
      'rock',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/703.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png'
    }
  },
  {
    id: 704,
    name: 'goomy',
    height: 3,
    weight: 28,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/704.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png'
    }
  },
  {
    id: 705,
    name: 'sliggoo',
    height: 8,
    weight: 175,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/705.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png'
    }
  },
  {
    id: 706,
    name: 'goodra',
    height: 20,
    weight: 1505,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/706.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png'
    }
  },
  {
    id: 707,
    name: 'klefki',
    height: 2,
    weight: 30,
    types: [
      'steel',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/707.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png'
    }
  },
  {
    id: 708,
    name: 'phantump',
    height: 4,
    weight: 70,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/708.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png'
    }
  },
  {
    id: 709,
    name: 'trevenant',
    height: 15,
    weight: 710,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/709.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png'
    }
  },
  {
    id: 710,
    name: 'pumpkaboo-average',
    height: 4,
    weight: 50,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/710.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png'
    }
  },
  {
    id: 711,
    name: 'gourgeist-average',
    height: 9,
    weight: 125,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/711.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png'
    }
  },
  {
    id: 712,
    name: 'bergmite',
    height: 10,
    weight: 995,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/712.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png'
    }
  },
  {
    id: 713,
    name: 'avalugg',
    height: 20,
    weight: 5050,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/713.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png'
    }
  },
  {
    id: 714,
    name: 'noibat',
    height: 5,
    weight: 80,
    types: [
      'flying',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/714.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png'
    }
  },
  {
    id: 715,
    name: 'noivern',
    height: 15,
    weight: 850,
    types: [
      'flying',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/715.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png'
    }
  },
  {
    id: 716,
    name: 'xerneas',
    height: 30,
    weight: 2150,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/716.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png'
    }
  },
  {
    id: 717,
    name: 'yveltal',
    height: 58,
    weight: 2030,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/717.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png'
    }
  },
  {
    id: 718,
    name: 'zygarde-50',
    height: 50,
    weight: 3050,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/718.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png'
    }
  },
  {
    id: 719,
    name: 'diancie',
    height: 7,
    weight: 88,
    types: [
      'rock',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/719.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png'
    }
  },
  {
    id: 720,
    name: 'hoopa',
    height: 5,
    weight: 90,
    types: [
      'psychic',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/720.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png'
    }
  },
  {
    id: 721,
    name: 'volcanion',
    height: 17,
    weight: 1950,
    types: [
      'fire',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/721.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png'
    }
  },
  {
    id: 722,
    name: 'rowlet',
    height: 3,
    weight: 15,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/722.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png'
    }
  },
  {
    id: 723,
    name: 'dartrix',
    height: 7,
    weight: 160,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/723.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png'
    }
  },
  {
    id: 724,
    name: 'decidueye',
    height: 16,
    weight: 366,
    types: [
      'grass',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/724.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png'
    }
  },
  {
    id: 725,
    name: 'litten',
    height: 4,
    weight: 43,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/725.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png'
    }
  },
  {
    id: 726,
    name: 'torracat',
    height: 7,
    weight: 250,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/726.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png'
    }
  },
  {
    id: 727,
    name: 'incineroar',
    height: 18,
    weight: 830,
    types: [
      'fire',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/727.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png'
    }
  },
  {
    id: 728,
    name: 'popplio',
    height: 4,
    weight: 75,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/728.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png'
    }
  },
  {
    id: 729,
    name: 'brionne',
    height: 6,
    weight: 175,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/729.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png'
    }
  },
  {
    id: 730,
    name: 'primarina',
    height: 18,
    weight: 440,
    types: [
      'water',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/730.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png'
    }
  },
  {
    id: 731,
    name: 'pikipek',
    height: 3,
    weight: 12,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/731.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png'
    }
  },
  {
    id: 732,
    name: 'trumbeak',
    height: 6,
    weight: 148,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/732.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png'
    }
  },
  {
    id: 733,
    name: 'toucannon',
    height: 11,
    weight: 260,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/733.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png'
    }
  },
  {
    id: 734,
    name: 'yungoos',
    height: 4,
    weight: 60,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/734.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png'
    }
  },
  {
    id: 735,
    name: 'gumshoos',
    height: 7,
    weight: 142,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/735.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png'
    }
  },
  {
    id: 736,
    name: 'grubbin',
    height: 4,
    weight: 44,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/736.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png'
    }
  },
  {
    id: 737,
    name: 'charjabug',
    height: 5,
    weight: 105,
    types: [
      'bug',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/737.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png'
    }
  },
  {
    id: 738,
    name: 'vikavolt',
    height: 15,
    weight: 450,
    types: [
      'bug',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/738.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png'
    }
  },
  {
    id: 739,
    name: 'crabrawler',
    height: 6,
    weight: 70,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/739.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png'
    }
  },
  {
    id: 740,
    name: 'crabominable',
    height: 17,
    weight: 1800,
    types: [
      'fighting',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/740.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png'
    }
  },
  {
    id: 741,
    name: 'oricorio-baile',
    height: 6,
    weight: 34,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/741.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png'
    }
  },
  {
    id: 742,
    name: 'cutiefly',
    height: 1,
    weight: 2,
    types: [
      'bug',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/742.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png'
    }
  },
  {
    id: 743,
    name: 'ribombee',
    height: 2,
    weight: 5,
    types: [
      'bug',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/743.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png'
    }
  },
  {
    id: 744,
    name: 'rockruff',
    height: 5,
    weight: 92,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/744.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png'
    }
  },
  {
    id: 745,
    name: 'lycanroc-midday',
    height: 8,
    weight: 250,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/745.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png'
    }
  },
  {
    id: 746,
    name: 'wishiwashi-solo',
    height: 2,
    weight: 3,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/746.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png'
    }
  },
  {
    id: 747,
    name: 'mareanie',
    height: 4,
    weight: 80,
    types: [
      'poison',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/747.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png'
    }
  },
  {
    id: 748,
    name: 'toxapex',
    height: 7,
    weight: 145,
    types: [
      'poison',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png'
    }
  },
  {
    id: 749,
    name: 'mudbray',
    height: 10,
    weight: 1100,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/749.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png'
    }
  },
  {
    id: 750,
    name: 'mudsdale',
    height: 25,
    weight: 9200,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/750.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png'
    }
  },
  {
    id: 751,
    name: 'dewpider',
    height: 3,
    weight: 40,
    types: [
      'water',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/751.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png'
    }
  },
  {
    id: 752,
    name: 'araquanid',
    height: 18,
    weight: 820,
    types: [
      'water',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/752.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png'
    }
  },
  {
    id: 753,
    name: 'fomantis',
    height: 3,
    weight: 15,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/753.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png'
    }
  },
  {
    id: 754,
    name: 'lurantis',
    height: 9,
    weight: 185,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/754.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png'
    }
  },
  {
    id: 755,
    name: 'morelull',
    height: 2,
    weight: 15,
    types: [
      'grass',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/755.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png'
    }
  },
  {
    id: 756,
    name: 'shiinotic',
    height: 10,
    weight: 115,
    types: [
      'grass',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/756.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png'
    }
  },
  {
    id: 757,
    name: 'salandit',
    height: 6,
    weight: 48,
    types: [
      'poison',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/757.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png'
    }
  },
  {
    id: 758,
    name: 'salazzle',
    height: 12,
    weight: 222,
    types: [
      'poison',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/758.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png'
    }
  },
  {
    id: 759,
    name: 'stufful',
    height: 5,
    weight: 68,
    types: [
      'normal',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/759.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png'
    }
  },
  {
    id: 760,
    name: 'bewear',
    height: 21,
    weight: 1350,
    types: [
      'normal',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/760.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png'
    }
  },
  {
    id: 761,
    name: 'bounsweet',
    height: 3,
    weight: 32,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/761.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png'
    }
  },
  {
    id: 762,
    name: 'steenee',
    height: 7,
    weight: 82,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/762.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png'
    }
  },
  {
    id: 763,
    name: 'tsareena',
    height: 12,
    weight: 214,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/763.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png'
    }
  },
  {
    id: 764,
    name: 'comfey',
    height: 1,
    weight: 3,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/764.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png'
    }
  },
  {
    id: 765,
    name: 'oranguru',
    height: 15,
    weight: 760,
    types: [
      'normal',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/765.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png'
    }
  },
  {
    id: 766,
    name: 'passimian',
    height: 20,
    weight: 828,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/766.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png'
    }
  },
  {
    id: 767,
    name: 'wimpod',
    height: 5,
    weight: 120,
    types: [
      'bug',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/767.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png'
    }
  },
  {
    id: 768,
    name: 'golisopod',
    height: 20,
    weight: 1080,
    types: [
      'bug',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/768.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png'
    }
  },
  {
    id: 769,
    name: 'sandygast',
    height: 5,
    weight: 700,
    types: [
      'ghost',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/769.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png'
    }
  },
  {
    id: 770,
    name: 'palossand',
    height: 13,
    weight: 2500,
    types: [
      'ghost',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/770.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png'
    }
  },
  {
    id: 771,
    name: 'pyukumuku',
    height: 3,
    weight: 12,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/771.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png'
    }
  },
  {
    id: 772,
    name: 'type-null',
    height: 19,
    weight: 1205,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/772.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png'
    }
  },
  {
    id: 773,
    name: 'silvally',
    height: 23,
    weight: 1005,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/773.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png'
    }
  },
  {
    id: 774,
    name: 'minior-red-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/774.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png'
    }
  },
  {
    id: 775,
    name: 'komala',
    height: 4,
    weight: 199,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/775.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png'
    }
  },
  {
    id: 776,
    name: 'turtonator',
    height: 20,
    weight: 2120,
    types: [
      'fire',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/776.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png'
    }
  },
  {
    id: 777,
    name: 'togedemaru',
    height: 3,
    weight: 33,
    types: [
      'electric',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/777.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png'
    }
  },
  {
    id: 778,
    name: 'mimikyu-disguised',
    height: 2,
    weight: 7,
    types: [
      'ghost',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/778.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png'
    }
  },
  {
    id: 779,
    name: 'bruxish',
    height: 9,
    weight: 190,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/779.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png'
    }
  },
  {
    id: 780,
    name: 'drampa',
    height: 30,
    weight: 1850,
    types: [
      'normal',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/780.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png'
    }
  },
  {
    id: 781,
    name: 'dhelmise',
    height: 39,
    weight: 2100,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/781.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png'
    }
  },
  {
    id: 782,
    name: 'jangmo-o',
    height: 6,
    weight: 297,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/782.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png'
    }
  },
  {
    id: 783,
    name: 'hakamo-o',
    height: 12,
    weight: 470,
    types: [
      'dragon',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/783.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png'
    }
  },
  {
    id: 784,
    name: 'kommo-o',
    height: 16,
    weight: 782,
    types: [
      'dragon',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/784.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png'
    }
  },
  {
    id: 785,
    name: 'tapu-koko',
    height: 18,
    weight: 205,
    types: [
      'electric',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/785.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png'
    }
  },
  {
    id: 786,
    name: 'tapu-lele',
    height: 12,
    weight: 186,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/786.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png'
    }
  },
  {
    id: 787,
    name: 'tapu-bulu',
    height: 19,
    weight: 455,
    types: [
      'grass',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/787.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png'
    }
  },
  {
    id: 788,
    name: 'tapu-fini',
    height: 13,
    weight: 212,
    types: [
      'water',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/788.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png'
    }
  },
  {
    id: 789,
    name: 'cosmog',
    height: 2,
    weight: 1,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/789.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png'
    }
  },
  {
    id: 790,
    name: 'cosmoem',
    height: 1,
    weight: 9999,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/790.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png'
    }
  },
  {
    id: 791,
    name: 'solgaleo',
    height: 34,
    weight: 2300,
    types: [
      'psychic',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/791.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png'
    }
  },
  {
    id: 792,
    name: 'lunala',
    height: 40,
    weight: 1200,
    types: [
      'psychic',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/792.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png'
    }
  },
  {
    id: 793,
    name: 'nihilego',
    height: 12,
    weight: 555,
    types: [
      'rock',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/793.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png'
    }
  },
  {
    id: 794,
    name: 'buzzwole',
    height: 24,
    weight: 3336,
    types: [
      'bug',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/794.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png'
    }
  },
  {
    id: 795,
    name: 'pheromosa',
    height: 18,
    weight: 250,
    types: [
      'bug',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/795.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png'
    }
  },
  {
    id: 796,
    name: 'xurkitree',
    height: 38,
    weight: 1000,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/796.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png'
    }
  },
  {
    id: 797,
    name: 'celesteela',
    height: 92,
    weight: 9999,
    types: [
      'steel',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/797.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png'
    }
  },
  {
    id: 798,
    name: 'kartana',
    height: 3,
    weight: 1,
    types: [
      'grass',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/798.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png'
    }
  },
  {
    id: 799,
    name: 'guzzlord',
    height: 55,
    weight: 8880,
    types: [
      'dark',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/799.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png'
    }
  },
  {
    id: 800,
    name: 'necrozma',
    height: 24,
    weight: 2300,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/800.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png'
    }
  },
  {
    id: 801,
    name: 'magearna',
    height: 10,
    weight: 805,
    types: [
      'steel',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/801.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png'
    }
  },
  {
    id: 802,
    name: 'marshadow',
    height: 7,
    weight: 222,
    types: [
      'fighting',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/802.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png'
    }
  },
  {
    id: 803,
    name: 'poipole',
    height: 6,
    weight: 18,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/803.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png'
    }
  },
  {
    id: 804,
    name: 'naganadel',
    height: 36,
    weight: 1500,
    types: [
      'poison',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/804.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png'
    }
  },
  {
    id: 805,
    name: 'stakataka',
    height: 55,
    weight: 8200,
    types: [
      'rock',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/805.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png'
    }
  },
  {
    id: 806,
    name: 'blacephalon',
    height: 18,
    weight: 130,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/806.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png'
    }
  },
  {
    id: 807,
    name: 'zeraora',
    height: 15,
    weight: 445,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/807.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png'
    }
  },
  {
    id: 808,
    name: 'meltan',
    height: 2,
    weight: 80,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/808.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png'
    }
  },
  {
    id: 809,
    name: 'melmetal',
    height: 25,
    weight: 8000,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/809.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png'
    }
  },
  {
    id: 810,
    name: 'grookey',
    height: 3,
    weight: 50,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/810.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png'
    }
  },
  {
    id: 811,
    name: 'thwackey',
    height: 7,
    weight: 140,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/811.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png'
    }
  },
  {
    id: 812,
    name: 'rillaboom',
    height: 21,
    weight: 900,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/812.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png'
    }
  },
  {
    id: 813,
    name: 'scorbunny',
    height: 3,
    weight: 45,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/813.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png'
    }
  },
  {
    id: 814,
    name: 'raboot',
    height: 6,
    weight: 90,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/814.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png'
    }
  },
  {
    id: 815,
    name: 'cinderace',
    height: 14,
    weight: 330,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/815.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png'
    }
  },
  {
    id: 816,
    name: 'sobble',
    height: 3,
    weight: 40,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/816.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png'
    }
  },
  {
    id: 817,
    name: 'drizzile',
    height: 7,
    weight: 115,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/817.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png'
    }
  },
  {
    id: 818,
    name: 'inteleon',
    height: 19,
    weight: 452,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/818.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png'
    }
  },
  {
    id: 819,
    name: 'skwovet',
    height: 3,
    weight: 25,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/819.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png'
    }
  },
  {
    id: 820,
    name: 'greedent',
    height: 6,
    weight: 60,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/820.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png'
    }
  },
  {
    id: 821,
    name: 'rookidee',
    height: 2,
    weight: 18,
    types: [
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/821.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png'
    }
  },
  {
    id: 822,
    name: 'corvisquire',
    height: 8,
    weight: 160,
    types: [
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/822.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png'
    }
  },
  {
    id: 823,
    name: 'corviknight',
    height: 22,
    weight: 750,
    types: [
      'flying',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/823.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png'
    }
  },
  {
    id: 824,
    name: 'blipbug',
    height: 4,
    weight: 80,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/824.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png'
    }
  },
  {
    id: 825,
    name: 'dottler',
    height: 4,
    weight: 195,
    types: [
      'bug',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/825.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png'
    }
  },
  {
    id: 826,
    name: 'orbeetle',
    height: 4,
    weight: 408,
    types: [
      'bug',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/826.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png'
    }
  },
  {
    id: 827,
    name: 'nickit',
    height: 6,
    weight: 89,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/827.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png'
    }
  },
  {
    id: 828,
    name: 'thievul',
    height: 12,
    weight: 199,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/828.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png'
    }
  },
  {
    id: 829,
    name: 'gossifleur',
    height: 4,
    weight: 22,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/829.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png'
    }
  },
  {
    id: 830,
    name: 'eldegoss',
    height: 5,
    weight: 25,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/830.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png'
    }
  },
  {
    id: 831,
    name: 'wooloo',
    height: 6,
    weight: 60,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/831.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png'
    }
  },
  {
    id: 832,
    name: 'dubwool',
    height: 13,
    weight: 430,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/832.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png'
    }
  },
  {
    id: 833,
    name: 'chewtle',
    height: 3,
    weight: 85,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/833.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png'
    }
  },
  {
    id: 834,
    name: 'drednaw',
    height: 10,
    weight: 1155,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/834.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png'
    }
  },
  {
    id: 835,
    name: 'yamper',
    height: 3,
    weight: 135,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/835.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png'
    }
  },
  {
    id: 836,
    name: 'boltund',
    height: 10,
    weight: 340,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/836.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png'
    }
  },
  {
    id: 837,
    name: 'rolycoly',
    height: 3,
    weight: 120,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/837.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png'
    }
  },
  {
    id: 838,
    name: 'carkol',
    height: 11,
    weight: 780,
    types: [
      'rock',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/838.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png'
    }
  },
  {
    id: 839,
    name: 'coalossal',
    height: 28,
    weight: 3105,
    types: [
      'rock',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/839.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png'
    }
  },
  {
    id: 840,
    name: 'applin',
    height: 2,
    weight: 5,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/840.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png'
    }
  },
  {
    id: 841,
    name: 'flapple',
    height: 3,
    weight: 10,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/841.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png'
    }
  },
  {
    id: 842,
    name: 'appletun',
    height: 4,
    weight: 130,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/842.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png'
    }
  },
  {
    id: 843,
    name: 'silicobra',
    height: 22,
    weight: 76,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/843.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png'
    }
  },
  {
    id: 844,
    name: 'sandaconda',
    height: 38,
    weight: 655,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/844.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png'
    }
  },
  {
    id: 845,
    name: 'cramorant',
    height: 8,
    weight: 180,
    types: [
      'flying',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/845.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png'
    }
  },
  {
    id: 846,
    name: 'arrokuda',
    height: 5,
    weight: 10,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/846.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png'
    }
  },
  {
    id: 847,
    name: 'barraskewda',
    height: 13,
    weight: 300,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/847.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png'
    }
  },
  {
    id: 848,
    name: 'toxel',
    height: 4,
    weight: 110,
    types: [
      'electric',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/848.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png'
    }
  },
  {
    id: 849,
    name: 'toxtricity-amped',
    height: 16,
    weight: 400,
    types: [
      'electric',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/849.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png'
    }
  },
  {
    id: 850,
    name: 'sizzlipede',
    height: 7,
    weight: 10,
    types: [
      'fire',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/850.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png'
    }
  },
  {
    id: 851,
    name: 'centiskorch',
    height: 30,
    weight: 1200,
    types: [
      'fire',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/851.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png'
    }
  },
  {
    id: 852,
    name: 'clobbopus',
    height: 6,
    weight: 40,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/852.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png'
    }
  },
  {
    id: 853,
    name: 'grapploct',
    height: 16,
    weight: 390,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/853.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png'
    }
  },
  {
    id: 854,
    name: 'sinistea',
    height: 1,
    weight: 2,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/854.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png'
    }
  },
  {
    id: 855,
    name: 'polteageist',
    height: 2,
    weight: 4,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/855.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png'
    }
  },
  {
    id: 856,
    name: 'hatenna',
    height: 4,
    weight: 34,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/856.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png'
    }
  },
  {
    id: 857,
    name: 'hattrem',
    height: 6,
    weight: 48,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/857.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png'
    }
  },
  {
    id: 858,
    name: 'hatterene',
    height: 21,
    weight: 51,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/858.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png'
    }
  },
  {
    id: 859,
    name: 'impidimp',
    height: 4,
    weight: 55,
    types: [
      'dark',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/859.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png'
    }
  },
  {
    id: 860,
    name: 'morgrem',
    height: 8,
    weight: 125,
    types: [
      'dark',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/860.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png'
    }
  },
  {
    id: 861,
    name: 'grimmsnarl',
    height: 15,
    weight: 610,
    types: [
      'dark',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/861.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png'
    }
  },
  {
    id: 862,
    name: 'obstagoon',
    height: 16,
    weight: 460,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/862.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png'
    }
  },
  {
    id: 863,
    name: 'perrserker',
    height: 8,
    weight: 280,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/863.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png'
    }
  },
  {
    id: 864,
    name: 'cursola',
    height: 10,
    weight: 4,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/864.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png'
    }
  },
  {
    id: 865,
    name: 'sirfetchd',
    height: 8,
    weight: 1170,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/865.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png'
    }
  },
  {
    id: 866,
    name: 'mr-rime',
    height: 15,
    weight: 582,
    types: [
      'ice',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/866.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png'
    }
  },
  {
    id: 867,
    name: 'runerigus',
    height: 16,
    weight: 666,
    types: [
      'ground',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/867.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png'
    }
  },
  {
    id: 868,
    name: 'milcery',
    height: 2,
    weight: 3,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/868.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png'
    }
  },
  {
    id: 869,
    name: 'alcremie',
    height: 3,
    weight: 5,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/869.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png'
    }
  },
  {
    id: 870,
    name: 'falinks',
    height: 30,
    weight: 620,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/870.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png'
    }
  },
  {
    id: 871,
    name: 'pincurchin',
    height: 3,
    weight: 10,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/871.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png'
    }
  },
  {
    id: 872,
    name: 'snom',
    height: 3,
    weight: 38,
    types: [
      'ice',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/872.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png'
    }
  },
  {
    id: 873,
    name: 'frosmoth',
    height: 13,
    weight: 420,
    types: [
      'ice',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/873.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png'
    }
  },
  {
    id: 874,
    name: 'stonjourner',
    height: 25,
    weight: 5200,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/874.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png'
    }
  },
  {
    id: 875,
    name: 'eiscue-ice',
    height: 14,
    weight: 890,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/875.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png'
    }
  },
  {
    id: 876,
    name: 'indeedee-male',
    height: 9,
    weight: 280,
    types: [
      'psychic',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/876.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png'
    }
  },
  {
    id: 877,
    name: 'morpeko-full-belly',
    height: 3,
    weight: 30,
    types: [
      'electric',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/877.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png'
    }
  },
  {
    id: 878,
    name: 'cufant',
    height: 12,
    weight: 1000,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/878.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png'
    }
  },
  {
    id: 879,
    name: 'copperajah',
    height: 30,
    weight: 6500,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/879.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png'
    }
  },
  {
    id: 880,
    name: 'dracozolt',
    height: 18,
    weight: 1900,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/880.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png'
    }
  },
  {
    id: 881,
    name: 'arctozolt',
    height: 23,
    weight: 1500,
    types: [
      'electric',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/881.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png'
    }
  },
  {
    id: 882,
    name: 'dracovish',
    height: 23,
    weight: 2150,
    types: [
      'water',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/882.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png'
    }
  },
  {
    id: 883,
    name: 'arctovish',
    height: 20,
    weight: 1750,
    types: [
      'water',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/883.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png'
    }
  },
  {
    id: 884,
    name: 'duraludon',
    height: 18,
    weight: 400,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/884.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png'
    }
  },
  {
    id: 885,
    name: 'dreepy',
    height: 5,
    weight: 20,
    types: [
      'dragon',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/885.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png'
    }
  },
  {
    id: 886,
    name: 'drakloak',
    height: 14,
    weight: 110,
    types: [
      'dragon',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/886.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png'
    }
  },
  {
    id: 887,
    name: 'dragapult',
    height: 30,
    weight: 500,
    types: [
      'dragon',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/887.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png'
    }
  },
  {
    id: 888,
    name: 'zacian',
    height: 28,
    weight: 1100,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/888.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png'
    }
  },
  {
    id: 889,
    name: 'zamazenta',
    height: 29,
    weight: 2100,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/889.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png'
    }
  },
  {
    id: 890,
    name: 'eternatus',
    height: 200,
    weight: 9500,
    types: [
      'poison',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/890.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png'
    }
  },
  {
    id: 891,
    name: 'kubfu',
    height: 6,
    weight: 120,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/891.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png'
    }
  },
  {
    id: 892,
    name: 'urshifu-single-strike',
    height: 19,
    weight: 1050,
    types: [
      'fighting',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/892.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png'
    }
  },
  {
    id: 893,
    name: 'zarude',
    height: 18,
    weight: 700,
    types: [
      'dark',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/893.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png'
    }
  },
  {
    id: 894,
    name: 'regieleki',
    height: 12,
    weight: 1450,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/894.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png'
    }
  },
  {
    id: 895,
    name: 'regidrago',
    height: 21,
    weight: 2000,
    types: [
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/895.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png'
    }
  },
  {
    id: 896,
    name: 'glastrier',
    height: 22,
    weight: 8000,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/896.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png'
    }
  },
  {
    id: 897,
    name: 'spectrier',
    height: 20,
    weight: 445,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/897.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png'
    }
  },
  {
    id: 898,
    name: 'calyrex',
    height: 11,
    weight: 77,
    types: [
      'psychic',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/898.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png'
    }
  },
  {
    id: 899,
    name: 'wyrdeer',
    height: 18,
    weight: 951,
    types: [
      'normal',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/899.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png'
    }
  },
  {
    id: 900,
    name: 'kleavor',
    height: 18,
    weight: 890,
    types: [
      'bug',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/900.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png'
    }
  },
  {
    id: 901,
    name: 'ursaluna',
    height: 24,
    weight: 2900,
    types: [
      'ground',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/901.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png'
    }
  },
  {
    id: 902,
    name: 'basculegion-male',
    height: 30,
    weight: 1100,
    types: [
      'water',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/902.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png'
    }
  },
  {
    id: 903,
    name: 'sneasler',
    height: 13,
    weight: 430,
    types: [
      'fighting',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/903.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png'
    }
  },
  {
    id: 904,
    name: 'overqwil',
    height: 25,
    weight: 605,
    types: [
      'dark',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/904.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png'
    }
  },
  {
    id: 905,
    name: 'enamorus-incarnate',
    height: 16,
    weight: 480,
    types: [
      'fairy',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/905.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png'
    }
  },
  {
    id: 906,
    name: 'sprigatito',
    height: 4,
    weight: 41,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/906.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png'
    }
  },
  {
    id: 907,
    name: 'floragato',
    height: 9,
    weight: 122,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/907.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png'
    }
  },
  {
    id: 908,
    name: 'meowscarada',
    height: 15,
    weight: 312,
    types: [
      'grass',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/908.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png'
    }
  },
  {
    id: 909,
    name: 'fuecoco',
    height: 4,
    weight: 98,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/909.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png'
    }
  },
  {
    id: 910,
    name: 'crocalor',
    height: 10,
    weight: 307,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/910.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png'
    }
  },
  {
    id: 911,
    name: 'skeledirge',
    height: 16,
    weight: 3265,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/911.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png'
    }
  },
  {
    id: 912,
    name: 'quaxly',
    height: 5,
    weight: 61,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/912.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png'
    }
  },
  {
    id: 913,
    name: 'quaxwell',
    height: 12,
    weight: 215,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/913.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png'
    }
  },
  {
    id: 914,
    name: 'quaquaval',
    height: 18,
    weight: 619,
    types: [
      'water',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/914.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png'
    }
  },
  {
    id: 915,
    name: 'lechonk',
    height: 5,
    weight: 102,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/915.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png'
    }
  },
  {
    id: 916,
    name: 'oinkologne',
    height: 10,
    weight: 1200,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/916.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png'
    }
  },
  {
    id: 917,
    name: 'tarountula',
    height: 3,
    weight: 40,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/917.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png'
    }
  },
  {
    id: 918,
    name: 'spidops',
    height: 10,
    weight: 165,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/918.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png'
    }
  },
  {
    id: 919,
    name: 'nymble',
    height: 2,
    weight: 10,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/919.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png'
    }
  },
  {
    id: 920,
    name: 'lokix',
    height: 10,
    weight: 175,
    types: [
      'bug',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/920.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png'
    }
  },
  {
    id: 921,
    name: 'pawmi',
    height: 3,
    weight: 25,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/921.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png'
    }
  },
  {
    id: 922,
    name: 'pawmo',
    height: 4,
    weight: 65,
    types: [
      'electric',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/922.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png'
    }
  },
  {
    id: 923,
    name: 'pawmot',
    height: 9,
    weight: 410,
    types: [
      'electric',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/923.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png'
    }
  },
  {
    id: 924,
    name: 'tandemaus',
    height: 3,
    weight: 18,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/924.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png'
    }
  },
  {
    id: 925,
    name: 'maushold',
    height: 3,
    weight: 23,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/925.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png'
    }
  },
  {
    id: 926,
    name: 'fidough',
    height: 3,
    weight: 109,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/926.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png'
    }
  },
  {
    id: 927,
    name: 'dachsbun',
    height: 5,
    weight: 149,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/927.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png'
    }
  },
  {
    id: 928,
    name: 'smoliv',
    height: 3,
    weight: 65,
    types: [
      'grass',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/928.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png'
    }
  },
  {
    id: 929,
    name: 'dolliv',
    height: 6,
    weight: 119,
    types: [
      'grass',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/929.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png'
    }
  },
  {
    id: 930,
    name: 'arboliva',
    height: 14,
    weight: 482,
    types: [
      'grass',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/930.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png'
    }
  },
  {
    id: 931,
    name: 'squawkabilly',
    height: 6,
    weight: 24,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/931.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png'
    }
  },
  {
    id: 932,
    name: 'nacli',
    height: 4,
    weight: 160,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/932.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png'
    }
  },
  {
    id: 933,
    name: 'naclstack',
    height: 6,
    weight: 1050,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/933.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png'
    }
  },
  {
    id: 934,
    name: 'garganacl',
    height: 23,
    weight: 2400,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/934.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png'
    }
  },
  {
    id: 935,
    name: 'charcadet',
    height: 6,
    weight: 105,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/935.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png'
    }
  },
  {
    id: 936,
    name: 'armarouge',
    height: 15,
    weight: 850,
    types: [
      'fire',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/936.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png'
    }
  },
  {
    id: 937,
    name: 'ceruledge',
    height: 16,
    weight: 620,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/937.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png'
    }
  },
  {
    id: 938,
    name: 'tadbulb',
    height: 3,
    weight: 4,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/938.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png'
    }
  },
  {
    id: 939,
    name: 'bellibolt',
    height: 12,
    weight: 1130,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/939.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png'
    }
  },
  {
    id: 940,
    name: 'wattrel',
    height: 4,
    weight: 36,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/940.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png'
    }
  },
  {
    id: 941,
    name: 'kilowattrel',
    height: 14,
    weight: 386,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/941.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png'
    }
  },
  {
    id: 942,
    name: 'maschiff',
    height: 5,
    weight: 160,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/942.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png'
    }
  },
  {
    id: 943,
    name: 'mabosstiff',
    height: 11,
    weight: 610,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/943.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png'
    }
  },
  {
    id: 944,
    name: 'shroodle',
    height: 2,
    weight: 7,
    types: [
      'poison',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/944.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png'
    }
  },
  {
    id: 945,
    name: 'grafaiai',
    height: 7,
    weight: 272,
    types: [
      'poison',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/945.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png'
    }
  },
  {
    id: 946,
    name: 'bramblin',
    height: 6,
    weight: 6,
    types: [
      'grass',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/946.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png'
    }
  },
  {
    id: 947,
    name: 'brambleghast',
    height: 12,
    weight: 60,
    types: [
      'grass',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/947.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png'
    }
  },
  {
    id: 948,
    name: 'toedscool',
    height: 9,
    weight: 330,
    types: [
      'ground',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/948.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png'
    }
  },
  {
    id: 949,
    name: 'toedscruel',
    height: 19,
    weight: 580,
    types: [
      'ground',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/949.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png'
    }
  },
  {
    id: 950,
    name: 'klawf',
    height: 13,
    weight: 790,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/950.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png'
    }
  },
  {
    id: 951,
    name: 'capsakid',
    height: 3,
    weight: 30,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/951.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png'
    }
  },
  {
    id: 952,
    name: 'scovillain',
    height: 9,
    weight: 150,
    types: [
      'grass',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/952.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png'
    }
  },
  {
    id: 953,
    name: 'rellor',
    height: 2,
    weight: 10,
    types: [
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/953.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png'
    }
  },
  {
    id: 954,
    name: 'rabsca',
    height: 3,
    weight: 35,
    types: [
      'bug',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/954.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png'
    }
  },
  {
    id: 955,
    name: 'flittle',
    height: 2,
    weight: 15,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/955.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png'
    }
  },
  {
    id: 956,
    name: 'espathra',
    height: 19,
    weight: 900,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/956.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png'
    }
  },
  {
    id: 957,
    name: 'tinkatink',
    height: 4,
    weight: 89,
    types: [
      'fairy',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/957.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png'
    }
  },
  {
    id: 958,
    name: 'tinkatuff',
    height: 7,
    weight: 591,
    types: [
      'fairy',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/958.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png'
    }
  },
  {
    id: 959,
    name: 'tinkaton',
    height: 7,
    weight: 1128,
    types: [
      'fairy',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/959.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png'
    }
  },
  {
    id: 960,
    name: 'wiglett',
    height: 12,
    weight: 18,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/960.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png'
    }
  },
  {
    id: 961,
    name: 'wugtrio',
    height: 12,
    weight: 54,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/961.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png'
    }
  },
  {
    id: 962,
    name: 'bombirdier',
    height: 15,
    weight: 429,
    types: [
      'flying',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/962.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png'
    }
  },
  {
    id: 963,
    name: 'finizen',
    height: 13,
    weight: 602,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/963.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png'
    }
  },
  {
    id: 964,
    name: 'palafin',
    height: 13,
    weight: 602,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/964.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png'
    }
  },
  {
    id: 965,
    name: 'varoom',
    height: 10,
    weight: 350,
    types: [
      'steel',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/965.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png'
    }
  },
  {
    id: 966,
    name: 'revavroom',
    height: 18,
    weight: 1200,
    types: [
      'steel',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/966.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png'
    }
  },
  {
    id: 967,
    name: 'cyclizar',
    height: 16,
    weight: 630,
    types: [
      'dragon',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/967.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png'
    }
  },
  {
    id: 968,
    name: 'orthworm',
    height: 25,
    weight: 3100,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/968.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png'
    }
  },
  {
    id: 969,
    name: 'glimmet',
    height: 7,
    weight: 80,
    types: [
      'rock',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/969.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png'
    }
  },
  {
    id: 970,
    name: 'glimmora',
    height: 15,
    weight: 450,
    types: [
      'rock',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/970.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png'
    }
  },
  {
    id: 971,
    name: 'greavard',
    height: 6,
    weight: 350,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/971.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png'
    }
  },
  {
    id: 972,
    name: 'houndstone',
    height: 20,
    weight: 150,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/972.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png'
    }
  },
  {
    id: 973,
    name: 'flamigo',
    height: 16,
    weight: 370,
    types: [
      'flying',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/973.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png'
    }
  },
  {
    id: 974,
    name: 'cetoddle',
    height: 12,
    weight: 450,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/974.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png'
    }
  },
  {
    id: 975,
    name: 'cetitan',
    height: 45,
    weight: 7000,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/975.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png'
    }
  },
  {
    id: 976,
    name: 'veluza',
    height: 25,
    weight: 900,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/976.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png'
    }
  },
  {
    id: 977,
    name: 'dondozo',
    height: 120,
    weight: 2200,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/977.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png'
    }
  },
  {
    id: 978,
    name: 'tatsugiri',
    height: 3,
    weight: 80,
    types: [
      'dragon',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/978.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png'
    }
  },
  {
    id: 979,
    name: 'annihilape',
    height: 12,
    weight: 560,
    types: [
      'fighting',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/979.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png'
    }
  },
  {
    id: 980,
    name: 'clodsire',
    height: 18,
    weight: 2230,
    types: [
      'poison',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/980.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png'
    }
  },
  {
    id: 981,
    name: 'farigiraf',
    height: 32,
    weight: 1600,
    types: [
      'normal',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/981.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png'
    }
  },
  {
    id: 982,
    name: 'dudunsparce',
    height: 36,
    weight: 392,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/982.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png'
    }
  },
  {
    id: 983,
    name: 'kingambit',
    height: 20,
    weight: 1200,
    types: [
      'dark',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/983.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png'
    }
  },
  {
    id: 984,
    name: 'great-tusk',
    height: 22,
    weight: 3200,
    types: [
      'ground',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/984.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png'
    }
  },
  {
    id: 985,
    name: 'scream-tail',
    height: 12,
    weight: 80,
    types: [
      'fairy',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/985.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png'
    }
  },
  {
    id: 986,
    name: 'brute-bonnet',
    height: 12,
    weight: 210,
    types: [
      'grass',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/986.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png'
    }
  },
  {
    id: 987,
    name: 'flutter-mane',
    height: 14,
    weight: 40,
    types: [
      'ghost',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/987.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png'
    }
  },
  {
    id: 988,
    name: 'slither-wing',
    height: 32,
    weight: 920,
    types: [
      'bug',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/988.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png'
    }
  },
  {
    id: 989,
    name: 'sandy-shocks',
    height: 23,
    weight: 600,
    types: [
      'electric',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/989.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png'
    }
  },
  {
    id: 990,
    name: 'iron-treads',
    height: 9,
    weight: 2400,
    types: [
      'ground',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/990.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png'
    }
  },
  {
    id: 991,
    name: 'iron-bundle',
    height: 6,
    weight: 110,
    types: [
      'ice',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/991.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png'
    }
  },
  {
    id: 992,
    name: 'iron-hands',
    height: 18,
    weight: 3807,
    types: [
      'fighting',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/992.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png'
    }
  },
  {
    id: 993,
    name: 'iron-jugulis',
    height: 13,
    weight: 1110,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/993.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png'
    }
  },
  {
    id: 994,
    name: 'iron-moth',
    height: 12,
    weight: 360,
    types: [
      'fire',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/994.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png'
    }
  },
  {
    id: 995,
    name: 'iron-thorns',
    height: 16,
    weight: 3030,
    types: [
      'rock',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/995.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png'
    }
  },
  {
    id: 996,
    name: 'frigibax',
    height: 5,
    weight: 170,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/996.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png'
    }
  },
  {
    id: 997,
    name: 'arctibax',
    height: 8,
    weight: 300,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/997.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png'
    }
  },
  {
    id: 998,
    name: 'baxcalibur',
    height: 21,
    weight: 2100,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/998.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png'
    }
  },
  {
    id: 999,
    name: 'gimmighoul',
    height: 3,
    weight: 50,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/999.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png'
    }
  },
  {
    id: 1000,
    name: 'gholdengo',
    height: 12,
    weight: 300,
    types: [
      'steel',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1000.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png'
    }
  },
  {
    id: 1001,
    name: 'wo-chien',
    height: 15,
    weight: 742,
    types: [
      'dark',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1001.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png'
    }
  },
  {
    id: 1002,
    name: 'chien-pao',
    height: 19,
    weight: 1522,
    types: [
      'dark',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1002.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png'
    }
  },
  {
    id: 1003,
    name: 'ting-lu',
    height: 27,
    weight: 6997,
    types: [
      'dark',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1003.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png'
    }
  },
  {
    id: 1004,
    name: 'chi-yu',
    height: 4,
    weight: 49,
    types: [
      'dark',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1004.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png'
    }
  },
  {
    id: 1005,
    name: 'roaring-moon',
    height: 20,
    weight: 3800,
    types: [
      'dragon',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1005.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png'
    }
  },
  {
    id: 1006,
    name: 'iron-valiant',
    height: 14,
    weight: 350,
    types: [
      'fairy',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1006.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png'
    }
  },
  {
    id: 1007,
    name: 'koraidon',
    height: 25,
    weight: 3030,
    types: [
      'fighting',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1007.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png'
    }
  },
  {
    id: 1008,
    name: 'miraidon',
    height: 35,
    weight: 2400,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1008.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png'
    }
  },
  {
    id: 1009,
    name: 'walking-wake',
    height: 35,
    weight: 2800,
    types: [
      'water',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1009.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png'
    }
  },
  {
    id: 1010,
    name: 'iron-leaves',
    height: 15,
    weight: 1250,
    types: [
      'grass',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1010.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png'
    }
  },
  {
    id: 1011,
    name: 'dipplin',
    height: 4,
    weight: 97,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1011.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png'
    }
  },
  {
    id: 1012,
    name: 'poltchageist',
    height: 1,
    weight: 11,
    types: [
      'grass',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1012.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png'
    }
  },
  {
    id: 1013,
    name: 'sinistcha',
    height: 2,
    weight: 22,
    types: [
      'grass',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1013.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png'
    }
  },
  {
    id: 1014,
    name: 'okidogi',
    height: 18,
    weight: 922,
    types: [
      'poison',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1014.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png'
    }
  },
  {
    id: 1015,
    name: 'munkidori',
    height: 10,
    weight: 122,
    types: [
      'poison',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1015.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png'
    }
  },
  {
    id: 1016,
    name: 'fezandipiti',
    height: 14,
    weight: 301,
    types: [
      'poison',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1016.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png'
    }
  },
  {
    id: 1017,
    name: 'ogerpon',
    height: 12,
    weight: 398,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1017.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png'
    }
  },
  {
    id: 1018,
    name: 'archaludon',
    height: 20,
    weight: 600,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1018.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png'
    }
  },
  {
    id: 1019,
    name: 'hydrapple',
    height: 18,
    weight: 930,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1019.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png'
    }
  },
  {
    id: 1020,
    name: 'gouging-fire',
    height: 35,
    weight: 5900,
    types: [
      'fire',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1020.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png'
    }
  },
  {
    id: 1021,
    name: 'raging-bolt',
    height: 52,
    weight: 4800,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1021.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png'
    }
  },
  {
    id: 1022,
    name: 'iron-boulder',
    height: 15,
    weight: 1625,
    types: [
      'rock',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1022.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png'
    }
  },
  {
    id: 1023,
    name: 'iron-crown',
    height: 16,
    weight: 1560,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1023.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png'
    }
  },
  {
    id: 1024,
    name: 'terapagos',
    height: 2,
    weight: 65,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1024.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png'
    }
  },
  {
    id: 1025,
    name: 'pecharunt',
    height: 3,
    weight: 3,
    types: [
      'poison',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png'
    }
  },
  {
    id: 10001,
    name: 'deoxys-attack',
    height: 17,
    weight: 608,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10001.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10001.png'
    }
  },
  {
    id: 10002,
    name: 'deoxys-defense',
    height: 17,
    weight: 608,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10002.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10002.png'
    }
  },
  {
    id: 10003,
    name: 'deoxys-speed',
    height: 17,
    weight: 608,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10003.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10003.png'
    }
  },
  {
    id: 10004,
    name: 'wormadam-sandy',
    height: 5,
    weight: 65,
    types: [
      'bug',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10004.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10004.png'
    }
  },
  {
    id: 10005,
    name: 'wormadam-trash',
    height: 5,
    weight: 65,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10005.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10005.png'
    }
  },
  {
    id: 10006,
    name: 'shaymin-sky',
    height: 4,
    weight: 52,
    types: [
      'grass',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10006.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10006.png'
    }
  },
  {
    id: 10007,
    name: 'giratina-origin',
    height: 69,
    weight: 6500,
    types: [
      'ghost',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10007.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10007.png'
    }
  },
  {
    id: 10008,
    name: 'rotom-heat',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10008.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10008.png'
    }
  },
  {
    id: 10009,
    name: 'rotom-wash',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10009.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10009.png'
    }
  },
  {
    id: 10010,
    name: 'rotom-frost',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10010.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10010.png'
    }
  },
  {
    id: 10011,
    name: 'rotom-fan',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10011.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10011.png'
    }
  },
  {
    id: 10012,
    name: 'rotom-mow',
    height: 3,
    weight: 3,
    types: [
      'electric',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10012.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10012.png'
    }
  },
  {
    id: 10013,
    name: 'castform-sunny',
    height: 3,
    weight: 8,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10013.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10013.png'
    }
  },
  {
    id: 10014,
    name: 'castform-rainy',
    height: 3,
    weight: 8,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10014.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10014.png'
    }
  },
  {
    id: 10015,
    name: 'castform-snowy',
    height: 3,
    weight: 8,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10015.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10015.png'
    }
  },
  {
    id: 10016,
    name: 'basculin-blue-striped',
    height: 10,
    weight: 180,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10016.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10016.png'
    }
  },
  {
    id: 10017,
    name: 'darmanitan-zen',
    height: 13,
    weight: 929,
    types: [
      'fire',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10017.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10017.png'
    }
  },
  {
    id: 10018,
    name: 'meloetta-pirouette',
    height: 6,
    weight: 65,
    types: [
      'normal',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10018.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10018.png'
    }
  },
  {
    id: 10019,
    name: 'tornadus-therian',
    height: 14,
    weight: 630,
    types: [
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10019.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10019.png'
    }
  },
  {
    id: 10020,
    name: 'thundurus-therian',
    height: 30,
    weight: 610,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10020.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10020.png'
    }
  },
  {
    id: 10021,
    name: 'landorus-therian',
    height: 13,
    weight: 680,
    types: [
      'ground',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10021.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10021.png'
    }
  },
  {
    id: 10022,
    name: 'kyurem-black',
    height: 33,
    weight: 3250,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10022.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10022.png'
    }
  },
  {
    id: 10023,
    name: 'kyurem-white',
    height: 36,
    weight: 3250,
    types: [
      'dragon',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10023.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10023.png'
    }
  },
  {
    id: 10024,
    name: 'keldeo-resolute',
    height: 14,
    weight: 485,
    types: [
      'water',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10024.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10024.png'
    }
  },
  {
    id: 10025,
    name: 'meowstic-female',
    height: 6,
    weight: 85,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10025.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10025.png'
    }
  },
  {
    id: 10026,
    name: 'aegislash-blade',
    height: 17,
    weight: 530,
    types: [
      'steel',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10026.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10026.png'
    }
  },
  {
    id: 10027,
    name: 'pumpkaboo-small',
    height: 3,
    weight: 35,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10027.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10027.png'
    }
  },
  {
    id: 10028,
    name: 'pumpkaboo-large',
    height: 5,
    weight: 75,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10028.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10028.png'
    }
  },
  {
    id: 10029,
    name: 'pumpkaboo-super',
    height: 8,
    weight: 150,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10029.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10029.png'
    }
  },
  {
    id: 10030,
    name: 'gourgeist-small',
    height: 7,
    weight: 95,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10030.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10030.png'
    }
  },
  {
    id: 10031,
    name: 'gourgeist-large',
    height: 11,
    weight: 140,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10031.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10031.png'
    }
  },
  {
    id: 10032,
    name: 'gourgeist-super',
    height: 17,
    weight: 390,
    types: [
      'ghost',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10032.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10032.png'
    }
  },
  {
    id: 10033,
    name: 'venusaur-mega',
    height: 24,
    weight: 1555,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10033.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png'
    }
  },
  {
    id: 10034,
    name: 'charizard-mega-x',
    height: 17,
    weight: 1105,
    types: [
      'fire',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10034.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png'
    }
  },
  {
    id: 10035,
    name: 'charizard-mega-y',
    height: 17,
    weight: 1005,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10035.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png'
    }
  },
  {
    id: 10036,
    name: 'blastoise-mega',
    height: 16,
    weight: 1011,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10036.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png'
    }
  },
  {
    id: 10037,
    name: 'alakazam-mega',
    height: 12,
    weight: 480,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10037.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png'
    }
  },
  {
    id: 10038,
    name: 'gengar-mega',
    height: 14,
    weight: 405,
    types: [
      'ghost',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10038.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png'
    }
  },
  {
    id: 10039,
    name: 'kangaskhan-mega',
    height: 22,
    weight: 1000,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10039.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png'
    }
  },
  {
    id: 10040,
    name: 'pinsir-mega',
    height: 17,
    weight: 590,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10040.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png'
    }
  },
  {
    id: 10041,
    name: 'gyarados-mega',
    height: 65,
    weight: 3050,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10041.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png'
    }
  },
  {
    id: 10042,
    name: 'aerodactyl-mega',
    height: 21,
    weight: 790,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10042.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png'
    }
  },
  {
    id: 10043,
    name: 'mewtwo-mega-x',
    height: 23,
    weight: 1270,
    types: [
      'psychic',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10043.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png'
    }
  },
  {
    id: 10044,
    name: 'mewtwo-mega-y',
    height: 15,
    weight: 330,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10044.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png'
    }
  },
  {
    id: 10045,
    name: 'ampharos-mega',
    height: 14,
    weight: 615,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10045.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10045.png'
    }
  },
  {
    id: 10046,
    name: 'scizor-mega',
    height: 20,
    weight: 1250,
    types: [
      'bug',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10046.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10046.png'
    }
  },
  {
    id: 10047,
    name: 'heracross-mega',
    height: 17,
    weight: 625,
    types: [
      'bug',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10047.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10047.png'
    }
  },
  {
    id: 10048,
    name: 'houndoom-mega',
    height: 19,
    weight: 495,
    types: [
      'dark',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10048.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10048.png'
    }
  },
  {
    id: 10049,
    name: 'tyranitar-mega',
    height: 25,
    weight: 2550,
    types: [
      'rock',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10049.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png'
    }
  },
  {
    id: 10050,
    name: 'blaziken-mega',
    height: 19,
    weight: 520,
    types: [
      'fire',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10050.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png'
    }
  },
  {
    id: 10051,
    name: 'gardevoir-mega',
    height: 16,
    weight: 484,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10051.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png'
    }
  },
  {
    id: 10052,
    name: 'mawile-mega',
    height: 10,
    weight: 235,
    types: [
      'steel',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10052.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png'
    }
  },
  {
    id: 10053,
    name: 'aggron-mega',
    height: 22,
    weight: 3950,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10053.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png'
    }
  },
  {
    id: 10054,
    name: 'medicham-mega',
    height: 13,
    weight: 315,
    types: [
      'fighting',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10054.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10054.png'
    }
  },
  {
    id: 10055,
    name: 'manectric-mega',
    height: 18,
    weight: 440,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10055.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10055.png'
    }
  },
  {
    id: 10056,
    name: 'banette-mega',
    height: 12,
    weight: 130,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10056.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10056.png'
    }
  },
  {
    id: 10057,
    name: 'absol-mega',
    height: 12,
    weight: 490,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10057.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png'
    }
  },
  {
    id: 10058,
    name: 'garchomp-mega',
    height: 19,
    weight: 950,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10058.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png'
    }
  },
  {
    id: 10059,
    name: 'lucario-mega',
    height: 13,
    weight: 575,
    types: [
      'fighting',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10059.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png'
    }
  },
  {
    id: 10060,
    name: 'abomasnow-mega',
    height: 27,
    weight: 1850,
    types: [
      'grass',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10060.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10060.png'
    }
  },
  {
    id: 10061,
    name: 'floette-eternal',
    height: 2,
    weight: 9,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10061.png'
    }
  },
  {
    id: 10062,
    name: 'latias-mega',
    height: 18,
    weight: 520,
    types: [
      'dragon',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10062.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10062.png'
    }
  },
  {
    id: 10063,
    name: 'latios-mega',
    height: 23,
    weight: 700,
    types: [
      'dragon',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10063.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10063.png'
    }
  },
  {
    id: 10064,
    name: 'swampert-mega',
    height: 19,
    weight: 1020,
    types: [
      'water',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10064.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png'
    }
  },
  {
    id: 10065,
    name: 'sceptile-mega',
    height: 19,
    weight: 552,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10065.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10065.png'
    }
  },
  {
    id: 10066,
    name: 'sableye-mega',
    height: 5,
    weight: 1610,
    types: [
      'dark',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10066.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10066.png'
    }
  },
  {
    id: 10067,
    name: 'altaria-mega',
    height: 15,
    weight: 206,
    types: [
      'dragon',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10067.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10067.png'
    }
  },
  {
    id: 10068,
    name: 'gallade-mega',
    height: 16,
    weight: 564,
    types: [
      'psychic',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10068.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10068.png'
    }
  },
  {
    id: 10069,
    name: 'audino-mega',
    height: 15,
    weight: 320,
    types: [
      'normal',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10069.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10069.png'
    }
  },
  {
    id: 10070,
    name: 'sharpedo-mega',
    height: 25,
    weight: 1303,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10070.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10070.png'
    }
  },
  {
    id: 10071,
    name: 'slowbro-mega',
    height: 20,
    weight: 1200,
    types: [
      'water',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10071.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png'
    }
  },
  {
    id: 10072,
    name: 'steelix-mega',
    height: 105,
    weight: 7400,
    types: [
      'steel',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10072.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10072.png'
    }
  },
  {
    id: 10073,
    name: 'pidgeot-mega',
    height: 22,
    weight: 505,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10073.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png'
    }
  },
  {
    id: 10074,
    name: 'glalie-mega',
    height: 21,
    weight: 3502,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10074.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10074.png'
    }
  },
  {
    id: 10075,
    name: 'diancie-mega',
    height: 11,
    weight: 278,
    types: [
      'rock',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10075.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10075.png'
    }
  },
  {
    id: 10076,
    name: 'metagross-mega',
    height: 25,
    weight: 9429,
    types: [
      'steel',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10076.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png'
    }
  },
  {
    id: 10077,
    name: 'kyogre-primal',
    height: 98,
    weight: 4300,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10077.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png'
    }
  },
  {
    id: 10078,
    name: 'groudon-primal',
    height: 50,
    weight: 9997,
    types: [
      'ground',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10078.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png'
    }
  },
  {
    id: 10079,
    name: 'rayquaza-mega',
    height: 108,
    weight: 3920,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10079.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png'
    }
  },
  {
    id: 10080,
    name: 'pikachu-rock-star',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10080.png'
    }
  },
  {
    id: 10081,
    name: 'pikachu-belle',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10081.png'
    }
  },
  {
    id: 10082,
    name: 'pikachu-pop-star',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10082.png'
    }
  },
  {
    id: 10083,
    name: 'pikachu-phd',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10083.png'
    }
  },
  {
    id: 10084,
    name: 'pikachu-libre',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10084.png'
    }
  },
  {
    id: 10085,
    name: 'pikachu-cosplay',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10085.png'
    }
  },
  {
    id: 10086,
    name: 'hoopa-unbound',
    height: 65,
    weight: 4900,
    types: [
      'psychic',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10086.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10086.png'
    }
  },
  {
    id: 10087,
    name: 'camerupt-mega',
    height: 25,
    weight: 3205,
    types: [
      'fire',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10087.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10087.png'
    }
  },
  {
    id: 10088,
    name: 'lopunny-mega',
    height: 13,
    weight: 283,
    types: [
      'normal',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10088.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png'
    }
  },
  {
    id: 10089,
    name: 'salamence-mega',
    height: 18,
    weight: 1126,
    types: [
      'dragon',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10089.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png'
    }
  },
  {
    id: 10090,
    name: 'beedrill-mega',
    height: 14,
    weight: 405,
    types: [
      'bug',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10090.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10090.png'
    }
  },
  {
    id: 10091,
    name: 'rattata-alola',
    height: 3,
    weight: 38,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10091.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png'
    }
  },
  {
    id: 10092,
    name: 'raticate-alola',
    height: 7,
    weight: 255,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10092.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png'
    }
  },
  {
    id: 10093,
    name: 'raticate-totem-alola',
    height: 14,
    weight: 1050,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10093.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10093.png'
    }
  },
  {
    id: 10094,
    name: 'pikachu-original-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10094.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10094.png'
    }
  },
  {
    id: 10095,
    name: 'pikachu-hoenn-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10095.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10095.png'
    }
  },
  {
    id: 10096,
    name: 'pikachu-sinnoh-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10096.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10096.png'
    }
  },
  {
    id: 10097,
    name: 'pikachu-unova-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10097.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10097.png'
    }
  },
  {
    id: 10098,
    name: 'pikachu-kalos-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10098.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10098.png'
    }
  },
  {
    id: 10099,
    name: 'pikachu-alola-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10099.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10099.png'
    }
  },
  {
    id: 10100,
    name: 'raichu-alola',
    height: 7,
    weight: 210,
    types: [
      'electric',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10100.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png'
    }
  },
  {
    id: 10101,
    name: 'sandshrew-alola',
    height: 7,
    weight: 400,
    types: [
      'ice',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10101.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png'
    }
  },
  {
    id: 10102,
    name: 'sandslash-alola',
    height: 12,
    weight: 550,
    types: [
      'ice',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10102.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png'
    }
  },
  {
    id: 10103,
    name: 'vulpix-alola',
    height: 6,
    weight: 99,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10103.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png'
    }
  },
  {
    id: 10104,
    name: 'ninetales-alola',
    height: 11,
    weight: 199,
    types: [
      'ice',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10104.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png'
    }
  },
  {
    id: 10105,
    name: 'diglett-alola',
    height: 2,
    weight: 10,
    types: [
      'ground',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10105.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png'
    }
  },
  {
    id: 10106,
    name: 'dugtrio-alola',
    height: 7,
    weight: 666,
    types: [
      'ground',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10106.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png'
    }
  },
  {
    id: 10107,
    name: 'meowth-alola',
    height: 4,
    weight: 42,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10107.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png'
    }
  },
  {
    id: 10108,
    name: 'persian-alola',
    height: 11,
    weight: 330,
    types: [
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10108.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png'
    }
  },
  {
    id: 10109,
    name: 'geodude-alola',
    height: 4,
    weight: 203,
    types: [
      'rock',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10109.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png'
    }
  },
  {
    id: 10110,
    name: 'graveler-alola',
    height: 10,
    weight: 1100,
    types: [
      'rock',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10110.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png'
    }
  },
  {
    id: 10111,
    name: 'golem-alola',
    height: 17,
    weight: 3160,
    types: [
      'rock',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10111.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png'
    }
  },
  {
    id: 10112,
    name: 'grimer-alola',
    height: 7,
    weight: 420,
    types: [
      'poison',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10112.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png'
    }
  },
  {
    id: 10113,
    name: 'muk-alola',
    height: 10,
    weight: 520,
    types: [
      'poison',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10113.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png'
    }
  },
  {
    id: 10114,
    name: 'exeggutor-alola',
    height: 109,
    weight: 4156,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10114.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png'
    }
  },
  {
    id: 10115,
    name: 'marowak-alola',
    height: 10,
    weight: 340,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10115.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png'
    }
  },
  {
    id: 10116,
    name: 'greninja-battle-bond',
    height: 15,
    weight: 400,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10116.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10116.png'
    }
  },
  {
    id: 10117,
    name: 'greninja-ash',
    height: 15,
    weight: 400,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10117.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10117.png'
    }
  },
  {
    id: 10118,
    name: 'zygarde-10-power-construct',
    height: 12,
    weight: 335,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10118.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10118.png'
    }
  },
  {
    id: 10119,
    name: 'zygarde-50-power-construct',
    height: 50,
    weight: 3050,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10119.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10119.png'
    }
  },
  {
    id: 10120,
    name: 'zygarde-complete',
    height: 45,
    weight: 6100,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10120.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10120.png'
    }
  },
  {
    id: 10121,
    name: 'gumshoos-totem',
    height: 14,
    weight: 600,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10121.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10121.png'
    }
  },
  {
    id: 10122,
    name: 'vikavolt-totem',
    height: 26,
    weight: 1475,
    types: [
      'bug',
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10122.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10122.png'
    }
  },
  {
    id: 10123,
    name: 'oricorio-pom-pom',
    height: 6,
    weight: 34,
    types: [
      'electric',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10123.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10123.png'
    }
  },
  {
    id: 10124,
    name: 'oricorio-pau',
    height: 6,
    weight: 34,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10124.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10124.png'
    }
  },
  {
    id: 10125,
    name: 'oricorio-sensu',
    height: 6,
    weight: 34,
    types: [
      'ghost',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10125.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10125.png'
    }
  },
  {
    id: 10126,
    name: 'lycanroc-midnight',
    height: 11,
    weight: 250,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10126.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10126.png'
    }
  },
  {
    id: 10127,
    name: 'wishiwashi-school',
    height: 82,
    weight: 786,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10127.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10127.png'
    }
  },
  {
    id: 10128,
    name: 'lurantis-totem',
    height: 15,
    weight: 580,
    types: [
      'grass'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10128.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10128.png'
    }
  },
  {
    id: 10129,
    name: 'salazzle-totem',
    height: 21,
    weight: 810,
    types: [
      'poison',
      'fire'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10129.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10129.png'
    }
  },
  {
    id: 10130,
    name: 'minior-orange-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10130.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10130.png'
    }
  },
  {
    id: 10131,
    name: 'minior-yellow-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10131.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10131.png'
    }
  },
  {
    id: 10132,
    name: 'minior-green-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10132.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10132.png'
    }
  },
  {
    id: 10133,
    name: 'minior-blue-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10133.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10133.png'
    }
  },
  {
    id: 10134,
    name: 'minior-indigo-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10134.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10134.png'
    }
  },
  {
    id: 10135,
    name: 'minior-violet-meteor',
    height: 3,
    weight: 400,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10135.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10135.png'
    }
  },
  {
    id: 10136,
    name: 'minior-red',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10136.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10136.png'
    }
  },
  {
    id: 10137,
    name: 'minior-orange',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10137.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10137.png'
    }
  },
  {
    id: 10138,
    name: 'minior-yellow',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10138.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10138.png'
    }
  },
  {
    id: 10139,
    name: 'minior-green',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10139.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10139.png'
    }
  },
  {
    id: 10140,
    name: 'minior-blue',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10140.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10140.png'
    }
  },
  {
    id: 10141,
    name: 'minior-indigo',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10141.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10141.png'
    }
  },
  {
    id: 10142,
    name: 'minior-violet',
    height: 3,
    weight: 3,
    types: [
      'rock',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10142.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10142.png'
    }
  },
  {
    id: 10143,
    name: 'mimikyu-busted',
    height: 2,
    weight: 7,
    types: [
      'ghost',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10143.png',
      officialArtwork: null
    }
  },
  {
    id: 10144,
    name: 'mimikyu-totem-disguised',
    height: 4,
    weight: 28,
    types: [
      'ghost',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10144.png'
    }
  },
  {
    id: 10145,
    name: 'mimikyu-totem-busted',
    height: 4,
    weight: 28,
    types: [
      'ghost',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10145.png',
      officialArtwork: null
    }
  },
  {
    id: 10146,
    name: 'kommo-o-totem',
    height: 24,
    weight: 2075,
    types: [
      'dragon',
      'fighting'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10146.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10146.png'
    }
  },
  {
    id: 10147,
    name: 'magearna-original',
    height: 10,
    weight: 805,
    types: [
      'steel',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10147.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10147.png'
    }
  },
  {
    id: 10148,
    name: 'pikachu-partner-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10148.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10148.png'
    }
  },
  {
    id: 10149,
    name: 'marowak-totem',
    height: 17,
    weight: 980,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10149.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10149.png'
    }
  },
  {
    id: 10150,
    name: 'ribombee-totem',
    height: 4,
    weight: 20,
    types: [
      'bug',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10150.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10150.png'
    }
  },
  {
    id: 10151,
    name: 'rockruff-own-tempo',
    height: 5,
    weight: 92,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png',
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10151.png'
    }
  },
  {
    id: 10152,
    name: 'lycanroc-dusk',
    height: 8,
    weight: 250,
    types: [
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10152.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10152.png'
    }
  },
  {
    id: 10153,
    name: 'araquanid-totem',
    height: 31,
    weight: 2175,
    types: [
      'water',
      'bug'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10153.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10153.png'
    }
  },
  {
    id: 10154,
    name: 'togedemaru-totem',
    height: 6,
    weight: 130,
    types: [
      'electric',
      'steel'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10154.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10154.png'
    }
  },
  {
    id: 10155,
    name: 'necrozma-dusk',
    height: 38,
    weight: 4600,
    types: [
      'psychic',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10155.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10155.png'
    }
  },
  {
    id: 10156,
    name: 'necrozma-dawn',
    height: 42,
    weight: 3500,
    types: [
      'psychic',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10156.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10156.png'
    }
  },
  {
    id: 10157,
    name: 'necrozma-ultra',
    height: 75,
    weight: 2300,
    types: [
      'psychic',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10157.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10157.png'
    }
  },
  {
    id: 10158,
    name: 'pikachu-starter',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10158.png'
    }
  },
  {
    id: 10159,
    name: 'eevee-starter',
    height: 3,
    weight: 65,
    types: [
      'normal'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10159.png'
    }
  },
  {
    id: 10160,
    name: 'pikachu-world-cap',
    height: 4,
    weight: 60,
    types: [
      'electric'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10160.png'
    }
  },
  {
    id: 10161,
    name: 'meowth-galar',
    height: 4,
    weight: 75,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10161.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png'
    }
  },
  {
    id: 10162,
    name: 'ponyta-galar',
    height: 8,
    weight: 240,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10162.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png'
    }
  },
  {
    id: 10163,
    name: 'rapidash-galar',
    height: 17,
    weight: 800,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10163.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png'
    }
  },
  {
    id: 10164,
    name: 'slowpoke-galar',
    height: 12,
    weight: 360,
    types: [
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10164.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png'
    }
  },
  {
    id: 10165,
    name: 'slowbro-galar',
    height: 16,
    weight: 705,
    types: [
      'poison',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10165.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png'
    }
  },
  {
    id: 10166,
    name: 'farfetchd-galar',
    height: 8,
    weight: 420,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10166.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png'
    }
  },
  {
    id: 10167,
    name: 'weezing-galar',
    height: 30,
    weight: 160,
    types: [
      'poison',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10167.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png'
    }
  },
  {
    id: 10168,
    name: 'mr-mime-galar',
    height: 14,
    weight: 568,
    types: [
      'ice',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10168.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png'
    }
  },
  {
    id: 10169,
    name: 'articuno-galar',
    height: 17,
    weight: 509,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10169.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png'
    }
  },
  {
    id: 10170,
    name: 'zapdos-galar',
    height: 16,
    weight: 582,
    types: [
      'fighting',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10170.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png'
    }
  },
  {
    id: 10171,
    name: 'moltres-galar',
    height: 20,
    weight: 660,
    types: [
      'dark',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10171.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png'
    }
  },
  {
    id: 10172,
    name: 'slowking-galar',
    height: 18,
    weight: 795,
    types: [
      'poison',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10172.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png'
    }
  },
  {
    id: 10173,
    name: 'corsola-galar',
    height: 6,
    weight: 5,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10173.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png'
    }
  },
  {
    id: 10174,
    name: 'zigzagoon-galar',
    height: 4,
    weight: 175,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10174.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png'
    }
  },
  {
    id: 10175,
    name: 'linoone-galar',
    height: 5,
    weight: 325,
    types: [
      'dark',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10175.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png'
    }
  },
  {
    id: 10176,
    name: 'darumaka-galar',
    height: 7,
    weight: 400,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10176.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png'
    }
  },
  {
    id: 10177,
    name: 'darmanitan-galar-standard',
    height: 17,
    weight: 1200,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10177.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png'
    }
  },
  {
    id: 10178,
    name: 'darmanitan-galar-zen',
    height: 17,
    weight: 1200,
    types: [
      'ice',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10178.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10178.png'
    }
  },
  {
    id: 10179,
    name: 'yamask-galar',
    height: 5,
    weight: 15,
    types: [
      'ground',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10179.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png'
    }
  },
  {
    id: 10180,
    name: 'stunfisk-galar',
    height: 7,
    weight: 205,
    types: [
      'ground',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10180.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png'
    }
  },
  {
    id: 10181,
    name: 'zygarde-10',
    height: 12,
    weight: 335,
    types: [
      'dragon',
      'ground'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10181.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10181.png'
    }
  },
  {
    id: 10182,
    name: 'cramorant-gulping',
    height: 8,
    weight: 180,
    types: [
      'flying',
      'water'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/845-gulping.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10182.png'
    }
  },
  {
    id: 10183,
    name: 'cramorant-gorging',
    height: 8,
    weight: 180,
    types: [
      'flying',
      'water'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/845-gorging.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10183.png'
    }
  },
  {
    id: 10184,
    name: 'toxtricity-low-key',
    height: 16,
    weight: 400,
    types: [
      'electric',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10184.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10184.png'
    }
  },
  {
    id: 10185,
    name: 'eiscue-noice',
    height: 14,
    weight: 890,
    types: [
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10185.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10185.png'
    }
  },
  {
    id: 10186,
    name: 'indeedee-female',
    height: 9,
    weight: 280,
    types: [
      'psychic',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10186.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10186.png'
    }
  },
  {
    id: 10187,
    name: 'morpeko-hangry',
    height: 3,
    weight: 30,
    types: [
      'electric',
      'dark'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/877-hangry.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10187.png'
    }
  },
  {
    id: 10188,
    name: 'zacian-crowned',
    height: 28,
    weight: 3550,
    types: [
      'fairy',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10188.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10188.png'
    }
  },
  {
    id: 10189,
    name: 'zamazenta-crowned',
    height: 29,
    weight: 7850,
    types: [
      'fighting',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10189.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10189.png'
    }
  },
  {
    id: 10190,
    name: 'eternatus-eternamax',
    height: 1000,
    weight: 0,
    types: [
      'poison',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10190.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10190.png'
    }
  },
  {
    id: 10191,
    name: 'urshifu-rapid-strike',
    height: 19,
    weight: 1050,
    types: [
      'fighting',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10191.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10191.png'
    }
  },
  {
    id: 10192,
    name: 'zarude-dada',
    height: 18,
    weight: 700,
    types: [
      'dark',
      'grass'
    ],
    sprites: {
      default: null,
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/893-dada.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10192.png'
    }
  },
  {
    id: 10193,
    name: 'calyrex-ice',
    height: 24,
    weight: 8091,
    types: [
      'psychic',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10193.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10193.png'
    }
  },
  {
    id: 10194,
    name: 'calyrex-shadow',
    height: 24,
    weight: 536,
    types: [
      'psychic',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10194.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10194.png'
    }
  },
  {
    id: 10195,
    name: 'venusaur-gmax',
    height: 240,
    weight: 10000,
    types: [
      'grass',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10195.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png'
    }
  },
  {
    id: 10196,
    name: 'charizard-gmax',
    height: 280,
    weight: 10000,
    types: [
      'fire',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10196.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png'
    }
  },
  {
    id: 10197,
    name: 'blastoise-gmax',
    height: 250,
    weight: 10000,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10197.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10197.png'
    }
  },
  {
    id: 10198,
    name: 'butterfree-gmax',
    height: 170,
    weight: 10000,
    types: [
      'bug',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10198.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10198.png'
    }
  },
  {
    id: 10199,
    name: 'pikachu-gmax',
    height: 210,
    weight: 10000,
    types: [
      'electric'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10199.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10199.png'
    }
  },
  {
    id: 10200,
    name: 'meowth-gmax',
    height: 330,
    weight: 10000,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10200.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10200.png'
    }
  },
  {
    id: 10201,
    name: 'machamp-gmax',
    height: 250,
    weight: 10000,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10201.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10201.png'
    }
  },
  {
    id: 10202,
    name: 'gengar-gmax',
    height: 200,
    weight: 10000,
    types: [
      'ghost',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10202.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10202.png'
    }
  },
  {
    id: 10203,
    name: 'kingler-gmax',
    height: 190,
    weight: 10000,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10203.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10203.png'
    }
  },
  {
    id: 10204,
    name: 'lapras-gmax',
    height: 240,
    weight: 10000,
    types: [
      'water',
      'ice'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10204.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10204.png'
    }
  },
  {
    id: 10205,
    name: 'eevee-gmax',
    height: 180,
    weight: 10000,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10205.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10205.png'
    }
  },
  {
    id: 10206,
    name: 'snorlax-gmax',
    height: 350,
    weight: 10000,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10206.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10206.png'
    }
  },
  {
    id: 10207,
    name: 'garbodor-gmax',
    height: 210,
    weight: 10000,
    types: [
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10207.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10207.png'
    }
  },
  {
    id: 10208,
    name: 'melmetal-gmax',
    height: 250,
    weight: 10000,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10208.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10208.png'
    }
  },
  {
    id: 10209,
    name: 'rillaboom-gmax',
    height: 280,
    weight: 10000,
    types: [
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10209.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10209.png'
    }
  },
  {
    id: 10210,
    name: 'cinderace-gmax',
    height: 270,
    weight: 10000,
    types: [
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10210.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10210.png'
    }
  },
  {
    id: 10211,
    name: 'inteleon-gmax',
    height: 400,
    weight: 10000,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10211.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10211.png'
    }
  },
  {
    id: 10212,
    name: 'corviknight-gmax',
    height: 140,
    weight: 10000,
    types: [
      'flying',
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10212.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10212.png'
    }
  },
  {
    id: 10213,
    name: 'orbeetle-gmax',
    height: 140,
    weight: 10000,
    types: [
      'bug',
      'psychic'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10213.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10213.png'
    }
  },
  {
    id: 10214,
    name: 'drednaw-gmax',
    height: 240,
    weight: 10000,
    types: [
      'water',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10214.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10214.png'
    }
  },
  {
    id: 10215,
    name: 'coalossal-gmax',
    height: 420,
    weight: 10000,
    types: [
      'rock',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10215.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10215.png'
    }
  },
  {
    id: 10216,
    name: 'flapple-gmax',
    height: 240,
    weight: 10000,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10216.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10216.png'
    }
  },
  {
    id: 10217,
    name: 'appletun-gmax',
    height: 240,
    weight: 10000,
    types: [
      'grass',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10217.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10217.png'
    }
  },
  {
    id: 10218,
    name: 'sandaconda-gmax',
    height: 220,
    weight: 10000,
    types: [
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10218.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10218.png'
    }
  },
  {
    id: 10219,
    name: 'toxtricity-amped-gmax',
    height: 240,
    weight: 10000,
    types: [
      'electric',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10219.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10219.png'
    }
  },
  {
    id: 10220,
    name: 'centiskorch-gmax',
    height: 750,
    weight: 10000,
    types: [
      'fire',
      'bug'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10220.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10220.png'
    }
  },
  {
    id: 10221,
    name: 'hatterene-gmax',
    height: 260,
    weight: 10000,
    types: [
      'psychic',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10221.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10221.png'
    }
  },
  {
    id: 10222,
    name: 'grimmsnarl-gmax',
    height: 320,
    weight: 10000,
    types: [
      'dark',
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10222.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10222.png'
    }
  },
  {
    id: 10223,
    name: 'alcremie-gmax',
    height: 300,
    weight: 10000,
    types: [
      'fairy'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10223.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10223.png'
    }
  },
  {
    id: 10224,
    name: 'copperajah-gmax',
    height: 230,
    weight: 10000,
    types: [
      'steel'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10224.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10224.png'
    }
  },
  {
    id: 10225,
    name: 'duraludon-gmax',
    height: 430,
    weight: 10000,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10225.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10225.png'
    }
  },
  {
    id: 10226,
    name: 'urshifu-single-strike-gmax',
    height: 290,
    weight: 10000,
    types: [
      'fighting',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10226.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10226.png'
    }
  },
  {
    id: 10227,
    name: 'urshifu-rapid-strike-gmax',
    height: 260,
    weight: 10000,
    types: [
      'fighting',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10227.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10227.png'
    }
  },
  {
    id: 10228,
    name: 'toxtricity-low-key-gmax',
    height: 240,
    weight: 10000,
    types: [
      'electric',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10228.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10228.png'
    }
  },
  {
    id: 10229,
    name: 'growlithe-hisui',
    height: 8,
    weight: 227,
    types: [
      'fire',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10229.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10229.png'
    }
  },
  {
    id: 10230,
    name: 'arcanine-hisui',
    height: 20,
    weight: 1680,
    types: [
      'fire',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10230.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png'
    }
  },
  {
    id: 10231,
    name: 'voltorb-hisui',
    height: 5,
    weight: 130,
    types: [
      'electric',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10231.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10231.png'
    }
  },
  {
    id: 10232,
    name: 'electrode-hisui',
    height: 12,
    weight: 710,
    types: [
      'electric',
      'grass'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10232.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png'
    }
  },
  {
    id: 10233,
    name: 'typhlosion-hisui',
    height: 16,
    weight: 698,
    types: [
      'fire',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10233.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png'
    }
  },
  {
    id: 10234,
    name: 'qwilfish-hisui',
    height: 5,
    weight: 39,
    types: [
      'dark',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10234.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png'
    }
  },
  {
    id: 10235,
    name: 'sneasel-hisui',
    height: 9,
    weight: 270,
    types: [
      'fighting',
      'poison'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10235.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10235.png'
    }
  },
  {
    id: 10236,
    name: 'samurott-hisui',
    height: 15,
    weight: 582,
    types: [
      'water',
      'dark'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10236.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png'
    }
  },
  {
    id: 10237,
    name: 'lilligant-hisui',
    height: 12,
    weight: 192,
    types: [
      'grass',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10237.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png'
    }
  },
  {
    id: 10238,
    name: 'zorua-hisui',
    height: 7,
    weight: 125,
    types: [
      'normal',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10238.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png'
    }
  },
  {
    id: 10239,
    name: 'zoroark-hisui',
    height: 16,
    weight: 730,
    types: [
      'normal',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10239.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png'
    }
  },
  {
    id: 10240,
    name: 'braviary-hisui',
    height: 17,
    weight: 434,
    types: [
      'psychic',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10240.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png'
    }
  },
  {
    id: 10241,
    name: 'sliggoo-hisui',
    height: 7,
    weight: 685,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10241.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10241.png'
    }
  },
  {
    id: 10242,
    name: 'goodra-hisui',
    height: 17,
    weight: 3341,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10242.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png'
    }
  },
  {
    id: 10243,
    name: 'avalugg-hisui',
    height: 14,
    weight: 2624,
    types: [
      'ice',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10243.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png'
    }
  },
  {
    id: 10244,
    name: 'decidueye-hisui',
    height: 16,
    weight: 370,
    types: [
      'grass',
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10244.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png'
    }
  },
  {
    id: 10245,
    name: 'dialga-origin',
    height: 70,
    weight: 8487,
    types: [
      'steel',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10245.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10245.png'
    }
  },
  {
    id: 10246,
    name: 'palkia-origin',
    height: 63,
    weight: 6590,
    types: [
      'water',
      'dragon'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10246.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10246.png'
    }
  },
  {
    id: 10247,
    name: 'basculin-white-striped',
    height: 10,
    weight: 180,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10247.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10247.png'
    }
  },
  {
    id: 10248,
    name: 'basculegion-female',
    height: 30,
    weight: 1100,
    types: [
      'water',
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10248.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10248.png'
    }
  },
  {
    id: 10249,
    name: 'enamorus-therian',
    height: 16,
    weight: 480,
    types: [
      'fairy',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10249.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10249.png'
    }
  },
  {
    id: 10250,
    name: 'tauros-paldea-combat-breed',
    height: 14,
    weight: 1150,
    types: [
      'fighting'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10250.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png'
    }
  },
  {
    id: 10251,
    name: 'tauros-paldea-blaze-breed',
    height: 14,
    weight: 850,
    types: [
      'fighting',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10251.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png'
    }
  },
  {
    id: 10252,
    name: 'tauros-paldea-aqua-breed',
    height: 14,
    weight: 1100,
    types: [
      'fighting',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10252.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png'
    }
  },
  {
    id: 10253,
    name: 'wooper-paldea',
    height: 4,
    weight: 110,
    types: [
      'poison',
      'ground'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10253.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10253.png'
    }
  },
  {
    id: 10254,
    name: 'oinkologne-female',
    height: 10,
    weight: 1200,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10254.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10254.png'
    }
  },
  {
    id: 10255,
    name: 'dudunsparce-three-segment',
    height: 45,
    weight: 474,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10255.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10255.png'
    }
  },
  {
    id: 10256,
    name: 'palafin-hero',
    height: 18,
    weight: 974,
    types: [
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10256.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10256.png'
    }
  },
  {
    id: 10257,
    name: 'maushold-family-of-three',
    height: 3,
    weight: 28,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10257.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10257.png'
    }
  },
  {
    id: 10258,
    name: 'tatsugiri-droopy',
    height: 3,
    weight: 80,
    types: [
      'dragon',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10258.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10258.png'
    }
  },
  {
    id: 10259,
    name: 'tatsugiri-stretchy',
    height: 3,
    weight: 80,
    types: [
      'dragon',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10259.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10259.png'
    }
  },
  {
    id: 10260,
    name: 'squawkabilly-blue-plumage',
    height: 6,
    weight: 24,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10260.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10260.png'
    }
  },
  {
    id: 10261,
    name: 'squawkabilly-yellow-plumage',
    height: 6,
    weight: 24,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10261.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10261.png'
    }
  },
  {
    id: 10262,
    name: 'squawkabilly-white-plumage',
    height: 6,
    weight: 24,
    types: [
      'normal',
      'flying'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10262.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10262.png'
    }
  },
  {
    id: 10263,
    name: 'gimmighoul-roaming',
    height: 1,
    weight: 10,
    types: [
      'ghost'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10263.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10263.png'
    }
  },
  {
    id: 10264,
    name: 'koraidon-limited-build',
    height: 35,
    weight: 3030,
    types: [
      'fighting',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10265,
    name: 'koraidon-sprinting-build',
    height: 35,
    weight: 3030,
    types: [
      'fighting',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10266,
    name: 'koraidon-swimming-build',
    height: 35,
    weight: 3030,
    types: [
      'fighting',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10267,
    name: 'koraidon-gliding-build',
    height: 35,
    weight: 3030,
    types: [
      'fighting',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10268,
    name: 'miraidon-low-power-mode',
    height: 28,
    weight: 2400,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10269,
    name: 'miraidon-drive-mode',
    height: 28,
    weight: 2400,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10270,
    name: 'miraidon-aquatic-mode',
    height: 28,
    weight: 2400,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10271,
    name: 'miraidon-glide-mode',
    height: 28,
    weight: 2400,
    types: [
      'electric',
      'dragon'
    ],
    sprites: {
      default: null,
      home: null,
      officialArtwork: null
    }
  },
  {
    id: 10272,
    name: 'ursaluna-bloodmoon',
    height: 24,
    weight: 2900,
    types: [
      'ground',
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10272.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10272.png'
    }
  },
  {
    id: 10273,
    name: 'ogerpon-wellspring-mask',
    height: 12,
    weight: 398,
    types: [
      'grass',
      'water'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10273.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10273.png'
    }
  },
  {
    id: 10274,
    name: 'ogerpon-hearthflame-mask',
    height: 12,
    weight: 398,
    types: [
      'grass',
      'fire'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10274.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10274.png'
    }
  },
  {
    id: 10275,
    name: 'ogerpon-cornerstone-mask',
    height: 12,
    weight: 398,
    types: [
      'grass',
      'rock'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10275.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10275.png'
    }
  },
  {
    id: 10276,
    name: 'terapagos-terastal',
    height: 3,
    weight: 160,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10276.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10276.png'
    }
  },
  {
    id: 10277,
    name: 'terapagos-stellar',
    height: 17,
    weight: 770,
    types: [
      'normal'
    ],
    sprites: {
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10277.png',
      home: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10277.png',
      officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10277.png'
    }
  }
]
export default pokemonsData
