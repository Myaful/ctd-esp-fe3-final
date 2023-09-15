
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routes} from "./Routes/utils/routes"
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import ContextGlobal  from './Components/utils/global.context'


// saque className="App" del div
function App() {
  return (  
      <ContextGlobal>
          <BrowserRouter>  
            <div className="app">
                <Navbar/>   
                  <Routes>
                    <Route path='/' element ={<Home/>}></Route>
                    <Route path= {routes.contact} element={<Contact/>}></Route>
                    <Route path={routes.detail} element ={<Detail/>}></Route>
                    <Route path={routes.favs} element ={<Favs/>}></Route>
                  </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
      </ContextGlobal>  
      
  );
}

export default App;
