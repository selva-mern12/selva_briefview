
"use client";
import React, { useEffect, useState } from 'react';
import { MdDeleteOutline, MdCheck  } from "react-icons/md";
import'../../styles/admin.css'
interface ReviewType {
    _id: string;
    name: string;
    email?: string;
    project: string;
    rating: number;
    feedback?: string;
}

const PortfolioAdmin  = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [reviews, setReviews] = useState<ReviewType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleAdminPass = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const response = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ admin_pass: password }),
            });
            const data = await response.json();
            setError("")
            setIsAuthenticated(data.admin);
            if (!data.admin) setError("Invalid password");
        }
    }

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/review');
                if (!response.ok) {
                    setError('Failed to fetch reviews');
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data.data || []);
                setError("")
            } catch (error) {
                setError('Error fetching reviews');
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    },[])

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`/api/review?id=${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                setError('Failed to delete review');
                throw new Error('Failed to delete review');
            }
            setReviews(prev => prev.filter(review => review._id !== id));
            setError("")
        } catch (error) {
            setError('Error deleting review');
            console.error('Error deleting review:', error);
        }
    };

    const handleApprove = async (id: string) => {
        try {
            const response = await fetch('/api/review', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) {
                setError('Failed to approve review');
                throw new Error('Failed to approve review');
            }
            const updatedReview = await response.json();
            setReviews(prev => prev.map(review => review._id === id ? updatedReview.data : review));
            setError("")
        } catch (error) {
            setError('Error approving review');
            console.error('Error approving review:', error);
        }
    };

    return(
        <div className='admin-wrapper'>
            {
                isAuthenticated ?
                    <div className='admin-dashboard'>
                        <h1 className='admin-dashboard-heading'>Welcome to Selva&apos;s Portfolio Admin</h1>
                        {
                            reviews.length > 0 ?
                            <div className='reviews-container'>
                                <h2 className='review-title'>Reviews</h2>
                                <ul className='reviews-list'>
                                    {reviews.map(review => (
                                        <li key={review._id} className='review-item'>
                                            <strong className='review-name'>{review.name}</strong> ({review.email}) - {review.rating} stars
                                            <p className='review-project'>{review.project}</p>
                                            <p className='review-feedback'>{review.feedback}</p>
                                            <div className='review-actions'>
                                                <button type='button' className='approve-button' onClick={() => handleApprove(review._id)}>Approve <MdCheck /></button>
                                                <button type='button' onClick={() => handleDelete(review._id)} className="delete-button">Delete <MdDeleteOutline /></button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <p className='no-reviews'>No reviews available.</p>
                        }
                        {error && <p className='error-message'>{error}</p>}
                    </div>
                    :
                    <div className='admin-login'>
                        <h1 className='admin-login-heading'>Selva&apos;s Portfolio Admin Login</h1>
                        <label className='admin-login-label'>Enter Admin Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            className='admin-login-input'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={e => handleAdminPass(e)}
                        />
                        <input type='checkbox' onChange={() => setShowPassword(prev => !prev)} />
                    </div>
            }

        </div>

    )
}

export default PortfolioAdmin;