"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

type LetterProps = {
  from: string;
  content: string;
  name: string;
};

gsap.registerPlugin(CSSRulePlugin);

const Letter = ({ from, content, name }: LetterProps) => {
  const letterRef = useRef(null);
  const envelopeRef = useRef(null);

  const envelopeWrapperRef = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    const envelopeBefore = CSSRulePlugin.getRule(".envelope::before");
    const envelopeAfter = CSSRulePlugin.getRule(".envelope::after");
    const wrapper = envelopeWrapperRef.current;

    const letter = letterRef.current;
    const envelope = envelopeRef.current;

    const container = containerRef.current;

    const timeline = gsap.timeline({
      onComplete: () => {
        letter.classList.add("letter-expanded");
        envelope.classList.add("letter-expanded");
      },
    });
    timeline
      .fromTo(
        container,
        {
          display: "none",
        },
        {
          display: "block",
          duration: 1,
          ease: "power1.out",
        }
      )
      .to(wrapper, {
        transform: "translateY(-300px)",
        duration: 1,
        ease: "power1.out",
      })
      .to(envelopeBefore, {
        cssRule: {
          rotateX: 180,
        },
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        letter,
        {
          bottom: "150px",
          // width: "auto",
          // minWidth: "100%",
          opacity: "1",
          scale: 1,
          duration: 0.1,
          zIndex: 4,
        },
        "-=0.5"
      )
      .to(
        envelopeBefore,
        {
          opacity: 0,
          duration: 1,
          ease: "power1",
        },
        "+=1.5"
      )
      .to(
        envelopeAfter,
        {
          opacity: 0,
          duration: 1,
          ease: "power1",
        },
        "-=1"
      )
      .to(
        wrapper,
        {
          background: "transparent",
          duration: 1,
          ease: "power1",
        },
        "-=1"
      );
  }, []);

  return (
    <div ref={containerRef} className={`letter-container ${from.toLocaleLowerCase()}`}>
      <div ref={envelopeWrapperRef} className="envelope-wrapper">
        <div ref={envelopeRef} className="envelope">
          <div ref={letterRef} className="letter">
            <div className="text">
              <p>Dear {name}</p>
              <br/>
              <p>{content}</p>
              <br/>
              <p>Sincerely, <br/>{from}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
