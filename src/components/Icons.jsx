import { AiOutlineRight } from "react-icons/ai";

function Icons({ sortBy, uniqueFilteredIcons, selectedFilters }) {
  return (
    <main className="w-full px-8">
      <div className="pb-8">
        <p className="text-xl font-bold text-slate-900 flex justify-start items-center gap-8">
          {uniqueFilteredIcons.length} Icons{" "}
          <div className="flex justify-start items-center gap-4 text-sm font-normal">
            {selectedFilters.map((item, idx) => (
              <button key={idx} className="bg-[#fff] px-6 py-1 rounded-full">
                {item}{" "}
              </button>
            ))}
          </div>
        </p>
      </div>
      <div className="grid grid-cols-6 gap-8 transition-all duration-300">
        {sortBy === "featured" &&
          uniqueFilteredIcons.map(({ id, icon, name }) => (
            <div
              key={id}
              className="bg-[#ffff] hover:bg-yellow-400 duration-300 flex flex-col justify-center items-center py-12 rounded-xl gap-4"
            >
              <span className="text-4xl text-slate-800">{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        {sortBy === "alphabetically" &&
          uniqueFilteredIcons
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, icon, name }) => (
              <div
                key={id}
                className="bg-[#ffff] hover:bg-yellow-400 duration-300 flex flex-col justify-center items-center py-12 rounded-xl gap-4"
              >
                <span className="text-4xl text-slate-800">{icon}</span>
                <span>{name}</span>
              </div>
            ))}
      </div>
      <div className="flex items-center justify-center px-4 py-8 sm:px-6 ">
        <div>
          <nav
            className="isolate inline-flex -space-x-px text-blue-600"
            aria-label="Pagination"
          >
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-blue-600 px-6 py-4 rounded-lg text-sm font-semibold text-white"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-6 py-4 text-sm rounded-lg font-semibold   hover:bg-slate-200"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-6 py-4 text-sm rounded-lg font-semibold   hover:bg-slate-200"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-6 py-4 text-sm rounded-lg font-semibold text-gray-900">
              ...
            </span>

            <a
              href="#"
              className="relative inline-flex items-center px-6 py-4 text-sm rounded-lg font-semibold   text-slate-600 hover:bg-slate-200"
            >
              20
            </a>
            <a
              href="#"
              className="relative inline-flex gap-4 items-center px-6 py-4 text-sm rounded-lg   hover:bg-slate-200"
            >
              <span className="text-lg">Next</span>
              <AiOutlineRight className="h-5 w-5 font-bold" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default Icons;
