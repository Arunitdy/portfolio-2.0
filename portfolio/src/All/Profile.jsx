import {useState, useEffect} from "react"
import ProfileImg from "./logos/ProfileImg.jpg";
import {FaLinkedin, FaGithub, FaFacebook, FaInstagram} from "react-icons/fa"
import { Timeline } from "./TimeLine/Timeline";
import { Skills } from "./Skill/Skill";
import { Projects } from "./Project/Projects"; 
import emailjs from "@emailjs/browser";
import "./Profile.css";


export const Profile = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sendMail = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        emailjs.init("v1NuNxKifUW2QtRAC");

        let params = {
            name: formData.name,
            email: formData.email,
            subject: "Official",
            message:"name:" + formData.name + "email:" + formData.email + "message:" + formData.message
        };

        emailjs.send("service_r5z14fm", "template_ew8u8u5", params)
            .then(response => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Mail sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(error => {
                console.error("FAILED...", error);
                alert("Failed to send mail. Please try again later.");
            });
    };


    return (<>

        <div className="profile">
            <div className = "header">
                <h1>ARUN M</h1>
                <div className="menu">
                    <a href="#home"><button className="menu_ele">Home</button></a>
                    <a href="#about"><button className="menu_ele">About</button></a>
                    <a href="#skills"><button className="menu_ele">Skill</button></a>
                    <a href="#projects"><button className="menu_ele">Projects</button></a>
                    <a href="#contact"><button className="menu_ele">Contact</button></a>
                </div>
            </ div>

            <div id ="home" className="Home">
                <div className="Home_right right">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={ProfileImg} alt="profile img" />
                    </div>
                </div>
                <div className = "Home_left">
                    <div className="Hello">Hello, my name is</div>
                    <h1>Arun M</h1>
                    <h2>Frontend Developer</h2>
                    <div className="Home_about">
                        <p>I am a Frontend Developer with experience in building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and building products that solve real-world problems.</p>
                    </div>
                    <div className="view_conect">
                        <a href="#projects"><button className="view">View My Work</button></a>
                        <a href=                 "https://www.linkedin.com/in/arun-m-8989212aa/"><button className="connect">Connect Me</button></a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/arun-m-8989212aa/"><FaLinkedin className="icon"/></a>
                        <a href="https://github.com/Arunitdy"><FaGithub  className="icon"/></a>
                        <a href="https://www.facebook.com/arun.mundakkal.94"><FaFacebook  className="icon"/></a>
                        <a href="https://www.instagram.com/arun_mundakkal/"><FaInstagram  className="icon"/></a>
                    </div>
                </div>
                <div className="Home_right tempright">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={ProfileImg} alt="profile img" />
                    </div>
                </div>
            </div>

            <div id= "about" className="About">
                <h1>About <span>Me</span></h1>
                <p className="text-center ">
                    My journey in programming has been exciting! Here’s a quick look at my progress over the years:
                </p>
                <div className="About_content">
                    <div className="WhoIam">
                        <h2><span>Who</span> I am</h2>
                        <p>
                            I am a passionate web developer specializing in <span>React, JavaScript</span>, and backend technologies.
                            With experience in building full-stack applications, I enjoy solving problems, optimizing 
                            performance, and creating user-friendly interfaces.
                        </p>
                    </div>
                    <Timeline  className="time_line"/>
                </div>
            </div>

            <div id = "skills"className="skill"><Skills/></div>

            <div id = "projects"className="projects"> <Projects/> </div>

            <div id ="contact" className="footer">
                <div className="footer-container">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>
                            Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
                            team collaborations, or opportunities to be a part of your vision.
                        </p>
                        <ul>
                            <li>
                            <strong>Email:</strong> arunmundakkal003@gmail.com
                            </li>
                            <li>
                            <strong>Phone:</strong> +91 9995024963
                            </li>
                        </ul>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/arun-m-8989212aa/"><FaLinkedin className="icon"/></a>
                            <a href="https://github.com/Arunitdy"><FaGithub  className="icon"/></a>
                            <a href="https://www.facebook.com/arun.mundakkal.94"><FaFacebook  className="icon"/></a>
                            <a href="https://www.instagram.com/arun_mundakkal/"><FaInstagram  className="icon"/></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h2>Send Me a Message</h2>
                        <form onSubmit={sendMail}>
                            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <textarea placeholder="Hello, I’d like to talk about..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <p className="time">
                            {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}