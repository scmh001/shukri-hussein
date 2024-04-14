import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-body">
    <div className="content">
      <h1>Shukri <span className="last-name">Hussein</span></h1>
      <h2>Full Stack Developer</h2>
      {/* <h3>Hello, my name is</h3> */}
      
      <div className="social-links">
        <a 
          className="github-link"
          href="https://github.com/scmh001"
        >
          <img 
            alt="GitHub"
            className="social-icon" 
            src="https://i.imgur.com/60lvgSf.png"
          />
        </a>
        <a 
          className="linkedinn-link"
          href="https://www.linkedin.com/in/shukrihussein/"
        >
          <img
            alt="LinkedIn"
            className="social-icon"
            src="https://i.imgur.com/PmPD5Ny.png"
          />  
        </a>
        <a
          className="medium-link" 
          href="https://medium.com/@husseinshukri"
        >
          <img
            alt="Medium"
            className="social-icon"
            src="https://i.imgur.com/qJ1fnov.png"
          />
        </a>
      </div>

      <p className="bio"> 
      Crafting Cutting-Edge, Scalable Full Stack Solutions 
      <br/> 
      PASSIONATE FULL STACK DEVELOPER LEVERAGING DIVERSE TECH STACKS TO DELIVER IMPACTFUL RESULTS 
      <br/> 
      Extensive Full Stack Development Expertise Across Multiple Domains 
      <br/> 
      ⚡ Developing highly responsive, dynamic Single-Page Applications (SPA) & Progressive Web Apps (PWA) powered by React.js, expertly utilizing JSX, Hooks, Redux, and GraphQL to engineer immersive, state-of-the-art user experiences. 
      <br/> 
      ⚡ Building lightning-fast, SEO-optimized, server-side rendered static websites with Next.js and Gatsby.js, ensuring peak performance, seamless scalability, and enhanced user engagement. 
      <br/> 
      ⚡ Architecting and implementing robust, secure RESTful and GraphQL APIs using Django, Django REST Framework, Node.js and Express.js to power feature-rich, high-performance back-end services. 
      <br/> 
      ⚡ Leveraging cloud-native technologies like AWS, Docker, Kubernetes for highly available, infinitely scalable, microservices-based architectures to support enterprise-grade applications. 
      <br/> 
      ⚡ Implementing CI/CD pipelines and DevOps best practices with tools like Jenkins, GitHub Actions, and Terraform for streamlined, agile development and reliable deployments. 
      </p>
    </div>
  </div>
);

export default Home;