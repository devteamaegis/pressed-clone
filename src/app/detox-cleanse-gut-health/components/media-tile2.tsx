import type { MediaTile2Styles } from "../_styles";
export type MediaTile2Data = {
  ariacontrols: string;
  id: string;
  text: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <div className="flex py-6 justify-between font-bold cursor-default" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id}>
        <span className="block">
          {d.text}
        </span>
        <svg className="w-auto h-1.5 block mt-2 ml-4 shrink-0 overflow-hidden transform-[matrix(-1,0,0,-1,0,0)] origin-[5.5px_3.5px]" data-component="icon" height="7" viewBox="0 0 11 7" width="11" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M0 4.44L4.44 0M.002 4.443L4.442 8.883" transform="rotate(90 4.5 5.5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
