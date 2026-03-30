import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '24px',
        height: '24px',
        border: '2px solid var(--brand-yellow)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        mixBlendMode: 'difference',
        display: 'none',
      }}
      className="custom-cursor"
    />
  );
}

const style = document.createElement('style');
style.textContent = `
  @media (min-width: 769px) {
    .custom-cursor {
      display: block !important;
    }
    
    body {
      cursor: none !important;
    }
  }
`;
document.head.appendChild(style);
