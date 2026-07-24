import type { TileStyles } from "../_styles";
export type TileData = {
  ariahidden?: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("h-14 min-h-0 flex z-1 min-w-0 items-center shrink-0 transform-[matrix(1,0,0,1,-499.901,0)] [animation-name:scrollX] [animation-duration:20s] [animation-timing-function:linear] [animation-iteration-count:infinite]", styles.className)} aria-hidden={d.ariahidden}>
      <span className={cn("block pl-8 text-background leading-14", styles.className2)}>
        Prebiotic Fiber
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className3)}>
        Live Probiotics
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className4)}>
        Glucoraphanin
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className5)}>
        Sulforaphane
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className6)}>
        Detox
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className7)}>
        Cellular Support
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className8)}>
        Microbiome Balance
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className9)}>
        Non-GMO Project Verified
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className10)}>
        Gluten-Free
      </span>
    </div>
  );
}
