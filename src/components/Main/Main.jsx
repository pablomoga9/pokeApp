import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import Detail from './Detail/Detail';
import PokeList from './PokeList/PokeList';

const Main =()=> {
  
    return <main>
      <Routes>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<Form/>} path={"/new"}/>
        <Route element={<PokeList/>} path={"/search"}/>
        <Route element={<Detail/>} path={"/pokemon/:id"}/>
      </Routes>
    </main>
     
    
  
}

export default Main;
