import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-primary px-[60px] pt-[170px] pb-[30px]">
        <div className="flex justify-between">
          <div className="info pl-10 flex flex-col gap-y-5 w-[270px] max-w-[270px]">
            <Image
              src={"/assets/img/img-logo.svg"}
              width={142}
              height={30}
            ></Image>
            <p className="font-medium text-[18px] underline text-white">
              +62 9809 0809
            </p>
            <p className="font-medium text-[18px] underline text-white">
              contact@novaspace.com
            </p>
            <div className="sosmed flex gap-x-3">
              <div className="bg-white rounded-full w-[40px] h-[40px] relative overflow-hidden border border-white">
                <Image
                  src={"/assets/icon/icon-framer.svg"}
                  fill
                  className="absolute flex items-center justify-center p-2"
                ></Image>
              </div>
              <div className="bg-white rounded-full w-[40px] h-[40px] relative overflow-hidden border border-white">
                <Image
                  src={"/assets/icon/icon-twitter.svg"}
                  fill
                  className="absolute flex items-center justify-center p-2"
                ></Image>
              </div>
              <div className="bg-white rounded-full w-[40px] h-[40px] relative overflow-hidden border border-white">
                <Image
                  src={"/assets/icon/icon-insta.svg"}
                  fill
                  className="absolute flex items-center justify-center p-2"
                ></Image>
              </div>
            </div>
          </div>
          <div className="nav text-white flex gap-x-[150px]">
            <div className="w-[200px]">
              <p className="font-medium text-base uppercase mb-5">pages</p>
              <ul className="flex flex-col gap-y-[10px] font-normal text-base text-white/60">
                <li>Home</li>
                <li>Location</li>
                <li>Room Type</li>
                <li>Facilities</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium text-base uppercase mb-5">
                UTILITY Pages
              </p>
              <ul className="flex flex-col gap-y-[10px] font-normal text-base text-white/60">
                <li>404</li>
                <li>Licensing</li>
              </ul>
            </div>
                  </div>
        </div>
                  <p className="text-[14px] mt-[150px] flex justify-center items-center text-center font-normal text-white/60">© Made by FatinVerse</p>
      </div>
    </>
  );
}
