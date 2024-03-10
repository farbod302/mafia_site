"use client"

import PayResult from "@components/pay-resault/PayResault";
import { useSearchParams } from "next/navigation";

const page = () => {

    const s = useSearchParams()
    const status = s.get("status")
    const code = s.get("code")
    return (
        <PayResult status={status} code={code} />
    )
}
export const dynamic = "force-dynamic"


export default page;