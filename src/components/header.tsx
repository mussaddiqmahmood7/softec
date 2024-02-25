import { useEffect, useState } from "react";
import Logo from "../assets/header/logo.svg";
import companyName from "../assets/header/companyName.svg";
import downArrow from "../assets/header/downArrow.svg";
import Minus from "../assets/header/minus.svg";
import Button from "./comman/Button";
import A from "./header/A";
import A2 from "./header/A2";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [sideDropdown, setSideDropdown] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);


  useEffect(() => {
    setDropdown(false);
    setSideDropdown(false);
    document.body.style.overflow = dropMenu ? "hidden" : "auto";
  }, [dropMenu]);
  return (
    <header
      id="header"
      className={`pt-10 lg:py-6 leading-normal lg:leading-normal px-5 lg:px-2 border-b border-b-white w-full flex flex-col justify-end lg:justify-center items-center  mx-auto transition-all duration-700  top-0   ${
        dropMenu ? "overscroll-none" : ""} `}
    >
      <div className="flex justify-between px-2 sm:px-6 py-2 items-center bg-white rounded-xl font-medium relative z-40 max-w-screen-xl w-full">
        <div className="flex gap-2">
            <p className="text-2xl font-bold text-green-500">Logo</p>
          {/* <img src={Logo.src} alt="Fantech Logo" width="100%" height="auto" /> */}

        </div>
        <div className="hidden lg:flex gap-6 xl:gap-10 ">
          <A text="Home" link="/" />

          <div
            onClick={() => {
              setDropdown(!dropdown);
            }}
            className="relative "
          >
            <div className=" flex gap-1 relative cursor-pointer hover:text-brandColor transition-all duration-300">
              <p>Services</p>
              <img
                src={downArrow.src}
                alt="down arrow"
                width="100%"
                height="auto"
                className={`${
                  dropdown ? "rotate-180" : ""
                } transition-all duration-500`}
              />
            </div>
            <div
              className={` absolute top-12 overflow-hidden flex flex-col bg-white ${
                dropdown ? "h-32" : "h-0"
              } w-36 justify-around px-2 shadow-md transition-all duration-500 z-50`}
            >
              <A text="Hajj/Umra" link="/mulesoft/" />
              <A text="Historical" link="/powerbi/" />
              <A text="Caltural" link="/salesforce/" />
              
            </div>
          </div>
          <A text="About us" link="/about/" />
          <A text="Contact us" link="/contact/" />
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-2">
          
          <a href="/#contact">
                <Button text="Login" />
              </a>
              <a href="/#contact">
                <Button text="Sing Up" />
              </a>
          
        </div>
        <div
          onClick={() => {
            setDropMenu(!dropMenu);
          }}
          className="menuLines lg:hidden"
        >
          <div className="relative  p-4">
            <img
              src={Minus.src}
              alt="Menu"
              width="100%"
              height="auto"
              className={`absolute transition-all duration-700  left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                dropMenu ? "-rotate-[45deg] top-[50%]" : " top-[40%]"
              }`}
            />
            <img
              src={Minus.src}
              alt="Menu"
              width="100%"
              height="100%"
              className={`absolute transition-all duration-700   left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                dropMenu ? "rotate-[45deg] top-[50%]" : "top-[60%] "
              }`}
            />
          </div>
        </div>

        <div
          className={`absolute top-16 w-full left-0 ${
            dropMenu ? "h-[340px]" : "h-0"
          } transition-all duration-500 lg:hidden font-medium z-50`}
        >
          <div className="h-full flex flex-col px-2 justify-center bg-white shadow-xl overflow-hidden relative">
            <A2 text="Home" link="/" />

            <div
              onClick={() => {
                setSideDropdown(!sideDropdown);
              }}
              className="flex items-center justify-between gap-1 cursor-pointer border-b border-[#E5E7EB] py-3 hover:text-brandColor transition-all duration-300 px-2"
            >
              <p>Services</p>
              <img
                src={downArrow.src}
                alt="down arrow"
                width="auto"
                height="auto"
                className={` -rotate-90`}
              />
            </div>

            <A2 text="About us" link="/about/" />
            <A2 text="Contact us" link="/contact/" />
            <div className="grid grid-cols-2 gap-2 w-full py-3 ">
              <a href="/#contact">
                <Button text="Login" />
              </a>
              <a href="/#contact">
                <Button text="Sing Up" />
              </a>
            </div>

            <div
              className={` absolute overflow-hidden flex flex-col bg-white   py-3  h-full top-0 w-full ${
                sideDropdown ? "right-0 " : "right-full"
              } w-full px-2 shadow-md transition-all duration-700 `}
            >
              <div
                onClick={() => {
                  setSideDropdown(!sideDropdown);
                }}
                className="flex items-center gap-1 cursor-pointer border-b border-[#E5E7EB] py-3 hover:text-brandColor transition-all duration-300 px-2"
              >
                <img
                  src={downArrow.src}
                  alt="down arrow"
                  width="auto"
                  height="auto"
                  className={`rotate-90`}
                />
                <p className="text-brandColor">Services</p>
              </div>
              <A2 text="Hajj / Umra" link="/mulesoft/" />
              <A2 text="Historical" link="/powerbi/" />
              <A2 text="Caltural" link="/salesforce/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;