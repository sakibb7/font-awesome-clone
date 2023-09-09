import { FaIcons, FaFontAwesomeFlag } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

function Category({ sortBy, setSortBy, setSelectedCategory }) {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="flex justify-start items-center gap-8 pt-16">
        <div
          className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
          onClick={() => setSelectedCategory("classic")}
        >
          <span className="text-4xl ">
            <FaIcons />
          </span>
          <span className="text-[15px]">Classic</span>
        </div>
        <div
          className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
          onClick={() => setSelectedCategory("sharp")}
        >
          <span className="text-4xl">
            <FaIcons />
          </span>
          <span className="text-[15px]">Sharp</span>
        </div>
        <div
          className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
          onClick={() => setSelectedCategory("brand")}
        >
          <span className="text-4xl">
            <FaFontAwesomeFlag />
          </span>
          <span className="text-[15px]">Brands</span>
        </div>
        <div
          className="hover:text-blue-500 pb-4 px-8 cursor-pointer border-b-4 border-b-transparent hover:border-b-4 hover:border-blue-500"
          onClick={() => setSelectedCategory("free")}
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
  );
}

export default Category;
