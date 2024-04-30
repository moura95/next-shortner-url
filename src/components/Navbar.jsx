import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-blue-100 flex justify-center items-center">
      <ul className="flex gap-2">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/metrics">Metrics</a>
        </li>

        <li>
          <a href="/create">Create</a>
        </li>
      </ul>
    </nav>
  );
}
