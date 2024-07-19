import React, { useEffect, useState } from 'react'
import './navbar.css'
import SearchBar from '../searchBar/SearchBar'
import Toggle from '../toggle/Toggle'
function Navbar () {
  const [filterToggles, setFilterToggles] = useState({
    typeToggle: false,
    regionToggle: false
  })
  useEffect(() => {
    console.log(filterToggles)
  }, [filterToggles])

  function setFilterCheckboxs (e) {
    console.log(e.target)
    if (e.target.id.includes('type')) {
      setFilterToggles(prevState => ({
        ...prevState,
        typeToggle: e.target.checked
      }))
    } else if (e.target.id.includes('region')) {
      setFilterToggles(prevState => ({
        ...prevState,
        regionToggle: e.target.checked
      }))
    } else {
      console.log('WHAT?')
    }
  }

  return (
    <>
      <div className='navbar'>
        <div className='navTitle'>
          <h1>Poke Hybrid Fusion</h1>
        </div>
        <div className='gridSearchBar'><SearchBar name='pokemonSearchBar' id='pokemonSearchBar' placeholder='Search for a pokemon...' /></div>
        <div className='filtersSelection'>
          <div className='toggle1'>
            <Toggle type='switch' toggleID='typeFilterToggle' toggleText='Types' onCheckedFunction={setFilterCheckboxs} />
          </div>
          <div className='toggle2'>
            <Toggle type='switch' toggleID='regionFilterToggle' toggleText='Regions' onCheckedFunction={setFilterCheckboxs} />
          </div>
          <div className='dropDown'>
            Image type
            <select>
              <option value='Default'>Default</option>
              <option value='Sprite'>Sprite</option>
              <option value='Artwork'>Artwork</option>
            </select>
          </div>
        </div>
        <div className={`pokeTypesToggleWrapper ${filterToggles.typeToggle ? '' : 'hide'}`}>
          <Toggle type='toggle1' toggleID='Water' />
          <Toggle type='toggle1' toggleID='Fire' />
          <Toggle type='toggle1' toggleID='Grass' />
          <Toggle type='toggle1' toggleID='Electric' />
          <Toggle type='toggle1' toggleID='Fighting' />
          <Toggle type='toggle1' toggleID='Ice' />
          <Toggle type='toggle1' toggleID='Poison' />
          <Toggle type='toggle1' toggleID='Ground' />
          <Toggle type='toggle1' toggleID='Flying' />
          <Toggle type='toggle1' toggleID='Psychic' />
          <Toggle type='toggle1' toggleID='Bug' />
          <Toggle type='toggle1' toggleID='Rock' />
          <Toggle type='toggle1' toggleID='Ghost' />
          <Toggle type='toggle1' toggleID='Dragon' />
          <Toggle type='toggle1' toggleID='Dark' />
          <Toggle type='toggle1' toggleID='Steel' />
          <Toggle type='toggle1' toggleID='Fairy' />
        </div>
        <div className={`regionsToggleWrapper ${filterToggles.regionToggle ? '' : 'hide'}`}>
          <Toggle type='toggle2' toggleID='Kanto' />
          <Toggle type='toggle2' toggleID='Johto' />
          <Toggle type='toggle2' toggleID='Hoenn' />
          <Toggle type='toggle2' toggleID='Sinnoh' />
          <Toggle type='toggle2' toggleID='Unova' />
          <Toggle type='toggle2' toggleID='Kalos' />
          <Toggle type='toggle2' toggleID='Alola' />
          <Toggle type='toggle2' toggleID='Galar' />
          <Toggle type='toggle2' toggleID='Paldea' />
        </div>
      </div>
    </>
  )
}

export default Navbar
