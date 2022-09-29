import React from 'react'
import { useParams } from 'react-router-dom'

export const PokeCard = () => {
  let params=useParams();
  let{pokemon}=useParams();

  return (<div>
    <h2>Visor de Pokemon</h2>
    <p>Nombre:<b>{}</b></p>
    </div>
  )
}
