import type { ListRow5Styles } from "../_styles";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
