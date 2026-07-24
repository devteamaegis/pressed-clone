import { iconFor } from "../../_icons";
import type { Logo3Styles } from "../_styles";
export type Logo3Data = {
  href: string;
  alt: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
        <img className={cn("inline max-w-full overflow-clip", styles.className2)} data-component="image" alt={d.alt} src={iconFor(d.alt)} />
      </a>
    </li>
  );
}
