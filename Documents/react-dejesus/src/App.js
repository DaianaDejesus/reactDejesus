import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = ()=> {
  
  return (

    <BrowserRouter>
     
      <NavBar />
     
      <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:Id' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={ <Navigate to="/"/>} />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
