import { icons } from "../constants/data";
import { useEffect, useState } from "react";
import Search from "./Search";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Icons from "./Icons";

function Main() {
  const [sortBy, setSortBy] = useState("featured");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(icons);

  // This function sets filter items and filter out if theres duplicate
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  //filterItem function is called everytime there's new item in the slected filter array
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  //this function filter icons that is matched with the filter array
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = icons.filter(
          (icon) =>
            icon.category === selectedCategory ||
            icon.style === selectedCategory.toLowerCase()
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...icons]);
    }
  };

  //this function removes the duplicate objects from the array
  const uniqueFilteredIcons = filteredItems.filter((obj, index) => {
    return index === filteredItems.findIndex((o) => obj.id === o.id);
  });

  return (
    <>
      <section className="flex flex-col justify-between items-center pt-8">
        <Search />
        <Category
          sortBy={sortBy}
          setSortBy={setSortBy}
          handleFilterButtonClick={handleFilterButtonClick}
        />
      </section>
      <section className="bg-slate-100 flex justify-start items-start px-12 py-8 text-sm text-slate-600">
        <SubCategory handleFilterButtonClick={handleFilterButtonClick} />
        <Icons
          selectedFilters={selectedFilters}
          sortBy={sortBy}
          uniqueFilteredIcons={uniqueFilteredIcons}
        />
      </section>
    </>
  );
}

export default Main;
