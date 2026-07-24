export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(400%_+_60px)] col-start-[span_4]">
      <p className="box-content min-h-6 block shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]">
        <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
          {d.description}
        </strong>
      </p>
    </div>
  );
}
