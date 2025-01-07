import React from 'react';
import Header from '../components/header.jsx';

import './new-app-record.css'

export default function DetailedApplicationPage() {
return (
    <>
        <Header />
        <div className="page-container">
            <div className="page-header">
            <h1>New Application</h1>
            <p>Fill in the details of your job application</p>
            </div>

            <form className="detailed-form">
            <div className="form-section">
                <h3>Company Information</h3>
                <div className="form-grid">
                <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" placeholder="Enter company name" required />
                </div>
                <div className="form-group">
                    <label>Company Website</label>
                    <input type="url" placeholder="https://" />
                </div>
                <div className="form-group">
                    <label>Industry</label>
                    <input type="text" placeholder="e.g. Technology, Healthcare" />
                </div>
                <div className="form-group">
                    <label>Company Size</label>
                    <select>
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1000+ employees</option>
                    </select>
                </div>
                </div>
            </div>

            <div className="form-section">
                <h3>Position Details</h3>
                <div className="form-grid">
                <div className="form-group">
                    <label>Position Title *</label>
                    <input type="text" placeholder="Enter position title" required />
                </div>
                <div className="form-group">
                    <label>Job Type</label>
                    <select>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder="City, State or Remote" />
                </div>
                <div className="form-group">
                    <label>Salary Range</label>
                    <input type="text" placeholder="e.g. $80,000 - $100,000" />
                </div>
                </div>
            </div>

            <div className="form-section">
                <h3>Application Details</h3>
                <div className="form-grid">
                <div className="form-group full-width">
                    <label>Job Description</label>
                    <textarea
                    placeholder="Copy and paste the job description here"
                    rows={4}
                    />
                </div>
                <div className="form-group">
                    <label>Application Status *</label>
                    <select required>
                    <option>Preparing</option>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Application Date</label>
                    <input type="date" />
                </div>
                </div>
            </div>

            <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-grid">
                <div className="form-group full-width">
                    <label>Notes</label>
                    <textarea
                    placeholder="Add any additional notes about this application"
                    rows={3}
                    />
                </div>
                </div>
            </div>

            <div className="form-actions-full">
                <button type="button" className="secondary-button">Cancel</button>
                <button type="submit" className="primary-button">Submit Application</button>
            </div>
            </form>
        </div>
    </>
    );
};