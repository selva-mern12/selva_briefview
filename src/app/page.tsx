'use client';


import React, { useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { PiCertificate } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

import {Header, Footer} from '../components/HeaderFooter';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';
import Feedback from '../components/Feedback';
import Intro from '../components/Intro';

const Page = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [closeFeedback, setCloseFeedback] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [closeCertificate, setCloseCertificate] = useState(false);
  const [certificateIconlable, setCertificateIconlable] = useState(false);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    document.body.style.overflow = showCertificate ? 'hidden' : 'hidden';
    }, [showCertificate]);

  const hideCertificate = () => {
    setCloseCertificate(true);
    setTimeout(() => {
      setShowCertificate(false);
      setCloseCertificate(false);
    }
    , 300);
  }

  const hideFeedback = () => {
    setCloseFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setCloseFeedback(false);
    }, 300);
  
  }

  return (
    <div className='portfolio-container'>
      <SpeedInsights />
      { showIntro && <Intro />}
      <Header hideFeedback={hideFeedback} />
      <Home />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer hideFeedback={hideFeedback} />
      {
        showFeedback && (
          <div 
            className={`feedback-section ${closeFeedback ? 'close-feedback' : 'open-feedback'}`}
          >
            <Feedback hideFeedback={hideFeedback} />
          </div>
        )
      }
      <button
        type='button'
        className='feedback-icon'
        onMouseEnter={() => setShowFeedback(true)}
        aria-label="Give Feedback"
      >
        <VscFeedback />
      </button>
      { certificateIconlable &&
        <p className='certificate-lable'>Click to view Certificates</p>
    }
      <button
        type='button'
        className='certificate-icon' 
        onClick={() => {
            setShowCertificate(true)
            setCertificateIconlable(false)
            hideFeedback();
        }}
        onMouseEnter={() => setCertificateIconlable(true)}
        onMouseLeave={() => setCertificateIconlable(false)}
        aria-label="View Certificates"
      >
        <PiCertificate />
      </button>
      { showCertificate && (
        <div className={`certificate-section ${closeCertificate ? 'close-certificate' : 'open-certificate'}`}>
            <Certificate />
            <button className='close-certificate-icon' onClick={hideCertificate}><MdOutlineClose /></button>
        </div>
      )}
      <Analytics mode='production' />
    </div>
  );
};

export default Page;