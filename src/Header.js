import React from 'react'
import img1 from '../src/images/bird1.png';
import img2 from '../src/images/bird2.png';
import img3 from '../src/images/forest.png';
import img4 from '../src/images/rocks.png';
import img5 from '../src/images/water.png';

import  { useState } from 'react';

function Header() {
    const [offset, setOffset] = useState()

    const handleScroll = () => setOffset(window.pageYOffset)
    
    window.addEventListener('scroll', handleScroll)
    
    
    return (
        <div>
            
            <div className="header" style={{
                top: (offset * 0.5) + 'px'
            }}>
            <h4 className="logo">Raghava Jagannatham</h4>
                
                    <ul className="list">
                        <li><a className="active">Home</a> </li>
                        <li><a>Contact</a> </li>
                        <li><a>Description</a> </li>
                        <li><a>Portfolio</a> </li>
                    </ul>
                    
                
            </div>

            <div className="section" >
                <h2 className="text" style={{
                    top: ( 50 + offset * -0.5) + '%'
                }}>
                    <span>Web Developer </span> <br />
                    Portfolio
                </h2>

                <img src= {img1} alt="bird1 " style={{
                    top: (offset * -0.5) + 'px',
                    left: (offset * 0.50) + 'px'
                }}/>

                <img  src= {img2} alt="bird2" style={{
                    top: (offset * -1.5) + 'px',
                    left: (offset * -0.5) + 'px'
                    
                }}/>

                <img  src= {img3} alt="forest" style={{
                    top:(offset * 0.50) + 'px'
                }}
            /> 

                <a className="btn"  style={{
                    marginTop:(offset * -0.15) + 'px' 
                }}>Explore</a>

                <img  src= {img4} alt="rocks"  style={{
                    top:(offset * -0.12) + 'px'
            

                }}/>
                <img  src= {img5} alt="water" style={{
                    bottom:(offset * -0.12) + 'px'
                }}/>
                

                </div>
            
            

        
                
            
        
          
        </div>
    );
}

export default Header
