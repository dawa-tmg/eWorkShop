import ContactForm from "../components/Contact"

export default function Contact(){
    return (
        <div className="grid grid-cols-2 gap-5 py-10">
            <div>
                <h1 className="text-5xl text-gray-500 font-bold py-10">Why Choose eWorkShop</h1>
                <ul>
                    <li className="text-xl flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-[10%]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatum.</p>
                    </li>
                    <li className="text-xl flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-[10%]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="w-[90%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates labore itaque ratione repellendus omnis enim corporis cumque aliquid illo.</p>
                    </li>
                    <li className="text-xl flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-[10%]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="w-[90%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed placeat corporis accusantium ducimus. Enim et, quisquam magni fugit cum, deserunt exercitationem unde natus molestiae id delectus aliquid saepe dolorem possimus!</p>
                    </li>
                    <li className="text-xl flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-[10%]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae accusamus molestiae sapiente inventore voluptatum quam optio, laboriosam enim accusantium debitis culpa, molestias sequi dicta adipisci nam. Voluptatum odit vitae nostrum dolor voluptatem omnis repudiandae tempora quod iste corporis. Iusto!</p>
                    </li>
                </ul>
            </div>
            <ContactForm />
        </div>
    )
}