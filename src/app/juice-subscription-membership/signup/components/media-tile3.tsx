export type MediaTile3Data = {
  alt: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="block p-4 rounded-2xl text-center bg-color-005 max-md:p-2">
      <img className="w-20 h-20 inline max-w-full overflow-clip object-contain max-md:w-17.5 max-md:h-17.5" data-component="image" alt={d.alt} src={d.imgSrc} />
      <div className="block mb-1 [font-family:regola-neue-semibold,_sans-serif] max-md:text-sm max-md:leading-4">
        {d.text}
      </div>
      <div className="block text-sm leading-4">
        {d.text2}
      </div>
    </div>
  );
}
