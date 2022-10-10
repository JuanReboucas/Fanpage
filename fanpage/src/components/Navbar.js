import { Form, Link } from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

function Navbar() {
  return (
    <nav id='module'>
        <h2>
          <Link to="/"><BiCameraMovie />Star Wars</Link>
        </h2>
        <form>
          <input type="text" placeholder='Busque um filme'/>
          <button type='Submit'>
            <BiSearchAlt2 />
          </button>
        </form>  
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
  )
}

export default Navbar
