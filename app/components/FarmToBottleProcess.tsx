'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FarmToBottleProcess() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Define the process steps
  const processSteps = [
    {
      title: "Farm Fresh Ingredients",
      description: "We source our seeds directly from organic farms where they are grown without pesticides or chemicals, ensuring maximum nutritional value. Our partner farmers use sustainable agriculture practices that preserve soil health and biodiversity while growing the highest quality oilseeds.",
      image: "/image/pic2.jpg",
      icon: "🌱",
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))"
    },
    {
      title: "Traditional Wood Pressing",
      description: "Using age-old techniques, our oils are extracted using wooden ghani presses, which maintain low temperatures and preserve natural nutrients. This ancient method, passed down through generations, ensures that no heat damage occurs during extraction, maintaining all the beneficial compounds, antioxidants and vitamins.",
      image: "/image/1pic.jpg",
      icon: "🪵",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2))"
    },
    {
      title: "Zero Chemical Processing",
      description: "Unlike commercial oils, we don't use chemicals, heat, or refining processes that strip away the natural goodness of our oils. Our oils retain their natural color, aroma, and nutritional profile. This means you get all the natural vitamins, minerals, and essential fatty acids exactly as nature intended.",
      image: "/image/logo.png",
      icon: "✨",
      color: "#6366f1",
      bgGradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.2))"
    },
    {
      title: "Quality Testing & Packaging",
      description: "Each batch is tested for purity before being packaged in UV-protected glass bottles to maintain freshness and nutritional integrity. Our rigorous quality control ensures that every bottle meets our strict standards. We use amber glass bottles that protect the oil from light degradation, preserving its shelf life naturally without preservatives.",
      image: "/image/bottles.png",
      icon: "🧪",
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.2))"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation observer for steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className="farm-to-bottle-container">
      <div className="farm-to-bottle-inner">
        {/* Section Header */}
        <div className="section-header">
          <h3>Our Process</h3>
          <h1>From Farm to Bottle: The RigVedha Process</h1>
          <p>
            We carefully preserve the traditional wood-pressed oil extraction methods to deliver
            pure, nutrient-rich oils without compromising on quality or authenticity.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepsRef.current[index] = el;
                return undefined;
              }}
              data-step={index}
              style={{
                opacity: '0',
                transform: 'translateY(80px)',
                transition: 'all 1s ease',
                display: 'flex',
                flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                alignItems: 'center',
                gap: isMobile ? '48px' : '80px'
              }}
              className="process-step"
            >
              {/* Content Side */}
              <div style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease',
                    backgroundColor: step.color + '20',
                    color: step.color,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (e.target instanceof HTMLElement) {
                      e.target.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target instanceof HTMLElement) {
                      e.target.style.transform = 'scale(1)';
                    }
                  }}
                  >
                    {step.icon}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Step {index + 1} of {processSteps.length}
                  </div>
                </div>

                <div>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '16px',
                    lineHeight: '1.2'
                  }}>
                    {step.title}
                  </h2>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#4b5563',
                    lineHeight: '1.7',
                    maxWidth: '600px'
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {processSteps.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        height: '8px',
                        borderRadius: '4px',
                        transition: 'all 0.5s ease',
                        width: i === index ? '40px' : '20px',
                        background: i <= index ? 'linear-gradient(135deg, #22c55e, #10b981)' : '#e5e7eb'
                      }}
                    ></div>
                  ))}
                </div>

                {/* Quality Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '50px',
                  padding: '8px 16px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#22c55e',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>Premium Quality Assured</span>
                </div>
              </div>

              {/* Image Side */}
              <div style={{ flex: '1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative', padding: '15px', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'center' }} className="image-container">
                  {/* Floating Background */}
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: step.bgGradient,
                    borderRadius: '24px',
                    filter: 'blur(32px)',
                    transition: 'all 0.5s ease',
                    opacity: '0.6',
                    zIndex: 0
                  }} className="floating-bg"></div>
                  
                  {/* Main Image Container */}
                  <div style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.5s ease',
                    transform: 'translateY(0)',
                    zIndex: 1,
                    width: '320px',
                    height: '320px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }} className="main-image">
                    <div style={{
                      width: '90%',
                      height: '90%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={step.image}
                        alt={step.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.7s ease'
                        }}
                        className="step-image"
                      />
                    </div>
                    
                    {/* Image Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.05), transparent)',
                      zIndex: 2
                    }}></div>
                    
                    {/* Step Number */}
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      width: '48px',
                      height: '48px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      zIndex: 3
                    }}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: '120px',
                    height: '120px',
                    background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(16, 185, 129, 0.15))',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '-10px',
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '128px' }}>
          <div style={{ display: 'inline-block' }}>
            <button style={{
              position: 'relative',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #059669, #10b981)',
              color: 'white',
              fontWeight: '600',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              overflow: 'hidden',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
            className="cta-button"
            onMouseEnter={(e) => {
              if (e.target instanceof HTMLElement) {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (e.target instanceof HTMLElement) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.3)';
              }
            }}
            >
              <span style={{ position: 'relative', zIndex: '10' }}>
                Explore Our Complete Process
              </span>
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(135deg, #047857, #059669)',
                opacity: '0',
                transition: 'opacity 0.3s ease'
              }} className="button-overlay"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .farm-to-bottle-container {
          padding: 120px 5vw;
          background-color: #fafafa;
          background-image: 
            radial-gradient(circle at 20% 90%, rgba(249, 242, 226, 0.4) 0%, transparent 20%),
            radial-gradient(circle at 80% 20%, rgba(242, 248, 237, 0.4) 0%, transparent 20%);
        }
        
        .farm-to-bottle-inner {
          max-width: 1300px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 100px;
          position: relative;
        }
        
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #26a65b);
          border-radius: 3px;
        }
        
        .section-header h3 {
          color: #10b981;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          display: inline-block;
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(38, 166, 91, 0.1));
          padding: 8px 20px;
          border-radius: 30px;
        }
        
        .section-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 20px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.2;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .section-header p {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 160px;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .process-step.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .image-container {
          transition: transform 0.5s ease;
        }
        
        .image-container:hover {
          transform: translateY(-10px);
        }

        .image-container:hover .floating-bg {
          filter: blur(48px);
          opacity: 0.8;
        }

        .image-container:hover .main-image {
          transform: translateY(-8px);
          box-shadow: 0 35px 60px rgba(0, 0, 0, 0.2);
        }

        .image-container:hover .step-image {
          transform: scale(1.05);
        }

        .cta-button:hover .button-overlay {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .process-step {
            flex-direction: column !important;
          }
          
          .section-header h1 {
            font-size: 2.8rem;
          }
          
          .process-steps {
            gap: 120px;
          }
        }

        @media (max-width: 768px) {
          .farm-to-bottle-container {
            padding: 80px 20px;
          }
          
          .section-header {
            margin-bottom: 80px;
          }
          
          .section-header h1 {
            font-size: 2.2rem;
          }
          
          .section-header p {
            font-size: 1.1rem;
          }
          
          .process-steps {
            gap: 100px;
          }
          
          .image-container div {
            max-width: 320px;
          }
        }
        
        @media (max-width: 480px) {
          .farm-to-bottle-container {
            padding: 60px 15px;
          }
          
          .section-header h1 {
            font-size: 1.8rem;
          }
          
          .image-container div {
            max-width: 280px;
          }
          
          .process-steps {
            gap: 80px;
          }
        }
      `}</style>
    </div>
  );
}