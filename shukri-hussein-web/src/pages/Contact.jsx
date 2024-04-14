import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact">
    <div className="title">
      <h2>Contact Me</h2>
    </div>

    <div className="contact-cards">
      <div className="card">
        <span className="emoji" role="img" aria-label="Email">📧</span>
        <h3>Email Me:</h3>
        <p>
          <a 
            className="email-link" 
            href="mailto:husseinshukri@outlook.com"
          >
            husseinshukri@outlook.com
          </a>
        </p>
      </div>
      
      <div className="card">
        <span className="emoji" role="img" aria-label="Phone">☎️</span>
        <h3>Phone:</h3>
        <p>(943) 212-0277</p>
      </div>
      
      <div className="card">
        <span className="emoji" role="img" aria-label="Website">🌐</span>
        <h3>Website Links:</h3>
        <p>
          <a 
            className="website-link" 
            href="https://github.com/scmh001"
          >
            github.com/scmh001
          </a>
          <br />
          <a 
            className="website-link"
            href="https://www.linkedin.com/in/shukrihussein/"
          >
            linkedin/shukrihussein
          </a>
          <br />
          <a 
            className="website-link"
            href="https://medium.com/@husseinshukri"
          >
            medium/@husseinshukri
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;