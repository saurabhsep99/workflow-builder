import { cn } from '@/lib/utils'
import { BotMessageSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
BotMessageSquare

export const Logo = ({fontSize="text-2xl",iconSize=20}:{fontSize?:string,iconSize?:number}) => {
  return (
    <Link href='/' className={cn("text-2xl font-extrabold flex items-center ",fontSize)}>
        <div className='rounded-xl bg-gradient-to-r text-white mr-2 from-emerald-500 to-emerald-600 p-2 flex items-center justify-center'>
        <BotMessageSquare size={iconSize}/>
        </div>

        <div>
            <span className='bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent'>WorkFlow</span>
        </div>

        <div>
            <span className=' text-stone-800 dark:text-stone-300'>Builder</span>
        </div>
    </Link>
  )
}
