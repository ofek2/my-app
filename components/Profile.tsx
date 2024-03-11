
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import React from 'react';

function Profile(){
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>Welcome, {user.user?.username}</h1>
      <p>Email: {user.user?.email}</p>
    </div>
  );
};

export default Profile;