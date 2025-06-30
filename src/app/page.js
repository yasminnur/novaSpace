import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="bg-primary px-7 py-12 w-screen"> */}
        <section
          style={{ backgroundImage: "url(/assets/img/img-section1.svg)", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
          className="rounded-[60px] flex justify-center items-center md:rounded-[45px] min-h-screen overflow-x-hidden"
      >
        <div className="flex flex-col justify-center items-center text-white font-normal uppercase leading-none">
          <h1 className="text-[120px] font-[var(--font-inter)]">Work<span className="italic font-[var(--font-serif)]"> Smarter,</span></h1>
          <h1 className="text-[120px] italic"><span className="italic font-[Instrument Serif]">InNovate</span> faster</h1>
          <p className="normal-case mt-10 text-lg">Where innovation meets collaboration in a futuristic space.</p>
        </div>
        </section>
        <section
          style={{ backgroundImage: "url(/assets/img/img-section1.svg)", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
          className="rounded-[60px] flex justify-center items-center md:rounded-[45px] min-h-screen overflow-x-hidden"
      >
        <div className="flex flex-col justify-center items-center text-white font-normal uppercase leading-none">
          <h1 className="text-[120px] font-[var(--font-inter)]">Work<span className="italic font-[var(--font-serif)]"> Smarter,</span></h1>
          <h1 className="text-[120px] italic"><span className="italic font-[Instrument Serif]">InNovate</span> faster</h1>
          <p className="normal-case mt-10 text-lg">Where innovation meets collaboration in a futuristic space.</p>
        </div>
        </section>
        <section
          style={{ backgroundImage: "url(/assets/img/img-section1.svg)", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
          className="rounded-[60px] flex justify-center items-center md:rounded-[45px] min-h-screen overflow-x-hidden"
      >
        <div className="flex flex-col justify-center items-center text-white font-normal uppercase leading-none">
          <h1 className="text-[120px] font-[var(--font-inter)]">Work<span className="italic font-[var(--font-serif)]"> Smarter,</span></h1>
          <h1 className="text-[120px] italic"><span className="italic font-[Instrument Serif]">InNovate</span> faster</h1>
          <p className="normal-case mt-10 text-lg">Where innovation meets collaboration in a futuristic space.</p>
        </div>
        </section>
      {/* </div> */}
    </>
  );
}
