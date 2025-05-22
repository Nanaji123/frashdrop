"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    // This is a mock implementation for demo purposes
    setTimeout(() => {
      console.log('Google login clicked');
      router.push('/');
    }, 1500);
  };

  return (
    <div className="login-page">
      <Navbar />
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Sign in to RigVedha</h1>
            <p>Access your account to manage orders and preferences</p>
          </div>
          
          <button 
            className="google-button"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22px" height="22px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>
          
          <div className="auth-divider">
            <span>OR</span>
          </div>
          
          <div className="guest-login">
            <p>Continue as guest to browse our products</p>
            <button 
              className="guest-button"
              onClick={() => router.push('/')}
            >
              Browse as Guest
            </button>
          </div>
          
          <div className="auth-footer">
            <p>By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .login-page {
          font-family: 'Poppins', system-ui, sans-serif;
          background-color: #f9f8f4;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .auth-container {
          max-width: 450px;
          margin: 30px auto;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        
        .auth-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          padding: 30px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .auth-header {
          margin-bottom: 25px;
          text-align: center;
        }
        
        .auth-header h1 {
          font-size: 24px;
          color: #234d20;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .auth-header p {
          font-size: 14px;
          color: #666;
        }
        
        .google-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: white;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          transition: all 0.2s ease;
          gap: 10px;
        }
        
        .google-button:hover {
          background-color: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .google-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-radius: 50%;
          border-top: 2px solid #234d20;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .auth-divider {
          display: flex;
          align-items: center;
          margin: 25px 0;
          color: #888;
          font-size: 13px;
        }
        
        .auth-divider:before,
        .auth-divider:after {
          content: '';
          flex: 1;
          height: 1px;
          background: #eee;
        }
        
        .auth-divider span {
          padding: 0 15px;
        }
        
        .guest-login {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .guest-login p {
          margin-bottom: 15px;
          font-size: 14px;
          color: #666;
        }
        
        .guest-button {
          background-color: #f2f7ee;
          color: #234d20;
          border: 1px solid #e5efe1;
          padding: 12px 15px;
          width: 100%;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .guest-button:hover {
          background-color: #e8f1e3;
        }
        
        .auth-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #888;
        }
        
        .auth-footer a {
          color: #234d20;
          text-decoration: none;
        }
        
        .auth-footer a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .auth-container {
            margin: 20px;
          }
          
          .auth-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </div>
  );
} 