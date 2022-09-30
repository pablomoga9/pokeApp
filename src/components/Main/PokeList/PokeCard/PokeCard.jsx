import React,{useContext} from 'react'
import { listContext } from '../../../../context/listContext';
import {Link} from 'react-router-dom'

function PokeCard() {
  const {data,setData} = useContext(listContext);
  

  


  return (<div>
    <h2>Visor de Pokemon</h2>
    <div className='selectPokemon'>
    <Link to={`/pokemon/${data.id}?name=${data.name}&image=${data.image}&typeOne=${data.type}`}> <img src={data.image} alt="" />
    <p>Nombre: <b>{data.name}</b></p>
    <p>Tipo: {data.type}</p></Link>
    </div>
    </div>
  )
}

export default PokeCard;
