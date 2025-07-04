import Image from "next/image";
export default function About() {
  return (
    <>
      <section
      // className="py-[100px] bg-red-300"
      //  style={{
      //     backgroundImage: "url(/assets/img/img-section1.svg)",
      //     backgroundPosition: "top",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //   }}
      //   className="relative rounded-[15px] flex flex-col justify-center items-center h-fit overflow-x-hidden py-[50px]">
      >
        {/* <div 
          style={{
            backgroundImage: "url(/assets/img/img-section1.svg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative rounded-[15px] flex flex-col justify-center items-center h-fit overflow-x-hidden py-[50px]"
        > */}
        <div
          style={{
            backgroundImage: "url(/assets/img/img-section1.svg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative rounded-[45px] flex flex-col justify-center items-center h-fit overflow-x-hidden py-[50px]"
        >
          <div className="absolute bg-gradient-to-t from-black/50 to-black/5 md:to-black/0 inset-0"></div>
          <div className="relative z-10 flex justify-center items-center inset-0 flex-col mt-[80px] h-fit">
            <h1 className="text-white text-[80px] font-bold leading-none">
              OUR STORY
            </h1>
          </div>
        </div>

        <div className="mt-[30px] flex flex-col py-[50px] md:py-[100px] px-5 md:px-10 rounded-[45px] lg:rounded-[60px] bg-white gap-y-14">
          <div className="grid grid-cols-2 gap-4">
            <div className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quas
              alias dolorem atque dolorum aut aperiam tenetur, numquam cum
              reiciendis vitae facere impedit porro mollitia doloremque quisquam
              pariatur! Veritatis, optio?
            </div>
            <div className="relative bg-red-300 overflow-hidden">
              <Image
                src={"/assets/img/img-section1.svg"}
                fill
                alt=""
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
                  <div className="grid grid-cols-2 gap-4">
                  <div className="relative bg-red-300 overflow-hidden">
              <Image
                src={"/assets/img/img-section1.svg"}
                fill
                alt=""
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quas
              alias dolorem atque dolorum aut aperiam tenetur, numquam cum
              reiciendis vitae facere impedit porro mollitia doloremque quisquam
              pariatur! Veritatis, optio?
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
