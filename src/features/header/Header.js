import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow flex justify-between items-center p-4">
      <div className="bg-gray-800 text-xl font-bold">LOGO</div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
        &#9776;
      </button>
      {menuOpen && (
        <nav className="absolute top-14 right-4 bg-white shadow-lg p-4 rounded-lg">
          <Link className="block p-2" to="/">
            Home
          </Link>
          <Link className="block p-2" to="/details">
            Details
          </Link>

          <Link className="block p-2" to="/summary">
            Summary
          </Link>
          <Link className="block p-2" to="/bar">
            Bar
          </Link>
          <Link className="block p-2" to="/chart">
            Chart
          </Link>
        </nav>
      )}
    </header>
  );
}
