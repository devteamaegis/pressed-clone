export type FeatureCardData = {
  title: string;
  title2: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="block mb-12.5">
      <h2 className="block max-w-full mb-7.5 text-[2rem] leading-10 max-md:[font-family:regola-neue-medium,_sans-serif] max-md:text-2xl max-md:leading-[2rem]" data-component="heading">
        {d.title}
      </h2>
      <h3 className="block text-[2rem] leading-10 uppercase max-md:[font-family:regola-neue-medium,_sans-serif] max-md:text-2xl max-md:leading-[2rem]" data-component="heading">
        {d.title2}
      </h3>
      <p className="block mb-[1.33rem]">
        {d.description}
        <span className="inline max-lg:hidden">
          {d.description2}
        </span>
      </p>
      <a className="hidden font-bold cursor-pointer max-lg:block">
        Read More
      </a>
    </div>
  );
}
