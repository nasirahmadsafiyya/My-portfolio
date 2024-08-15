// import logo from './logo.svg';

import { Link, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import './App.css';
import Test from './components/Test';
import Sidebar from './components/SideBar/Sidebar';


function App() {
  return (
    <div>
      <section  id='homepage'>
      {/* <Navbar /> */}
      </section>
      <Sidebar />
      {/* <Test />
      <Test /> */}
      <div>
      <section>HomePage</section>
      <section id='services'>Services</section>
      <section id='portfolio'>Portfolio</section>
      <section id='contact'>Contact</section>
      <section id='about'>About</section>
      <section id='contact'>Contact</section>
        </div>
      <Routes>
      <Route />
      </Routes>
    </div>
  );
}

export default App;
