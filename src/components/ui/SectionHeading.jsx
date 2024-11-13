export default function SectionHeading({
  text,
  id,
  className = 'section-heading',
}) {
  return (
    <h1 id={id} className={className}>
      {text}
    </h1>
  );
}
