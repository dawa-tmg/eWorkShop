import Button from "../components/Button";

export default function About() {
  return (
    <div className="grid grid-cols-2 py-10">
      <div>
        <div className="h-[90%] w-[70%] bg-[url('/car-crash-accident-street.jpg')] bg-cover bg-center shadow-[-20px_20px_0px_0px_rgba(0,_0,_0)] transform translate-x-[3.5%] relative">
          <img
            src="/spraying-varnish-paint-car.jpg"
            alt="spraying paint on car"
            className="h-[60%] w-[50%] shadow-[-20px_20px_0px_0px_rgba(0,_0,_0)] absolute bottom-0 right-[-25%]"
          />
        </div>
        <div className="h-30 w-[80%] bg-red-500 transform translate-y-[-50%] flex gap-5">
          <div className="h-full w-[20%] bg-red-200 flex flex-col justify-center">
            <h2 className="text-5xl text-white font-bold mx-auto">75+</h2>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-white font-semibold">
              Years Experiences
            </h2>
            <p className="text-xl text-white">Auto Body</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-6xl text-red-500 font-bold">About eWorkShop</h2>
        <p className="text-xl text-gray-500 py-10">
          eWorkshop is a modern automotive management system designed to
          streamline operations in car repair shops and service centers. It
          offers features like digital job cards, real-time service tracking,
          inventory management, and customer communication tools. By integrating
          technology into the traditional workshop environment, eWorkshop
          improves efficiency, reduces paperwork, and enhances customer
          satisfaction. Ideal for both small garages and large service networks,
          eWorkshop is revolutionizing how workshops operate in the digital age.
        </p>
        <Button
          text={
            <>
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </>
          }
        />
      </div>
    </div>
  );
};
