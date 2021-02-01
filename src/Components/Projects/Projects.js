import React from 'react';
import './Project.css';
import img1 from '../../img3.jpg';
import img2 from '../../img4.jpg';
import img3 from '../../img5.jpg';
import {Slide,LightSpeed} from 'react-reveal';
  
  const projects=[
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img1}
      },
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img1}
      },
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img3}
      },
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img1}
      },
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img2}
      },
      {
        title:'Development',
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
        buttonText:'View Details',
        backgroundImage:{img3}
      }   
  ]
  const Projects = () =>{
    return(
      
        <div className="projects-container">
          <Slide right>
           <div className="project-intro">
                <h1 >My Projects</h1>
            </div>
            </Slide>
            <div className="projects">
                {projects.map((p) => {
                return (
                  <Slide left>
                    <div className="project">
                        <div className="details">
                            
                            <h2>{p.title}</h2>
                            <p>{p.description}</p>
                            <button className="btn btn-online-primary btn-details">{p.buttonText}</button>
                        </div>
                    </div>
                  </Slide>
                );
                })}
            </div>
            
        </div>
    );
}
export default Projects;