import {useContext,createContext,useEffect,useReducer} from "react";
import axios from "axios";



const initialState = {theme: "light",dentists:[],dentistDetail:{}, favs: JSON.parse(localStorage.getItem('favs')) || []}

const ContextGlobal = createContext();

const reducer = (state, action) =>{
  switch (action.type) {
    case "ALL_DENTIST":
      return {...state, dentists: action.payload}
    case "ONE_DENTIST":
      return {...state, dentistDetail: action.payload}
    case "HANDLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    case "ADD_FAV":
      return {...state, favs: [...state.favs, action.payload]}
    case "REMOVE_FAV":
            return {...state, favs: state.favs.filter(fav => fav.id != action.payload.id)
            }
    default:
      throw new Error();
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer (reducer, initialState)
  const urlApi= `https://jsonplaceholder.typicode.com/users/`

  useEffect(()=>{
    axios(urlApi).then(res => {
      dispatch({type: 'ALL_DENTIST', payload: res.data})})
  }, [urlApi])

  useEffect(()=>{
    console.log(state.favs)
    if(state.favs.length < 1) {
      localStorage.removeItem('favs')
    } else {
    localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  },[state.favs])


  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = ()=> useContext(ContextGlobal)  