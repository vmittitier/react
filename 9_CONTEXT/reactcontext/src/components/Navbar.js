import "./Navbar.css"

import { NavLink} from "react-router-dom"
// links com react router

const Navbar = () => {
  return <nav>
   
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/about">Sobre</NavLink>
    <NavLink to="/products">Produtos</NavLink>

    </nav>
  
}

export default Navbar