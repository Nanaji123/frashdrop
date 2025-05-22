"use client";
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'The taste difference is incredible. Once you try pure wood-pressed oil, you can never go back to refined oils. My whole family feels the difference in our health and digestion.',
    verified: true,
  },
  {
    name: 'Rahul Mehta',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: 'I was skeptical at first about the price, but after using Vedika oils for a month, I understand why they cost more. The quality and health benefits are worth every rupee.',
    verified: true,
  },
  {
    name: 'Anita Kumar',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'I love how transparent Vedika is about their sourcing and processing. It\'s rare to find a company that cares this much about quality and customer health.',
    verified: true,
  },
];

export default function CustomerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section style={{ background: '#f6f9f4', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ 
            fontSize: 36, 
            fontWeight: 700, 
            color: '#234d20', 
            marginBottom: 14 
          }}>
            What Our Customers Say
          </h2>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 400, 
            color: '#555', 
            margin: '0 auto',
            maxWidth: 700
          }}>
            Thousands of families across India have made the switch to our clean, nutritious oils. Here&apos;s what they have to say.
          </h3>
        </div>
        
        <div style={{ 
          position: 'relative',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Testimonial Card */}
          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: '40px',
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{ 
              fontSize: 24,
              color: '#234d20',
              marginBottom: 30
            }}>
              &ldquo;
            </div>
            
            <p style={{ 
              fontSize: 20,
              lineHeight: 1.6,
              color: '#234d20',
              fontStyle: 'italic',
              marginBottom: 30,
              maxWidth: 700
            }}>
              {testimonials[activeIndex].quote}
            </p>
            
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: 70,
                height: 70,
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 12,
                border: '3px solid #e6f4ea'
              }}>
                <img 
                  src={testimonials[activeIndex].photo} 
                  alt={testimonials[activeIndex].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              <div style={{ 
                fontWeight: 600,
                color: '#234d20',
                fontSize: 18,
                marginBottom: 4
              }}>
                {testimonials[activeIndex].name}
              </div>
              
              {testimonials[activeIndex].verified && (
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 14,
                  color: '#26a65b',
                  gap: 4
                }}>
                  <span style={{ fontSize: 12 }}>✓</span> Verified Customer
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            style={{ 
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              fontSize: 18,
              color: '#234d20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            &lt;
          </button>
          
          <button 
            onClick={nextTestimonial}
            style={{ 
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              fontSize: 18,
              color: '#234d20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            &gt;
          </button>
          
          {/* Dots */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 20
          }}>
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{ 
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: idx === activeIndex ? '#234d20' : '#ddd',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 