import React, { useRef, useEffect} from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPython, SiPostman, SiVercel, SiNetlify, SiSqlite } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandTypescript, TbBrandNextjs   } from "react-icons/tb";
import "../styles/Skills.css"; 

interface Skill {
    name: string;
    icon: React.ReactElement;
}

const skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
  { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
  { name: "JavaScript", icon: <DiJavascript className="js-icon" /> },
  { name: "React.js", icon: <FaReact className="react-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="node-icon" /> },
  { name: "Express.js", icon: <SiExpress className="express-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="mongodb-icon" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="ts-icon" /> },
  { name: "Next Js", icon: <TbBrandNextjs className="nextjs-icon" /> },
  { name: "SQLite", icon: <SiSqlite className="sqlite-icon" /> },
  { name: "Python", icon: <SiPython className="python-icon" /> },
  { name: "Git", icon: <FaGitAlt className="git-icon" /> },
  { name: "GitHub", icon: <FaGithub className="github-icon" /> },
  { name: "Postman", icon: <SiPostman className="postman-icon" /> },
  { name: "Netlify", icon: <SiNetlify className="netlify-icon" /> },
  { name: "Vercel", icon: <SiVercel className="vercel-icon" /> },
];

const Skills: React.FC = () => {  
  const skillsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const skillsSection = skillsSectionRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skills");
          } else {
            entry.target.classList.remove("animate-skills");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);
  

  return (
    <>
      <section id="skills" className="skills-section" ref={skillsSectionRef}>
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid" role="list">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <hr/>
    </>
  );
};

export default Skills;
