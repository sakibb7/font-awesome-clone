import { icons } from "../constants/data";
import { useState } from "react";
import Search from "./Search";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Icons from "./Icons";

function Main() {
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const filteredItems = icons.filter(
    (icon) => icon.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(icons, selected, query) {
    let filteredIcons = icons;

    // Filtering Input Items
    if (query) {
      filteredIcons = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredIcons = filteredIcons.filter(
        ({ category, name, style }) =>
          category === selected || name === selected || style === selected
      );
    }

    return filteredIcons;
  }

  const result = filteredData(icons, selectedCategory, query);

  return (
    <>
      <section className="flex flex-col justify-between items-center pt-8">
        <Search setQuery={setQuery} />
        <Category
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
      <section className="bg-slate-100 flex justify-start items-start px-12 py-8 text-sm text-slate-600">
        <SubCategory setSelectedCategory={setSelectedCategory} />
        <Icons sortBy={sortBy} result={result} />
      </section>
    </>
  );
}

export default Main;
