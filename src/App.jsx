import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:name' element={<Details />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </>
   );
};

export default App;
