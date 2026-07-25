export type MediaTileData = {
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="flex mb-2">
      <img className="w-5 h-5 block max-w-full mr-2 overflow-clip" data-component="image" alt="" src="/assets/cloned/images/perk-check.png" />
      <div className="block">
        {d.text}
      </div>
    </div>
  );
}
