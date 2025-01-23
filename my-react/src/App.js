import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <Sidebar />

      <div>
        <section id="Services">
          <Parallax type="Services" />
        </section>

        <section>
          <Services />
        </section>

        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />

        <section id="Contact">
          <Contact />
        </section>
        {/* <section id="About">About</section> */}
      </div>

      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
