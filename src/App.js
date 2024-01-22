import Home  from './Home';
import Tsp from './tsp/src/Tsp'
import Tbd from './components/Tbd'
import AutonDrone from './components/AutonDrone'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './main.css'

function App() {
  return (
    <Router>
      <Routes>
		
        <Route path="/" element={<Home />} />
        <Route path="/tsp" element={<Tsp id ="tsp" />} />
        <Route path ="drone" element={<AutonDrone id ="drone"/>}/>
        <Route path ="tbd" element={<Tbd id ="tbd"/>}/>
      </Routes>
    </Router>
  );
}

export default App;