import Minus from "../../assets/home/faqs/minus.svg";
import { useState } from "react";
interface Props {
  question: string;
  anwser: string;
}

export default function FAQ({ question, anwser }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col py-4 border-y">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-between cursor-pointer"
      >
        <p className="text-[22px] md:text-2xl font-medium max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl leading-[140%] lg:leading-[140%] text-DarkGrey">
          {question}
        </p>
        <span>
          <div
            className={`flex justify-center items-center border border-brandColor rounded-full 
            }`}
          >
            <div className="relative  p-4">
              <img
              alt="open close icon"
                src={Minus.src}
                width="80%" height="auto" 
                className={`absolute transition-all duration-700  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                  isOpen ? "-rotate-180" : ""
                }`}
              />
              <img
                src={Minus.src}
                alt="open close icon"
                width="80%" height="auto" 
                className={`absolute transition-all duration-700  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                  isOpen ? "rotate-180" : "rotate-90"
                }`}
              />
            </div>
          </div>
        </span>
      </div>
      <div
        className={`transition-all duration-700  ${
          isOpen
            ? "min-[300px]:h-60 min-[350px]:h-52 min-[400px]:h-40 min-[500px]:h-32 sm:h-24 lg:h-20 xl:h-16 opacity-100 pt-2"
            : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="leading-normal lg:leading-normal text-Grey">{anwser}</p>
      </div>
    </div>
  );
}