import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Menu from "./components/Menu";
import List from "./components/List";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import NoticeBar from "./components/NoticeBar";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <NoticeBar />
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Reviews />
      <Menu />
      <List />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;