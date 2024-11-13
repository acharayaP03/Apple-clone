import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function SectionHeading({
  text,
  id,
  className = 'section-heading',
}) {
  useGSAP(() => {
    gsap.to(
      `#${id}`,
      {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1,
      },
      [],
    );
  });
  return (
    <h1 id={id} className={className}>
      {text}
    </h1>
  );
}
