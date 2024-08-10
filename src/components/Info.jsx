import React, { useEffect, useState } from "react";
import "../css/Info.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { filterByCode } from "../config";

const Info = (props) => {
   const navigate = useNavigate();
   const {
      name: { common, nativeName },
      flags,
      capital,
      population,
      region,
      subregion,
      languages,
      currencies,
      tld = [],
      borders = [],
   } = props;

   const [neighbors, setNeighbors] = useState([]);

   useEffect(() => {
      if (borders.length)
         axios
            .get(filterByCode(borders))
            .then(({ data }) => setNeighbors(data.map((c) => c.name.common)));
   }, [borders]);
   return (
      <div className='container cnt'>
         <img className='img' src={flags.svg} alt={common} />
         <div>
            <h2 className='heading'>{common}</h2>
            <div className='listGroup'>
               <ul className='list'>
                  <li className='listItem'>
                     <b>Population:</b> {population}
                  </li>
                  <li className='listItem'>
                     <b>Native Name:</b> {Object.values(nativeName)[0].official}
                  </li>
                  <li className='listItem'>
                     <b>Region:</b> {region}
                  </li>
                  <li className='listItem'>
                     <b>Sub Region:</b> {subregion}
                  </li>
                  <li className='listItem'>
                     <b>Capital:</b> {capital}
                  </li>
               </ul>
               <ul className='list'>
                  <li className='listItem'>
                     <b>Top Level Domain: </b>
                     {tld.map((d) => (
                        <span key={d}> {d}</span>
                     ))}
                  </li>
                  <li className='listItem'>
                     <b>Currencies: </b>
                     {Object.values(Object.values(currencies)[0]).join(", ")}
                  </li>
                  <li className='listItem'>
                     <b>Languages: </b> {Object.values(languages).join(", ")}
                  </li>
               </ul>
            </div>
            <div className='borders'>
               <b>Border Countries:</b>
               {!borders.length ? (
                  <span>There is no border countries</span>
               ) : (
                  <div className='borderGroup'>
                     {neighbors.map((n) => (
                        <span
                           key={n}
                           onClick={() => navigate(`/country/${n}`)}
                           className='tag'>
                           {n}
                        </span>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Info;
