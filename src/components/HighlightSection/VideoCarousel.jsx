import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../../constants";

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

  /**
   * here user can have multiple slides with video, so we need to load all the videos
   */
  useEffect(() => {
    if (loadedData.length > loadedData.length - 1) {
      if (isPlaying) {
        startPlay && videoRef.current[videoId].play();
      } else {
        videoRef.current[videoId].pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);
  useEffect(() => {}, [videoId]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  autoPlay
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPlaying: true }));
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
