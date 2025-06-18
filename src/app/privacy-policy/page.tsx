import React from 'react';
import './index.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h2 className="privacy-heading">Privacy Policy</h2>
      <p className="privacy-text">
        Welcome to Selva's Portfolio (
        <a href="https://selva-briefview.vercel.app" className="privacy-link">
          https://selva-briefview.vercel.app/
        </a>
        ). This Privacy Policy explains how we use Google Analytics to track usage and improve user experience.
      </p>
      <p className="privacy-text">
        Google Analytics collects anonymized data, such as page views, session duration, and device information, using cookies. No personally identifiable information (PII), such as names or email addresses, is collected. We have enabled IP anonymization to protect your privacy, and data is retained for up to 2 months.
      </p>
      <p className="privacy-text">
        We use cookies for Google Analytics to analyze website performance. You can manage your cookie preferences via our Cookie Consent tool, which allows you to accept or decline cookies. Declining cookies may limit some analytics features.
      </p>
      <p className="privacy-text">
        For more details on how Google processes data, please visit{" "}
        <a href="https://www.google.com/policies/privacy/partners/" target="_blank" className="privacy-link">
          Google’s Privacy Policy
        </a>
        .
      </p>
      <p className="privacy-text">
        If you have any questions about this Privacy Policy, please contact me at{" "}
        <a 
          href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent('selva.mern12@gmail.com')}&su=${encodeURIComponent('Inquiry%20from%20Selva\'s%20Portfolio')}&body=${encodeURIComponent('Hi%20Selva,\n\nI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20you.')}`}
          target="_blank"
          className="mail-link"
        >
          selva.mern12@gmail.com
        </a>
        .
      </p>
    </div>
  );
}