export type Tile3Data = {
  label: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border-b border-solid border-b-[#cccccc] block py-2">
      <button className="w-full h-10 flex relative py-4 justify-center items-center text-lg font-bold leading-[1.25rem] tracking-[normal] text-left whitespace-nowrap cursor-pointer after:content-['+'] after:block after:absolute after:right-0 after:text-black after:text-[1.1875rem] after:font-bold after:leading-[1.375rem] after:text-left max-lg:after:inset-y-2 max-md:after:left-[343.516px] max-lg:after:w-3 max-lg:after:h-[22.0781px] md:max-lg:after:left-[736.516px]" aria-expanded="false">
        {d.label}
      </button>
    </div>
  );
}
