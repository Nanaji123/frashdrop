"use client";

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: 'What makes RigVedha different?',
    answer: 'RigVedha stands out due to our traditional wood-pressed extraction method that preserves nutrients, our direct relationships with farmers, rigorous quality testing, and absolutely no use of chemicals or heat in the process.',
  },
  {
    question: 'Are your products truly organic?',
    answer: 'Yes, all our products are certified organic. We source seeds from farms that use no chemical fertilizers or pesticides, and we reject about 30% of every harvest that doesn\'t meet our quality standards.',
  },
  {
    question: 'How do you ensure quality and purity?',
    answer: 'We conduct 17 different lab tests for every batch of oil we produce, checking for heavy metals, pesticides, and other contaminants. If a batch fails even one test, we discard it entirely. All our test reports are available via QR codes on our bottles.',
  },
  {
    question: 'Do you provide any lab tests for your products?',
    answer: 'Absolutely! We perform third-party lab testing for every batch, and the reports are accessible through a QR code on each bottle. We believe in complete transparency about what goes into our products.',
  },
  {
    question: 'Why are your prices higher than other brands?',
    answer: 'Our pricing reflects the true cost of quality. We pay farmers 1.5x market rates to ensure they grow without chemicals, use time-consuming traditional extraction methods that preserve nutrients, conduct extensive testing, and package in premium glass bottles to maintain purity.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'We typically ship within 24 hours, and delivery takes 2-4 business days for most locations across India. We use premium couriers to ensure your oils arrive safely and in perfect condition.',
  },
];

export default function FAQ() {
  // Set first question open by default
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [animHeight, setAnimHeight] = useState<{[key: number]: number}>({});
  const answerRefs = useRef<{[key: number]: HTMLDivElement | null}>({});
  
  // Calculate heights for animations
  useEffect(() => {
    const heights: {[key: number]: number} = {};
    
    faqs.forEach((_, idx) => {
      if (answerRefs.current[idx]) {
        heights[idx] = answerRefs.current[idx]?.scrollHeight || 0;
      }
    });
    
    setAnimHeight(heights);
  }, []);

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Function to handle refs properly
  const setAnswerRef = (el: HTMLDivElement | null, idx: number) => {
    answerRefs.current[idx] = el;
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="pre-heading">QUESTIONS & ANSWERS</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our products and services
          </p>
          <div className="decorative-line"></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'active' : ''}`}
              onClick={() => toggleQuestion(idx)}
            >
              <div className="faq-question">
                <div className="question-number">{String(idx + 1).padStart(2, '0')}</div>
                <h3>{faq.question}</h3>
                <div className={`toggle-icon ${openIndex === idx ? 'open' : ''}`}>
                  <span className="horizontal"></span>
                  <span className="vertical"></span>
                </div>
              </div>
              
              <div 
                className="faq-answer" 
                style={{ 
                  height: openIndex === idx ? `${animHeight[idx] || 'auto'}px` : '0px'
                }}
              >
                <div 
                  className="answer-content"
                  ref={(el) => setAnswerRef(el, idx)}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-help">
          <div className="help-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9C9 7.89543 10.3431 7 12 7C13.6569 7 15 7.89543 15 9C15 9.74028 14.4022 10.3866 13.5 10.7324V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="help-text">
            <h4>Still Have Questions?</h4>
            <p>Our customer support team is here to help you</p>
          </div>
          <a href="#contact" className="contact-button">
            Contact Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .faq-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #fff, #f8faf5);
          position: relative;
          overflow: hidden;
        }
        
        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(35, 77, 32, 0.03) 0%, transparent 70%);
          z-index: 1;
          border-radius: 50%;
        }
        
        .faq-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(35, 77, 32, 0.03) 0%, transparent 70%);
          z-index: 1;
          border-radius: 50%;
        }
        
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .pre-heading {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #26a65b;
          background: rgba(38, 166, 91, 0.08);
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 16px;
          letter-spacing: 1.5px;
        }
        
        .faq-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #234d20;
          margin: 0 0 16px;
          font-family: 'Playfair Display', serif;
        }
        
        .faq-header p {
          font-size: 16px;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .decorative-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, #26a65b, #234d20);
          margin: 25px auto 0;
          border-radius: 3px;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .faq-item {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        
        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .faq-item.active {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(35, 77, 32, 0.1);
        }
        
        .faq-question {
          padding: 24px 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
        }
        
        .question-number {
          font-size: 13px;
          font-weight: 700;
          color: #26a65b;
          background: rgba(38, 166, 91, 0.08);
          min-width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .faq-question h3 {
          font-size: 17px;
          font-weight: 600;
          color: #234d20;
          margin: 0;
          flex: 1;
        }
        
        .toggle-icon {
          position: relative;
          width: 20px;
          height: 20px;
        }
        
        .toggle-icon span {
          position: absolute;
          background: #234d20;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .toggle-icon .horizontal {
          width: 100%;
          height: 2px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        
        .toggle-icon .vertical {
          width: 2px;
          height: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .toggle-icon.open .vertical {
          transform: translateX(-50%) rotate(90deg);
          opacity: 0;
        }
        
        .toggle-icon.open .horizontal {
          transform: translateY(-50%) rotate(180deg);
        }
        
        .faq-answer {
          overflow: hidden;
          transition: height 0.3s ease-in-out;
        }
        
        .answer-content {
          padding: 0 30px 24px 86px;
        }
        
        .answer-content p {
          margin: 0;
          color: #555;
          font-size: 15px;
          line-height: 1.6;
        }
        
        .additional-help {
          margin-top: 60px;
          background: white;
          border-radius: 12px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }
        
        .additional-help::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to bottom, #26a65b, #234d20);
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
        }
        
        .help-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(38, 166, 91, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #26a65b;
          flex-shrink: 0;
        }
        
        .help-text {
          flex: 1;
        }
        
        .help-text h4 {
          font-size: 18px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 5px;
        }
        
        .help-text p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }
        
        .contact-button {
          background: #234d20;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .contact-button:hover {
          background: #1a3917;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .faq-section {
            padding: 70px 0;
          }
          
          .faq-header h2 {
            font-size: 32px;
          }
          
          .faq-question {
            padding: 20px;
            gap: 15px;
          }
          
          .question-number {
            min-width: 30px;
            height: 30px;
            font-size: 12px;
          }
          
          .faq-question h3 {
            font-size: 16px;
          }
          
          .answer-content {
            padding: 0 20px 20px 65px;
          }
          
          .additional-help {
            flex-direction: column;
            padding: 25px;
            text-align: center;
          }
          
          .additional-help::before {
            width: 100%;
            height: 6px;
            border-radius: 0;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          }
          
          .contact-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
} 