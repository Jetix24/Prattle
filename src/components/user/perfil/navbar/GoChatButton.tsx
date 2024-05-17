"use client";
import Link from "next/link";

const GoChatButton  = () => {
    return ( 
    <Link href={"/conversations"}>
        <img src="/img/logo_seul.png" className="h-10 mx-2" alt="Logo" />
    </Link> 
);
}
 
export default GoChatButton ;