import type { MediaCard3Styles } from"../_styles";
export type MediaCard3Data = {
  imgSrc: string;
  href: string;
  title: string;
  ariaLabel: string;
  href2: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard3({ d, styles }: { d: MediaCard3Data; styles: MediaCard3Styles }) {
  return (
    <div className="flex relative flex-col">
      <div className="block rounded-2xl bg-primary cursor-pointer aspect-square">
        <img className="w-full block max-w-60 mx-auto overflow-clip" data-component="image" alt="" src={d.imgSrc} />
      </div>
      <a className={cn("block cursor-pointer", styles.className)} data-component="link" href={d.href}>
        <h3 className="block my-4 px-4 font-bold text-center max-md:[font-family:regola-neue-medium,_sans-serif]" data-component="heading">
          {d.title}
        </h3>
      </a>
      <div className={cn("block mb-4 px-4 mt-auto", styles.className2)}>
        <div className="flex mb-4 justify-center">
          <div className="grow basis-0 block text-center">
            <div className="block">
              $7.95
            </div>
            <div className="block text-border text-xs leading-4">
              Regular
            </div>
          </div>
          <div className="grow basis-0 block text-center">
            <div className="block">
              $6.50
            </div>
            <div className="block text-border text-xs leading-4">
              VIP
            </div>
          </div>
        </div>
        <a className="border border-solid border-foreground block max-w-35 pt-2 pb-2.5 px-4 rounded-full text-center cursor-pointer mx-auto" data-component="link" aria-label={d.ariaLabel} href={d.href2}>
          {" Shop now"}
        </a>
        <div className="h-4 block my-4 text-accent text-xs leading-4 text-center" />
      </div>
    </div>
  );
}
