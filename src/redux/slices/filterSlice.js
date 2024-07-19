import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  typeCheckboxes: {
    electric: false,
    normal: false,
    fire: false,
    water: false,
    grass: false,
    ice: false,
    fighting: false,
    poison: false,
    ground: false,
    flying: false,
    psychic: false,
    bug: false,
    rock: false,
    ghost: false,
    dragon: false,
    dark: false,
    steel: false,
    fairy: false
  },
  regionsCheckboxes: {
    kanto: false,
    johto: false,
    hoenn: false,
    sinnoh: false,
    unova: false,
    kalos: false,
    alola: false,
    galar: false,
    paldea: false

  }

}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setTypeCheckbox: (state, action) => {
      const { key, value } = action.payload
      state.typeCheckboxes[key] = value
    },
    setRegionCheckbox: (state, action) => {
      const { key, value } = action.payload
      state.regionsCheckboxes[key] = value
    }
  }
})

export const { setQuery, setTypeCheckbox, setRegionCheckbox } = filterSlice.actions
export default filterSlice.reducer
