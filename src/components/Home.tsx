import React from "react";
import Image from "next/image";
import profileImg from "../../public/assets/portfolio_profile.jpg";
import "../styles/Home.css";

const Overview: React.FC = () => {
  return (
    <>
      <section id="overview" className="overview-section">
      <div className="overview-wrapper">
        <div className="overview-text-container">
          <h1 className="overview-title">Welcome — So glad you&rsquo;re here!</h1>
          <p className="overview-text">
            I’m <strong>Selvagurunathan</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
            I love building <strong>scalable, user-friendly</strong> web applications that deliver smooth experiences and solve real-world problems through <strong>clean, optimized code</strong>.
          </p>

          <p className="overview-text">
            I’ve successfully completed the{" "}
            <strong>
              <a
                href="https://media-content.ccbp.in/certificates/share/DL9DHKP0BO.png"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const screenWidth = window.innerWidth;
                  const screenHeight = window.innerHeight;
                  const popupWidth =
                    screenWidth > 1024
                      ? 800
                      : screenWidth > 768
                      ? 500
                      : screenWidth * 0.9;
                  const popupHeight =
                    screenWidth > 1024
                      ? 600
                      : screenWidth > 768
                      ? 500
                      : screenHeight * 0.8;

                  window.open(
                    "https://media-content.ccbp.in/certificates/share/DL9DHKP0BO.png",
                    "IRC_Certificate",
                    `width=${popupWidth},height=${popupHeight},left=50,top=50`
                  );
                }}
                className="irc-certificate"
              >
                Industry-Ready Certification (IRC)
              </a>
            </strong>{" "}
            from <strong>NxtWave</strong>, where I gained practical, hands-on experience in full-stack development.
            My portfolio includes <strong>real-world projects</strong> that reflect my skills in{" "}
            <strong>frontend and backend development</strong>,{" "}
            <strong>API integration</strong>, and{" "}
            <strong>performance optimization</strong>.
          </p>

          <p className="overview-text">
            I also have <strong>basic knowledge of TypeScript and Next.js</strong> and am currently exploring them to strengthen my ability to build modern, high-performance applications.
          </p>

          <p className="overview-text">
            As a firm believer in <strong>continuous learning</strong>, I stay updated with the latest industry trends to create clean, modern, and effective solutions.
          </p>

          <p className="overview-text overview-highlight">
            I&rsquo;m glad you&rsquo;re here—take a look at my projects, and feel free to connect. Let&rsquo;s create something impactful together!
          </p>
        </div>
        
        <div className="overview-image-container">
          <div className="overview-thirukkural">
            <p className="kural-tamil">
              &ldquo;செல்வத்துட் செல்வம் செவிச்செல்வம் அச்செல்வம் <br />
              செல்வத்துள் எல்லாம் தலை.&rdquo;
            </p>
            <p className="kural-english">
              &ldquo;Among all riches, the wealth of knowledge is the highest.&rdquo;
            </p>
            <p className="kural-explanation">
              Knowledge and wisdom are the <strong>greatest treasures</strong> one can possess.
              In any profession, skills and intellect matter more than material wealth, as they guide a person
              towards <strong>success and growth.</strong>
            </p>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <div className="portfolio-img-container">
            <Image
              src={profileImg} 
              loading="lazy"
              alt="Selva"
              className="overview-image" />
          </div>
        </div>
      </div>
    </section>
    <hr/>
    </>
  );
};

export default Overview;
