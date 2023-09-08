import { FiLogIn } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { menus } from "../constants/data";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-8 text-slate-500 text-[16px] w-[1150px] m-auto">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          className="h-6 cursor-pointer"
        >
          <g clipPath="url(#logo-flag-animated-mask-clip-path)">
            <g transform="translate(11.3,7)" className="">
              <path
                d="M11.25,2.5c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.01824C18.8946,2.26203,19.5368,2.5,20.5,2.5c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.01824c.658.24379,1.3002.48176,2.2634.48176.9875,0,1.6438-.25,2.3-.5.6563-.25,1.3125-.5,2.3001-.5.9873,0,1.6624.25,2.3374.5l.0491.01824C37.3946,2.26203,38.0368,2.5,39,2.5v2c-.9666,0-1.616-.23962-2.2791-.48438l-.049-.01794C35.9958,3.74841,35.322,3.5,34.3501,3.5c-.9876,0-1.6438.25-2.3001.5-.6562.25-1.3125.5-2.3.5-.9666,0-1.6161-.23963-2.2791-.48422-.0163-.00603-.0327-.01207-.049-.0181C26.7458,3.74841,26.072,3.5,25.1001,3.5c-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.616-.23962-2.2791-.48438l-.049-.01794C17.4958,3.74841,16.822,3.5,15.8501,3.5c-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.61597-.23962-2.27905-.48438l-.04907-.01794C8.24585,3.74841,7.57202,3.5,6.6001,3.5c-.98755,0-1.6438.25-2.30005.5s-1.3125.5-2.30005.5v-2c.98755,0,1.6438-.25,2.30005-.5s1.3125-.5,2.30005-.5c.9873,0,1.66235.25,2.3374.5l.04834.01794C9.64377,2.26174,10.2868,2.5,11.25,2.5Zm0,8c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818.9875,0,1.6438-.25,2.3-.5.6563-.25,1.3125-.5,2.3001-.5.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818v2c-.9666,0-1.616-.2396-2.2791-.4844l-.049-.0179c-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5-.6562.25-1.3125.5-2.3.5-.9666,0-1.6161-.2396-2.2791-.4842-.0163-.0061-.0327-.0121-.049-.0181-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.616-.2396-2.2791-.4844l-.049-.0179c-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.61597-.2396-2.27905-.4844l-.04907-.0179C8.24585,11.7484,7.57202,11.5,6.6001,11.5c-.98755,0-1.6438.25-2.30005.5s-1.3125.5-2.30005.5v-2c.98755,0,1.6438-.25,2.30005-.5s1.3125-.5,2.30005-.5c.9873,0,1.66235.25,2.3374.5l.04834.0179c.65793.2438,1.30096.4821,2.26416.4821Z"
                transform="translate(-20.5,-7)"
                fill="#0A6EBD"
              ></path>
            </g>
            <rect
              width="2"
              height="8"
              rx="0"
              ry="0"
              transform="translate(13 3)"
              fill="#0A6EBD"
            ></rect>
            <path
              d="M0,16h16v-16L0,0v16ZM2,1q.075195.556641,0,7h3v7h10v-14L2,1Z"
              clipRule="evenodd"
              fill="#fff"
              fillRule="evenodd"
            ></path>
          </g>
          <path d="M2,1c-.55228,0-1,.44772-1,1v12c0,.5523.44772,1,1,1s1-.4477,1-1L3,2c0-.55228-.44772-1-1-1Z"></path>
        </svg>
        <nav>
          <ul className="flex justify-start items-center gap-14 pl-12">
            <li className="hover:text-[rgb(20_110_190)] cursor-pointer">
              Start
            </li>
            <li className="text-2xl text-slate-800 cursor-pointer">
              <AiOutlineSearch />
            </li>
            {menus.map(({ id, name, link }) => (
              <Link key={id} to={link}>
                <li className="hover:text-[rgb(20_110_190)]">{name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-2xl relative group">
        <FiLogIn />
        <p className="absolute top-0 left-[-80px] invisible group-hover:visible text-sm text-slate-50 bg-slate-950 py-1 px-2 translate-x-2 hover:translate-x-0 transition-all duration-300">
          Sign in
        </p>
      </div>
    </header>
  );
}

export default Header;
