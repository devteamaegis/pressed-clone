import type { ListRow4Styles } from "../_styles";
export type ListRow4Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
