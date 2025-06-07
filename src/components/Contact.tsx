import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import '../styles/Contact.css'; 

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Enter a valid email.";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=selva.mern12@gmail.com&su=New%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    setFormData({ name: "", email: "", message: "" })
    window.open(gmailLink, "_blank", "width=600,height=600,top=100,left=100");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let&apos;s Connect</h2>
        <p className="contact-text">Got a project or a question? Reach out to me!</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=selva.mern12@gmail.com&su=Job%Inquiry&body=Hello%20Selva,%20I%20want%20to%20connect%20with%20you."
                className="contact-link"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=selva.mern12@gmail.com&su=Job%Inquiry&body=Hello%20Selva,%20I%20want%20to%20connect%20with%20you.",
                    "gmailPopup",
                    "width=600,height=600,left=100,right=100"
                    );
                }}
                >
                selva.mern12@gmail.com
              </a>

             </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <a href="tel:+916374623301" className="contact-link">+91 63746 23301</a>
              <a
                href={`https://wa.me/916374623301?text=Hello%20Selva,%20I%20would%20like%20to%20connect%20with%20you!`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <FaWhatsapp className="whatsapp-icon" />
              </a>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <FaLinkedin className="contact-icon" />
              </div>
              <a href="https://linkedin.com/in/selvamern" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <FaGithub className="contact-icon" />
              </div>
              <a href="https://github.com/selva-mern12" target="_blank" rel="noopener noreferrer" className="contact-link">
                selva-mern12
              </a>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <a href="https://www.google.com/maps?q=Srivilliputtur,Tamil+Nadu,India" target="_blank" rel="noopener noreferrer" className="contact-link">
                Srivilliputtur, Tamil Nadu, India
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Drop a Message | Say Hello!</h3>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" style={{ resize: 'none', overflow: 'auto' }} rows={5} value={formData.message} onChange={handleChange} required />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
