"use client";

import { CoinsIcon, Columns4, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import React from 'react'
import { Logo } from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './button';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const routes = [
    {
        href: "/",
        label: 'Home',
        icon: HomeIcon
    },
    {
        href: "/workflows",
        label: 'Workflows',
        icon: Layers2Icon
    },
    {
        href: "/credentials",
        label: 'Credentials',
        icon: ShieldCheckIcon
    },
    {
        href: "/billing",
        label: 'Billing',
        icon: CoinsIcon
    },
]

export const DesktopSideBar = () => {

    const activePathName = usePathname();
    const activeRoute = routes.find(item => item.href.length > 0 && item.href === activePathName) || routes[0];

    debugger
    
    return (
        <div className='hidden md:block min-w-[250px] max-w-[300px] h-screen overflow-y-auto w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate'>
            <div className='flex flex-1 justify-center p-4 align-middle items-center'>
                <Logo />
            </div>

            <div className='flex flex-col p-2'>
                {routes?.map((item, index) => (
                    <Link key={index} href={item.href} className={buttonVariants({
                        variant: activeRoute.href === item.href ? 'sideBarActiveItems' : 'sideBarItems',


                    })}>
                        <item.icon size={20} />
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export const MobileSideBar = () => {
    const activePathName = usePathname();
    const activeRoute = routes.find(item => item.href.length > 0 && item.href === activePathName) || routes[0];
    
    return (
        <Sheet>
            <SheetTrigger asChild>
                    <div className='mr-4'>
                    <Columns4 />
                    </div>
                    
                
            </SheetTrigger>
            
            <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
                <SheetTitle>
                <div className='flex flex-1 justify-center p-4'>
                    <Logo />
                </div>
                </SheetTitle>
            </SheetHeader>

                <div className='flex flex-col space-y-2'>
                    {routes?.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href} 
                            className={buttonVariants({
                                variant: activeRoute.href === item.href 
                                    ? 'sideBarActiveItems' 
                                    : 'sideBarItems',
                                className: 'w-full justify-start'
                            })}
                        >
                            <item.icon className="mr-2" size={20} />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}