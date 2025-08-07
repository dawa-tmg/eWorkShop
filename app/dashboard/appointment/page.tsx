import { FaCalendarAlt, FaHammer } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { GiTimeTrap } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default async function Dashboard(){
    //Get Booking
    const returnBooking = await fetch('http://localhost:3000/api/booking')
    if(!returnBooking.ok){
        return <h1>Error Fetching Data...</h1>
    }
    const { bookings } = await returnBooking.json()

    return (
        <div>
            <div className="grid grid-cols-5 gap-10">
                <div className="border border-gray-100 rounded shadow-md flex items-center space-x-3 p-5">
                    <div className="w-fit h-fit bg-blue-200 p-3">
                        <FaCalendarAlt className="text-2xl text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600 font-semibold">Total Appointment</h2>
                        <p className="text-2xl text-black font-bold">0</p>
                    </div>
                </div>
                <div className="border border-gray-100 rounded shadow-md flex items-center space-x-3 p-5">
                    <div className="w-fit h-fit bg-green-200 p-3">
                    <TiTick className="text-2xl text-green-500" />
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600 font-semibold">Completed</h2>
                        <p className="text-2xl text-black font-bold">0</p>
                    </div>
                </div>
                <div className="border border-gray-100 rounded shadow-md flex items-center space-x-3 p-5">
                    <div className="w-fit h-fit bg-yellow-100 p-3">
                    <GiTimeTrap className="text-2xl text-yellow-500" />
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600 font-semibold">Pending</h2>
                        <p className="text-2xl text-black font-bold">0</p>
                    </div>
                </div>
                <div className="border border-gray-100 rounded shadow-md flex items-center space-x-3 p-5">
                    <div className="w-fit h-fit bg-red-200 p-3">
                    <RxCross2 className="text-2xl text-red-500" />
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600 font-semibold">Cancelled</h2>
                        <p className="text-2xl text-black font-bold">0</p>
                    </div>
                </div>
                <div className="border border-gray-100 rounded shadow-md flex items-center space-x-3 p-5">
                    <div className="w-fit h-fit bg-purple-200 p-3">
                    <FaHammer className="text-2xl text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600 font-semibold">Inprogress</h2>
                        <p className="text-2xl text-black font-bold">0</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border border-gray-100 rounded-xl shadow-md">
                <div className="flex items-center justify-between p-5">
                    <h2 className="text-xl font-bold">Registered Appointments</h2>
                </div>
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-gray-500">
                            <th className="px-5 py-6">Customer</th>
                            <th className="px-5 py-6">Phone Number</th>
                            <th className="px-5 py-6">Vehicle Number</th>
                            <th className="px-5 py-6">Service Requested</th>
                            <th className="px-5 py-6">Mechanic Assigned</th>
                            <th className="px-5 py-6">Statue</th>
                            <th className="px-5 py-6">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((book)=>(
                            <tr className="hover:bg-gray-100 text-gray-500">
                                <td className="p-5">{book.name}</td>
                                <td className="p-5">{book.phone}</td>
                                <td className="p-5">{book.vehicle}</td>
                                <td className="p-5">{book.service_id}</td>
                                <td className="p-5">{book.mechanic_id}</td>
                                <td className="p-5">{book.status}</td>
                                <td className="p-5">{book.appointment_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}