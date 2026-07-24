import { iconFor } from "../../_icons";
import type { Logo7Styles } from "../_styles";
export type Logo7Data = {
  href: string;
  alt: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
        <img className={cn("inline max-w-full overflow-clip", styles.className2)} data-component="image" alt={d.alt} src={iconFor(d.alt)} />
      </a>
    </li>
  );
}
