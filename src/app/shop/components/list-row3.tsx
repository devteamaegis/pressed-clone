import type { ListRow3Styles } from "../_styles";
export type ListRow3Data = {
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" aria-current={d.ariacurrent} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
