import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center">
      <nav className="fixed w-[95%] z-50 top-10 flex justify-between bg-primary items-center px-6 py-4 rounded-full">
        <div className="w-[120px] h-[30px] relative cursor-pointer">
          <Image
            src={"/assets/img/img-logo.svg"}
            fill
            className="absolute object-contain"
          ></Image>
        </div>
        <div className="text-white text-base">
          <ul className="flex gap-x-5">
              <li className="relative group overflow-hidden w-[90px] h-[40px] rounded-full hover:bg-white/5 transition-all duration-500 cursor-pointer">
                <Link href="#about">
              <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">About</p>
                  <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">About</p>
                  </Link>
            </li>
              <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
              <Link href="#location">
              <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">Location</p>
                  <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">Location</p>
                  </Link>
            </li>
              <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
              <Link href="#room">
              <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">Room</p>
                  <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">Room</p>
                  </Link>
            </li>
              <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
              <Link href="#facilites">
              <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">Facilities</p>
                  <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">Facilities</p>
                  </Link>
            </li>
            <li className="flex justify-center items-center border border-black hover:border-white bg-white hover:bg-transparent hover:text-white  px-4 h-[40px] text-black font-medium/[24px] rounded-full">
                  <Link href="#">
                  Booking Now</Link>
            </li>
          </ul>
        </div>
        </nav>
        </div>
    </>
  );
}
