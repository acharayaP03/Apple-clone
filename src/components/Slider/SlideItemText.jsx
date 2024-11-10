import PropTypes from "prop-types";

export default function SlideItemText({ item }) {
  return (
    <>
      <div className="absolute top-12 left-[5%] z-10">
        {item &&
          item.map((text) => (
            <p key={text} className="md:text-2xl text-xl font-medium">
              {text}
            </p>
          ))}
      </div>
    </>
  );
}

SlideItemText.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string),
};
