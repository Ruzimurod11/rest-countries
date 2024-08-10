import { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = () => {
   const [countries, setCountries] = useState([]);
   return (
      <div className='container mt-5'>
         <table className='table table-bordered border-primary table-secondary'>
            <TableHead />
            <TableBody countries={countries} setCountries={setCountries} />
         </table>
      </div>
   );
};

export default Table;
