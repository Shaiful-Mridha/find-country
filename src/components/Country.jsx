import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  return (
    <div className="country">
      <h4> Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region:{region}</small>
      </p>
    </div>
  );
};
export default Country;

//

// import React from 'react';
// import './country.css';

// const Country = (props) => {
//     return (
//         <div className='country'>
//            <h4> Name: {props.name}</h4>
//            <p>Population: {props.population}</p>
//            <p><small>Area: {props.area}</small></p>
//            <p><small>Region: {props.region}</small></p>

//         </div>
//     );
// };

// export default Country;
