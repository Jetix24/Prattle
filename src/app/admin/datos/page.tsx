'use client'

import React, { useEffect, useState } from "react";
import UserCard from './UserCard';

const getUsers = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_NEXTAUTH_URL + '/api/user');
  const data = await response.json();
  return data;
}

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers().then(setData);
  }, []);

  return (
    <div>
      <h2>Total Users: {data.length}</h2>
      {data.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default DataDisplay;