import  {useEffect, useState } from 'react';
import AllProdcut from './components/AllProdcut';
import UpdateProduct from './components/UpdateProduct';
import CreateProduct from './components/CreateProduct';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 function App() {
  return (

    <div >

<Router>
          <Routes>
            <Route extact path="/" element={<AllProdcut/>} />
            <Route path="/products/:id" element={<UpdateProduct />} />
            <Route path="/CreateProduct" element={<CreateProduct />} />


            
            
            
            </Routes>
            </Router>
            


         
    </div>

  );
}

export default App;