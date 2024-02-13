import { Link, NavLink } from "react-router-dom";
import { FaBars, FaBed, FaHireAHelper, FaHome, FaLock, FaMobile, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdDashboardCustomize, MdMessage, MdPolicy, MdVideoLibrary } from "react-icons/md";
import { BiAnalyse, BiSearch, BiVideo } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { IoCreate, IoLogoGooglePlaystore, IoSettingsSharp } from 'react-icons/io5'
import { AiFillHeart, RiHotelBedLine } from "react-icons/ri";
import { BsApple, BsCartCheck, BsTelephoneFill, BsTelephoneForward } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Hamburger from "../../assets/Icons/Hamburger.svg";
import { AiFillFund, AiFillMobile, AiOutlineAudit } from "react-icons/ai";
// import { ReactComponent as Create } from "../../assets/sidebar_icons/Create.png";

const routes = [
  {
    path: "/",
    name: "Main Page",
    icon: <MdDashboardCustomize />,
  },
  {
    path: "/podcaster-list",
    name: "Online List",
    icon: <AiFillFund />,
  },
  {
    path: "/friends",
    name: "Friends",
    icon: <FaBed />,
  },
  // {
  //   path: "/tutorials",
  //   name: "Tutorials",
  //   icon: <IoLogoGooglePlaystore />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp />,
    // exact: true,
    subRoutes: [
      {
        path: "/setting/profile/Sign-up",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/Sign-up",
        name: "Sign Up",
        icon: <FaLock />,
      },
    ],
  },
];

// const routes = [
//   {
//     path: "/auditperform",
//     name: "Audit To Perform",
//     icon: <FaHome />,
//   },
//   // {
//   //   path: "/audit",
//   //   name: "Create Audit",
//   //   icon: <AiOutlineAudit />,
//   // },
//   {
//     path: "/addward",
//     name: "Add Ward",
//     icon: <FaBed />,
//   },
//     {
//     path: "/tutorials",
//     name: "Tutorials",
//     icon: <MdVideoLibrary />,
//   },
//   // {
//   //   path: "/tutorials",
//   //   name: "Tutorials",
//   //   icon: <IoLogoGooglePlaystore />,
//   // },
//   {
//     path: "/help",
//     name: "Mobile Apps",
//     icon: <FaMobile />,
//     subRoutes: [
//       {
        
//         path: "//apps.apple.com/us/app/forte-healthcare/id6443988362",
//         name: "App Store",
//         icon: <BsApple />,
//       },
//       {
//         path: "//play.google.com/store/apps/details?id=com.fortehealthcare&pli=1",
//         name: "Play Store",
//         icon: <IoLogoGooglePlaystore />,
//       },
//     ],
//   },
//   {
//     path: "/help",
//     name: "Help",
//     icon: <FaHireAHelper />,
//     subRoutes: [
//       {
//         path: "/help/contact",
//         name: "Contact us ",
//         icon: <BsTelephoneFill />,
//       },
//       {
//         path: "/help/faq",
//         name: "Faq’s",
//         icon: <FaLock />,
//       },
//       {
//         path: "/help/conditions",
//         name: "Terms and Conditions",
//         icon: <FaMoneyBill />,
//       },
//       {
//         path: "/help/privacypolicy",
//         name: "Privacy policy",
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
//   {
//     path: "/settings",
//     name: "Settings",
//     icon: <BiCog />,
//     // exact: true,
//     subRoutes: [
//       {
//         path: "/setting/profile",
//         name: "Profile ",
//         icon: <FaUser />,
//       },
//       {
//         path: "/settings/2fa",
//         name: "Sign Out",
//         icon: <FaLock />,
//       },
//     ],
//   },
// ];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "235px" : "56px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 PODMATCHED
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <img src={Hamburger} onClick={toggle} />
              {/* <FaBars  /> */}
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
