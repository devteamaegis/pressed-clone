import type { ListRow3Styles } from "../_styles";
export type ListRow3Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("w-[115.5px] list-item", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
