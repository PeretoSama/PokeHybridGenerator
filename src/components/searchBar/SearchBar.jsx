import './searchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../../redux/slices/filterSlice'

function SearchBar ({ name, id, placeholder }) {
  const query = useSelector((state) => state.filter.query)
  console.log(query)
  const dispatch = useDispatch()
  function queryOnChange (e) {
    dispatch(setQuery(e.target.value))
  }
  return (
    <>
      <input className='searchBarInput' type='text' name={name} id={id} onChange={queryOnChange} placeholder={placeholder} />
    </>
  )
}

export default SearchBar
