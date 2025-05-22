'use client';

import React, { useEffect, useRef } from 'react';

export default function FarmToBottleProcess() {
  const processSteps = [
    {
      icon: '🌱',
      title: 'Seed Selection',
      description: 'We select only premium organic seeds, rejecting 30% that don\'t meet our standards. Our experts hand-pick each batch to ensure superior quality.',
      image: '/image/bottles.png'
    },
    {
      icon: '🌾',
      title: 'Organic Farming',
      description: 'Partner farmers grow crops using traditional methods without chemicals or pesticides. We prioritize sustainable farming practices that respect nature and local ecosystems.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=580&auto=format&fit=crop'
    },
    {
      icon: '🪵',
      title: 'Wood Pressing',
      description: 'Cold-pressed at less than 45°C in wooden ghanis to preserve nutrients and natural flavor. This ancient technique ensures maximum retention of natural goodness.',
      image: '/image/bottles.png'
    },
    {
      icon: '🔍',
      title: 'Quality Testing',
      description: '17 rigorous lab tests ensure purity, with scan-to-verify reports accessible on each bottle. Our standards exceed industry requirements for the purest possible product.',
      image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=580&auto=format&fit=crop'
    },
    {
      icon: '🧪',
      title: 'Zero Additives',
      description: 'No chemicals, preservatives, or processing aids - just pure, natural oil. We believe in delivering the authentic taste and benefits exactly as nature intended.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=580&auto=format&fit=crop'
    },
    {
      icon: '🍶',
      title: 'Glass Bottling',
      description: 'Packaged in premium glass bottles to maintain freshness and prevent contamination. Our environmentally friendly packaging preserves quality and reduces plastic waste.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=580&auto=format&fit=crop'
    }
  ];
  
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    const timeline = timelineRef.current;
    if (timeline) {
      const steps = timeline.querySelectorAll('.process-step') as NodeListOf<HTMLElement>;
      steps.forEach((step: HTMLElement) => {
        observer.observe(step);
      });
      
      const line = timeline.querySelector('.timeline-line') as HTMLElement;
      if (line) observer.observe(line);
    }
    
    return () => {
      if (timeline) {
        const steps = timeline.querySelectorAll('.process-step') as NodeListOf<HTMLElement>;
        steps.forEach((step: HTMLElement) => {
          observer.unobserve(step);
        });
        
        const line = timeline.querySelector('.timeline-line') as HTMLElement;
        if (line) observer.unobserve(line);
      }
    };
  }, []);

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Farm-to-Bottle Journey</h2>
          <p>From seed selection to bottling, discover how we preserve nutrition and tradition</p>
        </div>

        <div className="process-roadmap" ref={timelineRef}>
          <div className="timeline-line">
            <div className="glow-point start"></div>
            <div className="glow-point end"></div>
          </div>
          
          {processSteps.map((step, idx) => (
            <div key={idx} className={`process-step ${idx % 2 === 0 ? 'left' : 'right'}`} data-step={idx + 1}>
              <div className="timeline-dot">
                <div className="dot-pulse"></div>
              </div>
              
              <div className="process-content">
                <div className="step-number">{idx + 1}</div>
                <div className="step-image">
                  <img src={step.image} alt={step.title} />
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-details">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <a href="/process" className="cta-button">
            Learn More About Our Process
          </a>
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: linear-gradient(to bottom, #f9f8f4, #f2f7ee);
          padding: 70px 0;
          position: relative;
          overflow: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          position: relative;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #234d20;
          margin-bottom: 14px;
          font-family: 'Playfair Display', serif;
        }
        
        .section-header p {
          font-size: 17px;
          color: #555;
          margin: 0 auto;
          max-width: 700px;
          line-height: 1.6;
        }
        
        .process-roadmap {
          position: relative;
          padding: 20px 0;
          min-height: 800px;
        }
        
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, rgba(38, 166, 91, 0.2), rgba(35, 77, 32, 0.2));
          transform: translateX(-50%);
          border-radius: 4px;
          z-index: 1;
          overflow: hidden;
          opacity: 0;
          transition: opacity 1s ease;
        }
        
        .timeline-line.animated {
          opacity: 1;
        }
        
        .glow-point {
          position: absolute;
          width: 100%;
          height: 120px;
          background: linear-gradient(to bottom, 
            rgba(38, 166, 91, 0) 0%,
            rgba(38, 166, 91, 1) 50%,
            rgba(38, 166, 91, 0) 100%);
          opacity: 0;
          animation: glowMovement 10s infinite;
          animation-play-state: paused;
          will-change: transform, opacity;
        }
        
        .timeline-line.animated .glow-point {
          animation-play-state: running;
        }
        
        .glow-point.start {
          top: -120px;
          animation-delay: 0s;
        }
        
        .glow-point.end {
          top: -120px;
          animation-delay: 5s;
        }
        
        @keyframes glowMovement {
          0% {
            top: -120px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        .process-step {
          position: relative;
          margin-bottom: 55px;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .process-step.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .process-step:last-child {
          margin-bottom: 0;
        }
        
        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #26a65b;
          border-radius: 50%;
          left: 50%;
          top: 90px;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(38, 166, 91, 0.2);
        }
        
        .dot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(38, 166, 91, 0.5);
          opacity: 0;
          transform: scale(1);
        }
        
        .process-step.animated .dot-pulse {
          animation: pulse 3s infinite;
          animation-delay: calc(0.5s * var(--step-index));
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .process-content {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          position: relative;
          width: 48%;
          min-height: 190px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-left: none;
          border-right: none;
        }
        
        .process-step.left .process-content {
          margin-right: auto;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          border-left: 4px solid #234d20;
        }
        
        .process-step.right .process-content {
          margin-left: auto;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          border-right: 4px solid #234d20;
        }
        
        .process-content:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }
        
        .step-number {
          position: absolute;
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #26a65b, #234d20);
          color: white;
          font-weight: 700;
          font-size: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          top: -16px;
          box-shadow: 0 6px 15px rgba(35, 77, 32, 0.25);
        }
        
        .process-step.left .step-number {
          right: -16px;
        }
        
        .process-step.right .step-number {
          left: -16px;
        }
        
        .step-image {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        
        .process-step.left .step-image {
          border-top-right-radius: 30px;
        }
        
        .process-step.right .step-image {
          border-top-left-radius: 30px;
        }
        
        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .process-content:hover .step-image img {
          transform: scale(1.05);
        }
        
        .step-icon {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(38, 166, 91, 0.1);
          color: #234d20;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .step-details {
          padding: 20px;
          flex: 1;
        }
        
        .step-details h3 {
          font-size: 20px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 10px 0;
          position: relative;
          padding-bottom: 10px;
          display: inline-block;
        }
        
        .step-details h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: #234d20;
          border-radius: 3px;
        }
        
        .step-details p {
          font-size: 15px;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }
        
        .cta-container {
          text-align: center;
          margin-top: 50px;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #234d20, #26a65b);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 15px 32px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(38, 166, 91, 0.25);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 0.3) 50%, 
            rgba(255, 255, 255, 0) 100%);
          transition: all 0.6s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(38, 166, 91, 0.3);
        }
        
        .cta-button:hover:before {
          left: 100%;
        }
        
        @media (max-width: 1024px) {
          .process-content {
            width: 46%;
          }
          
          .section-header h2 {
            font-size: 32px;
          }
        }
        
        @media (max-width: 900px) {
          .timeline-line,
          .timeline-dot {
            left: 20px;
          }
          
          .process-content {
            width: calc(100% - 60px);
            margin-left: auto !important;
            margin-right: 0 !important;
          }
          
          .process-step.left .step-number,
          .process-step.right .step-number {
            left: 5px;
            right: auto;
          }
        }
        
        @media (max-width: 600px) {
          .section-header h2 {
            font-size: 28px;
          }
          
          .section-header p {
            font-size: 15px;
          }
          
          .step-image {
            height: 140px;
          }
          
          .step-details {
            padding: 16px;
          }
          
          .step-details h3 {
            font-size: 18px;
          }
          
          .step-details p {
            font-size: 14px;
          }
          
          .cta-button {
            padding: 14px 26px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
} 