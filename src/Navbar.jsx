import Home from './home.jsx';
import About from './about.jsx';
import Servicemap from './servicemap.jsx';
import Contact from './contact.jsx';
import { NavLink,Route,BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const Navbar=()=>{
    return(
        <>
        <div className='navbar'>
            <div className='under_navbar'>
            <div className='navbar_left'>
                <h4>auK.<span>Ve</span></h4>
                </div>
                <div className='navbar_right'>
                    <ul>
                    <BrowserRouter>
                   <li><NavLink to='/'>Home</NavLink></li>
                   <li><NavLink to='/about'>About</NavLink></li>
                   <li><NavLink to='/servicemap'>Servicemap</NavLink></li>
                   <li><NavLink to='/contact'>Contact</NavLink></li>
                   <li><NavLink to='/career'>Career</NavLink></li>

                   <Route path='/' component={Home} />
                   <Route path='/about' component={About} />
                   <Route path='/servicemap' component={Servicemap} />
                   <Route path='/contact' component={Contact} />
                </BrowserRouter>
                   
                    </ul>
                </div>
            </div>
            
        </div>
        </>
    )

}
export default Navbar;