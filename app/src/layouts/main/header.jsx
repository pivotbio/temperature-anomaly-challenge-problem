import { Link } from "react-router-dom";

function Links({ className }) {
  return (
    <ul className={`menu ${className}`}>
      <li>
        <Link to="/">Map</Link>
      </li>
    </ul>
  );
}

export default function Header() {
  return (
    <header className="drawer relative z-10 max-h-10">
      <nav className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <Links className="p-4 w-80 h-full bg-base-200" />
      </nav>
    </header>
  );
}
