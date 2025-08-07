'use client'
import Input from "../components/Input";
import Button from "../components/Button";

export default function AddService() {
    //Toggle Form
    const toggleForm = function(){
        const form = document.getElementById('addService')
        form?.classList.toggle('hidden')
        
        function hideOnClickOutside(event:any) {
            if (!form.contains(event.target)) { 
                form.classList.add('hidden');
                window.removeEventListener('click', hideOnClickOutside);
            }
        }
        setTimeout(() => {
            window.addEventListener('click', hideOnClickOutside);
        }, 0);
    }
    
    //Post Service
    const handleSubmit = async (e:any)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData)
    const { name, description, price, duration } = body;
        try{
            const response = await fetch('/api/service',{
            method:'POST',
            body : JSON.stringify({ name, description, price, duration })
            })
        }catch(error){
            return Response.json({error: 'Cannot add service try again.'})
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="addService" className="w-[30%] fixed absolute transform translate-x-[100%] transform translate-y-[30%] bg-gray-200/95 shadow-md grid gap-4 p-10 z-10 hidden">
                <h2 className="text-2xl font-semibold text-gray-500">Add Service</h2>
                <Input type="text" name="name" placeholder="Service Name" />
                <textarea className="focus:outline-none border border-gray-400 rounded-lg p-2" name="description" maxLength={200} rows={4} placeholder="Service Description"></textarea>
                <Input type="number" name="price" placeholder="Service Cost" />
                <Input type="number" name="duration" placeholder="Service Duration" />
                <Button text="Submit"/>
            </form>
            <button onClick={toggleForm} className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700">Add New Service</button>
        </>
    )  
}