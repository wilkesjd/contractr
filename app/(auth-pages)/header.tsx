import React from 'react';
import ContractrLogo from "@/components/img/smaller-logo"
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full text-white p-4 bg-gradient-to-br from-white to-purple-600 text-center">
      <nav>
        <Link href="dashboard" style={{ color: 'black', margin: '0 50px' }}>Dashboard</Link>
        <Link href="search" style={{ color: 'black', margin: '0 50px' }}>Search</Link>
        <Link href="messages" style={{ color: 'black', margin: '0 50px' }}>Messages</Link>
        <Link href="settings" style={{ color: 'black', margin: '0 50px' }}>Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
