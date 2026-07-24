export type Logo5Data = {
  href: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo5({ d }: { d: Logo5Data }) {
  return (
    <div className="flex min-w-0 rounded-[20px] flex-col basis-[calc(300%_+_40px)] col-start-[span_3] text-center bg-color-007">
      <figure className="box-content h-full grid relative max-w-full shrink-0 [overflow-wrap:break-word] [pointer-events:all] grid-cols-1">
        <div className="box-content block col-start-1 row-start-1 overflow-hidden [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
            <img className="box-content w-60 h-60 inline max-w-full aspect-[auto_250/250] align-top [pointer-events:all]" data-component="image" height="250" src={d.imgSrc} width="250" />
          </a>
        </div>
      </figure>
    </div>
  );
}
