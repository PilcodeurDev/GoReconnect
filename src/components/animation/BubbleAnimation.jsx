/**
 * The external imports
 */
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BubbleAnimation({selector, duration, start, end}) {

  useEffect(() => {
    const bubbles = gsap.utils.toArray(selector);
    const tl = gsap.timeline();

    bubbles.forEach((bubble) => {
      tl.from(bubble, {
        duration: duration,
        y: 75,
        rotateX: -90,
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".array-benefits",
          start: start,
          end: end,
          scrub: true,
          duration: duration,
        },
      });
    });
  }, [selector, duration, start, end]);


  return null;
}
