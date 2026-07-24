import type { Tile2Styles } from"../_styles";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <p className={cn("box-content min-h-6 block min-w-0 shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]", styles.className)}>
      <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
        {d.description}
      </strong>
      <br className="box-content inline [pointer-events:all]" />
      {d.description2}
    </p>
  );
}
