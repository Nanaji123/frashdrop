'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Define types for the product data
interface SizeOption {
  size: string;
  price: number;
  mrp: number;
  discount: string;
  perUnit: string;
  saveAmount?: number;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviews: number;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  description: string;
  sizes: SizeOption[];
  stock: number;
  sold: number;
}

interface ProductData {
  [key: string]: Product;
}

// Sample product data - in a real app this would come from an API or database
const productData: ProductData = {
  groundnut: {
    id: 'groundnut',
    name: 'Wood Pressed Groundnut Oil',
    tagline: 'Best for Healthy & Sattvik Cooking · Rich in Vitamin‑E',
    rating: 4.8,
    reviews: 22,
    price: 490,
    mrp: 550,
    discount: '11%',
    image: '/image/bottles.png',
    description: 'We extract oil in small batches, at less than 14 RPM, in a wooden ghani, a practise unchanged since ancient India. No heat, no metal, no shortcuts. Just goodness of whole peanuts. This is why our oil tastes richer, feels lighter, and nourishes better.',
    sizes: [
      { size: '1 litre', price: 490, mrp: 550, discount: '11%', perUnit: '₹490 / litre' },
      { size: '5 Litre', price: 1980, mrp: 2450, discount: '19%', perUnit: '₹396 / Litre', saveAmount: 470 }
    ],
    stock: 400,
    sold: 0
  },
  coconut: {
    id: 'coconut',
    name: 'Wood Pressed Virgin Coconut Oil',
    tagline: 'Pure & Natural · Extracted from Fresh Coconuts',
    rating: 4.9,
    reviews: 22,
    price: 659,
    mrp: 758,
    discount: '13%',
    image: '/image/bottles.png',
    description: 'Our virgin coconut oil is extracted from fresh, hand-picked coconuts using a traditional wood pressing method. The slow extraction process preserves all the natural nutrients, aroma, and flavor of coconuts, making it perfect for cooking, hair and skin care.',
    sizes: [
      { size: '1 litre', price: 659, mrp: 758, discount: '13%', perUnit: '₹659 / litre' },
      { size: '5 Litre', price: 2750, mrp: 3450, discount: '20%', perUnit: '₹550 / Litre', saveAmount: 700 }
    ],
    stock: 400,
    sold: 0
  },
  mustard: {
    id: 'mustard',
    name: 'Wood Pressed Kachi Ghani Mustard Oil',
    tagline: 'Traditional Flavor · Rich in Antioxidants',
    rating: 4.7,
    reviews: 32,
    price: 390,
    mrp: 450,
    discount: '13%',
    image: '/image/bottles.png',
    description: 'Our traditional kachi ghani mustard oil is extracted using the age-old wooden pressing technique that preserves the pungent aroma and essential nutrients. This oil adds an authentic flavor to your North Indian dishes and comes with numerous health benefits.',
    sizes: [
      { size: '1 litre', price: 390, mrp: 450, discount: '13%', perUnit: '₹390 / litre' },
      { size: '5 Litre', price: 1750, mrp: 2050, discount: '15%', perUnit: '₹350 / Litre', saveAmount: 300 }
    ],
    stock: 400,
    sold: 0
  },
  safflower: {
    id: 'safflower',
    name: 'Wood Pressed Safflower Oil',
    tagline: 'Heart Healthy · High in Omega-6 Fatty Acids',
    rating: 4.9,
    reviews: 18,
    price: 650,
    mrp: 750,
    discount: '13%',
    image: '/image/bottles.png',
    description: 'Our safflower oil is cold-pressed from carefully selected safflower seeds. Rich in heart-healthy unsaturated fats and vitamin E, this light oil is perfect for everyday cooking, baking, and salad dressings with its mild flavor and high smoke point.',
    sizes: [
      { size: '1 litre', price: 650, mrp: 750, discount: '13%', perUnit: '₹650 / litre' },
      { size: '5 Litre', price: 2900, mrp: 3500, discount: '17%', perUnit: '₹580 / Litre', saveAmount: 600 }
    ],
    stock: 400,
    sold: 0
  }
};

