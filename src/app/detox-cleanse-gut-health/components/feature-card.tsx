export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <li className="list-item p-8 rounded-[20px] text-foreground text-left bg-color-008 max-lg:grid max-lg:p-4 max-lg:gap-3 max-lg:grid-cols-[32px_1fr]">
      <div className="w-[17.5%] block mb-6 rounded-full text-color-008 text-3xl font-bold leading-[3.0625rem] text-center bg-foreground max-md:w-[10.5%] max-lg:text-xl max-lg:leading-7.5 md:max-lg:w-[4.5%]">
        {d.text}
      </div>
      <div className="block">
        <h3 className="block mb-4 text-[1.75rem] leading-9 uppercase max-lg:mb-1 max-md:[font-family:regola-neue-medium,_sans-serif] max-lg:text-xl max-lg:leading-[inherit]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mb-[1.33rem] leading-[1.4375rem]">
          {d.description}
        </p>
      </div>
    </li>
  );
}
