'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import FarmToBottleProcess from '../components/FarmToBottleProcess';
import Footer from '../components/Footer';

export default function ProcessPage() {
  return (
    <div className="process-page">
      <Navbar />
      
      <div className="page-header">
        <h1>Our Process</h1>
        <p>How we create the purest cold-pressed organic oils</p>
      </div>
      
      <div className="process-content">
        <div className="intro-section">
          <h2>Traditional Cold-Pressing Process</h2>
          <p>
            At RigVedha Organics, we believe in preserving ancient wisdom while embracing modern standards. 
            Our cold-pressing technique dates back centuries, ensuring that all the nutrients, 
            flavors, and benefits of the seeds remain intact in our oils.
          </p>
          
          <div className="benefits-highlights">
            <div className="benefit-card">
              <div className="icon">🌱</div>
              <h3>Organic Seeds</h3>
              <p>We source only the finest organic seeds from trusted farmers</p>
            </div>
            
            <div className="benefit-card">
              <div className="icon">🌡️</div>
              <h3>No Heat</h3>
              <p>Our cold-pressing technique ensures no nutrients are lost</p>
            </div>
            
            <div className="benefit-card">
              <div className="icon">⚙️</div>
              <h3>Wood Pressed</h3>
              <p>Traditional wood presses maintain the authentic flavor profile</p>
            </div>
          </div>
        </div>
        
        <FarmToBottleProcess />
      </div>
      
      <Footer />
      
      <style jsx>{`
        .process-page {
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
        
        .process-content {
          padding: 60px 5vw;
          max-width: 1300px;
          margin: 0 auto;
        }
        
        .intro-section {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .intro-section h2 {
          font-size: 28px;
          color: #234d20;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .intro-section p {
          font-size: 16px;
          color: #3d3d3d;
          max-width: 800px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        
        .benefits-highlights {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        
        .benefit-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          flex: 1;
          min-width: 250px;
          max-width: 320px;
        }
        
        .icon {
          font-size: 30px;
          margin-bottom: 15px;
        }
        
        .benefit-card h3 {
          font-size: 18px;
          color: #234d20;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .benefit-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .benefits-highlights {
            flex-direction: column;
            align-items: center;
          }
          
          .benefit-card {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 