import PropTypes from "prop-types";
export default function VideoCarouselSlider({
  videoRef,
  videoDivRef,
  videoSpanRef,
}) {
  return (
    <>
      <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
        {videoRef &&
          videoRef.current.map((_, index) => (
            <span
              key={index}
              ref={(el) => (videoDivRef.current[index] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[index] = el)}
              ></span>
            </span>
          ))}
      </div>
    </>
  );
}

VideoCarouselSlider.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }),
  videoDivRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }),
  videoSpanRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }),
};
