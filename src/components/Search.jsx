import { AiOutlineSearch, AiOutlineFileSearch } from "react-icons/ai";
function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search 26,233 icons..."
        className="border-2 border-slate-800 rounded-full py-5 w-[780px] focus:ring-4 ring-blue-400 px-16 font-bold placeholder:font-normal"
      />
      <span className="text-3xl absolute top-5 left-6">
        <AiOutlineSearch />
      </span>

      <div className="flex justify-start absolute top-5 right-6 text-slate-500">
        Powered by
        <span className="hover:text-blue-500 flex justify-start cursor-pointer">
          <span className=" pl-2 text-2xl">
            <AiOutlineFileSearch />
          </span>
          Algolia
        </span>
      </div>
    </div>
  );
}

export default Search;
