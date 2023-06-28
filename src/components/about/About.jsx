import React from "react"
import './about.css'
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>
          </div>

          <p>
          An enthusiastic trained Frontend Developer with a strong sense of aesthetics and interactions. 
          I love the creative aspect of web development and enjoy creating solutions that solve real-world 
          problems. My work experience includes creating websites/web apps for real estate companies, startups, 
          and small business owners.

          I am very passionate about technology and how it can be used to improve the way businesses operate. 
          I have experience working with Javascript, React, HTML5, CSS3, Bootstrap, Laravel PHP, and WordPress 
          among other technologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
