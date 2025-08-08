'use client'

import { useEffect, useState } from "react"
import Input from "@/app/components/Input"
import Button from "@/app/components/Button"

export default function Mechanic() {
    const [mechanics, setMechanics] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [showForm, setShowForm] = useState(false)

    // Fetch mechanics on mount
    useEffect(() => {
        const fetchMechanics = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/mechanic')
                if (!response.ok) throw new Error("Failed to fetch mechanics")
                const { mechanics } = await response.json()
                setMechanics(mechanics)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchMechanics()
    }, [])

    // Toggle form
    const toggleForm = () => {
        setShowForm(prev => !prev)
    }

    // Post mechanic
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)
        
        try {
            const response = await fetch('/api/mechanic', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            if (!response.ok) throw new Error("Failed to add mechanic")
            
            // Refresh list after adding mechanic
            const newMechanic = await response.json()
            setMechanics(prev => [...prev, newMechanic])
            setShowForm(false)
            e.currentTarget.reset()
        } catch (err: any) {
            alert(err.message)
        }
    }

    if (loading) return <h1>Loading mechanics...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
        <div className="border border-gray-100 rounded-xl shadow-md">
            <div className="flex items-center justify-between p-5">
                <h2 className="text-xl font-bold">Mechanics</h2>
                
                {showForm && (
                    <form 
                        id="addMechanic" 
                        onSubmit={handleSubmit}
                        className="w-[30%] fixed absolute translate-x-[100%] translate-y-[30%] bg-gray-200/95 shadow-md grid gap-4 p-10 z-10"
                    >
                        <h2 className="text-2xl font-semibold text-gray-500">Add Mechanic</h2>
                        <Input type="text" name="name" placeholder="Name" />
                        <Input type="email" name="email" placeholder="Email Address" />
                        <Input type="number" name="phone" placeholder="Phone Number" />
                        <Input type="text" name="specialization" placeholder="Specialization" />
                        <input type="hidden" name="availability" value="true" />
                        <textarea 
                            className="focus:outline-none border border-gray-400 rounded-lg p-2" 
                            name="description" 
                            maxLength={200} 
                            rows={4} 
                            placeholder="Service Description"
                        ></textarea>
                        <Button text="Submit"/>
                    </form>
                )}

                <button 
                    onClick={toggleForm}
                    className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700"
                >
                    Add Mechanic
                </button>
            </div>

            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr className="text-left text-gray-500">
                        <th className="px-5 py-6">Name</th>
                        <th className="px-5 py-6">Email</th>
                        <th className="px-5 py-6">Phone</th>
                        <th className="px-5 py-6">Specialization</th>
                        <th className="px-5 py-6">Description</th>
                        <th className="px-5 py-6">Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanics.map((mechanic: any) => (
                        <tr key={mechanic.mechanic_id} className="hover:bg-gray-100 text-gray-500">
                            <td className="p-5">{mechanic.name}</td>
                            <td className="p-5">{mechanic.email}</td>
                            <td className="p-5">{mechanic.phone}</td>
                            <td className="p-5">{mechanic.specialization}</td>
                            <td className="p-5">{mechanic.description}</td>
                            <td className="p-5 text-center uppercase font-bold">
                                {mechanic.availability.toString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
