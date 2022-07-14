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
      <div className="profileContainer">

            <div className="profileHeader text-center sectTitle imageDivs">Welcome to the Delusion Dinosaur Adoption Agency! 
            </div>

            <h2 className="sectTitle secTitleB text-center">Profile</h2>

              <div className="aboutPro">

                <div className="col">
                  <div className="profileMainCard">
                    <div className="profile">
                      <UserPhoto/>
                      <br></br>
                      <h4 className="text-white">Welcome {`${user.username}`}</h4>
                      <br></br>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div><h5 className="text-white align-top">Liked Dinosaurs</h5>
                  <LikedDinos likedDinos={props.likedDinos} />
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </div>
            )
};
=======
              </div>
)};
>>>>>>> 6e053a7870a9a69440ba365454720ad3e4017f7e

export default Profile;
