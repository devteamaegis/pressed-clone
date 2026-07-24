import type { ListRow2Styles } from"../_styles";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("w-[92.7031px] list-item max-md:w-[150.406px] md:max-lg:w-[323.828px]", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
