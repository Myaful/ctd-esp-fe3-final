import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { useState } from 'react'
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContextGlobal();

  

  const getFavs =()=>{

    let favs = state.favs.filter(fav => fav.id == id);
    let isStored = favs == null || favs.length < 1 ? false : true;

    return isStored;
  }

  const [dentist, setDentist]= useState (getFavs())

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch ({type: 'ADD_FAV', payload:{name: name, username: username, id: id}})
    setDentist(true);
  }

  const removeFav = () => { 
    dispatch({type: 'REMOVE_FAV', payload: {id: id}})
    setDentist(false);
  }  


  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
        <h6>Apellido : {name}</h6>
        <h6>Nombre : {username}</h6>
      </Link>
  <button onClick={dentist ? removeFav : addFav} className="favButton" > {dentist ? "Eliminar de Favorito" : "Favorito"}</button>
</div>
  );
};

export default Card;