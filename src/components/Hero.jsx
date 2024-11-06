import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );
  useGSAP(() => {
    gsap.to(".hero-title", {
      duration: 2,
      delay: 2,
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
    });

    gsap.to(
      "#cta",
      {
        duration: 2,
        delay: 2,
        opacity: 1,
        y: -50,
        ease: "power4.inOut",
      },
      []
    );
  }, []);

  function handleResize() {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title"> iPhone 16 pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay={true}
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy now
        </a>
        <p>From $199/month or $1699</p>
      </div>
    </section>
  );
}
