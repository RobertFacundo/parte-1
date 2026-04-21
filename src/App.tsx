import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import NavBar from './shared/components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/use-cases" element={<div>Use Cases</div>} />
        <Route path="/pricing" element={<div>Pricing</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;