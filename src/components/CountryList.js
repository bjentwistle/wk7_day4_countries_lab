import React from 'react';
import ListItem from './ListItem';

const CountryList = ({countries, onCountryClicked}) => {

  const countryItems = countries.map((country, index) => {
    return <ListItem country={country} key={index} onCountryClicked={onCountryClicked}/>
  })

  return (
    <div>
      <select >
        <option value = {countryItems.country}>
          {countryItems}
        </option>
      </select>
    </div>
  )
}

export default CountryList;