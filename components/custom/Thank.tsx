// components/Thank.js
"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type ThankProps = {
  name: string;
};

const Thank = ({ name }: ThankProps) => {
  const containerRef = useRef(null);
  const thankRef = useRef(null);
  const youRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      thankRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );

    gsap.fromTo(
      youRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.4 }
    );

    gsap.to(
      containerRef.current,
      {  height: "80dvh", duration: 1.5, delay: 5 }
    );

  }, []);

  return (
    <div ref={containerRef} className="thank-container">
      <h1 ref={thankRef}>Thank you</h1>
      <h1 ref={youRef}>{name}!</h1>
    </div>
  );
};

export default Thank;
