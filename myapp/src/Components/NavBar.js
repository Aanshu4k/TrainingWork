
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
const  NavBar=()=>{
  return (
        <nav className='navbar'>
          <ul className='AppList'>
            <li className='appList'>
              <Link to='/'>Home</Link>
            </li>
            <li className='appList'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='appList'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
  );
}

export default NavBar;
