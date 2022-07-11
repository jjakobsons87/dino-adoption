import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";
import "./App.css";

// route imports
import Profile from './pages/Profile';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from '../src/components/Login';
import Adoption from './pages/Adoption';

// component imports
import Footer from "./components/Footer/index.js";
import Header from "./components/Header/Header.js";
import Cart from './pages/Cart';

const httpLink = createHttpLink({
    uri: "/graphql",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
//   const [token, setToken] = useState();

//   if (!token) {
//     return <Login setToken={setToken} />
//   }
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <div className="flex-column justify-flex-start min-100-vh">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />}/>
                            <Route path="/adoption" element={<Adoption />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/cart" element={<Cart/>} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
