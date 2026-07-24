import type { ListRow2Styles } from "../_styles";
export type ListRow2Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
