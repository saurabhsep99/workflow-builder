import React from 'react'
import { Separator } from '@/components/ui/separator'
import { DesktopSideBar } from '@/components/ui/DesktopSideBar'
import { BreadcrumpHeader } from '@/components/ui/breadcrumpHeader'
import { ModeToggle } from '@/components/ui/themeToggleButton'
import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'



function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen'>
            <DesktopSideBar/>
            <div className='flex-1 min-h-screen flex-col gap-2'>
                <header className='flex items-center justify-between  h-[60px] py-4 px-6 container'> 
                    <BreadcrumpHeader/>
                    <ModeToggle/>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </header>
                    <Separator/>
                <div className='overflow-auto'>
                    <div className='flex-1 container py-4 text-accent-foreground'>
                    {children}
                    </div>
                    
                </div>
            </div>
        </div>  
    )
}

export default layout