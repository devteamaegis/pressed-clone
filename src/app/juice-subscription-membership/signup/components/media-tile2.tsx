export type MediaTile2Data = {
  imgSrc: string;
  text: string;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="block">
      <div className="h-full flex py-4 px-6 rounded-2xl gap-4 bg-color-005">
        <img className="w-16 h-16 border border-solid border-color-001 block max-w-full rounded-lg overflow-clip object-contain" data-component="image" alt="" src={d.imgSrc} />
        <div className="flex pt-1 flex-col justify-between">
          <div className="block [font-family:regola-neue-semibold,_sans-serif] leading-[1.125rem]">
            {d.text}
          </div>
          <div className="flex gap-4">
            <div className="block text-border line-through">
              {d.text2}
            </div>
            <div className="block text-color-004 [font-family:regola-neue-semibold,_sans-serif]">
              {d.text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
