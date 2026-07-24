import type { MediaTile2Styles } from"../_styles";
export type MediaTile2Data = {
  imgSrc: string;
  description: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(300%_+_40px)] col-start-[span_3] max-lg:basis-[calc(50%_-_10px)] max-lg:col-start-[span_1]">
      <figure className={cn("box-content grid relative max-w-full mb-6.5 shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1", styles.className)}>
        <div className={cn("box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]", styles.className2)}>
          <img className={cn("box-content w-60 inline max-w-full aspect-[auto_610/640] align-top [pointer-events:all] max-md:w-[10.8125rem] md:max-lg:w-[23.0625rem]", styles.className3)} data-component="image" height="640" src={d.imgSrc} width="610" />
        </div>
      </figure>
      {""}
      <p className="box-content min-h-6 block shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] text-center [overflow-wrap:break-word] [pointer-events:all]">
        <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
          {d.description}
        </strong>
      </p>
    </div>
  );
}
