import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Hero from './components/hero/Hero';
import Parallax from './components/Parallax/Parallax';
import Services from './components/Services/Services';


function App() {
  return (
    <div>
      <section id='HomePage'>
      <Navbar  />
      <Hero />
      </section>
      <Sidebar />
      {/* <Test />
      <Test /> */}
      <div>
      {/* <section id='HomePage'>HomePage</section> */}
      <section id='Services'><Parallax type='Services'/></section>
      <section><Services /></section>
      <section id='Portfolio'><Parallax type='portfolio'/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
      <section id='About'>About</section>
        </div>
      <Routes>
      <Route />
      </Routes>
    </div>
  );
}

export default App;
