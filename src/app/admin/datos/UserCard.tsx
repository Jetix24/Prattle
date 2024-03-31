import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-card-content">
        <h2 className="user-name">{user.name}</h2>
        <h5 className="user-email">{user.email}</h5>
      </div>
    </div>
  );
}

export default UserCard;