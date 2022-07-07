import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

//components
import LikedDinos from '../components/LikedDinos';
import SelectedDino from '../components/SelectedDino';
import UserHero from '../components/UserHero';

const Profile = (props) => {
    return (
        <div className="profile-container">
            <UserHero></UserHero>
            <LikedDinos></LikedDinos>
            <SelectedDino></SelectedDino>
        </div>
    )
};

export default Profile;