'use client';

import React, { useState } from 'react';
import {
  MdOutlineClose,
  MdOutlineFullscreen,
  MdOutlineScreenRotation,
  MdScreenRotationAlt 
} from "react-icons/md";
import { VscScreenFull, VscScreenNormal  } from "react-icons/vsc";
import '../styles/Certificate.css';
import PortfolioContext from '../context/PortfolioContext';

interface certificate {
    name: string;
    issuedBy: string;
    certificateImage: string;
    techStack: string[];
}

interface FullscreenImageProps {
  image: string;
  handleCloseFullscreen: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({image, handleCloseFullscreen}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);

    document.body.style.overflow = 'hidden';
  };

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.stopPropagation();
    toggleZoom();
  };

  const imageClass = isZoomed ? 'fullscreen-image zoomed' : 'fullscreen-image';
  return(
    <div className='fullscreen-image-container'>
      <div className='fullscreen-img-container'>
        <img
          src={image}
          alt='fullscreen-image'
          className={imageClass}
          loading='lazy'
        />
        <button
          className={`extra-zoom-or-rotate ${isZoomed && "mobile-zoomed"}`} 
          onClick={handleImageClick}
        >
          {
            isZoomed ?
              window.innerWidth > 768 ? <VscScreenNormal /> : <MdScreenRotationAlt />
              :
              window.innerWidth > 768 ? < VscScreenFull /> : <MdOutlineScreenRotation />}
        </button>
      </div>
      <button className='close-fullscreen' onClick={() => handleCloseFullscreen()}>
        <MdOutlineClose />
      </button>
    </div>
  )
}

const Certificate = () => {
  const { certificates } = React.useContext(PortfolioContext) as { certificates: certificate[] };
  const [showImageFullscreen, setShowImageFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setShowImageFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setShowImageFullscreen(false);
    setSelectedImage("");
  };

  return (
    <div className="certificate-container">
      <h1 className='certificate-heading'>Learning Journey</h1>
      <ul className="certificate-list">
        {
          certificates.map(certificate => (
            <li key={certificate.name} className="certificate-item">
              <div className="badge">🏆 Rank #1</div>
              <h2 className='certificate-name'>{certificate.name}</h2>
              <div className='certificate-image-container'>
                <img 
                  src={certificate.certificateImage}
                  alt={`${certificate.name} certificate`}
                  className="certificate-image"
                />
                <button className='fullscreen-button' onClick={() => handleImageClick(certificate.certificateImage)}>
                  <MdOutlineFullscreen />
                </button>
              </div>
              <p className='issued-by'>Issued by: {certificate.issuedBy}</p>
              <p className='certificate-techs'>Tech Stack: {certificate.techStack.join(', ')}</p>
              <div className='ribbon' />
            </li>
          ))
        }
      </ul>
      {showImageFullscreen && <FullscreenImage image={selectedImage} handleCloseFullscreen={handleCloseFullscreen} />}
    </div>
  );
}

export default Certificate;