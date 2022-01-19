import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Jobs />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
