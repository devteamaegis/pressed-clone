import { iconFor } from "../../_icons";
import type { Logo6Styles } from "../_styles";
export type Logo6Data = {
  href: string;
  alt: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} href={d.href} rel="noopener" target="_blank">
        <img className={cn("inline max-w-full overflow-clip", styles.className2)} alt={d.alt} src={iconFor(d.alt)} />
      </a>
    </li>
  );
}
