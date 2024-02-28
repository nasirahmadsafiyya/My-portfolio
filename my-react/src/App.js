// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path='/Home' element={<Home />} />
       <Route path='/Projects' element={<Projects />} />
       <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
