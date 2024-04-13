import React from 'react'
import "./Home.css"


function Home() {
  return (
    <>
    <div className="home-body">
      <div className="content">
          <h4>Hello, my name is</h4>
          <h1>Shukri <span className="ln">Hussein</span></h1>
          <h3>Full Stack Developer</h3>
          {/* newsletter */}
          <div className="newsletter">
            <form>
                <a className="github" href="https://github.com/scmh001"><img className="githubp" src="https://i.imgur.com/60lvgSf.png"></img></a>
                <a className="linkedin" href="https://www.linkedin.com/in/shukrihussein/"><img className="githubp" src="https://i.imgur.com/PmPD5Ny.png"></img></a>
                <a className="medium" href="https://medium.com/@husseinshukri"><img className="githubp" src="https://i.imgur.com/qJ1fnov.png"></img></a>

            </form>
            <p className="pppp">
                  Crafting Cutting-Edge Solutions
                  <br />
                  FULL STACK DEVELOPER WITH A PASSION FOR DIVERSE TECH STACKS
                  <br />
                  Full Stack Development Expertise
                  <br />
                  ⚡ Developing dynamic, high-performance Single-Page Applications (SPA) & Progressive Web Apps (PWA) with React.js, leveraging JSX, Hooks, and Redux for state-of-the-art user experiences.
                  <br />
                  ⚡ Engineering SEO-friendly, server-side rendered static websites with Next.js for optimal performance and scalability.
                  <br />
                  ⚡ Designing and implementing RESTful APIs with Django & Django REST Framework for robust back-end services.
                </p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home