"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("alpha");
  return (
    <>
      <div id="about" className="flex flex-col gap-y-[30px]">
        <section
          style={{
            backgroundImage: "url(/assets/img/img-section1.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="rounded-[60px] flex flex-col justify-center items-center md:rounded-[45px] min-h-screen h-fit overflow-x-hidden py-[283px] px-[128px]"
        >
          <div className="flex flex-col justify-center items-center text-white font-normal uppercase leading-none">
            <h1 className="text-[120px] font-[var(--font-inter)]">
              Work
              <span className="italic font-[var(--font-serif)]">
                {" "}
                Smarter,{" "}
              </span>
            </h1>
            <h1 className="text-[120px]">
              <span className="italic font-[Instrument Serif]">InNovate</span>{" "}
              faster
            </h1>
            <p className="normal-case mt-10 text-lg">
              Where innovation meets collaboration in a futuristic space.
            </p>
          </div>
          <div className="flex justify-center items-center text-white font-normal w-fill gap-x-[171px] mt-[250px]">
            <h1 className="basis-1/3 text-[70px] italic leading-none">
              Where Visionaries Create the Future
            </h1>
            <p className="basis-2/3 text-2xl leading-loose">
              Welcome to NovaSpace, a futuristic coworking space designed for
              creators, innovators, and dreamers. Our space blends cutting-edge
              design with a collaborative atmosphere, offering a seamless fusion
              of technology,comfort, and inspiration. Whether you're a startup,
              freelancer, or remote team, NovaSpace provides the perfect
              environment to ignite ideas and shape the future.
            </p>
          </div>
        </section>
        <section
          id="location"
          className="py-[100px] px-10 rounded-t-[60px] bg-white "
        >
          <h1 className="text-center font-normal text-[45px] text-[#191919]">Location</h1>
          <div className="nav-location mt-[50px] text-[28px]">
            <ul className="flex gap-x-5">
              <li
                className={`flex-1 text-center rounded-2xl text-white w-full py-5`}
              >
                <button
                  onClick={() => setSelected("alpha")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "alpha" ? "bg-[#191919] text-white font-medium" : "bg-[#F8F8F8] text-[#191919] font-normal"
                  }`}
                >
                  Alpha District
                </button>
              </li>
              <li
                className={`flex-1 text-center rounded-2xl text-white w-full py-5`}
              >
                <button
                  onClick={() => setSelected("beta")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "beta" ? "bg-[#191919] text-white font-medium" : "bg-[#F8F8F8] text-[#191919] font-normal"
                  }`}
                >
                  Beta District
                </button>
              </li>
              <li
                className={`flex-1 text-center rounded-2xl text-white w-full py-5`}
              >
                <button
                  onClick={() => setSelected("omega")}
                  className={`flex-1 text-center rounded-2xl w-full py-5 ${
                    selected === "omega" ? "bg-[#191919] text-white font-medium" : "bg-[#F8F8F8] text-[#191919] font-normal"
                  }`}
                >
                  Omega District
                </button>
              </li>
            </ul>
          </div>

          <div className="relative h-[581px] w-full mt-[30px] rounded-[60px] overflow-hidden">
            {selected === "alpha" && (
              <>
                 <Image
                  src={"/assets/img/img-section1.svg"}
                  fill
                  className="absolute inset-0 object-cover w-full h-full"
                  ></Image>
                <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-10 top-10 p-[30px] bg-[#F8F8F8] h-[108px] w-[375px] rounded-3xl ">
              <p className="truncate">📍 Futurix Tower, 15th Floor</p>
              <p className="truncate">Jl. Quantum Avenue No. 56, Alpha District</p>
            </div>
              </>
            )}
            {selected === "beta" && (
               <>
               <Image
                src={"/assets/img/img-section1.svg"}
                fill
                className="absolute inset-0 object-cover w-full h-full"
                ></Image>
              <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-10 top-10 p-[30px] bg-[#F8F8F8] h-[108px] w-[375px] rounded-3xl ">
            <p className="truncate">📍 Futurix Tower, 15th Floor</p>
            <p className="truncate">Jl. Quantum Avenue No. 56, Beta District</p>
          </div>
            </>
            )}
            {selected === "omega" && (
               <>
               <Image
                src={"/assets/img/img-section1.svg"}
                fill
                className="absolute inset-0 object-cover w-full h-full"
                ></Image>
              <div className="desc-location text-base text-start font-normal text-[#191919] absolute z-20 left-10 top-10 p-[30px] bg-[#F8F8F8] h-[108px] w-[375px] rounded-3xl ">
            <p className="truncate">📍 Futurix Tower, 15th Floor</p>
            <p className="truncate">Jl. Quantum Avenue No. 56, Omega District</p>
          </div>
            </>
            )}
          </div>
        </section>
        <section>
          
        </section>
      </div>
    </>
  );
}
