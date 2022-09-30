import React, { useContext, useState } from "react";
import {useForm} from 'react-hook-form';
import { listContext } from "../../../context/listContext";

const Form = () =>{
  const {register,formState:{errors},handleSubmit} = useForm();
  const {data,setData} = useContext(listContext);
  const [message,setMessage] = useState('');

  const onSubmit = (form)=>{
    if(form.typeOne===form.typeTwo){
      setMessage('No puedes crear un pokemon con dos tipos iguales')
    }
    else{
      setMessage('Tu pokemon ha sido creado correctamente');
      setData([...data,form])
    }
    
  }

  return <div className="pokeForm">
    <h2>Crea tu Pokemon</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">ID:</label>
      <input type="number" placeholder="12345" {...register('id',{
        required:true
      })}/>{errors.id?.type==='required' && <p className="errorMsg">El campo ID es requerido</p>}
      <label htmlFor="name">Nombre:</label>
      <input type="text" {...register('name',{
        required:true,
        minLength: 3
      })}/>{errors.name?.type==='required' && <p className="errorMsg">El campo nombre es requerido</p>}
      {errors.name?.type==='minLength' && <p className="errorMsg">El campo nombre debe tener más de 3 caracteres</p>}
      <label htmlFor="image">Imagen:</label>
      <input type="text" {...register('image',{
        required:true
      })}/>{errors.image?.type==='required' && <p className="errorMsg">El campo imagen es requerido</p>}
      <label htmlFor="typeOne">Tipo 1:</label>
      <select id="type1" {...register('typeOne')}>
        <option value="acero">Acero</option>
        <option value="agua">Agua</option>
        <option value="bicho">Bicho</option>
        <option value="dragon">Dragón</option>
        <option value="electrico">Eléctrico</option>
        <option value="fantasma">Fantasma</option>
        <option value="fuego">Fuego</option>
        <option value="hada">Hada</option>
        <option value="hielo">Hielo</option>
        <option value="lucha">Lucha</option>
        <option value="normal">Normal</option>
        <option value="planta">Planta</option>
        <option value="psiquico">Psíquico</option>
        <option value="roca">Roca</option>
        <option value="siniestro">Siniestro</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>
      </select>
      <label htmlFor="typeTwo">Tipo 2:</label>
      <select id="type2" {...register('typeTwo')}>
        <option value="acero">Acero</option>
        <option value="agua">Agua</option>
        <option value="bicho">Bicho</option>
        <option value="dragon">Dragón</option>
        <option value="electrico">Eléctrico</option>
        <option value="fantasma">Fantasma</option>
        <option value="fuego">Fuego</option>
        <option value="hada">Hada</option>
        <option value="hielo">Hielo</option>
        <option value="lucha">Lucha</option>
        <option value="normal">Normal</option>
        <option value="planta">Planta</option>
        <option value="psiquico">Psíquico</option>
        <option value="roca">Roca</option>
        <option value="siniestro">Siniestro</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>
      </select>
      <input type="submit" className="formButton" value="Enviar"/>
      <p className="submitMsg">{message}</p>
    </form>
  </div>
}

export default Form;
