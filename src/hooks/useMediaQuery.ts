import { useState, useEffect } from "react";

/* Usage 
 * **
 * useMediaQuery('(min-width: 768px)')
 */

const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    setIsMatch(mediaQueryList.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMatch;
};

export default useMediaQuery;

