import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'



const Detail = () => {
 
  const { state, dispatch }= useContextGlobal();
  const params = useParams()
  const urlID = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect(() => {
    axios(urlID).then(response => {
      console.log(response);
      dispatch ({type: 'ONE_DENTIST', payload: response.data})
    })
  })

  return (
    <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1>DR: {state.dentistDetail.username}, {state.dentistDetail.name}</h1>
      <p><img style={{ width: "200px" }} src="/images/doctor.jpg" alt="doctor" /></p>
      <h2> Detalles: </h2>
      <p>Telefono: {state.dentistDetail.phone}</p>
      <p>E-mail: {state.dentistDetail.email}</p>
      <p>Web: {state.dentistDetail.website}</p>
 
    </div>
  )
}

export default Detail