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
    <li className={cn("box-content min-h-6 list-item shrink-0 [font-family:tt-commons-demibold,_stk] text-lg leading-[1.4375rem] tracking-[0.1px] [overflow-wrap:break-word] [pointer-events:all]", styles.className)}>
      <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
