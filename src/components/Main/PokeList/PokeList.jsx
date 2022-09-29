import React, { useState, useEffect, useContext } from "react";
import {listContext} from '../../../context/listContext';
import PokeCard from './PokeCard/PokeCard';
import axios from 'axios';
import useFetch from "../../../hooks/useFetch";
import useDebounce from "../../../hooks/useDebounce";
import {Link} from 'react-router-dom';

const PokeList = ()=>{

  const {data,setData} = useContext(listContext);
  const [searchTerm,setSearchTerm] = useState(null);
  const [message,setMessage] = useState('');
  const [buttonMsg,setButtonMsg] = useState('');
  
  useEffect(()=>{
    console.log(data);
    const listData = async()=>{
      try{
        console.log(data);
        const url = searchTerm ===null? '':searchTerm//Cada vez que inicie y sera null el valor de search será '' y traerá todos los pokemon
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
        
      }
      catch(error){
        console.log(error);
        setMessage('No hay ningún Pokemon que coincida con tu búsqueda. Aprovecha y crealo');
        setButtonMsg('Creación Pokemon')
      }
     }
     listData();
  })


  const debounce = useDebounce();
  
  function handleInput(e){
    const text = e.target.value;
    debounce(()=>setMessage(''));
    debounce(()=>setSearchTerm(text));
    
  }

  return(<div className="list">
    <input type="text" name="search" className="searchInput" onChange={handleInput}/>
    <p>{message}</p>
    <Link to={'/new'}>{buttonMsg}</Link>
  </div>
)
}

export default PokeList;