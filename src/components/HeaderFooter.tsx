import React, { useState, useEffect, JSX } from 'react';
import { useActiveSection, sections, SectionType } from '../hooks/useActiveSection';
import { FaProjectDiagram, FaCode, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { GiEarthAmerica } from "react-icons/gi";
import '../styles/HeaderFooter.css';

const icons: Record<SectionType, JSX.Element> = {
  overview: <GiEarthAmerica />,
  projects: <FaProjectDiagram />,
  skills: <FaCode />,
  resume: <FaFileAlt />,
  contact: <FaEnvelope />,
};

interface HeaderFooterProps {
  hideFeedback?: () => void;
}

const Menu: React.FC<{ activeTab: string; handleClick: (id: string) => void }> = ({ activeTab, handleClick }) => (
  <ul className="hamburger-menu">
    {sections.map((id) => (
      <li key={id} className={`menu-item ${activeTab === id ? 'active-tab' : ''}`}>
        <a
          href={`#${id}`}
          className="menu-link"
          onClick={(e) => {
            e.preventDefault();
            handleClick(id);
          }}
          aria-current={activeTab === id ? 'page' : undefined}
        >
          <div className="nav-icon">{icons[id]}</div>
          <span className="menu-text">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
        </a>
      </li>
    ))}
  </ul>
);

export const Header: React.FC<HeaderFooterProps> = ({ hideFeedback }) => {
  const activeTab = useActiveSection(0.6);
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="header-container" onClick={hideFeedback}>
      <h1 className="header-title">
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleClick('overview');
          }}
        >
          Selva&apos;s Briefview
        </a>
      </h1>
      
      {isMounted && window.innerWidth > 768 && (
        <Menu activeTab={activeTab} handleClick={handleClick} />
      )}
    </div>
  );
};

export const Footer: React.FC<HeaderFooterProps> = ({ hideFeedback }) => {
  const activeTab = useActiveSection(0.4);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="footer-container" onClick={hideFeedback}>
      <Menu activeTab={activeTab} handleClick={handleClick} />
    </div>
  );
};
