
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Adduser from './components/Adduser';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Userlist from './components/Userlist';
import User from './components/User';


//https://jsonplaceholder.typicode.com/todos/4




function App() {


  return (
    <div className="App">
      <h1>User App</h1>
      <Navbar/>
      <Routes>
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/userlist' element={<Userlist/>}/>
        <Route path='/userlist/:id' element={<User/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
