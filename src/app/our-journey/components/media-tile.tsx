import type { MediaTileStyles } from"../_styles";
export type MediaTileData = {
  href: string;
  height: string;
  imgSrc: string;
  width: string;
  href2: string;
  label: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(300%_+_40px)] col-start-[span_3] max-lg:col-start-[span_1] max-lg:basis-[initial]">
      <figure className={cn("box-content h-full grid relative max-w-full shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1", styles.className)}>
        <div className="box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
            <img className={cn("box-content w-60 h-60 inline max-w-full align-top [pointer-events:all] max-md:w-[20.1875rem] max-md:h-[20.1875rem]", styles.className2)} data-component="image" height={d.height} src={d.imgSrc} width={d.width} />
          </a>
        </div>
        <figcaption className="box-content min-h-4.5 block max-w-255 mt-2.5 col-start-1 row-start-2 [font-family:FTRegolaNeue-Regular,_stk] text-xs leading-4.5 tracking-[normal] text-center [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href2}>
            {d.label}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
