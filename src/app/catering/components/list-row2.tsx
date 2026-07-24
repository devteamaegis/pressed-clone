export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item pl-7 whitespace-nowrap [background-size:24px] bg-no-repeat" style={{ backgroundImage:"url(\"/assets/cloned/svg/f938d659bce7.svg\")" }}>
      {d.text}
    </li>
  );
}
