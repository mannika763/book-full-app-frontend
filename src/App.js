
import './App.css';
import Home from './Components/Home';
import ListForm from './Components/ListForm';
import Login from './Components/LoginandSignup/Login';
import Singup from './Components/LoginandSignup/Singup';
import MessageOwnerPage from './Components/MessageOwnerPage';
import Navbar from './Components/Navbar';
import Store from './Components/Store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar></Navbar>
    
     <Routes>
     <Route path="/" element={<Home/>} />
                    <Route path="/listyourbookhere" element={<ListForm />} />
                    <Route path='/your_store' element={<Store/>}/>
                    <Route path="/message-owner" element={<MessageOwnerPage/>} /> 
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Singup/>} />
                </Routes>
    </div>
  </Router>
  );
}

export default App;
