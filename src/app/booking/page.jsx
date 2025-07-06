import Image from "next/image"
export default function Booking() {
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
          <div className="absolute bg-gradient-to-t from-black/50 to-black/5 md:to-black/0 inset-0"></div>
          <div className="relative z-10 flex justify-center items-center inset-0 flex-col mt-[80px] h-fit">
            <h1 className="text-white uppercase text-[80px] font-bold leading-none">
              booking page
            </h1>
          </div>
            </div>
            
            <section className="flex bg-white mt-[30px] py-[50px] px-5 md:px-10 rounded-[45px] lg:rounded-[60px] gap-x-10">
                <div className="basis-1/3 bg-red-300 w-full">
                    <div className="image-container relative overflow-hidden h-[250px] bg-green-300">
                        <Image src={"/assets/img/img-section1.svg"} alt="" fill className="inset-0 object-cover object-center"/>
                    </div>
                    <div className="room-desc">
                        dd
                    </div>
                </div>
                <div className="basis-2/3 bg-red-500 w-full">
                    <form action="" className="flex flex-col gap-y-6">
                        <div className="form-nama flex flex-col">
                            Name
                            <input type="text" className="p-2 w-full border border-black/40 max-w-[600px] rounded-xl mt-1" placeholder="John Doe"/>
                            </div>
                        <div className="form-phone flex flex-col">
                            Phone
                            <input type="email" className="p-2 w-full border border-black/40 max-w-[600px] rounded-xl mt-1" placeholder="John Doe"/>
                            </div>
                        <div className="form-date flex flex-col">
                            Date
                            <input type="text" className="p-2 w-full border border-black/40 max-w-[600px] rounded-xl mt-1" placeholder="John Doe"/>
                            </div>
                        <div className="form-roomtype flex flex-col">
                            Roomtype
                            <input type="text" className="p-2 w-full border border-black/40 max-w-[600px] rounded-xl mt-1" placeholder="John Doe"/>
                        </div>
                        <div className="flex w-full justify-end">
                            <button className="py-3 px-8 bg-black text-white w-fit rounded-full">Submit</button>
                            </div>
                    </form>
                </div>
            </section>
        </>
    )
}