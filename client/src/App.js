import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";
import "./App.css";
import { setContext } from '@apollo/client/link/context';

// route imports
import Profile from './pages/Profile';
import Home from './pages/Home';
import Shop from './pages/Shop';
<<<<<<< HEAD
//import Login from '../src/components/Login';
=======
import Modal from '../src/components/Modal';
import Cart from './pages/Cart';
>>>>>>> develop
import Adoption from './pages/Adoption';

// component imports
import Footer from "./components/Footer/index.js";
import Header from "./components/Header/Header.js";


const httpLink = createHttpLink({
    uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

    const [likedDinos, setLikedDinos] = useState(null);

    return (
        <ApolloProvider client={client}>
            <Router>
                <Header likedDinos={likedDinos} setLikedDinos={setLikedDinos} />
                <div className="flex-column justify-flex-start min-100-vh">
                    <div className="container">
                        <Routes>
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
