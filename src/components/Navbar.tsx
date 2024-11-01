import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setopen] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center justify-center gap-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 " />
          <p className="text-white text-[18px] font-bold mt-2 cursor-pointer flex">
            Anas <span className="sm:block hidden">| Front End Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white hover:bg-transparent text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="gap-5 text-3xl hidden sm:flex">
          <div
            className="relative group"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/anas-alazmeh-9a97642a5/",
                "_blank"
              )
            }
          >
            <span className="w-5 h-6 bg-white absolute hidden transition-all group-hover:block -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
            <FaLinkedin className="hover:text-[#0077B5] transition-all cursor-pointer relative z-10 w-full h-full" />
          </div>
          <div
            className="relative group"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100006008646337 ",
                "_blank"
              )
            }
          >
            <span className="w-[27px] h-[27px] bg-white absolute hidden transition-all group-hover:block -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full"></span>
            <FaFacebook className="hover:text-[#1877F2] transition-all cursor-pointer relative z-10 w-full h-full" />
          </div>
          <div
            className="relative group"
            onClick={() =>
              window.open("https://www.instagram.com/anasalazmeh/", "_blank")
            }
          >
            <span className="w-full h-full instagram-logo-gradient absolute hidden  transition-all group-hover:block -z-10 rounded-[5px]  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
            <FaInstagram className=" transition-all cursor-pointer relative z-10 w-full h-full" />
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setopen(true)}
          />
        </div>
      </div>

      <div className={`popup  ${open ? "block" : "hidden"}`}>
        <div className="h-screen w-screen duration-[5s] transition-all fixed top-0 left-0 bg-black/50 z-[55000] backdrop-blur-sm">
          <div
            className={`p-6 w-full flex flex-col ${
              open ? "-right-6" : "-right-96"
            } gap-52 duration-[5s] transition-[right] h-screen black-gradient mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] mb-6 mx-3 object-contain cursor-pointer self-end "
              onClick={() => setopen(false)}
            />
            <ul className="list-none flex mt-5 items-center gap-16 flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white hover:bg-transparent text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setopen(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="gap-20 text-3xl flex items-center justify-center">
              <div
                className="relative group"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/anas-alazmeh-9a97642a5/",
                    "_blank"
                  )
                }
              >
                <span className="w-5 h-6 bg-white absolute hidden transition-all group-hover:block -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
                <FaLinkedin className="hover:text-[#0077B5] transition-all cursor-pointer relative z-10 w-full h-full" />
              </div>
              <div
                className="relative group"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100006008646337 ",
                    "_blank"
                  )
                }
              >
                <span className="w-[27px] h-[27px] bg-white absolute hidden transition-all group-hover:block -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full"></span>
                <FaFacebook className="hover:text-[#1877F2] transition-all cursor-pointer relative z-10 w-full h-full" />
              </div>
              <div
                className="relative group"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/anasalazmeh/",
                    "_blank"
                  )
                }
              >
                <span className="w-full h-full instagram-logo-gradient absolute hidden  transition-all group-hover:block -z-10 rounded-[5px]  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
                <FaInstagram className=" transition-all cursor-pointer relative z-10 w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
