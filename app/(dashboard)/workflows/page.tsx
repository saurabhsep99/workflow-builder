import React, { Suspense } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { GetWorkFlowForUser } from '@/workflows/actions/getWorkFlowAction'
import { Alert,AlertDescription,AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

Alert
const page = () => {
  return (
    <div className='h-full flex flex-col'>
      <div className='flex flex-col p-3 gap-y-2'>
        <h1 className='text-2xl font-bold '>WorkFlows</h1>
        <h3 className='text-muted-foreground '>Manage your WorkFlows</h3>
      </div>

      <div className='h-full py-6'>
        <Suspense fallback={<UserWorkFlowSkelton />}>
          <UserWorkFlow />
        </Suspense>
      </div>
    </div>
  )
}

function UserWorkFlowSkelton() {
  return (
    <div className="flex flex-col space-y-3">
      {[1,2,3,5].map((item, index) => <Skeleton key={index} className="h-[300px] w-full rounded-xl" />)}
    </div>
  )
}

async function UserWorkFlow(){

  const workflows = await GetWorkFlowForUser();

  if(!workflows){
    return(
      <Alert variant={"destructive"}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
      </Alert>
    )
  }
  return(<div></div>)
}

export default page