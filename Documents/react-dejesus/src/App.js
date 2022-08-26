import NavBar from './NavBar/NavBar.js';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer  saludo="Bienvenidx a mi primera app de React"/>
    </div>
  );
}

export default App;
