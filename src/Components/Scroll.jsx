import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


function Scroll() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollIcon && window.pageYOffset > 500) {
      setShowScrollIcon(true);
    } else if (showScrollIcon && window.pageYOffset <= 500) {
      setShowScrollIcon(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScrollIcon]);

  return (
    <div className="App absolute">
      <div className="content" style={{ height: '5000px' }}>
      </div>
      {showScrollIcon && (
        <button
          className="fixed bottom-5 right-5 gradient-button text-white border-[#8EC8EE] border p-3 rounded-full shadow-lg z-50"
          onClick={scrollTop}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default Scroll;
