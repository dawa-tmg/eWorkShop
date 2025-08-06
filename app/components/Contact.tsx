import Input from "./Input"
import Button from "./Button"
export default function ContactForm(){
    return (
        <form className="bg-[#eee] w-[70%] rounded shadow-lg grid grid-cols-1 gap-5 p-10 mx-auto">
            <h2 className="text-4xl text-red-500 font-bold pb-5">Online Estimate Form</h2>
            <Input 
            type = 'text'
            name = 'name'
            placeholder = 'Your Name'
            />
            <Input 
            type = 'email'
            name = 'mail'
            placeholder = 'Email Address'
            />
            <Input 
            type = 'number'
            name = 'phone'
            placeholder = 'Phone Number'
            />
            <select className="bg-none focus:outline-none border border-gray-400 rounded text-gray-500 px-2 py-4" name="" id="">
                <option value="">Select Service</option>
                <option value="Repair">Repair</option>
                <option value="Tyre Change">Tyre Change</option>
                <option value="Wheel Alignment">wheel Alignment</option>
            </select>
            <Input 
            type = 'text'
            name = 'model'
            placeholder = 'Year Make & Model of Vehicle'
            />
            <Input 
            type = 'date'
            name = 'date'
            placeholder = ''
            />
            <textarea className="focus:outline-none border border-gray-400 rounded-lg p-2" name="message" minLength={200} rows={4} placeholder="Describe Issue and Service Request"></textarea>
            <Button 
            text = 'Submit Now'
            />
        </form>
    )
}