export default function ProductPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('1 litre');
  
  // Find the product data based on the URL parameter
  const product = productData[productId as string] || productData.groundnut;
  
  // Find the selected size data
  const sizeOption = product.sizes.find((size: SizeOption) => size.size === selectedSize) || product.sizes[0];
  
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-page">
      <Navbar />
      
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.name}</span>
        </div>
      </div>
      
      <div className="product-container">
        <div className="product-grid">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              <div className="image-badge">Fresh Batches Daily</div>
            </div>
            <div className="thumbnail-row">
              <div className="thumbnail">
                <img src={product.image} alt={`${product.name} view 1`} />
              </div>
              <div className="thumbnail">
                <img src={product.image} alt={`${product.name} view 2`} />
              </div>
            </div>
          </div>
          
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="tagline">{product.tagline}</p>
            
            <div className="ratings-container">
              <div className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <div className="rating-number">{product.rating}</div>
              <div className="reviews-count">({product.reviews} reviews)</div>
            </div>
            
            <div className="price-container">
              <div className="price-label">Price</div>
              <div className="price-value">₹{sizeOption.price}</div>
              <div className="mrp">MRP {sizeOption.mrp}</div>
              <div className="discount">{sizeOption.discount} OFF</div>
            </div>
            
            <div className="size-selection">
              <h3>Choose Size</h3>
              <p className="size-hint">Select your preferred option</p>
              
              <div className="size-options">
                {product.sizes.map((option: SizeOption) => (
                  <div 
                    key={option.size}
                    className={`size-option ${selectedSize === option.size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(option.size)}
                  >
                    <div className="size-details">
                      <div className="size-value">{option.size}</div>
                      <div className="size-price">₹{option.price}</div>
                      <div className="size-per-unit">{option.perUnit}</div>
                      
                      <div className="size-savings">
                        <div className="mrp">MRP ₹{option.mrp}</div>
                        <div className="discount">{option.discount} OFF</div>
                        {option.saveAmount && <div className="save-amount">Save ₹{option.saveAmount}</div>}
                      </div>
                    </div>
                    
                    {option.size === '1 litre' && <div className="best-choice">Best choice</div>}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="inventory-status">
              <div className="stock-status">In Stock</div>
              <div className="sales-status">({product.sold}/{product.stock} sold today)</div>
            </div>
            
            <div className="quantity-container">
              <button 
                className="quantity-btn decrease" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn increase" 
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            
            <div className="action-buttons">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
            
            <div className="payment-methods">
              <p>Secure and fast checkouts with</p>
              <div className="payment-icons">
                <span className="payment-icon">PhonePe</span>
                <span className="payment-icon">Google Pay</span>
                <span className="payment-icon">Paytm</span>
              </div>
            </div>
            
            <div className="benefits-container">
              <div className="benefit">
                <div className="benefit-icon">🚚</div>
                <div className="benefit-text">
                  <h4>Free Delivery</h4>
                  <p>Free shipping on all orders</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">💰</div>
                <div className="benefit-text">
                  <h4>Cash On Delivery</h4>
                  <p>Pay when your order arrives</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">↩️</div>
                <div className="benefit-text">
                  <h4>7 Days Return</h4>
                  <p>Easy returns & refunds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product-info-container">
          <div className="product-description">
            <h2>Good Oil Comes to Those Who Wait!</h2>
            <p>{product.description}</p>
            
            <div className="tradition-image">
              <img src="https://i.imgur.com/yjJGQUl.jpg" alt="wooden ghani" />
              <p>A tradition of a thousand years.</p>
            </div>
          </div>
          
          <div className="product-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What is the difference between "Wood Pressed" oils and ordinary "Cold Pressed" Oils?</h3>
              <div className="faq-content">
                <p>Wood pressed oils are extracted using traditional wooden ghanis, where no metal comes in contact with the oil. This preserves the natural nutrients and flavor. Ordinary cold-pressed oils may use metal parts in the extraction process, which can affect the oil's nutritional value and taste.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="similar-products">
          <h2>You May Also Like</h2>
          <div className="product-recommendations">
            {Object.values(productData)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(recommendedProduct => (
                <div key={recommendedProduct.id} className="recommended-product">
                  <Link href={`/shop/${recommendedProduct.id}`}>
                    <div className="product-image">
                      <img src={recommendedProduct.image} alt={recommendedProduct.name} />
                    </div>
                    <div className="product-info">
                      <h3>{recommendedProduct.name}</h3>
                      <div className="product-price">
                        <span className="current-price">₹{recommendedProduct.price}</span>
                        <span className="original-price">₹{recommendedProduct.mrp}</span>
                      </div>
                    </div>
                  </Link>
                  <button className="add-btn">Add</button>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .product-page {
          font-family: 'Poppins', system-ui, sans-serif;
          background-color: #f9f9f9;
        }
        
        .breadcrumb {
          background: #f2f7ee;
          padding: 12px 0;
          font-size: 14px;
          color: #666;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .breadcrumb a {
          color: #234d20;
          text-decoration: none;
        }
        
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        
        .product-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
        }
        
        .product-images {
          position: relative;
        }
        
        .main-image {
          position: relative;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 15px;
        }
        
        .main-image img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }
        
        .image-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #234d20;
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }
        
        .thumbnail-row {
          display: flex;
          gap: 15px;
        }
        
        .thumbnail {
          flex: 1;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }
        
        .thumbnail:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-color: #234d20;
        }
        
        .thumbnail img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          display: block;
        }
        
        .product-details {
          display: flex;
          flex-direction: column;
        }
        
        h1 {
          font-size: 30px;
          font-weight: 700;
          color: #234d20;
          margin: 0 0 8px 0;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .tagline {
          font-size: 16px;
          color: #666;
          margin: 0 0 20px 0;
        }
        
        .ratings-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .stars {
          color: #f7b731;
          font-size: 18px;
          letter-spacing: -1px;
        }
        
        .rating-number {
          font-weight: 600;
          color: #234d20;
        }
        
        .reviews-count {
          color: #666;
          font-size: 14px;
        }
        
        .price-container {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        .price-label {
          font-size: 14px;
          color: #666;
        }
        
        .price-value {
          font-size: 32px;
          font-weight: 700;
          color: #234d20;
        }
        
        .mrp {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        
        .discount {
          background: #e6f4ea;
          color: #234d20;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }
        
        .size-selection {
          margin-bottom: 30px;
        }
        
        .size-selection h3 {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 5px 0;
        }
        
        .size-hint {
          font-size: 14px;
          color: #666;
          margin: 0 0 15px 0;
        }
        
        .size-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .size-option {
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .size-option.selected {
          border-color: #234d20;
          background: rgba(35, 77, 32, 0.05);
        }
        
        .size-details {
          display: flex;
          flex-direction: column;
        }
        
        .size-value {
          font-size: 18px;
          font-weight: 600;
          color: #234d20;
        }
        
        .size-price {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-top: 5px;
        }
        
        .size-per-unit {
          font-size: 13px;
          color: #666;
          margin-top: 2px;
        }
        
        .size-savings {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .save-amount {
          font-size: 13px;
          font-weight: 600;
          color: #234d20;
        }
        
        .best-choice {
          background: #234d20;
          color: white;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 6px;
          font-weight: 500;
        }
        
        .inventory-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .stock-status {
          color: #000;
          font-weight: 600;
        }
        
        .sales-status {
          font-size: 14px;
          color: #666;
        }
        
        .quantity-container {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
        }
        
        .quantity-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #e0e0e0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .quantity-btn.decrease {
          border-radius: 8px 0 0 8px;
        }
        
        .quantity-btn.increase {
          border-radius: 0 8px 8px 0;
        }
        
        .quantity-btn:hover {
          background: #f5f5f5;
        }
        
        .quantity-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .quantity-value {
          width: 60px;
          height: 40px;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          border-left: none;
          border-right: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .add-to-cart-btn, .buy-now-btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .add-to-cart-btn {
          background: white;
          border: 1px solid #234d20;
          color: #234d20;
        }
        
        .add-to-cart-btn:hover {
          background: rgba(35, 77, 32, 0.05);
        }
        
        .buy-now-btn {
          background: #234d20;
          border: 1px solid #234d20;
          color: white;
        }
        
        .buy-now-btn:hover {
          background: #1a3a18;
        }
        
        .payment-methods {
          margin-bottom: 30px;
        }
        
        .payment-methods p {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        
        .payment-icons {
          display: flex;
          gap: 15px;
        }
        
        .payment-icon {
          background: #f5f5f5;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }
        
        .benefits-container {
          border-top: 1px solid #eee;
          padding-top: 25px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .benefit {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        
        .benefit-icon {
          font-size: 20px;
        }
        
        .benefit-text h4 {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin: 0 0 3px 0;
        }
        
        .benefit-text p {
          font-size: 12px;
          color: #666;
          margin: 0;
        }
        
        .product-info-container {
          margin-bottom: 60px;
        }
        
        .product-description {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
        }
        
        .product-description h2 {
          font-size: 24px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 15px 0;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .product-description p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }
        
        .tradition-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
        }
        
        .tradition-image img {
          max-width: 100%;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        
        .tradition-image p {
          font-style: italic;
          color: #666;
          margin: 0;
        }
        
        .product-faq {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
        }
        
        .product-faq h2 {
          font-size: 24px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 20px 0;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .faq-item h3 {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 10px 0;
          cursor: pointer;
        }
        
        .faq-content p {
          font-size: 15px;
          line-height: 1.5;
          color: #555;
        }
        
        .similar-products {
          margin-bottom: 60px;
        }
        
        .similar-products h2 {
          font-size: 24px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 25px 0;
          font-family: "Playfair Display", Georgia, serif;
        }
        
        .product-recommendations {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .recommended-product {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease;
          position: relative;
        }
        
        .recommended-product:hover {
          transform: translateY(-5px);
        }
        
        .recommended-product .product-image {
          height: 200px;
        }
        
        .recommended-product .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .recommended-product .product-info {
          padding: 15px;
        }
        
        .recommended-product h3 {
          font-size: 16px;
          font-weight: 600;
          color: #234d20;
          margin: 0 0 10px 0;
        }
        
        .recommended-product .product-price {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .recommended-product .current-price {
          font-weight: 600;
          color: #234d20;
        }
        
        .recommended-product .original-price {
          font-size: 13px;
          color: #999;
          text-decoration: line-through;
        }
        
        .recommended-product .add-btn {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: #234d20;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-weight: 500;
          font-size: 13px;
          cursor: pointer;
        }
        
        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .benefits-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
} 