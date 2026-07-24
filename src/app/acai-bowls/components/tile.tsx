export type TileData = {
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="border-b border-solid border-b-color-005 block py-2">
      <button className="w-full h-10 flex relative py-4 justify-center items-center text-lg font-bold leading-[1.25rem] tracking-[normal] text-left whitespace-nowrap cursor-pointer after:content-['+'] after:block after:absolute after:inset-y-2 after:right-0 after:left-[1008.39px] after:w-3 after:h-[22.0781px] after:text-clr-6 after:text-[1.1875rem] after:font-bold after:leading-[1.375rem] after:text-left max-lg:after:inset-y-auto max-lg:after:left-auto max-lg:after:w-auto max-lg:after:h-auto" data-component="button" aria-expanded="false">
        {d.label}
      </button>
    </div>
  );
}
