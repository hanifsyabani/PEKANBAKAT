import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed transition-all right-5 z-20 cursor-pointer ${
        visible ? 'bottom-5' : '-bottom-20'
      }`}
      onClick={scrollToTop}
    >
      <div className="p-2 rounded-full bg-gray-900">
        <MdOutlineKeyboardArrowUp size={20} className="text-white" />
      </div>
    </div>
  );
}
