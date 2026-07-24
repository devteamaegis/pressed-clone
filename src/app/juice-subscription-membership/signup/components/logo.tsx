import { iconFor } from "../../../_icons";
import type { LogoStyles } from "../_styles";
export type LogoData = {
  ariaLabel: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="flex px-2 items-center cursor-pointer" data-component="button" aria-label={d.ariaLabel} role="button">
      <img className={cn("block max-w-full overflow-clip", styles.className)} data-component="image" alt="" src={iconFor(d.ariaLabel)} />
    </div>
  );
}
