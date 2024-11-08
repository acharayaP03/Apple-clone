import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCarouselSlider from './VideoCarouselSlider';
import SlideItemText from '../Carousel/SlideItemText';

gsap.registerPlugin(ScrollTrigger);

import { hightlightsSlides } from '../../constants';
import { pauseImg, playImg, replayImg } from '../../utils';

export default function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(-${videoId * 100}%)`,
      duration: 2,
      ease: 'power2.inOut',
    });
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;

    if (!span[videoId]) return;

    let animation = gsap.to(span[videoId], {
      onUpdate: () => {
        const progress = Math.ceil(animation.progress() * 100);

        if (progress !== currentProgress) {
          currentProgress = progress;

          // width of slider on device specific screen
          gsap.to(videoDivRef.current[videoId], {
            width:
              window.innerWidth < 768
                ? '10vw'
                : window.innerWidth < 1200
                  ? '5vw'
                  : '3vw',
          });

          gsap.to(span[videoId], {
            width: `${currentProgress}%`,
            backgroundColor: 'white',
          });
        }
      },
      onComplete: () => {
        if (isPlaying) {
          gsap.to(videoDivRef.current[videoId], {
            width: '12px',
          });

          gsap.to(span[videoId], {
            backgroundColor: '#afafaf',
          });
        }
      },
    });

    if (videoId === 0) {
      animation.restart();
    }
    const animationUpdate = () => {
      animation.progress(
        videoRef.current[videoId].currentTime /
          videoRef.current[videoId].videoDuration,
      );
    };

    if (isPlaying) {
      gsap.ticker.add(animationUpdate);
    } else {
      gsap.ticker.remove(animationUpdate);
    }
  }, [videoId, startPlay]);

  /**
   * here user can have multiple slides with video, so we need to load all the videos
   */
  useEffect(() => {
    if (loadedData.length > hightlightsSlides.length - 1) {
      !isPlaying
        ? videoRef.current[videoId].pause()
        : startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (index, event) => {
    setLoadedData((prev) => [...prev, event]);
  };

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case 'video-last':
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case 'video-reset':
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case 'pause':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  autoPlay
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`}
                  ref={(el) => {
                    videoRef.current[index] = el;
                  }}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPlaying: true }));
                  }}
                  onLoadedMetadata={(index, event) =>
                    handleLoadedMetadata(index, event)
                  }
                  onEnded={() =>
                    index === hightlightsSlides.length - 1
                      ? handleProcess('video-last')
                      : handleProcess('video-end', index)
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <SlideItemText list={list.textLists} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center relative mt-10">
        <VideoCarouselSlider
          videoRef={videoRef}
          videoDivRef={videoDivRef}
          videoSpanRef={videoSpanRef}
        />

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                  ? () => handleProcess('play')
                  : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  );
}
