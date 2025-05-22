'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import WoodPressedBenefits from '../components/WoodPressedBenefits';
import Footer from '../components/Footer';

export default function BenefitsPage() {
  return (
    <div className="benefits-page">
      <Navbar />
      
      <div className="page-header">
        <h1>Health Benefits</h1>
        <p>Discover why our cold-pressed oils are better for you</p>
      </div>
      
      <div className="benefits-content">
        <div className="intro-section">
          <h2>Why Choose RigVedha Cold-Pressed Oils?</h2>
          <p>
            Our traditional wood-pressed oils retain all the natural goodness, nutrients, and 
            antioxidants that are often lost in modern commercial oil extraction processes. 
            This makes them not just tastier, but significantly healthier for you and your family.
          </p>
        </div>
        
        <WoodPressedBenefits />
        
        <div className="comparison-section">
          <h2>Cold-Pressed vs. Refined Oils</h2>
          
          <div className="comparison-table">
            <div className="comparison-card">
              <h3>RigVedha Cold-Pressed Oils</h3>
              <ul>
                <li>Preserves natural nutrients and antioxidants</li>
                <li>No chemicals or solvents used in extraction</li>
                <li>Natural flavor and aroma preserved</li>
                <li>Lower heat used, preserving healthy fats</li>
                <li>Higher in vitamins and minerals</li>
                <li>Environmentally friendly process</li>
              </ul>
            </div>
            
            <div className="comparison-card refined">
              <h3>Commercial Refined Oils</h3>
              <ul>
                <li>Most nutrients destroyed in processing</li>
                <li>Chemical solvents often used</li>
                <li>Natural flavor removed</li>
                <li>High heat damages fatty acid structure</li>
                <li>Additives and preservatives added</li>
                <li>Energy-intensive manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .benefits-page {
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
        
        .benefits-content {
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
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .comparison-section {
          margin-top: 80px;
          text-align: center;
        }
        
        .comparison-section h2 {
          font-size: 28px;
          color: #234d20;
          margin-bottom: 30px;
          font-weight: 600;
        }
        
        .comparison-table {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .comparison-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          flex: 1;
          min-width: 280px;
          max-width: 450px;
          position: relative;
          border-top: 4px solid #26a65b;
          text-align: left;
        }
        
        .comparison-card.refined {
          border-top-color: #d32f2f;
        }
        
        .comparison-card h3 {
          font-size: 18px;
          color: #234d20;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
        }
        
        .comparison-card.refined h3 {
          color: #d32f2f;
        }
        
        .comparison-card ul {
          padding-left: 20px;
        }
        
        .comparison-card li {
          color: #3d3d3d;
          font-size: 15px;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .comparison-table {
            flex-direction: column;
            align-items: center;
          }
          
          .comparison-card {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 