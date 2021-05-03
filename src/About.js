import React from 'react'
import './About.css'
import img from './images/me-min.jpeg'
import Bounce from 'react-reveal/Bounce';

function About() {
    return (
        <div className="About">
             <Bounce left>
             <div className="box">
                <img  src= {img} alt ="image" ></img>
                <div className="mem">
                <h2>About me</h2>
                <h5>web developer</h5>
                <h5>web designer</h5>

                </div>
                <p><h3>Hey...! Iam Raghava</h3>Iam an web-developer, Iam a Junior Programmer with Good understanding of Front end skills. I love structure and Quality ,I love spending time on fixing little details and optimising Web Apps. Also I like working in a team,and also intrested in making of responsive web applications
                </p>
            
            </div>
            </Bounce>

          
            <Bounce right>
              <section className="class">
                 <div className="boxes">
                    
                 </div>
              </section>
          
            </Bounce>
            
               
     
        </div>
    )
}

export default About
