/**
 * The external imports
 */
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const targetId = useRef("");

  useEffect(() => {
    if (location.hash) {
      targetId.current = location.hash.slice(1);
    }

    if (targetId.current && document.getElementById(targetId.current)) {
      setTimeout(() => {
        document
          .getElementById(targetId.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        targetId.current = "";
      }, 10);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
