"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import typeroomData from "@/data/typeroom.json";
// import Navbar from "@/components/navbar/page";
export default function Home() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("alpha");
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(typeroomData);
  }, []);
  return (
    <>
      <div className="flex flex-col w-full">
        <section 
          style={{
            backgroundImage: "url(/assets/img/img-section1.svg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative rounded-[45px] lg:rounded-[60px] flex flex-col justify-center items-center h-fit overflow-x-hidden"
        >
          <div className="absolute bg-gradient-to-t from-black/50 to-black/5 md:to-black/0 inset-0"></div>
          <div className="relative z-10 flex justify-center items-center inset-0 flex-col py-[200px] lg:py-[310px] px-[100px] lg:px-[128px] h-fit">
            <div className="flex flex-col justify-center items-center text-white text-center font-normal uppercase leading-none">
              <h1 className="text-[70px] lg:text-[120px] ">
                Work
                <span className="italic"> Smarter, </span>
              </h1>
              <h1 className="text-[70px] lg:text-[120px]">
                <span className="italic">InNovate</span> faster
              </h1>
              <p className="normal-case mt-10 text-2xl">
                Where innovation meets collaboration in a futuristic space.
              </p>
            </div>
            <div id="about" className="grid md:grid-cols-2 justify-center items-center text-white font-normal w-full gap-y-7 gap-x-[171px] md:gap-x-[20px] mt-[250px]  ">
              <div className="flex flex-col justify-between h-full gap-y-4 md:gap-y-0">
                <h1 className="text-[35px] lg:text-[60px] italic leading-tight lg:leading-none text-start">
                  Where Visionaries Create the Future
                </h1>
                <Link
                  href="/about"
                  className="group flex items-center gap-x-5 w-fit"
                >
                  <p className="font-normal text-xl text-white group-hover:underline">
                    Our Story
                  </p>

                  <div className="flex items-center justify-center rounded-full border w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-white relative overflow-hidden bg-white/10">
                    <Image
                      src="/assets/icon/icon-arrow.svg"
                      fill
                      alt=""
                      className="p-2 md:p-3 group-hover:-rotate-[0.542rad]"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-lg text-justify md:text-start md:text-lg xl:text-2xl leading-loose bg-">
                Welcome to NovaSpace, a futuristic coworking space designed for
                creators, innovators, and dreamers. Our space blends
                cutting-edge design with a collaborative atmosphere, offering a
                seamless fusion of technology,comfort, and inspiration. Whether
                you&apos;re a startup, freelancer, or remote team, NovaSpace
                provides the perfect environment to ignite ideas and shape the
                future.
              </p>
            </div>
          </div>
        </section>

        {/* Location  */}
        <section
          id="location"
          className="mt-[30px] py-[50px] md:py-[100px] px-5 md:px-10 rounded-t-[45px] lg:rounded-t-[60px] bg-white "
        >
          <h1 className="text-center font-normal text-[35px] lg:text-[45px] text-[#191919]">
            Location
          </h1>
          {/* nav-location */}
          <div className="nav-location mt-[25px] md:mt-[50px] text-[20px] md:text-[28px]">
            <ul className="flex flex-col md:flex-row gap-x-5 gap-y-3 md:gap-y-0">
              <li className={`flex-1 text-center text-white w-full`}>
                <button
                  onClick={() => setSelected("alpha")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "alpha"
                      ? "bg-[#191919] text-white font-medium"
                      : "bg-[#F8F8F8] text-[#191919] hover:bg-[#191919]/75 hover:text-white font-normal"
                  }`}
                >
                  Alpha District
                </button>
              </li>
              <li
                className={`flex-1 text-center rounded-2xl text-white w-full `}
              >
                <button
                  onClick={() => setSelected("beta")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "beta"
                      ? "bg-[#191919] text-white font-medium"
                      : "bg-[#F8F8F8] text-[#191919] hover:bg-[#191919]/75 hover:text-white font-normal"
                  }`}
                >
                  Beta District
                </button>
              </li>
              <li
                className={`flex-1 text-center rounded-2xl text-white w-full`}
              >
                <button
                  onClick={() => setSelected("omega")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "omega"
                      ? "bg-[#191919] text-white font-medium"
                      : "bg-[#F8F8F8] text-[#191919] hover:bg-[#191919]/75 hover:text-white font-normal"
                  }`}
                >
                  Omega District
                </button>
              </li>
            </ul>
          </div>
          {/* image-location */}
          <div className="relative h-[581px] w-full mt-[30px] rounded-[45px] lg:rounded-[60px] overflow-hidden">
            {selected === "alpha" && (
              <>
                <Image
                  src={"/assets/img/img-section1.svg"}
                  fill
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-5 top-5 right-5 md:left-10 md:right-10 md:top-10 p-[30px] bg-[#F8F8F8] h-[108px] md:w-[375px] rounded-3xl ">
                  <p className="truncate">📍 Futurix Tower, 15th Floor</p>
                  <p className="truncate">
                    Jl. Quantum Avenue No. 56, Alpha District
                  </p>
                </div>
              </>
            )}
            {selected === "beta" && (
              <>
                <Image
                  src={"/assets/img/img-section1.svg"}
                  fill
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-10 top-10 p-[30px] bg-[#F8F8F8] h-[108px] w-[375px] rounded-3xl ">
                  <p className="truncate">📍 Futurix Tower, 15th Floor</p>
                  <p className="truncate">
                    Jl. Quantum Avenue No. 56, Beta District
                  </p>
                </div>
              </>
            )}
            {selected === "omega" && (
              <>
                <Image
                  src={"/assets/img/img-section1.svg"}
                  fill
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-10 top-10 p-[30px] bg-[#F8F8F8] h-[108px] w-[375px] rounded-3xl ">
                  <p className="truncate">📍 Futurix Tower, 15th Floor</p>
                  <p className="truncate">
                    Jl. Quantum Avenue No. 56, Omega District
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Room Type  */}
        <section
          id="roomtype"
          className="bg-white px-5 md:px-10 py-[50px] md:py-[100px]"
        >
          <h1 className="text-[35px] lg:text-[45px] text-center font-normal text-[#191919]">
            Room Type
          </h1>
          <div className="flex flex-col gap-y-[50px] mt-[25px] md:mt-[60px]">
            {jsonData.map((item, index) => (
              <>
                <div
                  key={index}
                  className="room1 relative w-full h-[500px] md:h-[700px] lg:h-[900px] overflow-hidden rounded-[45px] lg:rounded-[60px]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="overlay inset-0 z-10 absolute w-full h-full bg-gradient-to-t from-black/75 to-black/0"></div>
                  <div className="absolute z-20 md:justify-end flex md:items-end px-[34px] md:px-[88px] py-[45px] md:py-[90px] h-full w-full">
                    <div className="text-white flex flex-col md:flex-row justify-between w-full">
                      <div className="kiri flex flex-col gap-y-5 md:gap-y-3 md:w-[615px]">
                        <p className="px-5 py-2 rounded-full bg-white/40 w-fit">
                          {item.capasity} people
                        </p>
                        <h1 className="italic truncate text-4xl md:text-[100px] uppercase leading-none">
                          {item.name1}
                          <span className=" not-italic">{item.name2}</span>
                        </h1>
                        <p className="line-clamp-3 md:line-clamp-3 font-normal text-xl md:text-2xl">
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

          <div className="btn-more w-full flex justify-center items-center mt-[25px] md:mt-[60px]">
            <Link href="/roomtype" className="font-medium px-6 py-3 bg-black text-white border border-black rounded-full text-2xl hover:bg-transparent hover:text-black">
              See More...
            </Link>
          </div>
        </section>

        {/* Facilities  */}
        <section
          id="facilities"
          className="bg-white px-5 md:px-10 py-[50px] md:py-[100px]"
        >
          <h1 className="text-[35px] lg:text-[45px] text-center font-normal text-[#191919]">
            Facilities
          </h1>
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-7 bg-green-300">
            <div className="bg-amber-200 h-[258px] flex flex-col justify-center items-center rounded-[40px] md:px-[150px] md:py-[52px] shadow-facilities">
              <div className="bg-red-300 relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-toilet.svg"} fill alt="" />
              </div>
              <p className="font-medium text-[28px] w-fit text-[#191919] bg-green-700">
                Toilet
              </p>
            </div>

            <div className="h-[258px] flex flex-col justify-center items-center rounded-[40px] px-[150px] py-[52px] shadow-facilities bg-white">
              <div className="relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-wifi.svg"} fill alt="" />
              </div>
              <p className="font-medium text-[28px] text-[#191919]">Internet</p>
            </div>
            <div className="h-[258px] flex flex-col justify-center items-center rounded-[40px] px-[150px] py-[52px] shadow-facilities bg-white">
              <div className="relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-food.svg"} fill></Image>
              </div>
              <p className="font-medium text-[28px] text-[#191919]">Cafe</p>
            </div>
            <div className="h-[258px] flex flex-col justify-center items-center rounded-[40px] px-[150px] py-[52px] shadow-facilities bg-white">
              <div className="relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-ac.svg"} fill alt="" />
              </div>
              <p className="font-medium text-[28px] text-[#191919]">
                Air Conditioner
              </p>
            </div>
            <div className="h-[258px] flex flex-col justify-center items-center rounded-[40px] px-[150px] py-[52px] shadow-facilities bg-white">
              <div className="relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-pray.svg"} fill alt="" />
              </div>
              <p className="font-medium text-[28px] text-[#191919]">
                Multipurpose Room
              </p>
            </div>
            <div className="h-[258px] flex flex-col justify-center items-center rounded-[40px] px-[150px] py-[52px] shadow-facilities bg-white">
              <div className="relative overflow-hidden w-[88px] h-[88px]">
                <Image src={"/assets/icon/icon-printer.svg"} fill alt="" />
              </div>
              <p className="font-medium text-[28px] text-[#191919]">Printer</p>
            </div>
          </div>
        </section>

        {/* Testi  */}
        <section
          id="testi"
          className="bg-white px-10 py-[100px] justify-center flex text-center"
        >
          <div className="flex flex-col gap-y-[50px] w-[753px]">
            <h1 className="font-normal text-[45px] text-[#191919]">
              Nova Space really comfortable for working
            </h1>
            <p>
              &quot;Nova Space really comfortable for working. We&apos;ve seen a
              huge jump in leads since launch, and customers love the easy
              navigation. Nova Space truly exceeded our expectations!&quot;
            </p>
            <div className="profile-info flex flex-col justify-center items-center ">
              <div className="flex gap-x-8 items-center">
                <div className="w-[64px] h-[64px] opacity-35 overflow-hidden relative rounded-full">
                  <Image
                    src={"/assets/img/img-person1.svg"}
                    fill
                    alt=""
                    className="absolute inset-0 object-center"
                  />
                </div>
                <div className="w-[74px] h-[74px] opacity-75 overflow-hidden relative rounded-full">
                  <Image
                    src={"/assets/img/img-person1.svg"}
                    fill
                    alt=""
                    className="absolute inset-0 object-center"
                  />
                </div>
                <div className="w-[84px] h-[84px] overflow-hidden relative rounded-full">
                  <Image
                    src={"/assets/img/img-person1.svg"}
                    fill
                    alt=""
                    className="absolute inset-0 object-center"
                  />
                </div>
                <div className="w-[74px] h-[74px] opacity-75 overflow-hidden relative rounded-full">
                  <Image
                    src={"/assets/img/img-person1.svg"}
                    fill
                    alt=""
                    className="absolute inset-0 object-center"
                  />
                </div>
                <div className="w-[64px] h-[64px] opacity-35 overflow-hidden relative rounded-full">
                  <Image
                    src={"/assets/img/img-person1.svg"}
                    fill
                    alt=""
                    className="absolute inset-0 object-center"
                  />
                </div>
              </div>
              <div className="profile-desc mt-[29px]">
                <p className="font-medium text-xl capitalize text-black">
                  Sarah Jones
                </p>
                <p className="font-normal text-xl capitalize text-[#AAAAAA]">
                  Marketing Manager, Green Earth Solar
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-[100px] py-[100px] rounded-b-[60px]">
          <div className="flex justify-between items-center">
            <p className="font-normal w-[521px] leading-none text-[80px] text-[#191919] italic">
              Limited Spots Available!
            </p>
            <button className="cursor-pointer p-5 h-fit w-fit rounded-full bg-[#191919] text-white font-normal text-xl">
              Reserve your Room
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
