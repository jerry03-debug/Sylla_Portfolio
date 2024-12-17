'use client';

import { useEffect, useState } from 'react';

export const CustomCursor = ({ color = '#3b82f6' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button');
    };

    document.documentElement.style.setProperty('--cursor-color', color);
    document.documentElement.style.setProperty('--scrollbar-color', color);
    document.documentElement.style.setProperty('--scrollbar-hover-color', color + 'cc');

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [color]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
