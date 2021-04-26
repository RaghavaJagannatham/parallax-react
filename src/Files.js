import React from 'react'
import './files.css';
import Fade from 'react-reveal/Fade';
import netflix from './images/netflix-min.jpg'
import amazon from './images/amazon-min.jpg'
import disney from './images/disney-min.jpg'
import todo from './images/todo-min.jpg'
import website from './images/website-min.jpg'

function Files() {
    return (

<div className="container">
    <h2 className="heading">Projects</h2>
        
        <Fade left>
            <div className="card">
                    <div className="imgbx">
                        <img className="image" src={netflix}/>
                    </div>
                    <div className="content">
                        <p ><h2>Netflix-Clone</h2>website link..........github-link...........</p>
                    </div>
            </div>   
        
        </Fade>
        
        
        <Fade top>
        <div className="card">
                <div className="imgbx">
                    <img className="image" src={amazon}/>
                </div>
                <div className="content">
                    <p ><h2>Amazon-Clone</h2>website link..........github-link...........</p>
                </div>
        </div>   

        </Fade>
        
        <Fade right>
        <div className="card">
                <div className="imgbx">
                    <img className="image" src={disney}/>
                </div>
                <div className="content">
                    <p ><h2>Disney-Clone</h2>website link..........github-link...........</p>
                </div>
        </div>   

        </Fade>
        
        <Fade left>
        <div className="card">
                <div className="imgbx">
                    <img className="image" src={todo}/>
                </div>
                <div className="content">
                    <p ><h2>To-do-App</h2>website link..........github-link...........</p>
                </div>
        </div>  

        </Fade>
         <Fade right>
            <div className="card">
                    <div className="imgbx">
                        <img className="image" src={website}/>
                    </div>
                    <div className="content">
                        <p ><h2>social-media-website</h2>website link..........github-link...........</p>
                    </div>
            </div>   
        
        </Fade>


        
       

       
    </div>

       
    )
}

export default Files
