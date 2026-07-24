import type { Logo3Styles } from"../_styles";
export type Logo3Data = {
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className="flex min-w-0 flex-col justify-center basis-[calc(400%_+_60px)] col-start-[span_4]">
      <figure className="box-content grid relative max-w-full shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1">
        <div className={cn("box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]", styles.className)}>
          <img className={cn("box-content inline max-w-full align-top [pointer-events:all]", styles.className2)} data-component="image" height={d.height} src={d.imgSrc} width={d.width} />
        </div>
      </figure>
    </div>
  );
}
