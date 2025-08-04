export default function ContactForm(){
    return (
        <div>
            <form className="w-[40%] border-2 rounded-xl grid grid-cols-1 gap-5 p-5 mx-auto">
                <input className="focus:outline-none border-2 rounded-lg p-2" type="email" name="mail" placeholder="Email" />
                <textarea className="focus:outline-none border-2 rounded-lg p-2" name="message" minLength={200} rows={10} placeholder="Write Your Message Here"></textarea>
                <button className="border-2 rounded-lg p-2" type="submit">Submit</button>
            </form>
        </div>
    )
}