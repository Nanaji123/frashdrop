'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <div className="footer-logo">
              <div className="logo-circle">
                <img src="/image/logo.png" alt="RigVedha Logo" className="logo" />
              </div>
              <span className="brand-name">RigVedha Organics</span>
            </div>
            <p className="footer-description">
              Traditional cold-pressed organic oils made with wood-pressed techniques, 
              preserving natural goodness and nutritional benefits.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" style={{ textDecoration: 'none', borderBottom: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" style={{ textDecoration: 'none', borderBottom: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" style={{ textDecoration: 'none', borderBottom: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="link-list">
                <li><Link href="/" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Home</Link></li>
                <li><Link href="/shop" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Shop</Link></li>
                <li><Link href="/process" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Our Process</Link></li>
                <li><Link href="/benefits" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Benefits</Link></li>
                <li><Link href="/about" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Our Story</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-heading">Products</h3>
              <ul className="link-list">
                <li><Link href="/shop" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Cold Pressed Oils</Link></li>
                <li><Link href="/shop" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Gift Sets</Link></li>
                <li><Link href="/shop" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Organic Seeds</Link></li>
                <li><Link href="/shop" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Special Offers</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-heading">Support</h3>
              <ul className="link-list">
                <li><Link href="/login" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>My Account</Link></li>
                <li><a href="#" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Shipping Policy</a></li>
                <li><a href="#" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Return Policy</a></li>
                <li><a href="#" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Privacy Policy</a></li>
                <li><a href="#" style={{ textDecoration: 'none', borderBottom: 'none', color: '#000000' }}>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="newsletter">
          <h3 className="newsletter-heading">Subscribe to our Newsletter</h3>
          <p className="newsletter-text">Get updates on new products, special offers, and healthy living tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} RigVedha Organics. All rights reserved.
          </div>
          <div className="payment-methods">
            <img src="/images/payment-methods.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: #f4f7f0;
          padding: 60px 0 30px;
          font-family: 'Poppins', system-ui, sans-serif;
          color: #3d3d3d;
        }
        
        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5vw;
        }
        
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 50px;
        }
        
        .footer-about {
          flex: 1;
          min-width: 300px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .logo-circle {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f9f2e2, #f2f8ed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .logo {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }
        
        .brand-name {
          font-size: 18px;
          font-weight: 600;
          color: #234d20;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .footer-description {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #ecf3e8;
          color: #234d20;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background-color: #234d20;
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-links-container {
          flex: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        
        .footer-links {
          min-width: 160px;
          flex: 1;
        }
        
        .footer-heading {
          color: #000000;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 20px;
        }
        
        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .link-list li {
          margin-bottom: 12px;
        }
        
        .link-list a {
          color: #000000;
          text-decoration: none !important;
          font-size: 14px;
          transition: color 0.2s;
          border-bottom: none !important;
        }
        
        .link-list a:hover {
          color: #234d20;
          text-decoration: none !important;
          border-bottom: none !important;
        }
        
        /* Remove underlines from all links in footer */
        .footer a {
          text-decoration: none !important;
          border-bottom: none !important;
        }
        
        .newsletter {
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .newsletter-heading {
          color: #234d20;
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        .newsletter-text {
          color: #555;
          font-size: 14px;
          margin-bottom: 20px;
        }
        
        .newsletter-form {
          display: flex;
          gap: 10px;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          background: white;
        }
        
        .newsletter-form input:focus {
          border-color: #234d20;
        }
        
        .newsletter-form button {
          background-color: #234d20;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          white-space: nowrap;
        }
        
        .newsletter-form button:hover {
          background-color: #1b3d19;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid #e5e5e5;
        }
        
        .copyright {
          font-size: 13px;
          color: #777;
        }
        
        .payment-methods img {
          height: 30px;
        }
        
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 40px;
          }
          
          .footer-links-container {
            flex-direction: column;
            gap: 30px;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 
 