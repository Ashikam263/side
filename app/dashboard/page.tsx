"use client";

import { useState } from 'react';
import { FiSun, FiMoon, FiHome, FiLogOut } from 'react-icons/fi';
import { BiPowerOff } from "react-icons/bi";
import { Button } from '@/components/ui/button';
import Link from "next/link";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    // Implement your dark mode logic here
  };

  const handleHomeClick = () => {
    // Handle home button click
  };

  const handleLogoutClick = () => {
    // Handle logout button click
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
        <h1 className="text-3xl font-bold "><Link href='/'>Flick.</Link></h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline"  onClick={toggleDarkMode} className="text-black ">
            {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </Button>
          <Button variant="outline" onClick={handleHomeClick} className="text-black ">
            Home<FiHome className="ml-1 w-6 h-6" />
          </Button>
          <Button variant="destructive" onClick={handleLogoutClick} className="text-black ">
            Logout<BiPowerOff className="ml-1 w-6 h-6" />
          </Button>
        </div>
      </header>

      <header className="flex px-4 py-2 bg-white text-black border-b-2">
        <Button variant="link"  className="text-black ">
          Home
        </Button>
        <Button variant="link"  className="text-black ">
          Leads
        </Button>
        <Button variant="link"  className="text-black ">
          Customers
        </Button>
        <Button variant="link"  className="text-black ">
          Contacts
        </Button>
        <Button variant="link"  className="text-black ">
          Tickets
        </Button>
        <Button variant="link"  className="text-black ">
          Users
        </Button>
      </header>
    </>
  );
}
