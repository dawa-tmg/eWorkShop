export default function Header() {
  return (
    <header className="h-[10vh] shadow-lg flex flex-col justify-center">
      <div className="w-[90%] mx-auto flex justify-between text-center">
        <div className="border border-2 border-red-500 rounded p-2">
          <a className="text-3xl text-red-500 font-bold" href="/">eWorkShop</a>
        </div>
        <nav className="grid grid-cols-5 gap-3">
          <a className="text-xl text-red-500 font-bold p-3" href="/">Home</a>
          <a className="text-xl text-red-500 font-bold p-3" href="/about">About</a>
          <a className="text-xl text-red-500 font-bold p-3" href="/services">Services</a>
          <a className="text-xl text-red-500 font-bold p-3" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

