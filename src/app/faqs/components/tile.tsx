import type { TileStyles } from"../_styles";
export type TileData = {
  ariacontrols: string;
  ariaselected: string;
  label: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("block justify-center items-center tracking-[normal] text-center whitespace-nowrap bg-background cursor-pointer", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} role="tab" type="button">
      {d.label}
    </button>
  );
}
