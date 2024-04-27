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
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [solutions, setSolutions] = useState<string[]>([]);
  const [modules, setModules] = useState<string[]>([]);
  const [invoices, setInvoices] = useState([
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
      activityStatus: "Inactive",
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleHomeClick = () => {
  };

  const handleLogoutClick = () => {
  };

  const handleSave = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Modules:", modules);
    console.log("Solutions:", solutions);
    console.log("Status:", status);

    const newUser = {
      name: name,
      email: email,
      role: role,
      modules: modules.join(', '),
      solutions: solutions.join(', '),
      activityStatus: status
    };

    console.log("New User:", newUser);

    setInvoices([...invoices, newUser]);

    setName('');
    setEmail('');
    setRole('');
    setModules([]);
    setSolutions([]);
    setStatus('');

    setShowAlert(false);
  };

  const handleSolutionChange = (solutionName: string, checked: boolean) => {
    if (checked) {
      setSolutions(prevSolutions => [...prevSolutions, solutionName]);
    } else {
      setSolutions(prevSolutions => prevSolutions.filter(solution => solution !== solutionName));
    }
  };


  const handleModuleChange = (moduleName: string, checked: boolean) => {
    if (checked) {
      setModules(prevModules => [...prevModules, moduleName]);
    } else {
      setModules(prevModules => prevModules.filter(module => module !== moduleName));
    }
  };

  const handleAddUserClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4">
      <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
        <h1 className="text-3xl font-bold "><Link href='/'>Flick.</Link></h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={toggleDarkMode} className="text-black ">
            {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </Button>
          <Button variant="outline" onClick={handleHomeClick} className="text-black flex items-center">
            <Link href="/solutions">Home</Link><FiHome className="ml-1 w-6 h-6" />
          </Button>
          <Button variant="outline" onClick={handleLogoutClick} className="text-red-500 border-2 border-red-500">
            Logout<BiPowerOff className="ml-1 w-6 h-6" />
          </Button>
        </div>
      </header>

      <header className="flex px-4 py-2 bg-white text-black border-b-2">
        <Button variant="link" className="text-black ">
          Home
        </Button>
        <Button variant="link" className="text-black ">
          Leads
        </Button>
        <Button variant="link" className="text-black ">
          Customers
        </Button>
        <Button variant="link" className="text-black ">
          Contacts
        </Button>
        <Button variant="link" className="text-black ">
          Tickets
        </Button>
        <Button variant="link" className="text-black ">
          Users
        </Button>
      </header>

      <Breadcrumb className='px-8 m-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Users</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='p-8 bg-slate-100'>
        <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">User</h1>
            <span>Manage your user and view their sales performance</span>
          </div>
          <div className="flex items-center">
            <Input type="email" placeholder="Search User" className="mr-2" />
            <Button variant="outline" className="mr-2"><FaFilter />Filter</Button>
            <Button variant="outline" className="mr-2"><FaFileDownload />Export</Button>

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
                    Make changes to your user here. Click save when you are done.
                  </AlertDialogDescription>
                </AlertDialogHeader>


                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Name</label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full' />
                  </div>
                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Email</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full' />
                  </div>

                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Status</label>
                    <Select>
                      <SelectTrigger style={{ width: '100%' }}>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Active" onClick={() => setStatus("Active")}>Active</SelectItem>
                          <SelectItem value="Inactive" onClick={() => setStatus("Inactive")}>Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Role</label>
                    <Select>
                      <SelectTrigger style={{ width: '100%' }}>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="admin" onClick={() => setRole("admin")}>Admin</SelectItem>
                          <SelectItem value="sales" onClick={() => setRole("sales")}>Sales</SelectItem>
                          <SelectItem value="manager" onClick={() => setRole("manager")}>Manager</SelectItem>

                        </SelectGroup>
                      </SelectContent>
                    </Select>

                  </div>

                  <div className="flex flex-row items-center">
                    <label className="block w-20 mr-2 text-right">Solutions</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="solution1" onChange={(e) => handleSolutionChange("Solution 1", (e.target as HTMLInputElement).checked)} />
                      <label htmlFor="solution1" className="text-sm font-medium leading-none">
                        Solution 1
                      </label>
                      <Checkbox id="solution2" onChange={(e) => handleSolutionChange("Solution 2", (e.target as HTMLInputElement).checked)} />
                      <label htmlFor="solution2" className="text-sm font-medium leading-none">
                        Solution 2
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="ml-4">Modules</label>
                    <div className="ml-20 space-y-2">
                      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
                        <Checkbox id="module1" onChange={(e) => handleModuleChange("Module 1", (e.target as HTMLInputElement).checked)} />
                        <div className="flex flex-col">
                          <label htmlFor="module1" className="text-sm font-medium leading-none">
                            Module 1
                          </label>
                          <p className="text-sm text-muted-foreground">
                            A very very long description for Module 1
                          </p>
                        </div>
                      </div>
                      <Checkbox id="module2" onChange={(e) => handleModuleChange("Module 2", (e.target as HTMLInputElement).checked)} />
                      <Checkbox id="module3" onChange={(e) => handleModuleChange("Module 3", (e.target as HTMLInputElement).checked)} />
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



        <Table className=' bg-white text-black'>
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
          </TableFooter>
        </Table>

      </div>
    </div>
  );
}
