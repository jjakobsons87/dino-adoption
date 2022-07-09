import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

// route imports
import Profile from './pages/Profile';
import Home from './pages/Home';

// component imports
import Footer from "./components/Footer/index.js"
import { useState } from 'react';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {

  const [ cartItems, setCartItems ] = useState([]);
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
