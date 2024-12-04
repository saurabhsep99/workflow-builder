import { Logo } from '@/components/ui/logo'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <Logo/>
        {children}
    </div>
  )
}

export default layout