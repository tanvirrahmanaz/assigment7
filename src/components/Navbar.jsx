import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm border-b-2 border-blue-500">
      {/* Full width navbar without margin or padding */}
      <div className="w-full flex items-center justify-between h-16 flex-nowrap">
        {/* Left: Logo */}
        <div className="shrink-0 pl-10">
          <a className="text-[20px] font-bold whitespace-nowrap">
            <span className="text-blue-700">Auction</span>
            <span className="text-yellow-400">Gallery</span>
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center min-w-0">
          <ul className="flex gap-6 text-[16px] font-medium text-gray-700">
            <li><a className="hover:text-blue-500">Home</a></li>
            <li><a className="hover:text-blue-500">Auctions</a></li>
            <li><a className="hover:text-blue-500">Categories</a></li>
            <li><a className="hover:text-blue-500">How to works</a></li>
          </ul>
        </div>

        {/* Right: Notification + Avatar */}
        <div className="flex items-center gap-4 pr-4 shrink-0">
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Notification with badge */}
          <div className="relative hidden md:block">
            <button className="btn btn-circle bg-white border border-gray-200 shadow hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 
                  0 0118 14.158V11a6.002 6.002 0 
                  00-5-5.917V4a2 2 0 00-4 
                  0v1.083A6.002 6.002 0 
                  004 11v3.159c0 
                  .538-.214 1.055-.595 
                  1.436L2 17h5m8 0v1a3 3 
                  0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="badge badge-sm bg-red-500 text-white absolute -top-1 -right-1">9</span>
          </div>

          {/* Avatar */}
          <div className="avatar hidden md:block">
            <div className="w-10 rounded-full ring ring-base-300 ring-offset-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-2 py-4 text-[16px] font-medium text-gray-700">
            <li><a className="hover:text-blue-500">Home</a></li>
            <li><a className="hover:text-blue-500">Auctions</a></li>
            <li><a className="hover:text-blue-500">Categories</a></li>
            <li><a className="hover:text-blue-500">How to works</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
