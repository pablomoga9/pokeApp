import React, { useEffect,useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import { listContext } from "../../../context/listContext";
AOS.init();

const Home=()=> {
  const {data,setData} = useContext(listContext);
  
  useEffect(()=>{
    const getList = async()=>{
     try{
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
      
        if(data.length==0){
          setData(res.data.results);
        }
       }catch(error){
      console.log(error);
     }
     
    }
   getList();
  },[])
  let timerInterval
  Swal.fire({
    
    timer: 500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      
      timerInterval = setInterval(() => {
       
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
  

    return (
      <div className="home">
        <h1>Lista Pokemon</h1>
        <div className="fullList">
            {data.map((pokemon,i)=><div data-aos="fade-up" data-aos-duration="3000"><Link to={`/pokemon/${i}`}><h3>{pokemon.name}</h3></Link></div>)}
        </div>
        
      </div>

    )
  
}

export default Home;


