'use client';

import React from 'react';

export default function WoodPressedBenefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header">
          <span className="pre-heading">Benefits</span>
          <h2>The RigVedha Difference</h2>
          <h3>Why Wood-Pressed Oils Are Better</h3>
          <p>
            Discover the key differences between our traditional wood-pressed oils and regular refined oils
          </p>
          <div className="decorative-line"></div>
        </div>

        <div className="comparison-container">
          {/* Traditional Column */}
          <div className="comparison-column traditional">
            <div className="column-badge">PREMIUM CHOICE</div>
            <div className="column-header">
              <div className="icon-wrapper">
                <span className="icon">🌿</span>
              </div>
              <h3>RigVedha Wood-Pressed Oils</h3>
            </div>

            <ul className="benefits-list">
              {[
                { title: 'Cold-Pressed Below 45°C', desc: 'Nutrients stay alive. Taste stays ancestral.' },
                { title: 'Fresh batches only', desc: 'Bottled within hours of extraction' },
                { title: '0 Chemicals. 0 Hexane.', desc: 'Just oil, raw and pure.' },
                { title: 'Wooden Pressed', desc: 'Drop by drop extraction' },
                { title: 'Fresh for 12 Months', desc: 'Nature\'s own preservation.' },
                { title: 'Metal Free Extraction', desc: 'No heavy metals' }
              ].map((item, idx) => (
                <li key={idx} className="benefit-item">
                  <div className="benefit-title">
                    <div className="check-icon">✓</div>
                    {item.title}
                  </div>
                  <div className="benefit-desc">{item.desc}</div>
                </li>
              ))}
            </ul>
            
            <div className="recommendation recommended">
              <span className="recommendation-icon">✨</span> Recommended Choice
            </div>
            
            <div className="cta-button">
              Shop RigVedha Oils
            </div>
          </div>

          {/* Industrial Column */}
          <div className="comparison-column industrial">
            <div className="column-header">
              <div className="icon-wrapper warning">
                <span className="icon">⚠️</span>
              </div>
              <h3>Regular Refined Oils</h3>
            </div>

            <ul className="benefits-list">
              {[
                { title: 'Blast Seeds at 200°C+', desc: 'Nutrients burned. Taste altered.' },
                { title: 'Blended with Oil', desc: 'Factories recycle leftovers to cut costs.' },
                { title: 'Chemicals & Preservatives', desc: 'Lab-engineered food your body can\'t recognize.' },
                { title: 'Metal Processing', desc: 'Heavy metals seep into every drop.' },
                { title: 'Limited Shelf Life', desc: 'Preservatives mask decay, not fix it.' },
                { title: 'Contains Heavy Metals', desc: 'Government "safe limits" ≠ safe' }
              ].map((item, idx) => (
                <li key={idx} className="benefit-item">
                  <div className="benefit-title">
                    <div className="cross-icon">✕</div>
                    {item.title}
                  </div>
                  <div className="benefit-desc">{item.desc}</div>
                </li>
              ))}
            </ul>
            
            <div className="recommendation not-recommended">
              <span className="recommendation-icon">⚠️</span> Not Recommended
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .benefits-section {
          background: linear-gradient(to bottom, #fff, #f8faf5);
          padding: 100px 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .benefits-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 10%, rgba(35, 77, 32, 0.03) 0%, transparent 20%),
            radial-gradient(circle at 90% 90%, rgba(35, 77, 32, 0.03) 0%, transparent 20%);
          z-index: 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .pre-heading {
          display: inline-block;
          font-size: 15px;
          font-weight: 600;
          color: #26a65b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          background: rgba(38, 166, 91, 0.08);
          padding: 6px 16px;
          border-radius: 30px;
        }
        
        .section-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #234d20;
          margin: 0 0 15px;
          font-family: 'Playfair Display', serif;
        }
        
        .section-header h3 {
          font-size: 26px;
          font-weight: 600;
          color: #234d20;
          margin: 0 auto;
          max-width: 700px;
        }
        
        .section-header p {
          font-size: 16px;
          color: #555;
          margin: 15px auto 0;
          max-width: 650px;
          line-height: 1.6;
        }
        
        .decorative-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #26a65b, #234d20);
          margin: 25px auto 0;
          border-radius: 3px;
        }
        
        .comparison-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }
        
        .comparison-column {
          flex: 1 1 320px;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          max-width: 440px;
          min-width: 280px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .comparison-column:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        
        .traditional {
          background: linear-gradient(135deg, #f6f9f4, #edf5ea);
          border: 1px solid rgba(35, 77, 32, 0.1);
          z-index: 2;
        }
        
        .industrial {
          background: linear-gradient(135deg, #f8f8f8, #f1f1f1);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        .column-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(35, 77, 32, 0.9);
          color: white;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        
        .column-header {
          text-align: center;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(35, 77, 32, 0.15);
        }
        
        .icon-wrapper.warning {
          box-shadow: 0 10px 30px rgba(199, 74, 74, 0.15);
        }
        
        .icon {
          font-size: 28px;
        }
        
        .column-header h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0;
        }
        
        .traditional .column-header h3 {
          color: #234d20;
        }
        
        .industrial .column-header h3 {
          color: #444;
        }
        
        .benefits-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        
        .benefit-item {
          margin-bottom: 14px;
          padding: 16px 18px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
          transition: transform 0.2s ease;
        }
        
        .benefit-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }
        
        .benefit-title {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .traditional .benefit-title {
          color: #234d20;
        }
        
        .industrial .benefit-title {
          color: #444;
        }
        
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: rgba(35, 77, 32, 0.1);
          color: #234d20;
          border-radius: 50%;
          font-size: 11px;
          font-weight: bold;
        }
        
        .cross-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: rgba(199, 74, 74, 0.1);
          color: #c74a4a;
          border-radius: 50%;
          font-size: 11px;
          font-weight: bold;
        }
        
        .benefit-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
        }
        
        .recommendation {
          text-align: center;
          margin-top: 20px;
          border-radius: 10px;
          padding: 10px 16px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .recommendation-icon {
          font-size: 18px;
        }
        
        .recommended {
          background: rgba(38, 166, 91, 0.1);
          color: #234d20;
        }
        
        .not-recommended {
          background: rgba(199, 74, 74, 0.1);
          color: #c74a4a;
        }
        
        .cta-button {
          margin-top: 16px;
          background: #234d20;
          color: white;
          text-align: center;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(35, 77, 32, 0.2);
        }
        
        .cta-button:hover {
          background: #1a3a18;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(35, 77, 32, 0.3);
        }
        
        @media (max-width: 992px) {
          .section-header h2 {
            font-size: 36px;
          }
          
          .section-header h3 {
            font-size: 22px;
          }
        }
        
        @media (max-width: 768px) {
          .benefits-section {
            padding: 70px 0;
          }
          
          .section-header h2 {
            font-size: 32px;
          }
          
          .section-header h3 {
            font-size: 20px;
          }
          
          .comparison-column {
            flex: 1 1 100%;
            padding: 25px 20px;
          }
          
          .column-header h3 {
            font-size: 20px;
          }
          
          .benefit-item {
            padding: 15px 18px;
          }
          
          .benefit-title {
            font-size: 15px;
          }
          
          .icon-wrapper {
            width: 60px;
            height: 60px;
          }
          
          .icon {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
} 