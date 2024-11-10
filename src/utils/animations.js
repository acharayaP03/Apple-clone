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
