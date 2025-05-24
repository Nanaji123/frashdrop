'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BestSellingProducts from './BestSellingProducts';
import FarmToBottleProcess from './FarmToBottleProcess';
import WoodPressedBenefits from './WoodPressedBenefits';
import CustomerTestimonials from './CustomerTestimonials';
import FAQ from './FAQ';
import Footer from './Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll for visual effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Top announcement bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-slider">
            <span>✨ Get ₹50 OFF on Your First Order with code <strong>FIRST50</strong></span>
            <span>🌿 100% Organic & Chemical-Free</span>
            <span>🚚 Free Shipping on Orders Above ₹599</span>
            <span>✨ Get ₹50 OFF on Your First Order with code <strong>FIRST50</strong></span>
            <span>🌿 100% Organic & Chemical-Free</span>
            <span>🚚 Free Shipping on Orders Above ₹599</span>
          </div>
        </div>
      </div>
      
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="overlay"></div>
        </div>
        
        <div className="hero-content-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">100% Organic Wood-Pressed Oils</div>
              
              <h1>Discover Nature's Pure Essence in Every Drop</h1>
              
              <p>
                Experience the authentic taste and health benefits of our traditionally 
                crafted wood-pressed oils, made with care from hand-selected organic seeds.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="primary-button"
                  onClick={() => scrollToSection('shop-section')}
                >
                  <span>Shop Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                
                <button 
                  className="secondary-button"
                  onClick={() => scrollToSection('process-section')}
                >
                  <span>Our Process</span>
                </button>
              </div>
              
              <div className="trust-indicators">
                <div className="customer-avatars">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" />
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer" />
                  <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="Customer" />
                  <span className="avatar-count">+10k</span>
                </div>
                <div className="ratings">
                  <div className="stars">★★★★★</div>
                  <div className="rating-text">Trusted by <strong>10,000+</strong> happy customers</div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="image-container">
                <img src="image/bottles.png" alt="Organic Oil Products" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="trusted-by-section">
        <div className="section-header">
          <h4>Premium Organic Oils</h4>
          <p>Featured in leading publications</p>
        </div>
        
        <div className="trusted-by-logos">
          <div className="logo-card">
            <div className="logo-name">Forbes India</div>
            <div className="logo-quote">"Setting new standards in organic oil production"</div>
          </div>
          
          <div className="logo-card">
            <div className="logo-name">The Hindu</div>
            <div className="logo-quote">"Preserving ancient wisdom in modern times"</div>
          </div>
          
          <div className="logo-card">
            <div className="logo-name">Economic Times</div>
            <div className="logo-quote">"Revolutionizing the organic oil market"</div>
          </div>
        </div>
      </section>
      
      {/* Product Sections */}
      <div id="shop-section">
        <BestSellingProducts />
      </div>
      
      <div id="process-section">
        <FarmToBottleProcess />
      </div>
      
      <WoodPressedBenefits />
      <CustomerTestimonials />
      <FAQ />
      <Footer />
      
      <style jsx>{`
        .home-container {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #f8f7f3;
          overflow-x: hidden;
        }
        
        /* Announcement Bar */
        .announcement-bar {
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          color: #444;
          padding: 8px 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }
        
        .announcement-content {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 0 20px;
        }
        
        .announcement-slider {
          display: flex;
          gap: 40px;
          animation: slideInfinite 30s linear infinite;
          white-space: nowrap;
        }
        
        .announcement-slider span {
          padding: 0 20px;
          font-size: 13px;
          font-weight: 500;
        }
        
        @keyframes slideInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 75vh;
          min-height: 580px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #f9f7f2;
          padding-top: 30px;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1607192042772-ecd8b7049e15?q=80&w=1770&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(249, 247, 242, 0.92);
          backdrop-filter: blur(2px);
          z-index: 1;
        }
        
        .hero-content-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
        }
        
        .hero-text {
          flex: 1.2;
          min-width: 400px;
          padding-right: 0;
          margin-right: -20px;
          z-index: 2;
          padding-top: 20px;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(90deg, #e6f4ea, #f2f8e8);
          color: #26a65b;
          font-weight: 600;
          font-size: 13px;
          padding: 7px 18px;
          border-radius: 30px;
          margin-bottom: 26px;
          box-shadow: 0 3px 10px rgba(38, 166, 91, 0.1);
        }
        
        .hero-text h1 {
          font-size: 46px;
          font-weight: 800;
          color: #234d20;
          margin: 0 0 20px;
          line-height: 1.15;
          letter-spacing: -0.5px;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .hero-text p {
          font-size: 16px;
          line-height: 1.6;
          color: #3d3d3d;
          margin-bottom: 30px;
          max-width: 520px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 34px;
        }
        
        .primary-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(45deg, #234d20, #26a65b);
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 30px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(35, 77, 32, 0.25);
          transition: all 0.2s ease;
        }
        
        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(35, 77, 32, 0.3);
        }
        
        .secondary-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #234d20;
          font-weight: 600;
          font-size: 15px;
          padding: 13px 26px;
          border-radius: 12px;
          border: 2px solid #234d20;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .secondary-button:hover {
          background: rgba(35, 77, 32, 0.04);
          transform: translateY(-2px);
        }
        
        .trust-indicators {
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          max-width: 90%;
        }
        
        .customer-avatars {
          display: flex;
          align-items: center;
        }
        
        .customer-avatars img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          margin-right: -10px;
        }
        
        .avatar-count {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #234d20;
          color: white;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 600;
          margin-left: 5px;
        }
        
        .ratings {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stars {
          color: #f7b731;
          font-size: 16px;
        }
        
        .rating-text {
          color: #234d20;
          font-size: 13px;
        }
        
        .hero-image {
          flex: 0.8;
          min-width: 320px;
          display: flex;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
          margin-left: 50px;
          margin-top: 30px;
        }
        
        .image-container {
          position: relative;
          z-index: 3;
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          border-radius: 32px;
          padding: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(249, 242, 226, 0.8);
          overflow: hidden;
          transition: all 0.3s ease;
          transform: translateY(20px);
        }
        
        .image-container:hover {
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
        }
        
        .hero-image img {
          width: 450px;
          height: auto;
          object-fit: contain;
          border-radius: 24px;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.08));
          transition: all 0.3s ease;
        }
        
        .hero-image img:hover {
          transform: scale(1.02);
        }
        
        /* Trusted By Section */
        .trusted-by-section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .section-header {
          margin-bottom: 50px;
        }
        
        .section-header h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #666;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .section-header p {
          font-size: 16px;
          color: #555;
          font-weight: 400;
        }
        
        .trusted-by-logos {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 60px;
        }
        
        .logo-card {
          background: white;
          padding: 24px 20px;
          width: 180px;
          border-radius: 16px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        
        .logo-card:hover {
          transform: translateY(-5px);
        }
        
        .logo-name {
          font-weight: 700;
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
        }
        
        .logo-quote {
          font-size: 13px;
          color: #666;
          font-style: italic;
          line-height: 1.5;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .hero-text h1 {
            font-size: 42px;
          }
          
          .hero-image img {
            width: 400px;
          }
        }
        
        @media (max-width: 992px) {
          .hero-section {
            height: auto;
            padding: 60px 0;
            min-height: auto;
          }
          
          .hero-content {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-text {
            padding-right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 0;
            min-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .trust-indicators {
            margin: 0 auto;
            max-width: 100%;
          }
          
          .hero-image {
            margin-left: 0;
            margin-top: 40px;
            min-width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content-container {
            padding: 0 20px;
          }
          
          .hero-text h1 {
            font-size: 36px;
          }
          
          .hero-image img {
            width: 320px;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          
          .trusted-by-logos {
            gap: 20px;
          }
          
          .logo-card {
            width: calc(50% - 10px);
          }
          
          .trust-indicators {
            flex-direction: column;
            gap: 15px;
            padding: 20px;
          }
          
          .customer-avatars {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 32px;
          }
          
          .hero-text p {
            font-size: 15px;
          }
          
          .hero-image img {
            width: 280px;
          }
          
          .logo-card {
            width: 100%;
          }
          
          .hero-section {
            padding: 40px 0;
          }
          
          .trusted-by-section {
            padding: 60px 20px;
          }
          
          .badge {
            font-size: 12px;
            padding: 6px 14px;
          }
        }
      `}</style>
    </div>
  );
} 
