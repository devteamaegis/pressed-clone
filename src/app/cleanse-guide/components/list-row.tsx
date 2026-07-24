export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item p-2">
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
