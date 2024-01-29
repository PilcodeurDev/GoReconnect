/**
 * The external imports
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitTextAnimation({ text }) {

  useEffect(() => {
    const sentence = gsap.utils.toArray(".splitAnimation");
    const tl = gsap.timeline();

    sentence.forEach((letter) => {
      const splitText = new SplitTextJS(letter);
      tl.from(splitText.chars, {
        duration: 5,
        y: 75,
        rotateX: -90,
        stagger: 0.6,
        scrollTrigger: {
          trigger: '.splitAnimation',
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <h3 className="splitAnimation">
      {text}
    </h3>
  );
}
