import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { searchByCountry } from "../config";
import Info from "../components/Info";
import Header from "../components/Header";

const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();
   const [country, setCountry] = useState(null);

   console.log(country);

   useEffect(() => {
      axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
   }, [name]);
   return (
      <>
         <Header />
         <div className='container'>
            {country && <Info {...country} />}
            <button
               className='mt-5 btn btn-primary'
               onClick={() => navigate(-1)}>
               <IoArrowBack />
               Go Back
            </button>
         </div>
      </>
   );
};

export default Details;
