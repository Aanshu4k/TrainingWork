import './App.css';
import React from 'react';
import Axios from 'axios';
const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
const CardList = (props) => (
  <div>
    {
      props.profiles.map(profile => <Card key={profile.id} {...profile} />
      )}
  </div>
);
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} />
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );
  }
}
class Form extends React.Component {
  state = {
    userName: ''
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder='GitHub username' />
        <button >Add Card</button>
      </form>
    )
  }
}
class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
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