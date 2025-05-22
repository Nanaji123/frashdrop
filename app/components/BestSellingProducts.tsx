import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    slug: 'groundnut',
    name: 'Cold Pressed Groundnut Oil',
    image: '/image/bottles.png',
    description: '100% Natural, traditionally wood-pressed oil',
    price: '₹490',
    originalPrice: '₹560',
    quantity: '500 ml',
    rating: 4.8,
    reviews: 22,
  },
  {
    id: 2,
    slug: 'coconut',
    name: 'Cold Pressed Coconut Oil',
    image: '/image/bottles.png',
    description: 'Chemical-free, pure coconut goodness',
    price: '₹590',
    originalPrice: '₹650',
    quantity: '500 ml',
    rating: 5.0,
    reviews: 26,
  },
  {
    id: 3,
    slug: 'safflower',
    name: 'Cold Pressed Safflower Oil',
    image: '/image/bottles.png',
    description: '100% Natural, high in essential nutrients',
    price: '₹650',
    originalPrice: '₹750',
    quantity: '500 ml',
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 4,
    slug: 'mustard',
    name: 'Cold Pressed Mustard Oil',
    image: '/image/bottles.png',
    description: 'Traditional kachi ghani method, rich flavor',
    price: '₹390',
    originalPrice: '₹450',
    quantity: '500 ml',
    rating: 4.7,
    reviews: 32,
  }
];

export default function BestSellingProducts() {
  return (
    <section className="best-selling-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Best-Selling Products</h2>
          <p>Discover our most loved cold-pressed oils, crafted with tradition and care</p>
        </div>

        <div className="products-row">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link href={`/shop/${product.slug}`} className="product-link">
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                  />
                  <div className="product-badge">
                    <span>{product.quantity}</span>
                  </div>
                </div>
                
                <div className="product-info">
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating">{product.rating}</span>
                    <span className="reviews">({product.reviews})</span>
                  </div>
                  
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="current-price">{product.price}</span>
                      <span className="original-price">{product.originalPrice}</span>
                    </div>
                    <button className="add-to-cart" onClick={(e) => {
                      e.preventDefault(); // Prevent navigation when clicking the button
                      // Add to cart functionality can be added here
                    }}>
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <a href="/shop">View All Products</a>
        </div>
      </div>

      <style jsx>{`
        .best-selling-section {
          padding: 60px 0;
          background-color: #f9f8f4;
          font-family: 'Poppins', sans-serif;
        }
        
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5vw;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .section-header h2 {
          font-size: 26px;
          font-weight: 600;
          color: #234d20;
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
        }
        
        .section-header p {
          font-size: 14px;
          font-weight: 400;
          color: #666;
          margin: 0;
        }
        
        .products-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: nowrap;
        }
        
        .product-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 3px 15px rgba(0,0,0,0.05);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex: 1;
          max-width: calc(25% - 12px);
          min-width: 220px;
          display: flex;
          flex-direction: column;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .product-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }
        
        .product-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .product-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.9);
          color: #234d20;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 20px;
        }
        
        .product-info {
          padding: 15px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }
        
        .stars {
          color: #f7b731;
          font-size: 12px;
          letter-spacing: -1px;
        }
        
        .rating {
          color: #234d20;
          font-weight: 600;
          font-size: 12px;
        }
        
        .reviews {
          color: #777;
          font-size: 11px;
        }
        
        .product-info h3 {
          font-size: 14px;
          font-weight: 600;
          color: #234d20;
          margin: 4px 0;
          line-height: 1.3;
        }
        
        .product-description {
          color: #666;
          font-size: 12px;
          margin: 4px 0 12px;
          line-height: 1.4;
          flex-grow: 1;
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        
        .product-price {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .current-price {
          font-weight: 700;
          color: #234d20;
          font-size: 14px;
        }
        
        .original-price {
          color: #999;
          font-size: 11px;
          text-decoration: line-through;
        }
        
        .add-to-cart {
          background: #234d20;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 5px 12px;
          font-weight: 500;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
          z-index: 2;
        }
        
        .add-to-cart:hover {
          background: #1c3d19;
        }
        
        .view-all {
          text-align: center;
          margin-top: 20px;
        }
        
        .view-all a {
          color: #234d20;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border-bottom: 2px solid #234d20;
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        
        .view-all a:hover {
          border-color: #1c3d19;
        }
        
        @media (max-width: 900px) {
          .products-row {
            flex-wrap: wrap;
          }
          
          .product-card {
            max-width: calc(50% - 8px);
            margin-bottom: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .product-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
} 