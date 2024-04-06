import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Form from "./pages/Form";
import AdminPanel from "./pages/AdminPanel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path='/register' element= {<Register />} /> */}
        <Route path='/form' element= {<Form />} />
        <Route path='/admin' element= {<AdminPanel />} />
        <Route path='/' element= {<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
