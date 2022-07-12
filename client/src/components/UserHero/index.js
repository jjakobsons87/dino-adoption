import React from 'react';

import User from '../../assets/images/rando.jpg'
// import Username from ''
// import numberOwned from ''

const UserHero = (username) => {

    return (
        <header className = "profile-header">

            <div className="profile-container">
                {/* Owned Dinos: # */}
                <img className="profile-pic"
                    src={User}
                    alt="User"
                />
            </div>
        </header>
    )
};

export default UserHero;