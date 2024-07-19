import './App.css'
import FusionSection from './components/fusionSection/FusionSection'
import Navbar from './components/navbar/Navbar'
import PokemonGrid from './components/pokemonGrid/PokemonGrid'
import AllPokemonsData from './data/pokemonsData'

function App () {
  return (
    <>
      <div className='app'>
        <header>
          <Navbar />
        </header>
        <div className='mainBody'>
          <FusionSection />
          <PokemonGrid />
        </div>
      </div>

    </>
  )
}

export default App
