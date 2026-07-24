import type { Tile2Styles } from "../_styles";
export type Tile2Data = {
  kind?: string;
  imgSrc: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <img className={cn("max-w-full overflow-clip", styles.className)} data-component={d.kind} src={d.imgSrc} />
  );
}
