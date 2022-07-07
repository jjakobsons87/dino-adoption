import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import User from '../../assets/images/rando.jpg'

const UserHero = () => {
    return (
        <header className = "profile-header">

            <div className="profile-container">
                <img className="profile-pic"
                    src={User}
                    alt="User"
                />
            </div>
        </header>
    )
}