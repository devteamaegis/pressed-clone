export type MediaCardData = {
  imgSrc: string;
  href: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="block">
      <img className="w-100 h-100 inline max-w-full overflow-clip cursor-pointer max-md:w-[21.4375rem] max-md:h-[21.4375rem] md:max-lg:w-[14.3125rem] md:max-lg:h-[14.3125rem]" data-component="image" alt="" src={d.imgSrc} />
      <h3 className="block mt-6 mb-2 font-bold cursor-pointer max-md:[font-family:regola-neue-medium,_sans-serif]" data-component="heading">
        <a className="inline" data-component="link" href={d.href}>
          {d.title}
        </a>
      </h3>
      <p className="block mb-[1.33rem] leading-[1.4375rem]">
        {d.description}
      </p>
      <button className="h-10 flex mx-auto py-2 px-4 rounded-full justify-center items-center text-background leading-[1.125rem] tracking-[normal] whitespace-nowrap bg-foreground cursor-pointer" data-component="button">
        Add To Cart
      </button>
    </div>
  );
}
