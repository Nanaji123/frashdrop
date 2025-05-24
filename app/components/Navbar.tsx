'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src="/image/logo.png" alt="RigVedha Organics Logo" />
        </div>
        <span className="brand-name">RigVedha Organics</span>
      </div>
      
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'nav-link active' : 'nav-link'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <span style={{ color: pathname === '/' ? '#26a65b' : '#000', fontWeight:400 }}>Home</span>
        </Link>
        <Link href="/shop" className={pathname === '/shop' ? 'nav-link active' : 'nav-link'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <span style={{ color: pathname === '/shop' ? '#26a65b' : '#000', fontWeight:400 }}>Shop</span>
        </Link>
        <Link href="/process" className={pathname === '/process' ? 'nav-link active' : 'nav-link'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <span style={{ color: pathname === '/process' ? '#26a65b' : '#000', fontWeight:400 }}>Our Process</span>
        </Link>
        <Link href="/benefits" className={pathname === '/benefits' ? 'nav-link active' : 'nav-link'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <span style={{ color: pathname === '/benefits' ? '#26a65b' : '#000', fontWeight:400 }}>Benefits</span>
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'nav-link active' : 'nav-link'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <span style={{ color: pathname === '/about' ? '#26a65b' : '#000', fontWeight:400 }}>Our Story</span>
        </Link>
      </nav>

      <div className="nav-actions">
        <div className="cart-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#234d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#234d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#234d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="cart-badge">0</span>
        </div>
        <Link href="/login" className="login-button">
          <span style={{ color: '#000', fontWeight: 400 }}>Login</span>
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 5vw;
          background: rgba(249, 247, 242, 0.95);
          border-bottom: 1px solid #eee;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 100;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(90deg, #f9f2e2, #f2f8ed);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border: 1px solid rgba(249, 242, 226, 0.8);
        }
        
        .logo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }
        
        .brand-name {
          font-weight: 600;
          font-size: 20px;
          color: #234d20;
          font-family: 'Poppins', sans-serif;
        }
        
        .mobile-menu-button {
          display: none;
          cursor: pointer;
          z-index: 101;
        }
        
        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background-color: #234d20;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .hamburger.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        .nav-links {
          display: flex;
          gap: 32px;
        }
        
        .nav-links a {
          text-decoration: none !important;
          border-bottom: none !important;
        }
        
        .nav-link {
          text-decoration: none !important;
          padding: 5px 0;
          position: relative;
          outline: none;
          border-bottom: none !important;
        }
        
        .nav-link:focus {
          outline: none;
          border-bottom: none !important;
          text-decoration: none !important;
        }
        
        .nav-link.active span {
          color: #26a65b !important;
        }
        
        .nav-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        
        .cart-icon {
          color: #234d20;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .cart-icon:hover {
          background-color: rgba(38, 166, 91, 0.08);
        }
        
        .cart-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #26a65b;
          color: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 1.5px solid #f9f7f2;
        }
        
        .login-button {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          background: linear-gradient(45deg, #234d20, #26a65b);
          padding: 8px 20px;
          border-radius: 8px;
          display: inline-block;
          box-shadow: 0 2px 8px rgba(38, 166, 91, 0.2);
        }
        
        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(38, 166, 91, 0.3);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(249, 247, 242, 0.98);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            padding: 60px 20px;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            z-index: 100;
          }
          
          .nav-links.mobile-open {
            transform: translateX(0);
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .nav-link {
            font-size: 20px;
          }
          
          .navbar {
            padding: 12px 4vw;
          }
          
          .login-button {
            padding: 6px 16px;
            font-size: 12px;
          }
          
          .brand-name {
            font-size: 18px;
          }
        }
      `}</style>
    </header>
  );
} 