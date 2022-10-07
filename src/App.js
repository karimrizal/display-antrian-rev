import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Daftar from './pages/Daftar';
import Survey from './pages/Survey';
import Tabel from './pages/Tabel';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* <Route path="/daftar">
            <Daftar />
          </Route> */}
          <Route path="/" element={<><Navbar/><Welcome/></>} />
          <Route path="/daftar" element={<Daftar/>} />
          <Route path="/tabel" element={<Tabel/>} />
          <Route path="/survey" element={<Survey/>} />

        </Routes>
          {/* <Navbar/> */}
      </Router>
    </div>
  );
}

export default App;
