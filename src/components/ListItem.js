import React from 'react';
import './ListItem.css';

// const ListItem = ({country}) => {
//   return <li>{country.name.common},  {country.capital} </li>
// }

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = function() {
    console.log(`Clicked on ${country.name.common}`);
    onCountryClicked(country);
  }
  return (
    <li onClick={handleClick}>{country.name.common}</li>
  )
}

export default ListItem;