// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();

  return <p>User ID: {id}</p>;
};

export default UserProfile;
