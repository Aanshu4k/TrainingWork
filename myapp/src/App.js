import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import TodoList from './Components/ToDoList.js';
function App() {
  return (
    <Card>
      <TodoList />
    </Card>
  );
}

export default App;


























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