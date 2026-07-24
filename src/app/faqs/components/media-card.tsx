import type { MediaCardStyles } from"../_styles";
export type MediaCardData = {
  ariacontrols: string;
  id: string;
  title: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("block", styles.className)}>
      <h3 className="flex py-6 justify-between font-bold leading-5 cursor-default max-md:[font-family:regola-neue-medium,_sans-serif] max-md:leading-[1.3125rem]" data-component="heading" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id}>
        <span className="block">
          {d.title}
        </span>
        <svg className="w-auto h-1.5 block mt-2 ml-4 shrink-0 overflow-hidden transform-[matrix(-1,0,0,-1,0,0)] origin-[5.5px_3.5px]" data-component="icon" height="7" viewBox="0 0 11 7" width="11" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M0 4.44L4.44 0M.002 4.443L4.442 8.883" transform="rotate(90 4.5 5.5)" />
          </g>
        </svg>
      </h3>
    </div>
  );
}
