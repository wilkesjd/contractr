import React from 'react';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full text-white p-4 bg-gradient-to-br from-white to-purple-600 text-center">
      <nav>
        <Link href="dashboard" className = "font-bold text-black mx-10">Dashboard</Link>
        <Link href="search" className = "font-bold text-black mx-10">Search</Link>
        <Link href="messages" className = "font-bold text-black mx-10">Messages</Link>
        <Link href="settings" className = "font-bold text-black mx-10">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
