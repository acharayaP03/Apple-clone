import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { rightImg, watchImg } from "../utils";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power4.out",
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading" id="title">
            Get the highlights
          </h1>
          <div className="flex flex-wrap gap-5 items-end ml-auto">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch the film" className="ml-2" />
            </p>
            <p className="link">
              Watch the events
              <img src={rightImg} alt="watch the events" className="ml-2" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
