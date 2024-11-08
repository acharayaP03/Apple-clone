import PropTypes from 'prop-types';
export default function VideoCarouselSlider({
  videoRef,
  videoDivRef,
  videoSpanRef,
}) {
  return (
    <>
      <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
        {videoRef &&
          videoRef.current.map((_, index) => (
            <span
              key={index}
              ref={(el) => (videoDivRef.current[index] = el)}
              className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
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
