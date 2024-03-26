import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import StudentSection from './components/StudentSection';
import ScribblePage from './components/ScribblePage';
import TeacherSection from './components/TeacherSection';
// import Scribble from './components/Scribble';
// import AboutUs from './components/Aboutus';
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-section" element={<StudentSection />} />
          <Route path="/scribble" element={<ScribblePage />} />
          {/* <Route path="/math" element={<Scribble subject="Math" />} />
          <Route path="/scribble" element={<Scribble subject="Science" />} /> */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
      {/* <TeacherSection /> */}
    </Router>
  );
};

export default App;
