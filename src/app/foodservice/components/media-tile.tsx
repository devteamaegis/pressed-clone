import type { MediaTileStyles } from"../_styles";
export type MediaTileData = {
  height: string;
  imgSrc: string;
  width: string;
  description: string;
  height2: string;
  imgSrc2: string;
  width2: string;
  description2: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("hidden min-w-0 mb-10 gap-x-5 grid-cols-[repeat(12,_minmax(0px,_66.6667px))] col-start-2 max-lg:grid max-lg:[grid-auto-columns:1fr] max-lg:grid-cols-12 max-lg:grid-rows-1", styles.className)}>
      <div className="flex flex-col basis-[calc(600%_+_100px)] col-start-[span_6] text-center max-lg:min-w-0 max-lg:row-start-1">
        <figure className="box-content grid relative min-w-0 max-w-full mb-3 shrink-0 grid-cols-[1fr] [overflow-wrap:break-word] [pointer-events:all] max-lg:grid-cols-1">
          <div className="box-content block min-w-0 col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
            <a className="box-content inline cursor-pointer [pointer-events:all]" href="https://pressed.com/shop?filters=detox_and_reset">
              <img className={cn("box-content inline max-w-full align-top [pointer-events:all]", styles.className2)} height={d.height} src={d.imgSrc} width={d.width} />
            </a>
          </div>
        </figure>
        <p className="box-content min-h-6 block min-w-0 shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]">
          <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
            {d.description}
          </strong>
        </p>
      </div>
      <div className="flex flex-col basis-[calc(600%_+_100px)] col-start-[span_6] text-center max-lg:min-w-0 max-lg:row-start-1">
        <figure className="box-content grid relative min-w-0 max-w-full mb-3 shrink-0 grid-cols-[1fr] [overflow-wrap:break-word] [pointer-events:all] max-lg:grid-cols-1">
          <div className="box-content block min-w-0 col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
            <a className="box-content inline cursor-pointer [pointer-events:all]" href="https://pressed.com/shop?filters=gut_health">
              <img className={cn("box-content inline max-w-full align-top [pointer-events:all]", styles.className3)} height={d.height2} src={d.imgSrc2} width={d.width2} />
            </a>
          </div>
        </figure>
        <p className="box-content min-h-6 block min-w-0 shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]">
          <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
            {d.description2}
          </strong>
        </p>
      </div>
    </div>
  );
}
