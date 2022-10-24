import './App.css';

// 1 - config react router calling hooks from reactrouter
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// 3 - Components
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';

// 2 - import pages (components)
import Home from './pages/Home';
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
  
    <div className="App">
    <h1>React Router</h1>
    {/* como se fosse o cabecalho do site */}
    {/* elementos que estarem fora do browser route, estara sempre na pagina
     */}
    <BrowserRouter>
      <Navbar />
      {/* Search */}
      <SearchForm />
      
      <Routes>

        {/* path / seria a home e o elemento carrega o componente Home */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        {/* 6 - nested route */}
        <Route path="/products/:id/info" element={<Info />} />
        {/* 4 - rota dinamica */}
        <Route path="/products/:id" element={<Product />} />
        {/* Route para Search */}
        <Route path="/search" element={<Search />} />
        {/* Redirect */}
        <Route path="/company" element={<Navigate to="/about" />}/>
        {/* no match route */}
        <Route path='*' element={<NotFound />} />  

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
