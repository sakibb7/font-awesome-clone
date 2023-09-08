import { AiOutlineSearch, AiOutlineFileSearch } from "react-icons/ai";
import { FaIcons, FaFontAwesomeFlag } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { categories } from "../constants/data";
import { icons } from "../constants/data";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

function Main() {
  const [sortBy, setSortBy] = useState("featured");

  const [filteredIcons, setFilteredIcons] = useState(icons);

  function handleCategoryClick(category) {
    filterFunction(category);
  }

  const filterFunction = (name) => {
    if (icons.length > 1) {
      const filter = icons.filter((icon) => icon.category === name);
      setFilteredIcons(filter);
    }
  };

  return (
    <>
      <section className="flex flex-col justify-between items-center pt-8">
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
        <div className="flex justify-center items-center gap-20">
          <div className="flex justify-start items-center gap-8 pt-16">
            <div
              className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
              onClick={() => handleCategoryClick("classic")}
            >
              <span className="text-4xl ">
                <FaIcons />
              </span>
              <span className="text-[15px]">Classic</span>
            </div>
            <div
              className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
              onClick={() => handleCategoryClick("sharp")}
            >
              <span className="text-4xl">
                <FaIcons />
              </span>
              <span className="text-[15px]">Sharp</span>
            </div>
            <div
              className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
              onClick={() => handleCategoryClick("brand")}
            >
              <span className="text-4xl">
                <FaFontAwesomeFlag />
              </span>
              <span className="text-[15px]">Brands</span>
            </div>
            <div
              className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
              onClick={() => handleCategoryClick("free")}
            >
              <span className="text-4xl">
                <FaBolt />
              </span>
              <span className="text-[15px]">Free</span>
            </div>
          </div>
          <div className="flex gap-8 pt-8">
            <svg
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="hover:text-blue-500 w-6 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
                className=""
              ></path>
            </svg>
            <svg
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 hover:text-blue-500 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z"
                className=""
              ></path>
            </svg>
            <svg
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 hover:text-blue-500 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="pt-8">
            <select
              name=""
              id=""
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-4 border-2 rounded-lg"
            >
              <option value="featured">Featured</option>
              <option value="alphabetically">Alphabetical</option>
            </select>

            <select name="" id="" className="p-4 border-2 rounded-lg ml-8">
              <option value="5">5.2.2</option>
              <option value="6">6.2.5</option>
              <option value="all">All Versions</option>
            </select>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 flex justify-start items-start px-12 py-8 text-sm text-slate-600">
        <aside className="flex flex-col justify-start items-start w-[12%] ">
          {categories.map(({ id, title, items }) => (
            <div
              className="flex flex-col justify-start items-start pb-8 w-full"
              key={id}
            >
              <p className="uppercase tracking-widest pb-2 font-bold">
                {title}
              </p>
              <ul className="w-full">
                {items.map(({ id, name, icon, total }) => (
                  <li
                    key={id}
                    className="w-full flex justify-between py-2 px-4 border border-transparent hover:border-slate-400 rounded-xl transition-all duration-300"
                  >
                    <div className="flex justify-start items-center gap-2 ">
                      <span className="text-lg">{icon}</span>
                      <span className="text-[15px]">{name}</span>
                    </div>
                    <span className=" text-end">{total}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <main className="w-full px-8">
          <div className="pb-8">
            <p className="text-xl font-bold text-slate-900">Icons</p>
          </div>
          <div className="grid grid-cols-6 gap-8 transition-all duration-300">
            {sortBy === "featured" &&
              filteredIcons.map(({ id, icon, name }) => (
                <div
                  key={id}
                  className="bg-[#ffff] hover:bg-yellow-400 duration-300 flex flex-col justify-center items-center py-12 rounded-xl gap-4"
                >
                  <span className="text-4xl text-slate-800">{icon}</span>
                  <span>{name}</span>
                </div>
              ))}
            {sortBy === "alphabetically" &&
              filteredIcons
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
      </section>
    </>
  );
}

export default Main;
