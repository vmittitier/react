import "./Navbar.css"

import { Link , NavLink} from "react-router-dom"
// links com react router

const Navbar = () => {
  return <nav>
    {/*     
    <Link to="/">Home</Link>

    <Link to="/About">Sobre</Link>
     */}
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/about">Sobre</NavLink>

    </nav>
  
}

export default Navbar