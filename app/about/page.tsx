import Button from "../components/Button"

export default function About(){
    return (
        <div className="grid grid-cols-2 py-10">
            <div>
                <div className="h-[90%] w-[70%] bg-[url('/car-crash-accident-street.jpg')] bg-cover bg-center shadow-[-20px_20px_0px_0px_rgba(0,_0,_0)] transform translate-x-[3.5%] relative">
                    <img src="/spraying-varnish-paint-car.jpg" alt="spraying paint on car" className="h-[60%] w-[50%] shadow-[-20px_20px_0px_0px_rgba(0,_0,_0)] absolute bottom-0 right-[-25%]"/>
                </div>
                <div className="h-30 w-[80%] bg-red-500 transform translate-y-[-50%] flex gap-5">
                    <div className="h-full w-[20%] bg-red-200 flex flex-col justify-center">
                        <h2 className="text-5xl text-white font-bold mx-auto">75+</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl text-white font-semibold">Years Experiences</h2>
                        <p className="text-xl text-white">Auto Body</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-4xl text-red-500 font-bold">About eWorkShop</h2>
                <p className="text-xl text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat ratione reprehenderit nam est maxime quasi rem ullam maiores nemo a ab eos aliquam, debitis fugiat dignissimos qui, dolore animi, aspernatur quidem velit deserunt veniam magnam. Dolore, nisi sint incidunt, ratione sit possimus corporis accusantium animi tempora esse perferendis quos repellat delectus nulla porro temporibus ab quam, asperiores repellendus? Nostrum repellendus fugiat maxime necessitatibus dignissimos. Quo earum eos, dolores praesentium atque velit vitae, quidem aspernatur voluptatem laborum nostrum fuga blanditiis repellat voluptates? Nisi atque vero harum numquam, facere distinctio, nemo nesciunt veritatis vitae aliquam nam eum dolorum, magnam quaerat adipisci.</p>
                <Button 
                text = {
                    <>
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </>
                }
                />
            </div> 
        </div>
    )
}30