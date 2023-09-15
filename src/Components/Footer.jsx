import React from 'react'
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContextGlobal();
  
  return (
    <footer className={state.theme == 'light' ? "light" : "dark"}>
     <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
      <a href="http://www.linkedin.com/in/maximiliano-yaful/" >
        <img src="/images/linkedin.png" alt='linkedin' />
      </a>
    </footer>
  )
}

export default Footer
