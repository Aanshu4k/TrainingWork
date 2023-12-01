import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NormalComponent from './Components/NormalComponent';
import PureComponent from './Components/PureComponent';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | {isLoggedIn && <Link to="/about">About</Link>}
        </nav>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={isLoggedIn ? <AboutPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
























// const Home = () => <h2><button>Login</button></h2>;
// const About = () => <h2>About</h2>;
// const Contact = () => <h2>Contact</h2>;
// const NotFound = () => <h2>404 Not Found</h2>;

// let [isLoggedIn, setisLoggedIn] = useState(false);
//   const handleChange = () => {
//     setisLoggedIn(!isLoggedIn)
//   }
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           {isLoggedIn && <li><Link to="/about">About</Link></li>}
//           <li><Link to="/contact">Contact</Link></li>
//           <li><b>Need About section?<br /></b><input type='radio' name='radio' onChange={handleChange} />Yes{" "}
//             <input type='radio' name='radio' onChange={handleChange} />No<br />
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );

{/* <MasterPage>
    //   {/* Children of MasterPage Component */}
//   <Counter />
//   <DataFetch />
//   <Timer />
//   <Factorial />
// </MasterPage> */}


// import HomePage from './Components/HomePage';
// import {items as Itm} from './Components/Products';
// import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
// import Contact from './Components/Contact';
// import {Login as Log} from './Components/Login';
// import PageNotFound from './Components/PageNotFound';
// <Router>
//   <nav className='navbar'>
//     <ul className='AppList'>
//       <li className='appList'>
//         <Link className='navlist' to='/'>HomePage</Link>
//       </li>
//       <li className='appList'>
//         <Link className='navlist' to='/products'>Products</Link>
//       </li>
//       <li className='appList'>
//         <Link className='navlist' to='/contact_us'>Contact Us</Link>
//       </li>
//       <li className='appList'>
//         <Link className='navlist' to='/login'>Login</Link>
//       </li>
//     </ul>
//   </nav><br/>
//   <Routes>
//     <Route exact path='/' element={<HomePage/>} />
//     <Route path='/products' element={<Itm/>} />
//     <Route path='/contact_us' element={<Contact/>} />
//     <Route path='/login' element={<Log />} />
//     <Route path='*' element={<PageNotFound />} />
//   </Routes>
// </Router>