import { chipImg, frameImg } from '@/utils/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/all';
import framemv from '/assets/videos/frame.mp4';


gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration:2,
      ease: 'power2.inOut'
    })
  },[])
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="Chip" width={180} height={180}/>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">A17 Pro chip</h2>
          <br/> A monster win for gaming.
        </div>
        <p className="hiw-subtitle"> It's here. The biggest redesign in the history of Apple GPUs. </p>
      </div>

      <div className="mt-10 md:mt-20 mb-14">
        <div className="relative h-full flex-center">
          <div className="overflow-hidden">
            <img src={frameImg} alt="frame" className="bg-transparent relative z-10"/>
          </div>
        </div>
      </div>
    </section>
  )
}