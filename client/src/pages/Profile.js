import React, { useState, useEffect } from 'react';
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
    console.log(data)

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
      <div className="profileContainer">

            <div className="profileHeader">Welcome to the Delusion Dinosaur Adoption Agency! 
            </div>

            <h2 className="sectTitle text-center">Profile</h2>

              <div className="aboutPro imageDivs">

                <div className="col">
                  <div className="profileMainCard">
                    <div className="profile">
                      <UserPhoto/>
                      <br></br>
                      <h4 className="text-white">Username: {`${user.username}`}</h4>
                      <br></br>
                      <h4 className="text-white">Owned Dinosaurs:</h4>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div><h5 className="text-white align-top">Liked Dinosaurs</h5>
                  <LikedDinos likedDinos={props.likedDinos} />
                  </div>
                </div>
              
              </div>

              <h2 className="sectTitle text-center">Owned Dinosaurs</h2>

              <div className="ownedDinos row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

                <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                      <ul className="ownDinoInfo">
                        <li>Species:</li>
                        <li>Diet:</li>
                        <li>Fence Requirement:</li>
                        <li>Gender:</li>
                        <li>Aggressiveness:</li>
                        <li>Human Casualties:</li>
                      </ul>
                </div>
              </div>
              <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                    <ul className="ownDinoInfo">
                      <li>Species:</li>
                      <li>Diet:</li>
                      <li>Fence Requirement:</li>
                      <li>Gender:</li>
                      <li>Aggressiveness:</li>
                      <li>Human Casualties:</li>
                    </ul>
                </div>
              </div>
              <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                    <ul className="ownDinoInfo">
                      <li>Species:</li>
                      <li>Diet:</li>
                      <li>Fence Requirement:</li>
                      <li>Gender:</li>
                      <li>Aggressiveness:</li>
                      <li>Human Casualties:</li>
                    </ul>
                  </div>
                </div>
              <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                    <ul className="ownDinoInfo">
                      <li>Species:</li>
                      <li>Diet:</li>
                      <li>Fence Requirement:</li>
                      <li>Gender:</li>
                      <li>Aggressiveness:</li>
                      <li>Human Casualties:</li>
                    </ul>
                  </div>
                </div>

                <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                      <ul className="ownDinoInfo">
                        <li>Species:</li>
                        <li>Diet:</li>
                        <li>Fence Requirement:</li>
                        <li>Gender:</li>
                        <li>Aggressiveness:</li>
                        <li>Human Casualties:</li>
                      </ul>
                </div>
              </div>

              <div className="col">
                  <div className="profileCard">
                    <div className ="profilePics"></div>
                      <ul className="ownDinoInfo">
                        <li>Species:</li>
                        <li>Diet:</li>
                        <li>Fence Requirement:</li>
                        <li>Gender:</li>
                        <li>Aggressiveness:</li>
                        <li>Human Casualties:</li>
                      </ul>
                </div>
              </div>
          </div>

      </div>
    )
};

export default Profile;