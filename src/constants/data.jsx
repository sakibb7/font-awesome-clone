import { WiMoonAltNew, WiMoonAltThirdQuarter } from "react-icons/wi";
import { FiCircle, FiCheck } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import { PiCircleDuotone } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  FaUser,
  FaFacebook,
  FaAmazon,
  FaChrome,
  FaGratipay,
  FaGoogle,
  FaMeta,
  FaAngleDown,
  FaArrowLeft,
  FaMars,
  FaPowerOff,
  FaBatteryQuarter,
  FaAccessibleIcon,
  FaCircleXmark,
  FaCoins,
  FaCode,
  FaGreaterThanEqual,
} from "react-icons/fa6";

export const menus = [
  {
    id: 101,
    name: "Icons",
    link: "#",
  },
  {
    id: 102,
    name: "Docs",
    link: "#",
  },
  {
    id: 103,
    name: "Plans",
    link: "#",
  },
  {
    id: 104,
    name: "Support",
    link: "#",
  },
  {
    id: 105,
    name: "Podcast",
    link: "#",
  },
];

export const categories = [
  {
    id: 101,
    title: "style",
    items: [
      {
        id: 201,
        name: "Solid",
        total: 6808,
        icon: <WiMoonAltNew />,
      },
      {
        id: 202,
        name: "Regular",
        total: 6589,
        icon: <WiMoonAltThirdQuarter />,
      },
      {
        id: 203,
        name: "Light",
        total: 586,
        icon: <FiCircle />,
      },
      {
        id: 204,
        name: "Thin",
        total: 9658,
        icon: <BsCircle />,
      },
      {
        id: 205,
        name: "Duotone",
        total: 7869,
        icon: <PiCircleDuotone />,
      },
    ],
  },
  {
    id: 102,
    title: "Featured",
    items: [
      {
        id: 201,
        name: "New In V6",
        total: 6808,
        icon: <WiMoonAltNew />,
      },
      {
        id: 202,
        name: "Sponsored",
        total: 6589,
        icon: <WiMoonAltThirdQuarter />,
      },
      {
        id: 203,
        name: "Staff Favorites",
        total: 586,
        icon: <FiCircle />,
      },
    ],
  },
];

export const icons = [
  {
    id: 101,
    icon: <FiCheck />,
    name: "Check",
    featured: true,
    category: "classic",
    style: "solid",
  },
  {
    id: 102,
    icon: <AiFillHome />,
    name: "FillHome",
    featured: true,
    category: "sharp",
    style: "regular",
  },
  {
    id: 103,
    icon: <FaGreaterThanEqual />,
    name: "GreaterThanEqual",
    featured: false,
    category: "brands",
    style: "light",
  },
  {
    id: 104,
    icon: <HiMagnifyingGlass />,
    name: "MagnifyingGlass",
    featured: false,
    category: "free",
    style: "thin",
  },
  {
    id: 105,
    icon: <FaUser />,
    name: "User",
    featured: true,
    category: "classic",
    style: "duotone",
  },
  {
    id: 106,
    icon: <FaFacebook />,
    name: "Facebook",
    featured: true,
    category: "sharp",
    style: "solid",
  },
  {
    id: 107,
    icon: <FaAmazon />,
    name: "Amazon",
    featured: false,
    category: "brand",
    style: "regular",
  },
  {
    id: 108,
    icon: <FaChrome />,
    name: "Chrome",
    featured: true,
    category: "free",
    style: "light",
  },
  {
    id: 109,
    icon: <FaGratipay />,
    name: "Gratipay",
    featured: true,
    category: "classic",
    style: "solid",
  },
  {
    id: 110,
    icon: <FaGoogle />,
    name: "Google",
    featured: true,
    category: "classic",
    style: "solid",
  },
  {
    id: 111,
    icon: <FaMeta />,
    name: "Meta",
    featured: true,
    category: "free",
    style: "solid",
  },
  {
    id: 112,
    icon: <FaAngleDown />,
    name: "AngleDown",
    featured: true,
    category: "brand",
    style: "regular",
  },
  {
    id: 113,
    icon: <FaArrowLeft />,
    name: "ArrowLeft",
    featured: false,
    category: "free",
    style: "solid",
  },
  {
    id: 114,
    icon: <FaMars />,
    name: "Mars",
    featured: true,
    category: "classic",
    style: "regular",
  },
  {
    id: 115,
    icon: <FaPowerOff />,
    name: "PowerOff",
    featured: true,
    category: "free",
    style: "solid",
  },
  {
    id: 116,
    icon: <FaBatteryQuarter />,
    name: "BatteryQuarter",
    featured: true,
    category: "classic",
    style: "regular",
  },
  {
    id: 117,
    icon: <FaAccessibleIcon />,
    name: "AccessibleIcon",
    featured: true,
    category: "free",
    style: "solid",
  },
  {
    id: 118,
    icon: <FaCircleXmark />,
    name: "CircleXmark",
    featured: true,
    category: "classic",
    style: "solid",
  },
  {
    id: 119,
    icon: <FaCoins />,
    name: "Coins",
    featured: true,
    category: "classic",
    style: "solid",
  },
  {
    id: 120,
    icon: <FaCode />,
    name: "Code",
    featured: true,
    category: "classic",
    style: "solid",
  },
];

export const footerNav = [
  {
    id: 101,
    name: "Project",
    links: [
      {
        id: 201,
        name: "Download",
        link: "#",
      },
      {
        id: 202,
        name: "Changelog",
        link: "#",
      },
      {
        id: 203,
        name: "Commision Icons",
        link: "#",
      },
      {
        id: 204,
        name: "All Versions",
        link: "#",
      },
    ],
  },

  {
    id: 102,
    name: "Community",
    links: [
      {
        id: 201,
        name: "Github",
        link: "#",
      },
      {
        id: 202,
        name: "Icon Requests",
        link: "#",
      },
      {
        id: 203,
        name: "Twitter",
        link: "#",
      },
      {
        id: 204,
        name: "Blog Awesome",
        link: "#",
      },
    ],
  },
  {
    id: 103,
    name: "Help",
    links: [
      {
        id: 201,
        name: "Support",
        link: "#",
      },
      {
        id: 202,
        name: "Troubleshooting",
        link: "#",
      },
      {
        id: 203,
        name: "Contact Us",
        link: "#",
      },
      {
        id: 204,
        name: "Status",
        link: "#",
      },
    ],
  },
];

export const footerBottomNav = [
  {
    id: 101,
    name: "Licence",
    link: "#",
  },
  {
    id: 102,
    name: "Terms of Service",
    link: "#",
  },
  {
    id: 103,
    name: "Privacy Policy",
    link: "#",
  },
  {
    id: 104,
    name: "Refunds",
    link: "#",
  },
];
