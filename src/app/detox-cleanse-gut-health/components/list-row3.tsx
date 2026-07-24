export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="grid mb-2 grid-cols-[70px_1fr]">
      <strong className="block font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
