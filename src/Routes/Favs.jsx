import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state}=useContextGlobal()

  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1>Odontólogos favoritos</h1>
      <div className="card-grid">
        {state.favs.length == 0 ? 
        <h2>No ha seleccionado ningun Odontólogo favorito</h2> :
        state.favs.map((fav) => 
        <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;