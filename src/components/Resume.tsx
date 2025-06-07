import React, {useEffect} from "react";
import Image from "next/image";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import resumeImg from "../../public/assets/selva-resume.png";
import '../styles/Resume.css'; 

const Resume: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareData = {
      title: "Selva_Resume",
      text: "Check out my resume!",
      url: origin + "/assets/selva-resume.pdf",
    };

    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on your browser");
    }
  };

  return (
    <>
      <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="resume-preview">
          <h2 className="resume-title">Selva Resume</h2>
          {mounted && window.innerWidth > 768 ? 
            <iframe 
              src="/assets/selva-resume.pdf" 
              title="Resume Preview"
              aria-label="Resume Preview"
              loading="lazy"
            >
              <p>Your browser does not support PDFs. Please download the resume using the button below.</p>
            </iframe> : 
            <Image
              src={resumeImg}
              alt="selva_resume"
              className="resume-img"
              loading='lazy'
              sizes="100vw"
              width={1200}
              height={900}
              style={{ width: '100%', height: 'auto' }}
            />
          }
        </div>
        <div className="resume-actions">
          <a 
            href="/assets/selva-resume.pdf" 
            download="selva_Resume.pdf" 
            className="resume-download-btn"
            aria-label="Download Resume"
          >
            Download Pdf
            <FaDownload className="download-icon"/>
          </a>
          { mounted && window.innerWidth >= 768 && <button
              type="button"
              className="resume-download-btn resume-share-btn"
              onClick={handleShare}
              aria-label="Share Resume"
          >
            Share Resume
            <FaShareAlt className="download-icon" />
          </button> }
        </div>
      </div>
    </section>
    <hr />
    </>
  );
};

export default Resume;