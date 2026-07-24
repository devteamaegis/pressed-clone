import type { TileStyles } from"../_styles";
export type TileData = {
  description: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="flex min-w-0 flex-col justify-start basis-[calc(400%_+_60px)] col-start-[span_4]">
      <p className={cn("box-content min-h-6 block px-12 shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] text-center [overflow-wrap:break-word] [pointer-events:all]", styles.className)}>
        {d.description}
      </p>
    </div>
  );
}
