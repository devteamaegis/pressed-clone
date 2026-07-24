import type { ListRow6Styles } from"../_styles";
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
    <li className={cn("w-full list-item max-md:w-[150.406px] md:max-lg:w-[323.828px]", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
