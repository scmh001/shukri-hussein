import React, { useState, useEffect } from 'react';
import "./Projects.css"


const Projects = () => {
    // const [repos, setRepos] = useState([]);
  
    // useEffect(() => {
    //   fetch('https://api.github.com/users/scmh001/repos')
    //     .then(response => response.json())
    //     .then(data => setRepos(data))
    //     .catch(error => console.error(error));
    // }, []);
  
    return (
      <>
    <div>
    <div className="trackervideo">
        {/* <p className="videodesc1">React SPAs leverage a virtual DOM and component-based architecture to deliver high performance, enabling efficient updates and rendering that enhance user experience.
        </p> */}
        <iframe width="1227" height="690" src="https://www.youtube.com/embed/znpNfmepDiQ" title="python gh projects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="trackervideo">
        {/* <p className="videodesc1">React SPAs leverage a virtual DOM and component-based architecture to deliver high performance, enabling efficient updates and rendering that enhance user experience.
        </p> */}
        <iframe width="900" height="600" src="https://www.youtube.com/embed/aXMs5PsY1dE" title="drinktrackersiteSC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </div>
      
      </>
      // <div className="projects">
      //   <h2>My GitHub Projects</h2>
      //   <ul>
      //     {repos.map(repo => (
      //       <li key={repo.id}>
      //         <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      //           {repo.name}
      //         </a>
      //       </li>
      //     ))}
      //   </ul>
      // </div>
    );
  };

export default Projects