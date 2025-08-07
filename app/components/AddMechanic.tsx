'use client'
import Input from "../components/Input";
import Button from "../components/Button";

export default function AddMechanic() {
    //Toggle Form
    const toggleForm = function(){
        const form = document.getElementById('addMechanic')
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
    
    //Post Mechanic
    const handleSubmit = async (e:any)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData)
    const { name, email, phone, specialization, description, availability } = body;
        try{
            const response = await fetch('/api/mechanic',{
            method:'POST',
            body : JSON.stringify({ name, email, phone, specialization, description, availability })
            })
        }catch(error){
            return Response.json({error: 'Cannot add mechanic try again.'})
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="addMechanic" className="w-[30%] fixed absolute transform translate-x-[100%] transform translate-y-[30%] bg-gray-200/95 shadow-md grid gap-4 p-10 z-10 hidden">
                <h2 className="text-2xl font-semibold text-gray-500">Add Mechanic</h2>
                <Input type="text" name="name" placeholder="Name" />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="number" name="phone" placeholder="Phone Number" />
                <Input type="text" name="specialization" placeholder="Specialization" />
                <input type="hidden" name="availability" value="true" />
                <textarea className="focus:outline-none border border-gray-400 rounded-lg p-2" name="description" maxLength={200} rows={4} placeholder="Service Description"></textarea>
                <Button text="Submit"/>
            </form>
            <button onClick={toggleForm} className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700">Add Mechanic</button>
        </>
    )  
}