import React from 'react';
import './new-app-record.css'

import Header from '../components/header';

export default function NewAppRecord()  {
    return (
        <>
            <Header />
            <div className="content-wrapper">
                <div className="page-container">
                    <div className="page-header">
                        <h1>New Application</h1>
                        <p>Fill in the details of your job application</p>
                    </div>
                    <form className='app-form'>
                        <div className="form-section">
                            <h3>Company Information</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Company Name *</label>
                                    <input type="text" placeholder='Enter a company name' required />
                                    <label>Company Website</label>
                                    <input type="text" placeholder='Enter a company website' />
                                    <label>Industry</label>
                                    <input type="text" placeholder='e.g. Technology, Healthcare, etc' />
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
                                    <input type="text" placeholder='Enter position title' required />
                                    <label>Job Type</label>
                                    <select>
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Contract</option>
                                        <option>Internship</option>
                                    </select>
                                    <label>Location</label>
                                    <input type='text' placeholder='City, State or Remote' />
                                    {/* TODO: Recognize the position title and display the yearly salary range or the user */}
                                    <label>Yearly Salary Range</label>
                                    <input type='text' placeholder='e.g. $80,000 - $100,000' />
                                </div>
                            </div>
                        </div>
                        <div className="form-section">
                            <h3>Application Details</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <textarea placeholder='Copy and past the job description here' rows={4} />
                                    <label>Application Status *</label>
                                    <select>
                                        <option>Applied</option>
                                        <option>Interviewed</option>
                                        <option>Rejected</option>
                                        <option>Offered</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-button">
                            <button type="button" className='cancel'>Cancel</button>
                            <button type='submit' className='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};