import Link from "next/link";
const Header: React.FC = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-5 py-4 shadow">
        <div className="font-semibold text-2xl">ALX Project 2</div>
        <div className="flex gap-5">
          <Link
            className="text-xl font-extralight hover:text-blue-600 cursor-pointer"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="text-xl font-extralight hover:text-blue-600 cursor-pointer"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-xl font-extralight hover:text-blue-600 cursor-pointer"
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className="text-xl font-extralight hover:text-blue-600 cursor-pointer"
            href="/users"
          >
            Users
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
