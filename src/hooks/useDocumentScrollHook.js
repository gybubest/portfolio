import { useEffect, useState } from 'react';

function useDocumentScrollHook() {
  const [scrolled, setScrolled] = useState(false);
  const handleDocumentScroll = () => {
    const currentScrollTop = (document.documentElement || document.body).scrollTop;
    setScrolled(currentScrollTop > 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScroll);
    return () => window.removeEventListener('scroll', handleDocumentScroll);
  }, []);

  return {scrolled, handleDocumentScroll};
};

export default useDocumentScrollHook;