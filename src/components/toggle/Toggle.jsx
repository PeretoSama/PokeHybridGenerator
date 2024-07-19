import React from 'react'
import './toggle.css'
import CustomSvg from '../customSvg/CustomSvg'
// #region Test

// #endregion

function Toggle ({ type, toggleID, toggleText, onCheckedFunction }) {
  let currentToggle

  switch (type) {
    case 'switch':
      currentToggle = (
        <div className='switchWrapper'>
          <input type='checkbox' name='switchToggle' id={toggleID} className='switchToggle' onChange={onCheckedFunction} />
          <label htmlFor={toggleID}>{toggleText}</label>
        </div>
      )
      break
    case 'toggle1':
      currentToggle = (
        <div className={`pokeTypeToggleWrapper ${toggleID}Icon`}>
          <span><CustomSvg type={toggleID} /></span>
          <input type='checkbox' name={toggleID} id={toggleID} className={toggleID} onChange={onCheckedFunction} />
          <label htmlFor={toggleID}>{toggleID}</label>
        </div>
      )
      break
    case 'toggle2':
      currentToggle = (
        <div className={`regionTypeToggleWrapper ${toggleID}Icon`}>
          <input type='checkbox' name={toggleID} id={toggleID} className={toggleID} onChange={onCheckedFunction} />
          <label htmlFor={toggleID}>{toggleID}</label>
        </div>
      )
      break
  }
  return currentToggle
}

export default Toggle
