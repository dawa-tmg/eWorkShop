export default function DashHeader(){
    return (
        <header className="h-screen w-fit bg-[#2e3a4d] shadow-lg">
            <nav className="grid gap-3 p-4">
                <a className="text-xl text-gray-500 font-bold border-b-2" href="/dashboard">Dashboard</a>
                <a className="text-xl text-gray-500 font-bold border-b-2" href="/dashboard/admin-service">Services</a>
                <a className="text-xl text-gray-500 font-bold border-b-2" href="/dashboard/admin-service-review">Service Request</a>
                <a className="text-xl text-gray-500 font-bold border-b-2" href="/dashboard/appointment">Appointments</a>
                <a className="text-xl text-gray-500 font-bold border-b-2" href="/dashboard/admin-mechanic">Mechanics</a>
            </nav>
        </header>
    )
}