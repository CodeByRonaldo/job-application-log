import React from 'react';
import { Briefcase, MapPin, Building, Globe, Book, Award, MessageSquare } from 'lucide-react';
import Header from '../components/header.jsx';

import  './profile-page.css'

export default function ProfilePage() {
return (
    <>
        <Header />
        <div className="profile-container">
            <div className="profile-header">
            <div className="profile-cover"></div>
            <div className="profile-info">
                <div className="avatar">JD</div>
                <div className="profile-main">
                <h1>Jane Doe</h1>
                <h2>Senior Software Engineer</h2>
                <div className="profile-meta">
                    <span><MapPin size={16} /> San Francisco, CA</span>
                    <span><Globe size={16} /> Open to Remote</span>
                    <span><Briefcase size={16} /> 5 Years Experience</span>
                </div>
                </div>
                <button className="connect-button">Connect</button>
            </div>
            </div>

            <div className="profile-content">
            <div className="profile-section">
                <h3>About Me</h3>
                <p>Full-stack developer passionate about creating user-centric applications.
                Focused on React, Node.js, and cloud architecture. Looking for opportunities
                to lead innovative projects in fintech or healthtech sectors.</p>
            </div>

            <div className="profile-grid">
                <div className="profile-section">
                <h3>Career Interests</h3>
                <div className="tags">
                    <span>Tech Leadership</span>
                    <span>Startups</span>
                    <span>AI/ML</span>
                    <span>Remote-first</span>
                </div>
                </div>

                <div className="profile-section">
                <h3>Preferred Companies</h3>
                <div className="company-list">
                    <div className="company-item">
                    <Building size={16} />
                    <span>Series A-C Startups</span>
                    </div>
                    <div className="company-item">
                    <Building size={16} />
                    <span>Tech Giants</span>
                    </div>
                </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>Application Analytics</h3>
                <div className="stats-grid">
                <div className="stat-card">
                    <h4>Applications</h4>
                    <span className="stat-number">45</span>
                    <span className="stat-label">Last 3 months</span>
                </div>
                <div className="stat-card">
                    <h4>Response Rate</h4>
                    <span className="stat-number">68%</span>
                    <span className="stat-label">Industry avg: 45%</span>
                </div>
                <div className="stat-card">
                    <h4>Interview Rate</h4>
                    <span className="stat-number">35%</span>
                    <span className="stat-label">Above average</span>
                </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>Learning & Development</h3>
                <div className="achievement-grid">
                <div className="achievement-card">
                    <Book size={20} />
                    <h4>Current Focus</h4>
                    <p>System Design & Architecture</p>
                </div>
                <div className="achievement-card">
                    <Award size={20} />
                    <h4>Recent Certificate</h4>
                    <p>AWS Solutions Architect</p>
                </div>
                <div className="achievement-card">
                    <MessageSquare size={20} />
                    <h4>Mentoring</h4>
                    <p>Available for technical mentoring</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    );
};