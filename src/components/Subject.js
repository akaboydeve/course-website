// src/components/Subject.js
import React from 'react';
import Subsection from './Subsection';
import { courseData } from '../data/courseData';

const Subject = ({ id }) => {
  const subject = courseData[id];
  
  if (!subject) return null;

  return (
    <div className="subject" id={id}>
      <h2>{subject.title}</h2>
      {Object.entries(subject.sections).map(([key, section]) => (
        <Subsection 
          key={key}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default Subject;
