import React from 'react';
import {
    FaGithub,
    FaCamera,
    FaCircleNotch,
    FaApple,
    FaFileVideo,
    FaSearchDollar,
  } from "react-icons/fa";
  import './Services.css';
  import Slide from 'react-reveal/Slide';
  const services=[
      {
        title:'Web Development',
        icon:<FaGithub/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      },
      {
        title:'Photography',
        icon:<FaCamera/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      },
      {
        title:'Web Design',
        icon:<FaCircleNotch/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      },
      {
        title:'App Development',
        icon:<FaApple/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      },
      {
        title:'Video Editing',
        icon:<FaFileVideo/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      },
      {
        title:'SEO Expert',
        icon:<FaSearchDollar/>,
        description:'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'

      }
  ]
const Services = () =>{
    return(
        <div className="services-container">
           <div className="service-intro">
                <h1 >My Awesome Services</h1>
            </div>
            <div className="services">
                {services.map((s) => {
                return (
                  <Slide left>
                    <div className="service">
                    <div className="icon">
                    <h1>{s.icon}</h1>
                    </div>
                    <div className="details">
                        <h2>{s.title}</h2>
                        <p>{s.description}</p>
                    </div>
                    </div>
                  </Slide>
                );
                })}
            </div>
        </div>
    );
}
export default Services;