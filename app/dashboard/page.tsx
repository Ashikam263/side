"use client";

import { useState } from 'react';
import { FiSun, FiMoon, FiHome, FiLogOut } from 'react-icons/fi';
import { BiPowerOff } from "react-icons/bi";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { Input } from '@/components/ui/input';
import { FaFilter, FaFileDownload } from 'react-icons/fa';
import { IoAddCircle } from "react-icons/io5";
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, TableFooter
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for managing alert dialogue visibility
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [solutions, setSolutions] = useState([]);
  const [modules, setModules] = useState([]);
  const invoices = [
    {
      name: "Liam Johnson",
      email: "liamjohnson@outlook.com",
      role: "Sales",
      modules: "Module 1, Modules 2",
      solutions: "Solution 1, Solution 2",
      activityStatus: "Active",
    },
    {
      name: "Sussanne taylor",
      email: "sussanneataylor@outlook.com",
      role: "Admin",
      modules: "Module 1, Modules 2",
      solutions: "Solution 1, Solution 2",
      activityStatus: "inActive",
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleHomeClick = () => {
    // handle home click action
  };

  const handleLogoutClick = () => {
    // handle logout click action
  };

  const handleSave = () => {
    // handle save action
  };

  const handleAddUserClick = () => {
    setShowAlert(true); // Show the alert dialogue
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the alert dialogue
  };

  return (
    <div className="p-4">
      <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
        <h1 className="text-3xl font-bold "><Link href='/'>Flick.</Link></h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={toggleDarkMode} className="text-black ">
            {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </Button>
          <Button variant="outline" onClick={handleHomeClick} className="text-black ">
            Home<FiHome className="ml-1 w-6 h-6" />
          </Button>
          <Button variant="outline" onClick={handleLogoutClick} className="text-red-500 border-2 border-red-500">
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

      {/* User Management Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-1">User</h1>
          <span>Manage your user and view their sales performance</span>
        </div>
        <div className="flex items-center">
          <Input type="email" placeholder="Search User" className="mr-2" />
          <Button variant="outline" className="mr-2"><FaFilter/>Filter</Button>
          <Button variant="outline" className="mr-2"><FaFileDownload/>Export</Button>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="outline" onClick={handleAddUserClick}>
                <IoAddCircle /> Add User
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="p-4 w-50">
              <AlertDialogHeader>
                <AlertDialogTitle>Add User</AlertDialogTitle>
                <AlertDialogDescription>
                  Make changes to your user here. Click save when you're done.
                </AlertDialogDescription>
              </AlertDialogHeader>


              <div className="flex flex-col space-y-4">
  <div className="flex flex-row items-center">
    <label className="block w-20 mr-2 text-right">Name</label>
    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full'/>
  </div>
  <div className="flex flex-row items-center">
    <label className="block w-20 mr-2 text-right">Email</label>
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className='w-full'/>
  </div>

  <div className="flex flex-row items-center">
    <label className="block w-20 mr-2 text-right">Status</label>
    <Select>
      <SelectTrigger style={{width: '100%'}}>
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="in progress">In Progress</SelectItem>
          <SelectItem value="unavailable">Unavailable</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <div className="flex flex-row items-center">
    <label className="block w-20 mr-2 text-right">Role</label>
    <Select>
      <SelectTrigger style={{width: '100%'}}>
        <SelectValue placeholder="Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>

  <div className="flex flex-row items-center">
    <label className="block w-20 mr-2 text-right">Solutions</label>
    <div className="flex items-center space-x-2">
      <Checkbox id="solution1" />
      <label htmlFor="solution1" className="text-sm font-medium leading-none">
        Solution 1
      </label>
      <Checkbox id="solution2" />
      <label htmlFor="solution2" className="text-sm font-medium leading-none">
        Solution 2
      </label>
    </div>
  </div>
  <div className="flex flex-col">
    <label className="block mb-1">Modules</label>
    <div className="ml-20 space-y-2">
      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
        <Checkbox id="module1" />
        <div className="flex flex-col">
          <label htmlFor="module1" className="text-sm font-medium leading-none">
            Module 1
          </label>
          <p className="text-sm text-muted-foreground">
            A very very long description for Module 1
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
        <Checkbox id="module2" />
        <div className="flex flex-col">
          <label htmlFor="module2" className="text-sm font-medium leading-none">
            Module 2
          </label>
          <p className="text-sm text-muted-foreground">
            A very very long description for Module 2
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
        <Checkbox id="module3" />
        <div className="flex flex-col">
          <label htmlFor="module3" className="text-sm font-medium leading-none">
            Module 3
          </label>
          <p className="text-sm text-muted-foreground">
            A very very long description for Module 3
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

              <AlertDialogFooter className="flex justify-end">
                <AlertDialogCancel onClick={handleCloseAlert}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSave}>Save</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>


        </div>
      </header>
      


      {/* Table */}
      <Table className='mt-4'>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Modules</TableHead>
            <TableHead className="">Solutions</TableHead>
            <TableHead className="">Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className="font-medium flex flex-col">
                <span>{invoice.name}</span>
                <span className="text-sm text-gray-500">{invoice.email}</span>
              </TableCell>
              <TableCell>{invoice.role}</TableCell>
              <TableCell>{invoice.modules}</TableCell>
              <TableCell className="">{invoice.solutions}</TableCell>
              <TableCell className="">
                {invoice.activityStatus === "Active" ? (
                  <Button variant="outline" className='border-green-400 border-2 text-green-400'>Active</Button>
                ) : (
                  <Button variant="outline" className='border-red-400 border-2 text-red-400'>{invoice.activityStatus}</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="">$2,500.00</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>

    </div>
  );
}
