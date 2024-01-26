/**
 * The external imports
 */

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollPlugin } from 'gsap/ScrollPlugin';

gsap.registerPlugin(ScrollTrigger);

export default function SplitTextAnimation({ text }) {

  const [animation, setAnimation] = useState(false);
  const togleAnimation = () => setAnimation(!animation);

  useEffect(() => {
    const sentence = gsap.utils.toArray(".splitAnimation");
    const tl = gsap.timeline();

    sentence.forEach((letter) => {
      const splitText = new SplitTextJS(letter);
      tl.from(splitText.chars, {
        duration: 5,
        y: 75,
        rotateX: -90,
        stagger: 0.4,
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
    <h2 className="splitAnimation">
      {text}
    </h2>
  );
}
