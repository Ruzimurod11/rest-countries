import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <nav className='navbar bg-primary' data-bs-theme='dark'>
         <div className='container'>
            <div className='container-fluid'>
               <Link className='navbar-brand' to='/'>
                  Countries
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Header;
