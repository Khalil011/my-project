import React from 'react';
import './About.css';
import image from '../../img2.jpg';
import {Accordion,Card, NavLink} from 'react-bootstrap';

const About = () =>{
    return(
        <div className="about">
            <div className="card">
                <img src={image} alt=""/>
            </div>
            
                <div className="content">
                    <h1>About Me</h1>
                    <div><h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</h4></div>
                    <div>
                        
                    </div>
                </div>
        </div>
    )
}
export default About;
/*<a href="#demo" data-toggle="collapse" >Main Skills</a>
                        <a href="">Awards</a>
                        <a href="">Experience</a>
                        <a href="">Education & Certification</a>*/
