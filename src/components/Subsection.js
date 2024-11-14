// src/components/Subsection.js
import React from 'react';

const Subsection = ({ title, content }) => (
  <div className="subsection">
    <h3>{title}</h3>
    <ul>
      {content.map((item, index) => (
        <li key={index}>
          <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Subsection;
