import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

//components
import Footer from '../components/Footer';
import LikedDinos from '../components/LikedDinos';
import SelectedDino from '../components/SelectedDino';
import UserHero from '../components/UserHero';

const Profile = (props) => {
    return (
        <div className="profile-container">
            <UserHero></UserHero>
            <LikedDinos></LikedDinos>
            <SelectedDino></SelectedDino>
            <Footer></Footer>
        </div>
    )
};

export default Profile;