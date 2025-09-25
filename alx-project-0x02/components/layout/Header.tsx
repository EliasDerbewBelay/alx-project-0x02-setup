import Link from "next/link";
const Header: React.FC = () => {
  return (
    <div>
      <header className="flex justify-between px-4 py-2">
        <div>ALX Project 2</div>
        <div className="flex gap-5">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
