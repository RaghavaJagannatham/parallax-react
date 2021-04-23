import React from 'react'
import './About.css'
import img from './images/me.jpeg'
import Bounce from 'react-reveal/Bounce';

function About() {
    return (
        <div className="About">
            <div className="box">
                <img  src= {img} alt ="image" ></img>
                <div className="mem">
                <h2>About me</h2>
                <h5>web developer</h5>
                <h5>web designer</h5>

                </div>
               
                <p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.[7]
                </p>
            
            </div>
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
