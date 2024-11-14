// src/components/NavBar.js
import React from 'react';
import { courseData } from '../data/courseData';

const NavBar = () => (
  <nav>
    <ul>
      {Object.values(courseData).map(subject => (
        <li key={subject.id}>
          <a href={`#${subject.id}`}>{subject.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
