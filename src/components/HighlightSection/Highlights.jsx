import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { rightImg, watchImg } from '../../utils';

import VideoCarousel from './VideoCarousel';

export default function Highlights() {
  useGSAP(() => {
    gsap.to('#title', {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power4.out',
    });
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 className="section-heading" id="title">
            Get the highlights
          </h1>
          <div className="ml-auto flex flex-wrap items-end gap-5">
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

        <VideoCarousel />
      </div>
    </section>
  );
}
