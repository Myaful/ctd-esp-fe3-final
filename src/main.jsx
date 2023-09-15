import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import DentistContext from './Components/utils/global.context'

///aca elimine el dentista context
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <>
        <App />
        </>
    )