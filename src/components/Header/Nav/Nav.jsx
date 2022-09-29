import React, { Component } from "react";
import {Link} from 'react-router-dom';

function Nav(){

  return(
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/new">Nuevo Pokemon</Link>
      <Link to="/search">Búsqueda</Link>
    </nav>

  )


}

export default Nav;
