import { useEffect } from 'react';

function useScrollToTopHook() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
}

export default useScrollToTopHook;