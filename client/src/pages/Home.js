import React from 'react';

import AdoptionPage from '../components/AdoptionPage';
import Login from '../components/Login/index';
import SignUp from '../components/SignUp/signup'

const Home = () => {
    return (
        <div>
            <Login />
            <SignUp />
            <main>
            </main>
        </div>
    )
};

export default Home;