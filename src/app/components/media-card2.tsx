export type MediaCard2Data = {
  imgSrc: string;
  title: string;
  description: string;
  description2: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d }: { d: MediaCard2Data }) {
  return (
    <div className="block mb-8">
      <a className="inline cursor-pointer" data-component="link" href="/shop" rel="noopener noreferrer">
        <img className="w-[19.3125rem] h-[19.3125rem] inline max-w-full overflow-clip max-md:w-37 max-md:h-37 md:max-lg:w-86 md:max-lg:h-86" data-component="image" src={d.imgSrc} />
      </a>
      <a className="inline cursor-pointer" data-component="link" href="/shop" rel="noopener noreferrer">
        <h3 className="block mb-1 py-4 font-bold max-md:[font-family:regola-neue-medium,_sans-serif]" data-component="heading">
          {d.title}
        </h3>
      </a>
      <p className="block mb-[1.33rem] leading-[1.4375rem]">
        {d.description}
        <br className="inline" />
        <span className="inline text-muted-foreground">
          {d.description2}
        </span>
      </p>
      <a className="inline font-bold underline cursor-pointer" data-component="link" href="/shop" rel="noopener noreferrer">
        {d.label}
      </a>
    </div>
  );
}
