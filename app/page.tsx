"use client"

import Image from "next/image";
import Topbar from "@/components/Topbar";
import Tableview from "@/components/posttable/Tableview";
import { redirect, useRouter } from "next/navigation";

export default function Home() {

  const Router=useRouter()
  redirect('/post_table')

  
  return (
    <div>
    {/* <Topbar/>
    <Tableview/> */}
    
    </div>
  );
}
