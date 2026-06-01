import {useState, useEffect} from "react"
import ProfileImg from "./logos/ProfileImg.jpg";
import ProfileImg1 from "./logos/ProfileImg1.jpg";
import {FaLinkedin, FaGithub, FaFacebook, FaInstagram} from "react-icons/fa";
import { Timeline } from "./TimeLine/Timeline";
import { Skills } from "./Skill/Skill";
import { Projects } from "./Project/Projects"; 
import { profileData } from "../data";
import emailjs from "@emailjs/browser";
import "./Profile.css";
import "../index.css";

export const Profile = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [sendMailButton, setSendMailButton] = useState(false);
    const [profile, setProfile] = useState(ProfileImg);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [darkMode, setDarkMode] = useState( 
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const toggleTheme = () => {
      setDarkMode(prevMode => !prevMode);
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    
    useEffect(()=>{
        console.log(darkMode)
        setProfile(!darkMode ? ProfileImg1 : ProfileImg);
        
    })

    

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sendMail = (e) => {
        setSendMailButton(true);
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        emailjs.init(profileData.emailJs.userId);

        let params = {
            name: formData.name,
            email: formData.email,
            subject: "Official",
            message:`Name: ${formData.name}
                    Email: ${formData.email}
                    Message: ${formData.message}`
        };

        emailjs.send(profileData.emailJs.serviceId, profileData.emailJs.templateId, params)
            .then(response => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Mail sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(error => {
                console.error("FAILED...", error);
                alert("Failed to send mail. Please try again later.");
            }).finally(() => {
                setSendMailButton(false);
            });
    };


    return (<>

        <div className="profile">
            <div className = "header">
                <h1>{profileData.name}</h1>
                    <div className="menu">
                        {profileData.menuItems.map((item, index) => (
                            <a key={index} href={item.href}>
                                <button className="menu_ele">{item.label}</button>
                            </a>
                        ))}
                    </div>
            </div>

            <div id ="home" className="Home">
                <div className="Home_right right">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={profile} alt="profile img" />
                    </div>
                </div>
                <div className = "Home_left">
                    <div className="Hello">{profileData.greeting}</div>
                    <h1>{profileData.displayName}</h1>
                    <h2>{profileData.role}</h2>
                    <div className="Home_about">
                        <p>
                        {profileData.aboutIntro}
                        {profileData.aboutDetails}
                        {profileData.aboutSummary}
                        </p>
                    </div>
                    <div className="view_conect">
                        <a href={profileData.heroButtons.resume.href} download>
                            <button className="view">{profileData.heroButtons.resume.label}</button>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={profileData.heroButtons.connect.href}>
                            <button className="connect">{profileData.heroButtons.connect.label}</button>
                        </a>
                    </div>
                    <div className="social">
                        {profileData.socialLinks.map((link, index) => {
                          const Icon = link.icon;
                          return (
                            <a key={index} target="_blank" rel="noopener noreferrer" href={link.href}>
                              <Icon className="icon" />
                            </a>
                          );
                        })}
                    </div>
                </div>
                <div className="Home_right tempright">
                    <div  className="Profile_wrapper">
                        <img className = "Profile_img" src={profile} alt="profile img" />
                    </div>
                </div>
            </div>

            <div id= "about" className="About">
                <h1>{profileData.about.heading} <span>{profileData.about.headingHighlight}</span></h1>
                <p className="text-center ">
                    {profileData.about.intro}
                </p>
                <div className="About_content">
                    <div className="WhoIam">
                        <h2><span>Who</span> I am</h2>
                        <p>
                            {profileData.about.summary}
                            {profileData.about.details}
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
                        <h2>{profileData.contact.heading}</h2>
                        <p>
                            {profileData.contact.description}
                        </p>
                        <ul>
                            {profileData.contact.details.map((detail, index) => (
                                <li key={index}>
                                    <strong>{detail.label}</strong> {detail.value}
                                </li>
                            ))}
                        </ul>
                        <div className="social">
                            {profileData.socialLinks.map((link, index) => {
                              const Icon = link.icon;
                              return (
                                <a key={index} target="_blank" rel="noopener noreferrer" href={link.href}>
                                  <Icon className="icon" />
                                </a>
                              );
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h2>{profileData.contact.form.heading}</h2>
                        <form onSubmit={sendMail} >
                            <input
                              type="text"
                              placeholder={profileData.contact.form.namePlaceholder}
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                              type="email"
                              placeholder={profileData.contact.form.emailPlaceholder}
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                              placeholder={profileData.contact.form.messagePlaceholder}
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            <button type="submit" disabled={sendMailButton}>
                              {sendMailButton ? profileData.contact.form.processingLabel : profileData.contact.form.submitLabel}
                            </button>
                        </form>
                        <div className="time_switch">
                            <p className="time">
                                {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
                            </p>
                            <label className="switch">
                                <input 
                                    type="checkbox" 
                                    checked={!darkMode}
                                    onChange={toggleTheme}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
