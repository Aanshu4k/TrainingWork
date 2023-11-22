import './App.css';
import MasterPage from './Components/MasterPage';
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Here you will find information about my work and interests.</p>
    </div>
  )
}
function App() {
  return (
    <MasterPage>
      {/* Children of MasterPage Component */}
      <HomePage />
    </MasterPage>
  );
}

export default App;





























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