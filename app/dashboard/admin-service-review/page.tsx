'use client'

import { useEffect, useState } from "react"

export default function Review() {
    const [serviceRequest, setServiceRequest] = useState<any[]>([])
    const [mechanics, setMechanics] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Fetch service requests and mechanics on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [serviceRes, mechanicRes] = await Promise.all([
                    fetch('http://localhost:3000/api/service-request'),
                    fetch('http://localhost:3000/api/mechanic')
                ])

                if (!serviceRes.ok) throw new Error("Failed to fetch service requests")
                if (!mechanicRes.ok) throw new Error("Failed to fetch mechanics")

                const { serviceRequest } = await serviceRes.json()
                const { mechanics } = await mechanicRes.json()

                setServiceRequest(serviceRequest)
                setMechanics(mechanics)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            if (!response.ok) throw new Error("Failed to submit booking")
            alert("Booking submitted successfully")
        } catch (err: any) {
            alert(err.message)
        }
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
        <div className="shadow-md rounded grid grid-cols-3 gap-5 p-10">
            {serviceRequest.map((request: any) => (
                <form
                    key={request.avail_service_id}
                    onSubmit={handleSubmit}
                    className="border-2 border-gray-500 rounded-xl grid grid-cols-1 p-5"
                >
                    <input
                        className="focus:outline-none px-2"
                        type="text"
                        name="service_id"
                        readOnly
                        value={request.service_id}
                    />
                    <input
                        className="focus:outline-none font-bold px-2"
                        name="name"
                        type="text"
                        readOnly
                        value={request.name}
                    />
                    <input
                        className="focus:outline-none px-2"
                        type="text"
                        name="phone"
                        readOnly
                        value={request.phone}
                    />
                    <input
                        className="focus:outline-none px-2"
                        type="text"
                        name="vehicle"
                        readOnly
                        value={request.vehicle}
                    />

                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <select
                            className="focus:outline-none border rounded text-lg p-2"
                            name="mechanic_id"
                        >
                            {mechanics.map((mechanic: any) => (
                                <option key={mechanic.mechanic_id} value={mechanic.mechanic_id}>
                                    {mechanic.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="focus:outline-none border rounded px-2"
                            type="date"
                            name="appointment_date"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white text-center font-bold rounded-full cursor-pointer px-6 py-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ))}
        </div>
    )
}
