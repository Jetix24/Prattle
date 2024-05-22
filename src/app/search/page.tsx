"use client";
import { useSearchParams } from "next/navigation";
import DashboardPage from "../dashboard/page";

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search?.get("q") : null;

    const encodedSearchQuery = encodeURI(searchQuery || "");

    console.log("Search query: ", searchQuery);
    return ( 
            <div>
                <h1>Search Page</h1>
            </div>
     );
}
 
export default SearchPage;
