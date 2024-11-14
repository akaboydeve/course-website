// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file
import Header from './components/Header';
import NavBar from './components/NavBar';
import Subject from './components/Subject';
import { courseData } from './data/courseData';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="navbar-section">
        <NavBar />
      </section>
      <section className="body-section">
        <div className="content">
          {Object.keys(courseData).map(subjectId => (
            <Subject key={subjectId} id={subjectId} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
