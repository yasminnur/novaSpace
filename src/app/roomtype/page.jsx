"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import typeroomData from "@/data/typeroom.json";
export default function Typeroom() {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(typeroomData);
  }, []);
    return (
        <>
             <div
          style={{
            backgroundImage: "url(/assets/img/img-section1.svg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            //   backgroundColor: "white"
          }}
          className="relative rounded-[45px] flex flex-col justify-center items-center h-fit overflow-x-hidden py-[50px]"
        >
          {/* <div className="absolute bg-gradient-to-t from-black/50 to-black/5 md:to-black/0 inset-0"></div> */}
          <div className="relative z-10 flex justify-center items-center inset-0 flex-col mt-[80px] h-fit">
            <h1 className="text-white uppercase text-[80px] font-bold leading-none">
              OUR room types
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[25px] md:mt-[30px] py-[50px]">
            {jsonData.map((item, index) => (
              <>
                <div
                  key={index}
                  className="room1 relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[45px] lg:rounded-[60px]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="overlay inset-0 z-10 absolute w-full h-full bg-gradient-to-t from-black/75 to-black/0"></div>
                  <div className="absolute inset-0 z-20 flex p-7 h-full w-full">
                    <div className="text-white flex flex-col justify-between w-full">
                      <div className="kiri flex flex-col gap-y-5 md:gap-y-3">
                        <p className="px-4 py-2 rounded-full bg-white/40 w-fit">
                          {item.capasity} people
                        </p>
                        <h1 className="italic truncate text-4xl uppercase leading-none">
                          {item.name1}
                          <span className=" not-italic">{item.name2}</span>
                        </h1>
                        <p className="line-clamp-3 md:line-clamp-3 font-normal text-lg">
                          {item.desc}
                        </p>
                                </div>
                                
                      <div className="kanan flex justify-end items-end">
                        <div className="group flex items-center gap-x-5">
                          <Link
                            href="#"
                            className="font-normal text-xl text-white group-hover:underline"
                          >
                            BOOK NOW
                          </Link>
                          <div className="flex items-center justify-center rounded-full border w-[50px] h-[50px] border-white relative overflow-hidden bg-white/10">
                            <Image
                              src="/assets/icon/icon-arrow.svg"
                              fill
                              alt=""
                              className="p-3 group-hover:-rotate-[0.542rad]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
                </div>
                {/* </div> */}
        </>
    )
}