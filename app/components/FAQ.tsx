"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What makes Vedika Organics different?',
    answer: 'Vedika Organics stands out due to our traditional wood-pressed extraction method that preserves nutrients, our direct relationships with farmers, rigorous quality testing, and absolutely no use of chemicals or heat in the process.',
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: '#fff', padding: '80px 0 100px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 5vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ 
            fontSize: 36, 
            fontWeight: 700, 
            color: '#234d20', 
            marginBottom: 14 
          }}>
            Common Questions
          </h2>
          <h3 style={{ 
            fontSize: 24, 
            fontWeight: 700, 
            color: '#234d20', 
            margin: '0 auto',
            maxWidth: 700
          }}>
            Frequently Asked Questions
          </h3>
          <p style={{ 
            fontSize: 18, 
            color: '#555', 
            margin: '14px auto 0',
            maxWidth: 700
          }}>
            Find answers to common questions about our products and services
          </p>
        </div>

        <div style={{ 
          background: '#f9f9f9',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 30px rgba(0,0,0,0.05)',
        }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              borderBottom: idx === faqs.length - 1 ? 'none' : '1px solid #e8e8e8',
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.2s',
                }}
              >
                <span style={{ 
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#234d20',
                }}>
                  {faq.question}
                </span>
                <span style={{ 
                  fontSize: 20,
                  color: '#234d20',
                  transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s',
                  display: 'block',
                  width: 24,
                  height: 24,
                  textAlign: 'center',
                  lineHeight: '24px'
                }}>
                  {openIndex === idx ? '×' : '+'}
                </span>
              </button>
              
              {openIndex === idx && (
                <div style={{ 
                  padding: '0 32px 24px',
                  color: '#444',
                  fontSize: 16,
                  lineHeight: 1.6,
                  background: 'white',
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#contact" style={{ 
            color: '#234d20', 
            fontWeight: 600, 
            fontSize: 16, 
            textDecoration: 'none',
            borderBottom: '2px solid #234d20',
            paddingBottom: 4,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }}>
            Still Have Questions?→
          </a>
        </div>
      </div>
    </section>
  );
} 