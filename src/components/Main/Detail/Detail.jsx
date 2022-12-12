import React, { useState } from "react";
import { useEffect } from "react";
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
const Detail = ()=>{
  const [params] = useSearchParams();
  const name = params.get('name') ?? '';
  const id = params.get('id') ?? '';
  const [pokemon,setPokemon] = useState('');

  useEffect(()=>{
    const detailFetch = async()=>{
      const res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(res.data.sprites.front_default);
      // const resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      
      const pokeInfo = {
        name:name,
        height: res.data.height,
        // images:[res.data.sprites.front_default,res.data.sprites.front_shiny,res.data.sprites.front_female,res.data.sprites.front_shiny_female],
        // egg: resTwo.data.egg_groups[0].name,
        // phrase: resTwo.data.flavour_text_entries[0].flavour_text
      }

      setPokemon(pokeInfo)
    }
    detailFetch();
  },[])
  

  return <div className="details">
    <div className="detailText">
      <h2>{name}</h2>
      <p>Dato: {pokemon.phrase}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipo de huevo: {pokemon.egg}</p>
    </div>
    <div className="detailImages">
      {/* <label htmlFor="">Frontal masculino</label>
      <img src={pokemon.images[0]} alt="" />
      <label htmlFor="">Shiny masculino</label>
      <img src={pokemon.images[1]} alt="" />
      <label htmlFor="">Frontal femenino</label>
      <img src={pokemon.images[2]} alt="" />
      <label htmlFor="">Shiny femenino</label>
      <img src={pokemon.images[3]} alt="" /> */}
    </div>
   
  </div>
  
}

export default Detail;
