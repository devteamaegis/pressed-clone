import type { MediaTileStyles } from "../_styles";
export type MediaTileData = {
  description: string;
  description2: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="grid mb-6 gap-8 grid-cols-[50px_1fr] max-md:gap-4">
      <img className={cn("w-12.5 block max-w-full overflow-clip", styles.className)} data-component="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <p className="block mb-[1.33rem] leading-[1.4375rem]">
        <strong className="inline font-bold uppercase">
          {d.description}
        </strong>
        {d.description2}
      </p>
    </li>
  );
}
