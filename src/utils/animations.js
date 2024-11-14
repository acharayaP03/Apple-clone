import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
/**
 * @description animaateWithGsap
 * @param {HTMLElement} element
 * @param {Object} options
 *
 */

gsap.registerPlugin(ScrollTrigger); // its necessary to register ScrollTrigger plugin for scroll animations to

export function animateWithGsap(target, animationProps, scrollProps) {
  return gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      top: 'top 85%',
      toggleActions: 'restart reverse restart reverse',
      ...scrollProps,
    },
  });
}

export function animationWithGsapTimeline(
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
) {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  ); // '<' is used to start the animation at the same time as the previous animation

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  );
}
