export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content min-h-6.5 list-item ml-9 [font-family:tt-commons-regular,_stk] text-lg leading-6.5 tracking-[0.1px] [list-style-type:disc] [pointer-events:all]">
      <strong className="box-content min-h-6.5 inline [font-family:tt-commons-medium,_stk] [pointer-events:all]">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
