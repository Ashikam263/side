"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from 'react';
import './globals.css';
import Link from "next/link";

export default function Home() {
  const [isLeftGridVisible, setIsLeftGridVisible] = useState(true); // Initial visibility

  useEffect(() => {
    const handleResize = () => {
      setIsLeftGridVisible(window.innerWidth >= 340);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className= "grid-container grid-cols-1 lg:grid-cols-2 h-screen">
      {isLeftGridVisible && (
        <div className="left-grid bg-white p-4 flex flex-col justify-end">
          <h1 className="text-white scroll-m-20 text-3xl font-bold tracking-tight absolute top-0 left-0 p-4">
            Flick.
          </h1>
          <blockquote className="border-l-2 pl-6 italic text-white">
            "There's Always a better way to rebuild Rome."
          </blockquote>
          <p className="text-white border-l-2 pl-6">-Team</p>
        </div>
      )}

      <div className="right-grid bg-black flex flex-col justify-center items-center text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 mx-auto">
          Login
        </h2>
        <h4 className="mt-4 mx-auto flex justify-center text-center">
          Enter your email and password below to login.
        </h4>
        <div className="w-full sm:w-1/2 mx-auto mb-4 mt-4 px-2">
          <Input type="email" placeholder="Email" className="mx-auto" />
          <Input type="password" placeholder="Password" className="mt-2 mx-auto" />
          <Button type="submit" className="w-full px-4 py-2 mx-auto mt-2 text-center bg-black text-white font-bold rounded-md ">
          <Link href="/dashboard" >
            Login
          </Link>
          </Button>

          <h4 className="mt-4 mx-auto flex justify-center text-muted-foreground">
            OR CONTINUE WITH
          </h4>
          <Button type='button' variant='outline' className='w-full px-4 py-2 mx-auto mt-2 text-center font-bold rounded-md'>
            <FaGithub className='mr-2' />
            Continue with Github
          </Button>
        </div>
      </div>
    </div>
  );
}
