"use client";
import Link from "next/link";

const GoChatButton  = () => {
    return ( 
    <div className="hidden sm:block">
    <Link href={"/conversations"}>
        <img src="/img/logo_seul.png" className="h-10 mx-2 " alt="Logo" />
    </Link> 
    </div>
);
}
 
export default GoChatButton ;