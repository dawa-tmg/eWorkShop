import { FaPhone, FaClock } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaCarSide } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-[#2e3a4d] w-full relative flex flex-col justify-center">
        <div className="border-t-2 border-gray-500 text-center py-10">
          <p className="text-gray-400 font-semibold">&copy; {new Date().getFullYear()} eWorkShop | All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  // <div className="grid grid-cols-2 self-center gap-10 p-10">
  //   <div className="flex space-x-3 py-2">
  //     <FaPhone className="text-red-500 text-2xl"/>
  //     <div>
  //       <p className="text-xl text-gray-400 font-normal">For repair Support</p>
  //       <p className="text-xl font-normal">+957 17 00 009</p>
  //     </div>
  //   </div>
  //   <div className="flex space-x-3 py-2">
  //     <FaClock className="text-red-500 text-2xl"/>
  //     <div>
  //       <p className="text-xl text-gray-400 font-normal">The Working Hours</p>
  //       <div className="font-semibold">
  //         <p>Monday - Friday<br />
  //           <span className="text-xl text-gray-400 font-normal">8:00Am - 5:00Pm</span>
  //         </p>
  //         <p className="mt-2">Saturday - Sunday<br />
  //           <span className="text-xl text-gray-400 font-normal">9:00Am - 1:00Pm</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>