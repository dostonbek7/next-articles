import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-200">
    <div className="max-container">
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-5">
        <Link href="/" className="text-3xl font-semibold">Articles</Link>

        <nav className="flex gap-3">
          <Link className="link-hover" href="/">Home</Link>
          <Link className="link-hover" href="/articles">Articles</Link>
          <Link className="link-hover" href="/about">About</Link>
          <Link className="link-hover" href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
