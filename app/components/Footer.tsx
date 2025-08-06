import { FaPhone, FaClock } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaCarSide } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-[#333] w-full relative text-white flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-10 p-10">
          <div>
            <h2 className="text-5xl text-gray-400 text-center font-bold">eWorkshop</h2>
            <p className="text-xl text-gray-400 font-normal py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis aspernatur quos nostrum provident, atque ipsa, esse velit eos id dolore eligendi quam cum unde sint ab dignissimos impedit voluptatibus deserunt amet fugiat magnam a nobis tempora? Neque quas eveniet sunt quasi, aspernatur deserunt itaque quo est, saepe aliquam voluptatibus!</p>
            <div className="flex space-x-5">
              <div className="bg-red-500 rounded text-white p-1">
                <FaFacebook className="text-4xl"/>
              </div>
              <div className="bg-red-500 rounded text-white p-1">
                <FaInstagramSquare className="text-4xl"/>
              </div>
              <div className="bg-red-500 rounded text-white p-1">
                <FaLinkedin className="text-4xl"/>
              </div>
            </div>
          </div>

          <div className="border-x-2 border-gray-500 px-10">
            <h2 className="text-3xl text-gray-400 font-bold mb-5">Site Map</h2>
            <div className="grid grid-cols-2 gap-5">
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>Home</p>
              </div>
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>About</p>
              </div>
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>Service</p>
              </div>
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>Team</p>
              </div>
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>Contact</p>
              </div>
              <div className="border-2 rounded border-gray-600 text-xl flex space-x-3 p-2">
                <FaCarSide className="text-red-500 text-3xl"/>
                <p>Appointment</p>
              </div>
            </div>
          </div>

          <div className="w-[80%] mx-auto">
            <h2 className="text-3xl text-gray-400 font-bold mb-5">Contact</h2>
            <div className="flex justify-center space-x-3 py-2">
              <FaPhone className="text-red-500 text-2xl"/>
              <div>
                <p className="text-xl text-gray-400 font-normal">For repair Support</p>
                <p className="text-xl font-normal">+957 17 00 009</p>
              </div>
            </div>
            <div className="flex justify-center space-x-3 py-2">
              <FaClock className="text-red-500 text-2xl"/>
              <div>
                <p className="text-xl text-gray-400 font-normal">The Working Hours</p>
                <div className="font-semibold">
                  <p>Monday - Friday<br />
                    <span className="text-xl text-gray-400 font-normal">8:00Am - 5:00Pm</span>
                  </p>
                  <p className="mt-2">Saturday - Sunday<br />
                    <span className="text-xl text-gray-400 font-normal">9:00Am - 1:00Pm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-500 text-center py-10">
          <p>&copy; {new Date().getFullYear()} eWorkshop | All rights reserved.</p>
        </div>
      </footer>
    )
  }
  