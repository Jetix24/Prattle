import React from "react";
import { isEmpty } from "lodash";
import UserCard from "./UserCard";

interface UsersListProps {
    items: string[];
    title: string;
}   

const UsersList = ({items, title}) => {
    
    if(isEmpty(items)) {
        return null;
    }
if(title === "AA"){
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {items.map((item) => (
                        <div key={item} className="flex-none m-2 w-72">
                            <UserCard data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} else {

    return ( 
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="overflow-x-auto scrollbar scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                        <div className="flex space-x-4 mb-2">
                            {items.map((item) => (
                            <div key={item.id} className="flex-none lg:w-72 w-64">
                                <UserCard data={item} />
                            </div>
                        ))}
                        </div>
                </div>
            </div>
        </div> 
    );
}
}
 
export default UsersList;