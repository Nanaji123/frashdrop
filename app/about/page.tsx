'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      
      <div className="page-header">
        <h1>Our Story</h1>
        <p>The journey of RigVedha Organics and our commitment to quality</p>
      </div>
      
      <div className="about-content">
        <div className="story-section">
          <div className="story-image">
            <img src="/images/about-story.jpg" alt="Founders of RigVedha Organics" />
          </div>
          
          <div className="story-text">
            <h2>Our Beginning</h2>
            <p>
              RigVedha Organics began with a simple idea - to bring the authentic taste and health benefits 
              of traditional wood-pressed oils to modern kitchens. Our founder, inspired by childhood 
              memories of visiting local oil mills with his grandfather, set out to revive these 
              age-old techniques that were slowly being forgotten.
            </p>
            <p>
              Starting in 2018 with just one wooden press and a commitment to quality, we've grown into 
              a trusted name in organic oils, serving thousands of health-conscious families across the country.
            </p>
          </div>
        </div>
        
        <div className="values-section">
          <h2>Our Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We believe in sustainable farming practices that respect the environment and produce the healthiest ingredients.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Traditional Methods</h3>
              <p>Our commitment to traditional wood-pressing techniques preserves both nutrition and heritage.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">👨‍🌾</div>
              <h3>Farmer Relationships</h3>
              <p>We work directly with organic farmers, ensuring fair prices and sustainable livelihoods.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparency</h3>
              <p>We believe you deserve to know exactly what goes into your food and how it's made.</p>
            </div>
          </div>
        </div>
        
        <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At RigVedha Organics, our mission is to reconnect people with truly natural food by preserving 
              traditional oil pressing techniques while meeting modern quality standards. We're committed to:
            </p>
            <ul>
              <li>Making chemical-free, pure oils accessible to everyone</li>
              <li>Supporting organic farming communities</li>
              <li>Educating consumers about the benefits of cold-pressed oils</li>
              <li>Preserving traditional food processing knowledge for future generations</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .about-page {
          font-family: 'Poppins', system-ui, sans-serif;
          background-color: #f8f7f3;
        }
        
        .page-header {
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          padding: 60px 5vw;
          text-align: center;
        }
        
        .page-header h1 {
          font-size: 42px;
          font-weight: 700;
          color: #234d20;
          margin: 0 0 16px;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .page-header p {
          font-size: 16px;
          color: #3d3d3d;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .about-content {
          padding: 60px 5vw;
          max-width: 1300px;
          margin: 0 auto;
        }
        
        .story-section {
          display: flex;
          gap: 50px;
          align-items: center;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        
        .story-image {
          flex: 1;
          min-width: 300px;
        }
        
        .story-image img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }
        
        .story-text {
          flex: 1;
          min-width: 300px;
        }
        
        .story-text h2 {
          font-size: 28px;
          color: #234d20;
          margin-bottom: 24px;
          font-weight: 600;
        }
        
        .story-text p {
          font-size: 16px;
          color: #3d3d3d;
          margin-bottom: 24px;
          line-height: 1.7;
        }
        
        .values-section {
          margin-bottom: 80px;
          text-align: center;
        }
        
        .values-section h2 {
          font-size: 28px;
          color: #234d20;
          margin-bottom: 40px;
          font-weight: 600;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        
        .value-icon {
          font-size: 30px;
          margin-bottom: 15px;
        }
        
        .value-card h3 {
          font-size: 18px;
          color: #234d20;
          margin-bottom: 12px;
          font-weight: 600;
        }
        
        .value-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
        
        .mission-section {
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          padding: 60px 40px;
          border-radius: 20px;
        }
        
        .mission-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .mission-content h2 {
          font-size: 28px;
          color: #234d20;
          margin-bottom: 24px;
          font-weight: 600;
          text-align: center;
        }
        
        .mission-content p {
          font-size: 16px;
          color: #3d3d3d;
          margin-bottom: 24px;
          line-height: 1.7;
        }
        
        .mission-content ul {
          padding-left: 20px;
        }
        
        .mission-content li {
          color: #3d3d3d;
          font-size: 16px;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .story-section {
            flex-direction: column;
          }
          
          .mission-section {
            padding: 40px 25px;
          }
        }
      `}</style>
    </div>
  );
} 