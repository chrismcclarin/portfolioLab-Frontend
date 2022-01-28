import './App.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import {Route, Routes} from "react-router-dom"


function App() {
  const URL = "https://portfoliolabratory.herokuapp.com/"

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About URL={URL} />} />
          <Route path="projects" element={<Projects URL={URL} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
