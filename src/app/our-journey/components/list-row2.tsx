import type { ListRow2Styles } from"../_styles";
export type ListRow2Data = {
  href: string;
  description: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("min-h-6 flex min-w-0 pt-6 pb-6 flex-col justify-start basis-[calc(200%_+_20px)] col-start-[span_2] [font-family:FTRegolaNeue-Regular,_stk] leading-[1.5625rem] tracking-[normal] [list-style-type:disc] [pointer-events:all]", styles.className)}>
      <p className={cn("box-content min-h-6 block shrink-0 [pointer-events:all]", styles.className2)}>
        <strong className="box-content min-h-6 inline [font-family:FTRegolaNeue-Semibold,_stk] [pointer-events:all]">
          <a className="box-content inline cursor-pointer [pointer-events:all]" data-component="link" href={d.href}>
            {d.description}
          </a>
        </strong>
      </p>
    </li>
  );
}
