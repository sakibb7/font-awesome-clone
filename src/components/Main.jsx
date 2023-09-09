import { icons } from "../constants/data";

import { useState } from "react";
import Search from "./Search";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Icons from "./Icons";

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
        <Search />
        <Category
          handleCategoryClick={handleCategoryClick}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </section>
      <section className="bg-slate-100 flex justify-start items-start px-12 py-8 text-sm text-slate-600">
        <SubCategory />
        <Icons sortBy={sortBy} filteredIcons={filteredIcons} />
      </section>
    </>
  );
}

export default Main;
