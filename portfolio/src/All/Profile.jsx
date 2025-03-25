import {useState} from "react"
import ProfileImg from "./ProfileImg.jpg";
import {FaLinkedin, FaGithub, FaFacebook, FaInstagram} from "react-icons/fa"
import "./Profile.css";

export const Profile = () => {
    return (<>
        <div className="profile">
            <div className = "header">
                <h1>ARUN M</h1>
                <div className="menu">
                    <a href="#"><button className="menu_ele">Home</button></a>
                    <a href="#"><button className="menu_ele">About</button></a>
                    <a href="#"><button className="menu_ele">Skill</button></a>
                    <a href="#"><button className="menu_ele">Projects</button></a>
                    <a href="#"><button className="menu_ele">Contact</button></a>
                </div>
            </ div>
            <div className="Home">
                <div className = "Home_left">
                    <h1>Arun M</h1>
                    <h2>Frontend Developer</h2>
                    <div className="Home_about">
                        <p>I am a Frontend Developer with experience in building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and building products that solve real-world problems.</p>
                    </div>
                    <div className="view_conect">
                        <a href="#"><button className="view">View My Work</button></a>
                        <a href="#"><button className="connect">Connect Me</button></a>
                    </div>
                    <div className="social">
                        <a href="#"><FaLinkedin className="icon"/></a>
                        <a href="#"><FaGithub  className="icon"/></a>
                        <a href="#"><FaFacebook  className="icon"/></a>
                        <a href="#"><FaInstagram  className="icon"/></a>
                    </div>
                </div>
                <div className="Home_right">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={ProfileImg} alt="profile img" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>
                        Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
                        team collaborations, or opportunities to be a part of your vision.
                    </p>
                    <ul>
                        <li>
                        <strong>Email:</strong> example@email.com
                        </li>
                        <li>
                        <strong>Phone:</strong> +91 1234567890
                        </li>
                        <li>
                        <strong>GitHub:</strong> <a href="https://github.com/yourprofile">github.com/yourprofile</a>
                        </li>
                        <li>
                        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
                        </li>
                    </ul>
                    </div>

                    <div className="contact-form">
                    <h2>Send Me a Message</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Hello, I’d like to talk about..." required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}