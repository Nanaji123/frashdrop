"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'The taste difference is incredible. Once you try pure wood-pressed oil, you can never go back to refined oils.',
    rating: 5,
    product: 'Groundnut Oil',
  },
  {
    name: 'Rahul Mehta',
    location: 'Bangalore',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: 'I was skeptical at first about the price, but after using RigVedha oils for a month, I understand why they cost more.',
    rating: 5,
    product: 'Coconut Oil',
  },
  {
    name: 'Anita Kumar',
    location: 'Delhi',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'I love how transparent RigVedha is about their sourcing and processing. It\'s rare to find a company that cares this much.',
    rating: 5,
    product: 'Sesame Oil',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    quote: 'My grandmother used wood-pressed oils, and now I can finally enjoy the same authentic taste. It brings back childhood memories.',
    rating: 5,
    product: 'Mustard Oil',
  },
  {
    name: 'Deepa Patel',
    location: 'Ahmedabad',
    photo: 'https://randomuser.me/api/portraits/women/42.jpg',
    quote: 'The aroma when cooking with these oils is divine. My kitchen smells like my mother\'s kitchen from years ago.',
    rating: 5,
    product: 'Groundnut Oil',
  },
  {
    name: 'Rajesh Iyer',
    location: 'Chennai',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'I\'ve noticed my digestion has improved significantly since switching to RigVedha oils. No more heaviness after meals.',
    rating: 5,
    product: 'Sesame Oil',
  },
  {
    name: 'Meera Joshi',
    location: 'Pune',
    photo: 'https://randomuser.me/api/portraits/women/54.jpg',
    quote: 'The health benefits are real. My cholesterol levels have improved since making the switch six months ago.',
    rating: 5,
    product: 'Coconut Oil',
  },
  {
    name: 'Arjun Nair',
    location: 'Kochi',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'As someone who cooks daily, I can tell the difference in taste immediately. Food tastes more alive and flavorful.',
    rating: 5,
    product: 'Coconut Oil',
  },
  {
    name: 'Sonia Gupta',
    location: 'Lucknow',
    photo: 'https://randomuser.me/api/portraits/women/33.jpg',
    quote: 'My kids are picky eaters but they actually prefer food cooked in RigVedha oils. That says everything!',
    rating: 5,
    product: 'Mustard Oil',
  },
  {
    name: 'Karan Malhotra',
    location: 'Chandigarh',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: 'I\'ve gifted these oils to family members and they all keep asking for more. Quality speaks for itself.',
    rating: 5,
    product: 'Groundnut Oil',
  },
];

