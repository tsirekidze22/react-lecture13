import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-x-10 items-center">
      <Link to="/" className="text-[25px] text-blue-400">
        MyApp
      </Link>

      <nav>
        <ul className="flex gap-x-3">
          <li>
            <Link to="/" className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="underline">
              Contact - Link
            </Link>
            <a href="/contact">Contact - a</a>
          </li>
          <li>
            <Link to="/about" className="underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
