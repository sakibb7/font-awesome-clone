import { FaFireFlameCurved } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiFlag } from "react-icons/fi";
import { footerBottomNav, footerNav } from "../constants/data";

function Footer() {
  return (
    <footer className="bg-[rgb(24_49_83)] text-[#fff] px-12 py-8 flex justify-around gap-12">
      <div className="w-1/3 flex flex-col gap-2">
        <span className="text-2xl pb-4">
          <FiFlag className="" />
        </span>
        <h3 className="font-bold text-[15px]">Go Make Something Awesome</h3>
        <p className="">
          Font Awesome is the internet icon library and toolkit used by millions
          of designers, developers, and content creators.
        </p>
        <p>
          Made with 🤍 and
          <span className="inline-flex">
            <FaFireFlameCurved />
          </span>
          in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City,
          Seattle, Tampa, and Vergennes.
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center gap-20">
          {footerNav.map(({ id, name, links }) => (
            <div key={id}>
              <h3 className="text-slate-500 font-bold pb-2">{name}</h3>
              <ul>
                {links.map(({ id, name, link }) => (
                  <Link key={id} to={link}>
                    <li className="pb-2 hover:text-blue-400">{name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <ul className="flex gap-6 pt-8 items-center">
            {footerBottomNav.map(({ id, name, link }) => (
              <Link key={id} to={link}>
                <li className="hover:text-blue-400">{name}</li>
              </Link>
            ))}
            <li className="text-sm text-slate-400">©️Fonticons, Inc</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
