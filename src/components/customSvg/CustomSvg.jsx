import React from 'react'
import Normal from '../../assets/icons/pokemonTypes/normal.svg?react'
import Fire from '../../assets/icons/pokemonTypes/fire.svg?react'
import Water from '../../assets/icons/pokemonTypes/water.svg?react'
import Electric from '../../assets/icons/pokemonTypes/electric.svg?react'
import Grass from '../../assets/icons/pokemonTypes/grass.svg?react'
import Ice from '../../assets/icons/pokemonTypes/ice.svg?react'
import Fighting from '../../assets/icons/pokemonTypes/fighting.svg?react'
import Poison from '../../assets/icons/pokemonTypes/poison.svg?react'
import Ground from '../../assets/icons/pokemonTypes/ground.svg?react'
import Flying from '../../assets/icons/pokemonTypes/flying.svg?react'
import Psychic from '../../assets/icons/pokemonTypes/psychic.svg?react'
import Bug from '../../assets/icons/pokemonTypes/bug.svg?react'
import Rock from '../../assets/icons/pokemonTypes/rock.svg?react'
import Ghost from '../../assets/icons/pokemonTypes/ghost.svg?react'
import Dragon from '../../assets/icons/pokemonTypes/dragon.svg?react'
import Dark from '../../assets/icons/pokemonTypes/dark.svg?react'
import Steel from '../../assets/icons/pokemonTypes/steel.svg?react'
import Fairy from '../../assets/icons/pokemonTypes/fairy.svg?react'
function CustomSvg ({ type }) {
  let svg = ''
  const currentType = type.toLowerCase()
  switch (currentType) {
    case 'bug':
      svg = <Bug className={`toggleIcon ${type}IconSvg`} />
      break
    case 'dark':
      svg = <Dark className={`toggleIcon ${type}IconSvg`} />
      break
    case 'dragon':
      svg = <Dragon className={`toggleIcon ${type}IconSvg`} />
      break
    case 'electric':
      svg = <Electric className={`toggleIcon ${type}IconSvg`} />
      break
    case 'fairy':
      svg = <Fairy className={`toggleIcon ${type}IconSvg`} />
      break
    case 'fighting':
      svg = <Fighting className={`toggleIcon ${type}IconSvg`} />
      break
    case 'fire':
      svg = <Fire className={`toggleIcon ${type}IconSvg`} />
      break
    case 'flying':
      svg = <Flying className={`toggleIcon ${type}IconSvg`} />
      break
    case 'ghost':
      svg = <Ghost className={`toggleIcon ${type}IconSvg`} />
      break
    case 'grass':
      svg = <Grass className={`toggleIcon ${type}IconSvg`} />
      break
    case 'ground':
      svg = <Ground className='toggleIcon' />
      break
    case 'ice':
      svg = <Ice className={`toggleIcon ${type}IconSvg`} />
      break
    case 'normal':
      svg = <Normal className={`toggleIcon ${type}IconSvg`} />
      break
    case 'poison':
      svg = <Poison className={`toggleIcon ${type}IconSvg`} />
      break
    case 'psychic':
      svg = <Psychic className={`toggleIcon ${type}IconSvg`} />
      break
    case 'rock':
      svg = <Rock className={`toggleIcon ${type}IconSvg`} />
      break
    case 'steel':
      svg = <Steel className={`toggleIcon ${type}IconSvg`} />
      break
    case 'water':
      svg = <Water className={`toggleIcon ${type}IconSvg`} />
      break
    default:
      svg = null
  }
  return (
    <>
      {svg}
    </>
  )
}

export default CustomSvg
