"use server"

import  prisma  from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"

export async function GetWorkFlowForUser()
{
    const { userId } = await auth();

    // if(!userId){
    //     throw new Error("Unauthorized");
    // }
    const workflows = await prisma.workFlow.findMany({
        where: { userId: userId ?? undefined },
         orderBy: { createdAt: "desc" },
      });
      
      return workflows
      
    
}