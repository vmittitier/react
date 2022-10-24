
import './App.css';

// 1 - config react router calling hooks from reactrouter
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 2 - Pages
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

// 3 - Components
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
    
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path="/" end element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Products" element={<Products />}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
