import React, {useEffect, useState} from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import '../styles/Feedback.css';

interface FeedbackProps {
  hideFeedback: () => void;
}

interface FeedbackData {
  name: string;
  email?: string;
  project: string;
  rating: number;
  feedback?: string;
}

const pageStatus = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE"
}

const stars = [1, 2, 3, 4, 5];

const Feedback: React.FC<FeedbackProps> = ({hideFeedback}) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    name: '',
    email: '',
    project: 'general',
    rating: 0,
    feedback: ''
  });
  const [reviewPageStatus, setReviewPageStatus] = useState(pageStatus.initial);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  },[error]);

  const handleVisitorFeedback = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleReview = async () => {
    setReviewPageStatus(pageStatus.loading);
    if (!feedbackData.name) {
      setError('Please Enter your name.');
      setReviewPageStatus(pageStatus.failure);
      return;
    }
    if (feedbackData.rating === 0) {
      setError('Please provide a rating.');
      setReviewPageStatus(pageStatus.failure);
      return;
    }

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        setReviewPageStatus(pageStatus.failure);
        const isJson = response.headers.get('Content-Type')?.includes('application/json');
        const errorData = isJson ? await response.json() : { message: 'Unknown server error' };
        throw new Error(errorData.message || 'Failed to submit feedback');
      }
      setReviewPageStatus(pageStatus.success);
      setFeedbackData({
        name: '',
        email: '',
        project: 'general',
        rating: 0,
        feedback: ''
      });
      setTimeout(() => {
        hideFeedback();
      }, 3000);
    } catch (error: Error | unknown) {
        console.error('Error submitting feedback:', error);
        setError((error instanceof Error) ? error.message : 'Something went wrong. Please try again.');
        setReviewPageStatus(pageStatus.failure);
    }
  }

  return (
    <div className="feedback-container">
      <h2 className='feedback-heading'>Feedback</h2>
      <p className='feedback-quote'>
        Kindly share your thoughts—it helps me grow.
      </p>
      <div className='feedback-form-container'>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Name*'
          required
          onChange={handleVisitorFeedback}
          value={feedbackData.name}
          className='feedback-inputs'
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email(optional)'
          onChange={handleVisitorFeedback}
          value={feedbackData.email}
          className='feedback-inputs'
        />
        <div className="feedback-form-group">
            <label htmlFor="project" className="feedback-lable">
              Which project are you giving feedback on?
            </label>
            <select
              id="project" 
              name="project"
              onChange={handleVisitorFeedback}
              value={feedbackData.project}
              className='feedback-inputs'
              >
                <option value="general">General</option>
                <option value="portfolio">Portfolio</option>
                <option value="quiz-game">Quiz Game</option>
                <option value="covid-19-dash">Covid Dash</option>
                <option value="job-portal">Job Portal</option>
                <option value="elegance">Elegance</option>
                <option value="invo-gen">InvoGen</option>
                <option value="meteo-syn">MeteoSyn</option>
                <option value="nxt-trendz">NxtTrendz</option>
                <option value="nxt-watch">NxtWatch</option>
                <option value="movies-db">Movies DB</option>
            </select>
        </div>
        <div className="feedback-form-group">
            <label htmlFor="rating" className="feedback-lable">Please provide your rating*:</label>
            <div className="star-rating">
              {
                stars.map(star => (
                  star <= feedbackData.rating ? 
                  <FaStar
                    key={star} 
                    onClick={() => setFeedbackData((prevData) => ({ ...prevData, rating: star }))}
                    className="star-icon star-active" /> : 
                  <CiStar
                    key={star} 
                    onClick={() => setFeedbackData((prevData) => ({ ...prevData, rating: star }))}
                    className="star-icon" />
                ))
              }
            </div>
        </div>
        <textarea 
          id="message"
          name="feedback"
          onChange={handleVisitorFeedback}
          value={feedbackData.feedback}
          rows={4} required
          placeholder='Tell me what you liked or what can be improved...'
          className='feedback-inputs feedback'/>
      </div>
      <div className='feedback-button-container'>
        <p className='feedback-note'>
          Thanks for your valuable feedback. I review it by email and use it to improve myself😊.
        </p>
        <button type="button" className='feedback-cancel-button' onClick={() => hideFeedback()}>Cancel</button>
        <button type="button" className='feedback-submit-button' onClick={handleReview}>Submit</button>
        {error ? <p className='feedback-error'>{error}</p> : <p className='empty-error'>&nbsp;</p>}
      </div>
      {reviewPageStatus === pageStatus.loading &&
        <div className='feedback-loading-container'>
          <div className="feedback-spinner" />
          <p className='feedback-loading'>Submitting your feedback</p>
        </div>
      }
      {reviewPageStatus === pageStatus.success && 
        <div className='feedback-success-container'>
        <div className="feedback-success-tick">
          <svg viewBox="0 0 52 52" className="tick-svg">
            <path className="tick-path" fill="none" d="M14 27l7 7 17-17"/>
          </svg>
        </div>
          <p className='feedback-success'>Thank you for your feedback!</p>
        </div>
      }
    </div>
  );
}

export default Feedback;

// selva_briefview
//   .next
//   node_modules
//   public
//   src 
//     api
//       server.tsx 
//     app 
//       page.tsx
//       layout.tsx
//       global.css 
//     components 
//       Header.tsx
//       Home.tsx
//       Projects.tsx
//       Skills.tsx
//       Resume.tsx
//       Contact.tsx
//       Footer.tsx
//       Feedback.tsx
//     styles 
//       Header.css
//       Home.css
//       Projects.css
//       Skills.css
//       Resume.css
//       Contact.css
//       Footer.css
//       Feedback.css
//   .env
