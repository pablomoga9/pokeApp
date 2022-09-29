import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
// import axios from 'axios';

import '../src/styles/styles.scss';

import {listContext} from './context/listContext';

export const App = () => {
  // const [status, setStatus] = useState('initial')
  const [data, setData] = useState([]);


  return (
    <div className="App">
   
    <BrowserRouter>
    <listContext.Provider value={{data,setData}}>
      <Header/>
      <Main/>
      </listContext.Provider> 
      <Footer/>
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
