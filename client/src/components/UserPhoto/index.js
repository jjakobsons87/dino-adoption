import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';

const UserPhoto = () => {
    const currentUser = Auth.loggedIn();
    const [photoURL, setPhotoURL] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU")

    function handleClick() {
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser])

    return (
        <div className="profile-photo">
            <img src={photoURL} alt="Avatar" className="avatar"/>
            <button onClick={handleClick} className="upload-photo">UPLOAD</button>
        </div>
    )
};

export default UserPhoto;