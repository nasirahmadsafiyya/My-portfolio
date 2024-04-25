// import logo from './logo.svg';

import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Test from './components/Test';
import Sidebar from './components/SideBar/Sidebar';


function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Test />
      <Test />
      <div>
      <section className='h-96'>
      </section>
      <section className='h-96' >parallax</section>
      <section className='h-96'>Services</section>
      <section className='h-96'>parallax</section>
      <section className='h-96'>portfolio1</section>
      <section className='h-96'>portfolio2</section>
      <section className='h-96'>portfolio3</section>
       <h1 className='h-96'>Contact</h1>
        </div> */}
      <Routes>
      <Route />
      </Routes>
    </div>
  );
}

export default App;
