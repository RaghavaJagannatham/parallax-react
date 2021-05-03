import React from 'react'
import { BsFillHouseDoorFill, BsFillCursorFill , BsFillEnvelopeFill } from "react-icons/bs";
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="content">
                <h2>Get In Touch</h2>
                <p>Any queries will be Answered, information regarding hiring will be Appreciated</p>

            </div>
            <div className="containerr">
                <div className="contact-info">
                    <div className="boxx">
                        <div className="icon">
                            <div className="text">
                            
                            <BsFillHouseDoorFill />
                                <h3>
                                    Address
                                </h3>
                                <p>H.N0 10-11-44/16
                                    Shalininagar LabourColony 
                                    Warangal,Telangana,India.
                                    pin:506001.
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="boxx">
                        <div className="icon">
                            <div className="text">
                                <BsFillCursorFill />
                                <h3>
                                    phone
                                </h3>
                                <p>8096838739</p>

                            </div>

                        </div>

                    </div>
                    <div className="boxx">
                        <div className="icon">
                        
                            <div className="text">
                                <BsFillEnvelopeFill />
                                <h3>
                                    Email
                                </h3>
                                <p>raghavajagannatham9@gmail.com</p>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="contact-form">
                    <form>
                        <h2>Send Message</h2>
                        <div className="input-box">
                            <input type="text" name="" required="required"/>
                            <span>Full name</span>

                        </div>

                        <div className="input-box">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>

                        </div>

                        <div className="input-box">
                            <textarea required="required"/>
                            <span>Type your message....</span>

                        </div>

                        <div className="input-box">
                            <input type="submit" name="" value="send"/>

                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact
