import "./About.css"
import { NavLink } from "react-router-dom"

// import { useNavigate } from "react-router-dom";

function About() {
      // let navigate = useNavigate();
      // const routeChange = () => {
      //   let path = `shukri-hussein-web/src/pages/Contact.jsx`;
      //   navigate(path)
      // }
      


    return (
      <section className="about">
      <div className="main">
        <img src="https://i.imgur.com/wb1cI5g.png" alt="head2"></img>
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Software Engineer - <br></br><span className="h5-2">Full-Stack Developer</span></h5>
            <p>Embarking on a self-directed programming odyssey from 2014 to 2023, I immersed myself in the digital craftsmanship of coding through esteemed courses like Harvard's CS50 and MIT's Introduction to Computer Science and Programming Using Python on platforms such as edX. These foundational courses, coupled with the interactive learning experiences provided by FreeCodeCamp and Codecademy, equipped me with a robust understanding of computer science and programming essentials. My journey further evolved with my attendance at Flatiron School from 2023 to 2024, where I pursued a program in software engineering, enriching my knowledge and practical skills in the field.
            <br></br>
            <br></br>
            As my proficiency grew, I specialized in JavaScript and Python, leveraging acclaimed texts like "Eloquent JavaScript" and online series such as "Python for Everybody" to deepen my expertise. My hands-on approach extended to web development, guided by The Odin Project's comprehensive curriculum, where I crafted full-stack applications and familiarized myself with the intricacies of the client-server model and API integration. This practical application of skills, combined with contributions to open-source projects and engagement in developer communities, solidified my transition from a curious learner to a seasoned software developer, ready to tackle professional challenges with a rich portfolio of experiences.
          </p>
            <li className="btnli">
            <NavLink className="contactbtn" to="/contact">Let's Talk</NavLink>
            </li>
        </div>
      </div>
      </section>
    )
  }
  
  export default About