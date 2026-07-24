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
    <div className={cn("h-14 min-h-0 flex z-1 min-w-0 items-center shrink-0 transform-[matrix(1,0,0,1,-618.752,0)] [animation-name:scrollX] [animation-duration:20s] [animation-timing-function:linear] [animation-iteration-count:infinite]", styles.className)} aria-hidden={d.ariahidden}>
      <span className={cn("block pl-8 text-background leading-14", styles.className2)}>
        Meet Your Easiest Win This Year
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className3)}>
        Commit To Your Goals Deliciously
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className4)}>
        64g Plant Protein
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className5)}>
        Promotes Gut Health
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className6)}>
        {"Supports Detox & Digestion"}
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className7)}>
        Nutrient Replenishment Support
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className8)}>
        Gluten Free
      </span>
      <span className={cn("block pl-8 text-background leading-14", styles.className9)}>
        Non-GMO Certified
      </span>
    </div>
  );
}
