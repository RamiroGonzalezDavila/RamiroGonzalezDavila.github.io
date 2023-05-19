import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/about';
import GameDevelopment from './components/GameDevelopment';
import './App.css'


function App() {
  
  return (
    <BrowserRouter basename='/' className="App"  >
      <Routes >
        <Route exact path="/" element={<About/>}/>
        <Route path="/GameDevP" element={<GameDevelopment/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
