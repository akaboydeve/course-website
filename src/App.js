// src/App.js
import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import {Helmet} from "react-helmet";
import './App.css'; // Import the CSS file
import Header from './components/Header';
import NavBar from './components/NavBar';
import Subject from './components/Subject';
import { courseData } from './data/courseData';

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Course Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Course wensite kiit" />
            </Helmet>
      <SpeedInsights />
    <script src="https://publisher.linkvertise.com/cdn/linkvertise.js"></script><script>linkvertise(593345, {whitelist: [], blacklist: [""]});</script>
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
