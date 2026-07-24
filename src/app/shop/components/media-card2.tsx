import type { MediaCard2Styles } from"../_styles";
export type MediaCard2Data = {
  imgSrc: string;
  href: string;
  title: string;
  ariaLabel: string;
  ariaLabel2: string;
  ariaLabel3: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="flex relative flex-col">
      <div className="block rounded-2xl bg-primary cursor-pointer aspect-square">
        <img className="w-[10.6875rem] h-[10.6875rem] block max-w-60 overflow-clip max-md:w-44 max-md:h-44 md:max-lg:w-40 md:max-lg:h-40" data-component="image" alt="" src={d.imgSrc} />
      </div>
      <a className={cn("block cursor-pointer", styles.className)} data-component="link" href={d.href}>
        <h3 className="block my-4 px-4 font-bold text-center max-md:[font-family:regola-neue-medium,_sans-serif]" data-component="heading">
          {d.title}
        </h3>
      </a>
      <div className={cn("block mb-4 px-4", styles.className2)}>
        <div className="flex mb-4 justify-center">
          <div className="grow basis-0 block text-center">
            <div className="block">
              $6.95
            </div>
            <div className="block text-border text-xs leading-4">
              Regular
            </div>
          </div>
          <div className="grow basis-0 block text-center">
            <div className="block">
              $5.50
            </div>
            <div className="block text-border text-xs leading-4">
              VIP
            </div>
          </div>
        </div>
        <div className="border border-solid border-foreground grid max-w-34 mx-auto rounded-full grid-cols-3 grid-rows-1 aspect-[3.4] md:max-lg:aspect-[3.212]">
          <div className="border-r border-solid border-r-foreground flex justify-center items-center cursor-pointer aspect-[1.175] md:max-lg:aspect-[1.109]" data-component="button" aria-label={d.ariaLabel} role="button">
            <svg className="w-auto h-0.5 block overflow-hidden" data-component="icon" height="2" viewBox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <g fill="none" fillRule="evenodd">
                <g fill="#1E1E1E" fillRule="nonzero">
                  <g>
                    <path d="M35 280.75c.38 0 .693.245.743.564l.007.088v8.696c0 .36-.336.652-.75.652-.38 0-.693-.245-.743-.564l-.007-.088v-8.696c0-.36.336-.652.75-.652z" transform="translate(-54 -822) translate(24 537) rotate(-90 35 285.75)" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="flex justify-center items-center aspect-[1.176] md:max-lg:aspect-[1.109]">
            <input className="w-full h-9 block p-2.5 overflow-clip [font-family:regola-neue-semibold,_sans-serif] text-xs leading-[1rem] tracking-[normal] text-center cursor-text" data-component="input" aria-label={d.ariaLabel2} type="text" value="0" />
          </div>
          <div className="border-l border-solid border-l-foreground flex justify-center items-center cursor-pointer aspect-[1.176] md:max-lg:aspect-[1.109]" data-component="button" aria-label={d.ariaLabel3} role="button">
            <svg className="w-auto h-2.5 block overflow-hidden" data-component="icon" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <g fill="none" fillRule="evenodd">
                <g fill="#1E1E1E" fillRule="nonzero">
                  <g>
                    <path d="M145 281c.33 0 .603.245.646.564l.006.088v3.695h3.696c.36 0 .652.293.652.653 0 .33-.245.603-.564.646l-.088.006h-3.696v3.696c0 .36-.292.652-.652.652-.33 0-.603-.245-.646-.564l-.006-.088-.001-3.696h-3.695c-.36 0-.652-.292-.652-.652 0-.33.245-.603.564-.646l.088-.006 3.695-.001v-3.695c0-.36.293-.652.653-.652z" transform="translate(-164 -818) translate(24 537)" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="h-4 block my-4 text-accent text-xs leading-4 text-center" />
      </div>
    </div>
  );
}
