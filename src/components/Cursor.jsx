import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Check if device is touch-primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let fx = -100, fy = -100, cx = -100, cy = -100, animId;

    const onMove = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };

    const animate = () => {
      fx += (cx - fx) * 0.15;
      fy += (cy - fy) * 0.15;
      follower.style.transform = `translate3d(${fx}px, ${fy}px, 0) rotate(45deg)`;
      animId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .skill-card, .project-card, .cert-card, .stat-card, input, textarea, .fact-item');
      if (target) {
        cursor.classList.add('expanded');
        follower.classList.add('expanded');
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
          follower.classList.add('has-text');
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .skill-card, .project-card, .cert-card, .stat-card, input, textarea, .fact-item');
      if (target) {
        cursor.classList.remove('expanded');
        follower.classList.remove('expanded');
        follower.classList.remove('has-text');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower">
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>
  );
}
