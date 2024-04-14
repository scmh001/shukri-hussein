import "./About.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="main">
        <img src="https://i.imgur.com/wb1cI5g.png" alt="Profile headshot" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>
            Software Engineer - <br />
            <span className="accent">Full-Stack Developer</span>
          </h5>
          <p>
            Embarking on a self-directed programming odyssey from 2014 to 2023, I
            immersed myself in the digital craftsmanship of coding through
            esteemed courses like Harvard's CS50 and MIT's Introduction to
            Computer Science and Programming Using Python on platforms such as
            edX. These foundational courses, coupled with the interactive
            learning experiences provided by FreeCodeCamp and Codecademy,
            equipped me with a robust understanding of computer science and
            programming essentials.
          </p>
          <p>
            My journey further evolved with my attendance at Flatiron School
            from 2023 to 2024, where I pursued a program in software
            engineering, enriching my knowledge and practical skills in the
            field. As my proficiency grew, I specialized in JavaScript and
            Python, leveraging acclaimed texts like "Eloquent JavaScript" and
            online series such as "Python for Everybody" to deepen my expertise.
          </p>
          <NavLink className="contact-btn" to="/contact">
            Let's Talk
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default About;