import './assets/css/App.css';
import Api from './components/Api';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';


function App() {
  return (
    <div className="App">

      <NavBar />
       <WeatherPanel /> 
      <Api />
     

    </div>
  );
}

export default App;