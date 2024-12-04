"use client"

import React from 'react'
import { Columns4, Slash } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis
} from "./breadcrumb"
import { usePathname } from 'next/navigation'
import { MobileSideBar } from './DesktopSideBar'
import { useIsMobile } from '@/hooks/use-mobile'




export function BreadcrumpHeader() {
 const path=usePathname();
 const pathName = path === '/' ? [''] : path.split('/');   
 const isMobileView = useIsMobile(); 
 const [isSheetOpen,setIsSheetOpen]=React.useState(false)
    return (
      <div className='flex flex-1 align-middle items-center'>
        {/* {isMobileView && <div className='mr-7'><Columns4 onClick={()=>setIsSheetOpen(!isSheetOpen)}/></div>} */}
        {isMobileView && <MobileSideBar/>}
  <Breadcrumb >
        <BreadcrumbList>
          {pathName?.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={`/${item}`}>{item ==='' ? 'Home' : item }</BreadcrumbLink>
              {index < pathName.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      
    )
}
