import React, { useEffect, useRef, useState } from 'react';
import manimage from './ladka.png'
const JewelryShowcase = ({ 
  title = "Jewelry tells a story",
  subtitle = "Every piece of",
  quote = "\"A gentleman knows his appearance is very important that shows his characteristic\" - Unknown",
  manImage = manimage,
  primaryButtonText = "Shop Now",
  secondaryButtonText = "New Items"
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  // State to track window size
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      // Apply responsive styles
      applyResponsiveStyles();
    };

    // Initial style application
    applyStyles();
    applyResponsiveStyles();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);

  // Function to apply base styles using refs
  const applyStyles = () => {
    if (sectionRef.current) {
      Object.assign(sectionRef.current.style, {
        position: 'relative',
        width: '100%',
        height: '800px',
        overflow: 'hidden',
        backgroundColor: '#8B4513', // Brown color
        backgroundImage: 'linear-gradient(to right, #8B4513, #A0522D)', // Gradient brown
        color: 'white',
        display: 'flex',
      });
    }

    if (contentRef.current) {
      Object.assign(contentRef.current.style, {
        padding: '0 5%',
        maxWidth: '50%',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      });
    }
    
    if (imageContainerRef.current) {
      Object.assign(imageContainerRef.current.style, {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50%',
        height: '100%',
        overflow: 'hidden'
      });
    }
  };

  // Function to apply responsive styles using refs
  const applyResponsiveStyles = () => {
    if (!sectionRef.current || !contentRef.current || !imageContainerRef.current) return;

    if (windowSize.width < 768) {
      // Mobile styles
      Object.assign(sectionRef.current.style, {
        height: '400px',
      });
      
      Object.assign(contentRef.current.style, {
        padding: '0 5%',
        maxWidth: '100%',
      });
      
      Object.assign(imageContainerRef.current.style, {
        width: '100%',
        opacity: '0.2',
      });
    } else if (windowSize.width < 1024) {
      // Tablet styles
      Object.assign(sectionRef.current.style, {
        height: '450px',
      });
      
      Object.assign(contentRef.current.style, {
        padding: '0 8%',
        maxWidth: '60%',
      });
      
      Object.assign(imageContainerRef.current.style, {
        width: '50%',
        opacity: '1',
      });
    } else {
      // Desktop styles
      Object.assign(sectionRef.current.style, {
        height: '500px',
      });
      
      Object.assign(contentRef.current.style, {
        padding: '0 10%',
        maxWidth: '50%',
      });
      
      Object.assign(imageContainerRef.current.style, {
        width: '50%',
        opacity: '1',
      });
    }
  };

  return (
    <section ref={sectionRef}>
      <div ref={contentRef}>
        <p style={{ 
          fontSize: windowSize.width < 768 ? '16px' : '20px',
          marginBottom: '0.5rem',
          fontWeight: '300'
        }}>
          {subtitle}
        </p>
        <h1 style={{ 
          fontSize: windowSize.width < 768 ? '32px' : '48px',
          marginTop: '0',
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          {title}
        </h1>
        <p style={{ 
          fontSize: windowSize.width < 768 ? '12px' : '14px',
          marginBottom: '2rem',
          fontStyle: 'italic',
          opacity: '0.9'
        }}>
          {quote}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            ref={el => {
              if (el) {
                Object.assign(el.style, {
                  padding: windowSize.width < 768 ? '8px 16px' : '10px 20px',
                  backgroundColor: 'white',
                  color: '#8B4513',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                });
              }
            }}
            onMouseOver={e => { e.target.style.backgroundColor = '#f0f0f0'; }}
            onMouseOut={e => { e.target.style.backgroundColor = 'white'; }}
          >
            {primaryButtonText}
          </button>
          <button
            ref={el => {
              if (el) {
                Object.assign(el.style, {
                  padding: windowSize.width < 768 ? '8px 16px' : '10px 20px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                });
              }
            }}
            onMouseOver={e => { 
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
            }}
            onMouseOut={e => { 
              e.target.style.backgroundColor = 'transparent'; 
            }}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
      
      <div ref={imageContainerRef}>
        <div ref={el => {
          if (el) {
            Object.assign(el.style, {
              width: '100%',
              height: '100%',
              backgroundImage: `url(${manImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            });
          }
        }} />
      </div>
    </section>
  );
};

export default JewelryShowcase;