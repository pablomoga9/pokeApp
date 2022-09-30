import React, { useState, useEffect, useContext } from "react";
import {listContext} from '../../../context/listContext';
import PokeCard from './PokeCard/PokeCard'
import axios from 'axios';
import useFetch from "../../../hooks/useFetch";
import useDebounce from "../../../hooks/useDebounce";
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PokeList = ()=>{

  const {data,setData} = useContext(listContext);
  const [searchTerm,setSearchTerm] = useState(null);
  const [message,setMessage] = useState('');
  const [buttonMsg,setButtonMsg] = useState('');
  const [pokemon,setPokemon] = useState(null);
  
  useEffect(()=>{
    
    const listData = async()=>{
      try{
        if(data.length==0){
          const initialRes = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
          setData(initialRes.data.results);
        }
        
        
        const url = searchTerm ===null? '':searchTerm//
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`);
        
        const dataArray = [res.data];
        
        if(dataArray.length===1){
          setPokemon(searchTerm);
          const detailRes = await axios.get(`${res.data.forms[0].url}`);
          const pokeFind = {
            id:detailRes.data.id,
            name:detailRes.data.name,
            type:detailRes.data.types[0].type.name,
            image:detailRes.data.sprites.front_default
          }
          
          setData(pokeFind);
          
        }
        
      }
      catch(error){
        console.log(error);
        setMessage('No hay ningún Pokemon que coincida con tu búsqueda, pero existen algunas coincidencias en el nombre. También puedes probar a crearlo tú.');
        setButtonMsg('Creación Pokemon')
      }
     }
     listData();
  })


  const debounce = useDebounce();
  
  function handleInput(e){
    const text = e.target.value;
    // debounce(()=>setPokemon(null))
    debounce(()=>setMessage(''));
    debounce(()=>setSearchTerm(text));
    
  }

  

  function filterPokemon(){
    const dataFiltered = data.filter(pokemon=>pokemon.name.includes(searchTerm));
    return dataFiltered
  }

  return(<div className="list">
    <input type="text" name="search" className="searchInput" onChange={handleInput}/>
    <p className="listMsg">{message}</p>
    <Link className="createPokemon" to={'/new'}>{buttonMsg}</Link>
    <div className="searchList">
      {pokemon!=null?<PokeCard/>:filterPokemon().map((pokemon,i)=><div data-aos="fade-up" data-aos-duration="3000"><Link to={`/pokemon/${i}`}><h3>{pokemon.name}</h3></Link></div>)}
    </div>
  </div>
)
}

export default PokeList;