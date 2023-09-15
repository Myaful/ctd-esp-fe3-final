import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'



const Contact = () => {
  const {state}=useContextGlobal()
  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1 className='title-contac'>¿Quiere saber más?</h1>
      <p className='title-contac'>Envíanos tus preguntas y nos pondremos en contacto contigo.</p>
      <Form />
    </div>
  )
}

export default Contact