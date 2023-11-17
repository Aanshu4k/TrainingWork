import './App.css';
import Home from './Components/Home';
import BlogList from './Components/BlogList';
import Contact from './Components/Contact';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/blogs' element={<BlogList/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
  );
}

export default App;
