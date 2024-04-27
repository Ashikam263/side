"use client"
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
  const [status, setStatus] = useState('Inactive');
  const [countries, setCountries] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedModules, setSelectedModules] = useState([]);
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      name: "Product 1",
      modules: "Module 1, Modules 2",
      countries: "Qatar, Saudi Arabia",
      activityStatus: "Active",
    },
    {
      id: 2,
      name: "Product 2",
      modules: "Module 1, Modules 2",
      countries: "Qatar, Saudi Arabia",
      activityStatus: "Inactive",
    },
  ]);

  const mapCountryName = (country) => {
    switch (country) {
      case 'Qatar':
        return '🇶🇦 QTR';
      case 'Saudi Arabia':
        return '🇸🇦 KSA';
      default:
        return country;
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleHomeClick = () => {
  };

  const handleLogoutClick = () => {
  };


  const handleSave = () => {
    const selectedModuleNames = selectedModules.map((moduleId) => {
      switch (moduleId) {
        case 'Module1':
          return 'Module 1';
        case 'Module2':
          return 'Module 2';
        case 'Module3':
          return 'Module 3';
        default:
          return '';
      }
    });
  
    const formattedModules = selectedModuleNames.join(', ');
    const formattedCountries = countries.map((country) => mapCountryName(country)).join(', ');
  
    const newInvoice = {
      id: invoices.length + 1,
      name,
      modules: formattedModules,
      countries: formattedCountries,
      activityStatus: status,
    };
  
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
  
    // Reset form fields and selections
    setShowAlert(false);
    setName('');
    setStatus('Inactive');
    setCountries([]);
    setModules([]);
    setSelectedModules([]);
  };
  

  const handleAddUserClick = () => {
    setShowAlert(true); // Show the alert dialogue
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the alert dialogue
  };

  const handleModuleCheckboxChange = (moduleId) => {
    if (selectedModules.includes(moduleId)) {
      // Module already selected, remove it
      setSelectedModules((prevModules) => prevModules.filter((id) => id !== moduleId));
    } else {
      // Module not selected, add it
      setSelectedModules((prevModules) => [...prevModules, moduleId]);
    }
  };

  const renderSelectedModules = () => {
    if (selectedModules.length === 0) {
      return 'Select modules...';
    } else {
      const selectedModuleNames = selectedModules.map((moduleId) => {
        switch (moduleId) {
          case 'Module1':
            return 'Module 1';
          case 'Module2':
            return 'Module 2';
          case 'Module3':
            return 'Module 3';
          default:
            return '';
        }
      });
      return selectedModuleNames.join(', ');
    }
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
            <BreadcrumbLink href="">Solutions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Solutions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='p-8 bg-slate-100'>
        <header className="flex items-center justify-between px-4 py-2 bg-white text-black border-b-2">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">Solutions</h1>
            <span>Manage your solutions and view their sales performance</span>
          </div>
          <div className="flex items-center">
            <Input type="email" placeholder="Search User" className="mr-2" />
            <Button variant="outline" className="mr-2"><FaFilter />Filter</Button>
            <Button variant="outline" className="mr-2"><FaFileDownload />Export</Button>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="outline" onClick={handleAddUserClick} className='bg-emerald-200'>
                  <IoAddCircle /> Add Solutions
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="p-4 w-50">
                <AlertDialogHeader>
                  <AlertDialogTitle>Add Solution</AlertDialogTitle>
                  <AlertDialogDescription>
                    Make changes to your solution here. Click save when you are done.
                  </AlertDialogDescription>
                </AlertDialogHeader>


                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Name</label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full' />
                  </div>

                  <div className="flex flex-row items-center">
                    <label className="block w-1/4 mr-2 text-right">Active</label>
                    <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                      <SelectTrigger style={{ width: '100%' }}>
                        <SelectValue placeholder="Activity Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-row items-center">
                    <label className="block w-20 mr-2 text-right">Countries</label>
                    <div className="flex items-center space-x-2">
                    <Checkbox id="Qatar" onChange={(e) => setCountries(prevCountries => [...prevCountries, e.target.id])} />
                    <label htmlFor="Qatar" className="text-sm font-medium leading-none">
                      🇶🇦 Qatar
                    </label>
                    <Checkbox id="SaudiArabia" onChange={(e) => setCountries(prevCountries => [...prevCountries, e.target.id])} />
                    <label htmlFor="SaudiArabia" className="text-sm font-medium leading-none">
                      🇸🇦 Saudi Arabia
                    </label>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="ml-4">Modules</label>
                    <div className="ml-20 space-y-2">
                      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2 rounded">
                        <Checkbox id="Module1" onChange={(e) => setModules(prevModules => [...prevModules, e.target.id])} />
                        <div className="flex flex-col">
                          <label htmlFor="Module1" className="text-sm font-medium leading-none">
                            Module 1
                          </label>
                          <p className="text-sm text-muted-foreground">
                            A very very long description for Module 1
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
                        <Checkbox id="Module2" onChange={(e) => setModules(prevModules => [...prevModules, e.target.id])} />
                        <div className="flex flex-col">
                          <label htmlFor="Module2" className="text-sm font-medium leading-none">
                            Module 2
                          </label>
                          <p className="text-sm text-muted-foreground">
                            A very very long description for Module 2
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border-2 border-slate-400 mt-2">
                        <Checkbox id="Module3" onChange={(e) => setModules(prevModules => [...prevModules, e.target.id])} />
                        <div className="flex flex-col">
                          <label htmlFor="Module3" className="text-sm font-medium leading-none">
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



        <Table className=' bg-white'>
          <TableCaption>A list of your recent invoices.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-right">Name</TableHead>
              <TableHead className="text-right">Active</TableHead>
              <TableHead className="text-right">Modules</TableHead>
              <TableHead className="text-right">Countries</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium whitespace-nowrap text-right">
                  <span>{invoice.name}</span>
                </TableCell>
                <TableCell className="pl-4 text-right">
                  {invoice.activityStatus === "Active" ? (
                    <Button variant="outline" className='border-green-400 border-2 text-green-400'>Active</Button>
                  ) : (
                    <Button variant="outline" className='border-red-400 border-2 text-red-400'>{invoice.activityStatus}</Button>
                  )}
                </TableCell>
                <TableCell className='text-right'>{invoice.modules}</TableCell>
                <TableCell className="text-right">
                {invoice.countries.split(', ').map((country) => (
                  <div
                    key={country}
                    style={{
                      display: 'inline-block',
                      padding: '2px',
                      border: '1px solid',
                      borderRadius: '5px',
                      margin: '2px',
                      backgroundColor: '#FEFDED',
                    }}
                  >
                    {mapCountryName(country)}
                  </div>
                ))}
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
