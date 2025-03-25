import {useState, useEffect} from "react"
import ProfileImg from "./ProfileImg.jpg";
import { motion } from "framer-motion";
import {FaLinkedin, FaGithub, FaFacebook, FaInstagram} from "react-icons/fa"
import "./Profile.css";

export const Profile = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    

    const timeline = [
      { year: "2022", skill: "C Programming", description: "Started learning foundational programming concepts." },
      { year: "2023", skill: "DSA, Java, OOP", description: "Dived into problem-solving with Java & Object-Oriented Programming." },
      { year: "2024", skill: "MySQL, DBMS, JavaScript, React", description: "Explored databases & front-end development." },
      { year: "2025", skill: "Firebase, Express.js", description: "Learning backend development with cloud services." },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
                <div className="Home_right right">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={ProfileImg} alt="profile img" />
                    </div>
                </div>
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
            <div className="About">
                <h1>About <span>Me</span></h1>
                <p>My journey as a developer and the path that led me to where I am today</p>
                
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">About Me</h2>
      <p className="text-center text-gray-700 mb-8">
        My journey in programming has been exciting! Here’s a quick look at my progress over the years:
      </p>

      <div className="relative flex items-center">
        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 h-1 bg-purple-500"
          style={{ width: "100%" }}
        ></motion.div>

        {/* Timeline Points */}
        <div className="flex justify-between w-full relative">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.5, duration: 0.5 }}
                className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"
              ></motion.div>
              <h3 className="text-lg font-semibold text-purple-600 mt-4">{item.year}</h3>
              <p className="text-gray-700 text-center px-4">
                <strong className="text-purple-700">{item.skill}</strong> – {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
            </div>
            <div className="skill"></div>
            <div className="projects"></div>
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

                    <div className="contact-form">
                        <h2>Send Me a Message</h2>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Hello, I’d like to talk about..." required></textarea>
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