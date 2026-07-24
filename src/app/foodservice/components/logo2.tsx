export type Logo2Data = {
  href: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(400%_+_60px)] col-start-[span_4]">
      <figure className="box-content h-full grid relative max-w-full shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1">
        <div className="box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
            <img className="box-content w-[20.4375rem] h-54 inline max-w-full aspect-[auto_400/265] align-top [pointer-events:all]" data-component="image" height="265" src={d.imgSrc} width="400" />
          </a>
        </div>
      </figure>
    </div>
  );
}
