import "./Contact.css"

function Contact() {
    return (
        <section className="contact">
            <div className="title">
              <h2>Contact Me</h2>
            </div>

          {/* contact cards */}
          <div className="box">
            <div className="card">
              <h1 className="emoji1">📧</h1>
              <h5>Email Me:</h5>
              <div className="para">
              <a className="email" href="mailto:husseinshukri@outlook.com">husseinshukri@outlook.com</a>
                  {/* <button>Email</button> */}
              </div>
            </div>
            <div className="card">
            <h1 className="emoji1">☎️</h1>
              <h5>Phone:</h5>
              <div className="para2">
                <p>(943) 212-0277</p>
                  {/* <button>Phone</button> */}
              </div>
            </div>
            <div className="card">
            <h1 className="emoji1">🌐</h1>
              <h5>Website Links:</h5>
                  <div className="para2">
                  <a className="github" href="https://github.com/scmh001">github.com/scmh001</a>
                  <br></br>
                  <a className="github" href="https://www.linkedin.com/in/shukrihussein/">linkedin/shukrihussein</a>
                  <br></br>
                  <a className="github" href="https://medium.com/@husseinshukri">medium/@husseinshukri</a>
                  {/* <button>Email</button> */}
              </div>
            </div>
          </div>
        </section>
    )
  }
  
  export default Contact