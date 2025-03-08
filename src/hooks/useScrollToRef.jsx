import { useCallback } from 'react';

const useScrollToRef = () => {
  const scrollToRef = useCallback((ref, offset = 0) => {
    if (ref?.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToRef;
};

export default useScrollToRef;
