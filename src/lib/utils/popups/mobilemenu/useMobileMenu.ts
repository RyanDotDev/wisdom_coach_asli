import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useMobileMenu = (isOpen: boolean) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        display: 'block'
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [isOpen]);

  return menuRef
};