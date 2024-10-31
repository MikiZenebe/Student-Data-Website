import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className=" container relative mx-auto flex justify-between overflow-hidden px-4 py-4 items-center md:gap-[300px] gap-[100px]">
      <Link
        to="/"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        Student Data
      </Link>

      <div className="my-4 flex items-center ">
        <Link
          to="/create"
          className="whitespace-nowrap rounded-xl bg-black px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:black/20 focus:ring-offset-2 hover:bg-black/50"
        >
          New Student
        </Link>
      </div>
    </header>
  );
}
