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
    
    return ( 
    <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <div className="overflow-x-auto scrollbar scrollbar-track-slate-600 scrollbar-thumb-cyan-400">
                    <div className="flex space-x-4 mb-2">
                        {items.map((item) => (
                            <div key={item.id} className="flex-none w-1/4">
                                <UserCard data={item} />
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    </div> 
    );
}
 
export default UsersList;