export default function FeatureTextContainer({ title }) {
  return (
    <div className="feature-text-container">
      <div className="flex-center flex-1">
        <p className="feature-text g_text">
          iPhone 16{' '}
          <span className="text-white">
            the first iPhone to feature an aerospace-grade titanium design
          </span>
          , using the same alloy that spacecrafts user for mission to Mars.
        </p>
      </div>
      <div className="flex-center flex-1">
        <p className="feature-text g_text">
          Titanium has one of the best strength-to-weight ratios of any metal,
          making these our{' '}
          <span className="text-white">lightest Pro models ever.</span>, you’ll
          feel the difference the mpment you pick one up
        </p>
      </div>
    </div>
  );
}
