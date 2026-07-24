export type MediaTileData = {
  imgSrc: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="block mb-8 text-center">
      <a className="inline cursor-pointer" data-component="link" href="/shop" rel="noopener noreferrer">
        <img className="w-57 h-85.5 inline max-w-full overflow-clip max-md:w-[9.1875rem] max-md:h-[13.8125rem] md:max-lg:w-86 md:max-lg:h-129" data-component="image" src={d.imgSrc} />
      </a>
      <p className="block mb-[1.33rem] leading-[1.4375rem]" />
      <a className="inline font-bold underline cursor-pointer" data-component="link" href="/shop" rel="noopener noreferrer">
        {d.label}
      </a>
    </div>
  );
}
