export default function Header() {
  return (
    <header className="h-[10vh] shadow-lg flex flex-col justify-center">
      <div className="w-[90%] mx-auto flex justify-between text-center">
        <div className="border border-2 p-2">
          <a className="text-2xl font-bold" href="/">eWorkShop</a>
        </div>
        <nav className="grid grid-cols-5 gap-5 self-center">
          <a className="border p-2" href="/">Home</a>
          <a className="border p-2" href="/">About</a>
          <a className="border p-2" href="/">Services</a>
          <a className="border p-2" href="/team">Team</a>
          <a className="border p-2" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

