'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import BestSellingProducts from '../components/BestSellingProducts';
import Footer from '../components/Footer';

export default function ShopPage() {
  return (
    <div className="shop-page">
      <Navbar />
      
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover our range of 100% organic cold-pressed oils</p>
      </div>
      
      <div className="shop-content">
        <BestSellingProducts />
      </div>
      
      <Footer />
      
      <style jsx>{`
        .shop-page {
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
        
        .shop-content {
          padding: 60px 5vw;
          max-width: 1300px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
} 