import type { FeatureCardStyles } from"../_styles";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="flex min-w-0 flex-col basis-[calc(400%_+_60px)] col-start-[span_4]">
      <h3 className={cn("box-content min-h-7 block shrink-0 [font-family:FTRegolaNeue-Medium,_stk] text-2xl leading-7 tracking-[normal] text-center [overflow-wrap:break-word] [pointer-events:all]", styles.className)} data-component="heading">
        {d.title}
      </h3>
    </div>
  );
}
