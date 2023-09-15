import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useContextGlobal } from './utils/global.context'


const Navbar = () => {
  const {state, dispatch}= useContextGlobal();
  return (
    <nav className={state.theme == 'light' ? "light" : "dark"}>
      <div className='DH-ico'>
        <img src= "/DH.ico" alt= "logo DH" />
      </div>

      <ul>
        <Link to={routes.home}><li>Inicio</li></Link>
        <Link to={routes.contact}><li>Contactos</li></Link>
        <Link to={routes.favs}><li>Favoritos</li></Link>
      </ul> 
      <button className='buttonTheme' onClick={() => dispatch({ type: "HANDLE_THEME", payload: state.theme== 'light' ? 'dark' : 'light' })}>Modo</button>
    </nav>
  )
}

export default Navbar