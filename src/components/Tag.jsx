import { TAG_STYLE } from "../constants";

export default function Tag({ tag }) {
  const style = TAG_STYLE[tag];

  return (
    <span
      className="text-xs px-2.5 py-0.5 font-medium"
      style={{ background: style.bg, color: style.color, fontFamily: "'DM Mono', monospace" }}
    >
      {tag}
    </span>
  );
}