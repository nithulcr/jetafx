"use client"; // Add this line to mark the component as a client component

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const OutlineCursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const OutlineCursor = OutlineCursorRef.current;
    const cursor = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (OutlineCursor) {
        OutlineCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const links = document.querySelectorAll('a');

    const handleMouseOver = () => {
      if (OutlineCursor) OutlineCursor.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (OutlineCursor) OutlineCursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>

      <div className="OutlineCursor" ref={OutlineCursorRef}>        <div className="cursor" ref={cursorRef}></div> </div>
    </>
  );
};

export default CustomCursor;