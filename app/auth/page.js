"use client"

import Auth from "@components/Auth/Auth";
import { useSearchParams } from "next/navigation";

const page = () => {

    const s=useSearchParams()
    let session=s.get("session")
    return(
        <Auth session={session}/>
    )
}
export const dynamic = "force-dynamic"


export default page;