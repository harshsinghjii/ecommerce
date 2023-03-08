import './App.css';
import HomeContainer from './containers/HomeContainer';
function App() {
  return (
    <div className="App">
      <HomeContainer/>
    </div>
  );
}

export default App;



//pehle hum component ko directly use krte the but
// Redux mai pehle uss component ko ek container mai dalo phir uss container ko App.js mai rkho