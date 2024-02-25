"use client"
import Cards from "./serviceCard";
import NextArrow from "../comman/nextArrow";
import PreArrow from "../comman/prevArrow";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Data } from "../../assets/constants/interfaces";

 function Slider() {
  const [counter, setCounter] = useState(0);
  const [nextButtonState, setNextButtonState] = useState(true);
  const [prevButtonState, setPrevButtonState] = useState(false);
  const [DATA, setData] = useState<Data[]>([]);
  const [DataFetched, setDataFetched] = useState(false);
  useEffect(()=>{
    
     async function fetchData() {
      
        const response = await axios.get("http://192.168.190.205:8000/agent/category_list/");
        setData(response.data);
        localStorage.setItem('ctg',response.data);
        setDataFetched(true);
        console.log(response.data)
      } 
    
    fetchData();
  }

    ,[DataFetched])

  useEffect(() => {
    const Slides = document.querySelectorAll(".slide");
    Slides.forEach((slide, index) => {
      (slide as HTMLElement).style.left = `${(index - 1) * 105}%`;
    });
  }, [DataFetched]);

  useEffect(() => {
    const Slides = document.querySelectorAll(".slide");
    Slides.forEach((slide, index) => {
      (slide as HTMLElement).style.transform = `translateX(${
        index - counter * 105
      }%)`;
    },[]);
    
  }, [counter]);

  function handlePrev(length: number) {
    if (counter < length) {
      return;
    }
    if (counter < length + 1) {
      setPrevButtonState(false);
      setNextButtonState(true);
      setCounter(counter - 1);
      return;
    }
    setNextButtonState(true);
    setCounter(counter - 1);
  }
  function handleNext(iterations: number) {
    if (counter === DATA.length - iterations) {
      return;
    }
    if (counter >= DATA.length - iterations - 1) {
      setNextButtonState(false);
      setPrevButtonState(true);
      setCounter(counter + 1);
      return;
    }
    setPrevButtonState(true);
    setCounter(counter + 1);
  }

  return (
    <div className="flex flex-col justify-between items-center gap-12 overflow-hidden  w-full leading-normal lg:leading-normal">
      <div className=" relative h-[350px] w-5/6 sm:w-4/6 md:w-[45%] lg:w-[30%] xl:w-[25%] ">
        {DATA.map((data, index) => {
          return (
            <div
              key={index}
              className="slide w-full h-full rounded-2xl absolute transition-all max-h-full duration-500 hover:scale-110 hover:shadow-xl"
            >
              <a href={`/${data.slug}/`}>
                <Cards
                  image={"http://192.168.190.205:8000"+data.img}
                  title={data.title}
                  description={data.description}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 ">
        <div
          onClick={() => {
            handlePrev(1);
          }}
          className={`rounded-full border border-brandColor ${
            prevButtonState ? "bg-brandColor" : "bg-white"
          } p-4 cursor-pointer transition duration-500 ease-in-out transform hidden lg:flex`}
        >
          <PreArrow color={`${prevButtonState ? "white" : "brandColor"}`} />

        </div>
        <div
          onClick={() => {
            handlePrev(0);
          }}
          className={`rounded-full border border-brandColor ${
            prevButtonState ? "bg-brandColor" : "bg-white"
          } p-4 cursor-pointer transition duration-500 ease-in-out transform flex lg:hidden`}
        >
          <PreArrow color={`${prevButtonState ? "white" : "brandColor"}`} />
         
        </div>
        <div
          onClick={() => {
            handleNext(3);
          }}
          className={`rounded-full border border-brandColor ${
            nextButtonState ? "bg-brandColor" : "bg-white"
          } p-4 cursor-pointer transition duration-500 ease-in-out transform hidden lg:flex`}
        >
          <NextArrow color={`${nextButtonState ? "white" : "brandColor"}`} />
         
        </div>
        <div
          onClick={() => {
            handleNext(2);
          }}
          className={`rounded-full border border-brandColor ${
            nextButtonState ? "bg-brandColor" : "bg-white"
          } p-4 cursor-pointer transition duration-500 ease-in-out transform  flex lg:hidden`}
        >
          <NextArrow color={`${nextButtonState ? "white" : "brandColor"}`} />
        </div>
      </div>
      
    </div>
  );
}

export default Slider;