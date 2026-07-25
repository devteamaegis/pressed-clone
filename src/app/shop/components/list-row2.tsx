export type ListRow2Data = {
  ariaLabel: string;
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mb-3 text-sm leading-4">
      <div className="flex">
        <span className="w-5 h-5 border-2 border-solid border-border block relative my-0.5 mr-2 ml-0.5 rounded-[3px] shrink-0" aria-checked="false" aria-label={d.ariaLabel} role="checkbox" />
        <label className="block mt-0.5 cursor-default">
          {d.text}
        </label>
      </div>
    </li>
  );
}
