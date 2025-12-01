import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVexo from './components/AboutVexo';
import Features from './components/Features';
import Architecture from './components/Architecture';
import UIConcepts from './components/UIConcepts';
import Roadmap from './components/Roadmap';
import Creator from './components/Creator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BootSequence from './components/BootSequence';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <Router>
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

        <Navbar />

        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutVexo />} />
            <Route path="/features" element={<Features />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/ui" element={<UIConcepts />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
