import type { MediaTileStyles } from"../_styles";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  href: string;
  label: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="w-32.5 border-2 border-solid border-surface flex p-3 rounded-[5px] flex-col justify-evenly items-center">
      <img className={cn("w-full block max-w-full overflow-clip object-contain", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
      <a className={cn("block underline whitespace-nowrap cursor-pointer", styles.className2)} data-component="link" href={d.href} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
