import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

//components
import LikedDinos from '../components/LikedDinos';
import UserPhoto from '../components/UserPhoto';

const Profile = (props) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
  
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/profile:username" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }

    return (
        <div className="profile-container">
            <div className="user-hero">
                <h2 className="user-welcome text-secondary p-3">
                    Welcome {`${user.username}`}!
                </h2>
                <UserPhoto/>
            </div>
            <LikedDinos></LikedDinos>
        </div>
    )
};

export default Profile;