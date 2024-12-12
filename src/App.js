import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <>
    <div>
      {/* Fixed Header */}
      <Header />

      {/* Dynamic Content Based on Route */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          </Routes>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
    </>
  );
};


   
export default App;