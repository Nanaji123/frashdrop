'use client';

import React from 'react';

export default function WoodPressedBenefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header">
          <h2>The Vedika Difference</h2>
          <h3>Why Wood-Pressed Oils Are Better</h3>
          <p>
            Discover the key differences between our traditional wood-pressed oils and regular refined oils
          </p>
        </div>

        <div className="comparison-container">
          {/* Traditional Column */}
          <div className="comparison-column traditional">
            <div className="column-header">
              <span className="icon">🌿</span>
              <h3>Vedika Wood-Pressed Oils</h3>
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
              ✨ Recommended Choice
            </div>
          </div>

          {/* Industrial Column */}
          <div className="comparison-column industrial">
            <div className="column-header">
              <span className="icon">⚠️</span>
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
              ⚠️ Not Recommended
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .benefits-section {
          background: #fff;
          padding: 70px 0;
          font-family: 'Poppins', sans-serif;
        }
        
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .section-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #234d20;
          margin: 0 0 10px;
          font-family: 'Playfair Display', serif;
        }
        
        .section-header h3 {
          font-size: 20px;
          font-weight: 600;
          color: #234d20;
          margin: 0 auto;
          max-width: 700px;
        }
        
        .section-header p {
          font-size: 15px;
          color: #666;
          margin: 10px auto 0;
          max-width: 600px;
        }
        
        .comparison-container {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
        }
        
        .comparison-column {
          flex: 1 1 350px;
          border-radius: 14px;
          padding: 25px 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          max-width: 480px;
          min-width: 300px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .comparison-column:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
        }
        
        .traditional {
          background: linear-gradient(to bottom right, #f6f9f4, #edf5ea);
          border: 1px solid rgba(35, 77, 32, 0.1);
        }
        
        .industrial {
          background: linear-gradient(to bottom, #f8f8f8, #f1f1f1);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        .column-header {
          text-align: center;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .icon {
          font-size: 20px;
        }
        
        .column-header h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
        
        .traditional .column-header h3 {
          color: #234d20;
        }
        
        .industrial .column-header h3 {
          color: #555;
        }
        
        .benefits-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        
        .benefit-item {
          margin-bottom: 16px;
          padding: 14px 16px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          position: relative;
        }
        
        .benefit-title {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .traditional .benefit-title {
          color: #234d20;
        }
        
        .industrial .benefit-title {
          color: #555;
        }
        
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: rgba(35, 77, 32, 0.1);
          color: #234d20;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }
        
        .cross-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: rgba(199, 74, 74, 0.1);
          color: #c74a4a;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }
        
        .benefit-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }
        
        .recommendation {
          text-align: center;
          margin-top: 16px;
          border-radius: 8px;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 14px;
        }
        
        .recommended {
          background: #e6f4ea;
          color: #234d20;
        }
        
        .not-recommended {
          background: #f8e8e8;
          color: #c74a4a;
        }
        
        @media (max-width: 768px) {
          .benefits-section {
            padding: 50px 0;
          }
          
          .section-header h2 {
            font-size: 26px;
          }
          
          .section-header h3 {
            font-size: 18px;
          }
          
          .comparison-column {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
} 