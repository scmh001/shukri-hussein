import React from 'react';
import './Projects.css';

const Projects = () => (
  <>
    <div className="trackervideo">
      <iframe 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        frameBorder="0"
        height="690" 
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/znpNfmepDiQ"
        title="python gh projects"
        width="1227"
      />
    </div>
    <div className="trackervideo">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="600"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/aXMs5PsY1dE"
        title="drinktrackersiteSC"
        width="900"
      />
    </div>
  </>
);

export default Projects;