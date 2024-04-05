import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Form from "./pages/Form";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/register' element= {<Register />} /> */}
        <Route path='/form' element= {<Form />} />
        <Route path='/admin' element= {<AdminPanel />} />
        <Route path='/' element= {<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
