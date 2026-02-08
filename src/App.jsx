import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop, Background } from "./components/layout";
import { Home, Contact } from "./pages";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0f] text-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      <Background />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
