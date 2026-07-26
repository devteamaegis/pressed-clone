export type MediaCardData = {
  q: string;
  a: string;
  answerId: string;
};
/** An FAQ accordion item: question button + collapsible answer panel. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, last }: { d: MediaCardData; last?: boolean }) {
  return (
    <div className={cn("block", !last && "border-b border-solid border-b-surface")}>
      <button className="w-full flex py-6 gap-4 justify-between items-start font-bold leading-5 text-left cursor-pointer max-md:[font-family:regola-neue-medium,_sans-serif] max-md:leading-[1.3125rem]" data-component="button" data-faq-q aria-controls={d.answerId} aria-expanded="false" type="button">
        <span className="block">
          {d.q}
        </span>
        <svg className="w-auto h-1.5 block mt-2 ml-4 shrink-0 overflow-hidden transition-transform duration-200" data-component="icon" data-faq-chevron height="7" viewBox="0 0 11 7" width="11" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M0 4.44L4.44 0M.002 4.443L4.442 8.883" transform="rotate(90 4.5 5.5)" />
          </g>
        </svg>
      </button>
      <div className="hidden pb-6 pr-8 leading-6 text-[color:var(--clr-2,inherit)] max-md:pr-0" id={d.answerId} data-faq-a>
        {d.a}
      </div>
    </div>
  );
}
