
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = <T extends HTMLElement>(callback: () => void, options = {}) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          // Unobserve after animation is triggered
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
};
