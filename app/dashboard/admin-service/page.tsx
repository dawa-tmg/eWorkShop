'use client'

import { useState, useEffect, useRef } from "react";
import { RxTimer } from "react-icons/rx";
import { GiTakeMyMoney } from "react-icons/gi";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";

export default function Service() {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    // Fetch services on mount
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/service');
                if (!response.ok) throw new Error("Failed to fetch services");
                const { services } = await response.json();
                setServices(services);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    // Close form on outside click
    useEffect(() => {
        if (!showForm) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setShowForm(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showForm]);

    // Toggle form
    const toggleForm = () => setShowForm(prev => !prev);

    // Post service
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const body = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/service', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (!response.ok) throw new Error("Failed to add service");

            const newService = await response.json();
            setServices(prev => [...prev, newService]);
            setShowForm(false);
            e.currentTarget.reset();
        } catch (err: any) {
            alert(err.message);
        }
    };

    // Edit service
    const editService = (id: string) => {
        alert(`Wanna edit id ${id} ???`);
    };

    // Delete service
    const deleteService = async (id: string) => {
        try {
            const response = await fetch(`/api/service/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error("Error deleting service");
            setServices(prev => prev.filter(s => s.service_id !== id));
        } catch (err: any) {
            alert(err.message);
        }
    };

    if (loading) return <h1>Loading services...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className="border border-gray-100 rounded-xl shadow-md">
            <div className="flex items-center justify-between p-5">
                <h2 className="text-xl font-bold">Available Services</h2>

                {showForm && (
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-[30%] fixed absolute translate-x-[100%] translate-y-[30%] bg-gray-200/95 shadow-md grid gap-4 p-10 z-10"
                    >
                        <h2 className="text-2xl font-semibold text-gray-500">Add Service</h2>
                        <Input type="text" name="name" placeholder="Service Name" />
                        <textarea
                            className="focus:outline-none border border-gray-400 rounded-lg p-2"
                            name="description"
                            maxLength={200}
                            rows={4}
                            placeholder="Service Description"
                        ></textarea>
                        <Input type="number" name="price" placeholder="Service Cost" />
                        <Input type="number" name="duration" placeholder="Service Duration" />
                        <Button text="Submit" />
                    </form>
                )}

                <button
                    onClick={toggleForm}
                    className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700"
                >
                    Add New Service
                </button>
            </div>

            <div className="w-full p-5">
                {services.map((service) => (
                    <div
                        key={service.service_id}
                        className="hover:bg-gray-100 hover:rounded-xl shadow-md rounded-b-xl flex justify-between items-center mb-5 p-5"
                    >
                        <div>
                            <h2 className="text-lg text-gray-600 font-bold">{service.name}</h2>
                            <p className="text-lg text-gray-500">{service.description}</p>
                            <p className="text-lg text-gray-600 font-bold flex gap-2">
                                <GiTakeMyMoney className="text-2xl text-gray-600" />Nu:{service.price}/-
                            </p>
                            <p className="text-lg text-gray-500 font-bold flex gap-2">
                                <RxTimer className="text-2xl text-gray-600" />{service.duration} min
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            <button
                                onClick={() => editService(service.service_id)}
                                className="text-lg font-bold text-blue-600 hover:text-blue-800"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteService(service.service_id)}
                                className="text-lg font-bold text-red-600 hover:text-red-800"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
