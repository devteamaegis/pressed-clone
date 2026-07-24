import type { MediaCardStyles } from"../_styles";
export type MediaCardData = {
  imgSrc: string;
  href: string;
  title: string;
  text: string;
  text2: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("flex relative flex-col cursor-pointer", styles.className)}>
      <img className={cn("w-48 h-48 block max-w-60 overflow-clip", styles.className2)} data-component="image" alt="" src={d.imgSrc} />
      {""}
      <a className={cn("block", styles.className3)} data-component="link" href={d.href}>
        <h3 className={cn("block my-4 px-4 font-bold text-center", styles.className4)} data-component="heading">
          {d.title}
        </h3>
        {""}
      </a>
      {""}
      <div className={cn("block max-w-360 mb-4 px-4", styles.className5)}>
        <div className="flex mb-4 justify-center">
          <div className={cn("block text-center", styles.className6)}>
            <div className="block">
              {d.text}
            </div>
            {""}
            <div className="block text-border text-xs leading-4">
              Regular
            </div>
            {""}
          </div>
          {""}
          <div className={cn("block text-center", styles.className7)}>
            <div className="block">
              {d.text2}
            </div>
            {""}
            <div className="block text-border text-xs leading-4">
              VIP
            </div>
            {""}
          </div>
          {""}
        </div>
        {""}
        <div className="block max-w-35 mx-auto rounded-full text-background leading-10 text-center bg-foreground" data-component="button" role="button">
          {"\n\t\t\t\tAdd to Cart\n\t\t\t"}
        </div>
        {""}
      </div>
      {""}
    </li>
  );
}
