import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import About from './components/about';
import GameDevelopment from './components/GameDevelopment';
import './App.css'


function App() {
  
  return (
    <HashRouter className="App"  >
      <Routes >
        <Route path="*" element={<About/>}/>
        <Route path="/GameDevP" element={<GameDevelopment/>}/>
      </Routes>
    </HashRouter> 
  )
}

export default App
