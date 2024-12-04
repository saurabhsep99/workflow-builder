import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function NotFound() {
  return (
  <div className='flex justify-center items-center flex-col min-h-screen p-4'>
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-primary'>404</h1>
            <h2 className='font-semibold text-2xl'>Page not found</h2>

            <p className='text-muted-foreground mt-2'>The page you are looking for does not exist</p>
            <Link href='/' className=' mt-6  justify-between text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-primary-800'>
            <ArrowLeft className='mr-2'/>
            Back to Dashboard</Link>

    </div>
    <footer className='text-muted-foreground mt-12'>If you believe it is error then Please contact our support team</footer>

  </div>
  )
}
