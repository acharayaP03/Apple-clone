export default function ModelColorPicker({ item, index, setModel }) {
  return (
    <li
      key={index}
      className="mx-4 h-6 w-6 cursor-pointer rounded-full"
      style={{ backgroundColor: item.color[0] }}
      onClick={() => setModel(item)}
    ></li>
  );
}
