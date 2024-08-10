import React, { useEffect, useState } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import { useNavigate } from "react-router-dom";

const TableBody = ({ countries, setCountries }) => {
   useEffect(() => {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
   }, []);

   const navigate = useNavigate();

   return (
      <tbody>
         {countries.map((c, idx) => (
            <tr
               key={c.name.common}
               onClick={() => navigate(`country/${c.name.common}`)}>
               <td>{idx + 1}</td>
               <td>{c.name.common}</td>
               <td>{c.capital}</td>
               <td>{c.population}</td>
            </tr>
         ))}
      </tbody>
   );
};

export default TableBody;
