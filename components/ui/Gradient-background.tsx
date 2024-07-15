"use client"; // Make sure this is placed at the top if using a client-side directive in a Next.js app
import React, { useEffect } from "react";

type GradientBackgroundProps = {
  children: React.ReactNode;
};

const GradientBackground = ({children}: GradientBackgroundProps) => {
  useEffect(() => {
    const colors = ["#FFDAB9", "#FBC1DF", "#F8ACFF"];

    const gradientElement = document.querySelector(".gradient-background") as HTMLDivElement;
    const setGradient = () => {
      const gradient = `linear-gradient(0deg, ${colors.join(", ")})`;
      if (gradientElement) {
        gradientElement.style.background = gradient;
      }
    };

    setGradient();
  }, []);

  return (
    <div className="gradient-background">{children}</div>
  )
};

export default GradientBackground;
