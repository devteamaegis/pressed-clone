import type { MediaCardStyles } from"../_styles";
export type MediaCardData = {
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(400%_+_60px)] col-start-[span_4] text-center bg-color-006">
      <p className="box-content min-h-6 block shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]" />
      <figure className="box-content grid relative max-w-full mb-6.5 shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1">
        <div className={cn("box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]", styles.className)}>
          <img className={cn("box-content inline max-w-full align-top [pointer-events:all]", styles.className2)} data-component="image" height={d.height} src={d.imgSrc} width={d.width} />
        </div>
      </figure>
      <h3 className="box-content min-h-7 block shrink-0 [font-family:FTRegolaNeue-Medium,_stk] text-2xl leading-7 tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]" data-component="heading">
        <strong className="box-content min-h-7 inline [pointer-events:all]">
          {d.title}
        </strong>
      </h3>
      <p className="box-content min-h-6 block p-6 shrink-0 [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [overflow-wrap:break-word] [pointer-events:all]">
        {d.description}
      </p>
    </div>
  );
}
