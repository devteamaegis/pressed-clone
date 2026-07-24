import type { MediaTileStyles } from"../_styles";
export type MediaTileData = {
  imgSrc: string;
  text: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="list-item">
      <img className={cn("w-[18.1875rem] inline max-w-full rounded-[10px] overflow-clip max-md:w-36 md:max-lg:w-[13.3125rem]", styles.className)} data-component="image" src={d.imgSrc} />
      <div className="block font-bold">
        {d.text}
      </div>
    </li>
  );
}
