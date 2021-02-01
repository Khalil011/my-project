import React from "react";
import image from '../../img1.jpg';
import './Contact.css';

const Contact = ()=>{
    return(
        <div className="container-flex">
            <div className="flexone">
                <h1>Hire Me.</h1>
                <p>I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com</p>
                <form className="form">
                    <input type="text" className="form-control"  placeholder="Your Name*"/>
                    <input type="email" className="form-control"  placeholder="Your email*"/>
                    <input type="text" className="form-control"   placeholder="Write a Subject"/>
                    <textArea className="form-control"  placeholder="Your Message"/>
                    <button className="btn btn-outline">Submit</button>
                </form>
            </div>
            <div className="flextwo">
                <div className="card" style={{height:'500px',width:'500px',border:'none'}}>
                    <img
                    style={{height:'550px',width:'500px',borderRadius:'20px'}}
                    src={image} alt=""
                    />
                </div>
            </div>
        </div>
    )
}
export default Contact;