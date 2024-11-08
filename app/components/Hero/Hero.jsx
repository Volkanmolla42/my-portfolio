"use client";
import Image from "next/image";
import "./style.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="my-container">
        <div className="text-box">
          <div className="letter M gradient">M</div>
          <div className="letter V">V</div>
          <div className="letter O gradient">O</div>
          <div className="letter slash gradient">/</div>
          <div className="letter slash2 gradient">/</div>
          <div className="letter slash3">/</div>
          <div className="letter slash4">/</div>
          <div className="letter A gradient">A</div>
          <div className="letter dot gradient">.</div>
          <div className="letter N">N</div>
        </div>
      </div>
      <Image
        src="/icons/arrow-down-sign-to-navigate.png"
        width={30}
        height={30}
        alt="down"
        className="  down-arrow bottom-5 absolute left-1/2"
      />
    </section>
  );
};

export default Hero;
