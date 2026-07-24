import type { ListRow6Styles } from "../_styles";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
