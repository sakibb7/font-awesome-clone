import { categories } from "../constants/data";

function SubCategory({ handleFilterButtonClick }) {
  return (
    <aside className="flex flex-col justify-start items-start w-[12%] ">
      {categories.map(({ id, title, items }) => (
        <div
          className="flex flex-col justify-start items-start pb-8 w-full"
          key={id}
        >
          <p className="uppercase tracking-widest pb-2 font-bold">{title}</p>
          <ul className="w-full">
            {items.map(({ id, name, icon, total }) => (
              <li
                key={id}
                className="w-full flex justify-between py-2 px-4 border border-transparent hover:border-slate-400 rounded-xl transition-all duration-300"
                onClick={() => handleFilterButtonClick(name)}
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
  );
}

export default SubCategory;
