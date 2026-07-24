export type Logo4Data = {
  imgSrc: string;
};
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(300%_+_40px)] col-start-[span_3]">
      <figure className="box-content grid relative max-w-full shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1">
        <div className="box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
          <img className="box-content w-60 h-24 inline max-w-full aspect-[auto_250/100] align-top [pointer-events:all]" data-component="image" height="100" src={d.imgSrc} width="250" />
        </div>
      </figure>
    </div>
  );
}
