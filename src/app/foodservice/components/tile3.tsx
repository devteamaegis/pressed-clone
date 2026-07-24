export type Tile3Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(300%_+_40px)] col-start-[span_3]">
      <p className="box-content min-h-6 block shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] text-center [overflow-wrap:break-word] [pointer-events:all]">
        <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
            {d.description}
          </a>
        </strong>
      </p>
    </div>
  );
}
