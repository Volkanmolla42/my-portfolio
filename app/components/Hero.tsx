"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  useEffect(() => {
    gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title text-4xl font-bold text-black">
        Welcome to My Portfolio
      </h1>
    </section>
  );
};

export default Hero;
