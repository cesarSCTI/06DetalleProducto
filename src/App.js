import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer getting=' hola, vengo desde el archivo app'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