export default function CustomerTestimonials() {
  // Split testimonials into two rows
  const topRow = testimonials.slice(0, 5);
  const bottomRow = testimonials.slice(5, 10);
  
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  // Double the cards for infinite scroll effect
  const extendedTopRow = [...topRow, ...topRow];
  const extendedBottomRow = [...bottomRow, ...bottomRow];
  
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="section-badge">TESTIMONIALS</span>
        <h2>What Our Customers Say</h2>
        <p>
          Thousands of families across India trust RigVedha for their daily cooking needs
        </p>
        <div className="decorative-line"></div>
      </div>
      
      <div className="testimonial-cards-container">
        <div className="scrolling-track top-track">
          <div className="testimonial-row top-row">
            {extendedTopRow.map((testimonial, index) => (
              <div 
                key={`top-${index}`} 
                className={`testimonial-card ${activeCard === `top-${index}` ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(`top-${index}`)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-content">
                  <div className="customer-photo">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  
                  <div className="testimonial-info">
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    
                    <p className="quote">{testimonial.quote}</p>
                    
                    <div className="customer-details">
                      <h3 className="customer-name">{testimonial.name}</h3>
                      <p className="customer-location">{testimonial.location}</p>
                    </div>
                    
                    <div className="product-badge">
                      {testimonial.product}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="scrolling-track bottom-track">
          <div className="testimonial-row bottom-row">
            {extendedBottomRow.map((testimonial, index) => (
              <div 
                key={`bottom-${index}`} 
                className={`testimonial-card ${activeCard === `bottom-${index}` ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(`bottom-${index}`)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-content">
                  <div className="customer-photo">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  
                  <div className="testimonial-info">
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    
                    <p className="quote">{testimonial.quote}</p>
                    
                    <div className="customer-details">
                      <h3 className="customer-name">{testimonial.name}</h3>
                      <p className="customer-location">{testimonial.location}</p>
                    </div>
                    
                    <div className="product-badge">
                      {testimonial.product}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials-section {
          padding: 100px 0;
          position: relative;
          background: linear-gradient(180deg, #f9f7f2 0%, #f6f9f4 100%);
          overflow: hidden;
          width: 100vw;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
        }
        
        .section-badge {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #26a65b;
          background: rgba(38, 166, 91, 0.08);
          padding: 5px 14px;
          border-radius: 30px;
          margin-bottom: 16px;
          letter-spacing: 1.5px;
        }
        
        .section-header h2 {
          font-size: 36px;
          font-weight: 800;
          color: #234d20;
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
        }
        
        .section-header p {
          font-size: 16px;
          color: #555;
          max-width: 600px;
          margin: 0 auto 20px;
        }
        
        .decorative-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, #26a65b, #234d20);
          margin: 0 auto;
          border-radius: 3px;
        }
        
        .testimonial-cards-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
          margin-top: 40px;
          width: 100%;
          padding-bottom: 20px;
        }
        
        .scrolling-track {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 15px 0 20px;
        }
        
        .testimonial-row {
          display: flex;
          gap: 60px;
          position: relative;
          white-space: nowrap;
        }
        
        .top-row {
          animation: scrollLeft 40s linear infinite;
        }
        
        .bottom-row {
          animation: scrollRight 40s linear infinite;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-220px * 5 - 60px * 5)); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(calc(-220px * 5 - 60px * 5)); }
          100% { transform: translateX(0); }
        }
        
        .testimonial-card {
          width: 220px;
          height: 230px;
          perspective: 1000px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-bottom: 5px;
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
        }
        
        .testimonial-card.active {
          transform: translateY(-10px) scale(1.05);
          z-index: 10;
        }
        
        .card-content {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          padding: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover .card-content {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }
        
        .customer-photo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #f6f9f4;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }
        
        .customer-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .rating {
          margin-bottom: 8px;
          color: #f8d74a;
          font-size: 14px;
          letter-spacing: 2px;
        }
        
        .quote {
          font-size: 12px;
          line-height: 1.4;
          color: #444;
          margin: 0 0 10px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }
        
        .customer-details {
          margin-top: auto;
        }
        
        .customer-name {
          font-size: 13px;
          font-weight: 700;
          color: #234d20;
          margin: 0 0 2px;
        }
        
        .customer-location {
          font-size: 11px;
          color: #666;
          margin: 0 0 6px;
        }
        
        .product-badge {
          display: inline-block;
          background: rgba(38, 166, 91, 0.08);
          color: #26a65b;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 20px;
          margin-bottom: 3px;
        }
        
        /* Pause animations when hovering over the track */
        .scrolling-track:hover .testimonial-row {
          animation-play-state: paused;
        }
        
        @media (max-width: 1200px) {
          .testimonial-card {
            width: 200px;
            height: 220px;
          }
          
          .quote {
            font-size: 12px;
          }
          
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-200px * 5 - 60px * 5)); }
          }
          
          @keyframes scrollRight {
            0% { transform: translateX(calc(-200px * 5 - 60px * 5)); }
            100% { transform: translateX(0); }
          }
        }
        
        @media (max-width: 992px) {
          .testimonial-cards-container {
            gap: 50px;
          }
          
          .testimonial-row {
            gap: 50px;
          }
          
          .testimonial-card {
            width: 180px;
            height: 210px;
          }
          
          .card-content {
            padding: 14px;
          }
          
          .customer-photo {
            width: 60px;
            height: 60px;
          }
          
          .quote {
            -webkit-line-clamp: 3;
          }
          
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-180px * 5 - 50px * 5)); }
          }
          
          @keyframes scrollRight {
            0% { transform: translateX(calc(-180px * 5 - 50px * 5)); }
            100% { transform: translateX(0); }
          }
        }
        
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 70px 0;
          }
          
          .section-header h2 {
            font-size: 30px;
          }
          
          .testimonial-cards-container {
            gap: 40px;
          }
          
          .scrolling-track {
            padding: 10px 0;
          }
          
          .testimonial-row {
            gap: 40px;
          }
          
          .testimonial-card {
            width: 180px;
            height: 200px;
          }
          
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-180px * 5 - 40px * 5)); }
          }
          
          @keyframes scrollRight {
            0% { transform: translateX(calc(-180px * 5 - 40px * 5)); }
            100% { transform: translateX(0); }
          }
        }
      `}</style>
    </section>
  );
}