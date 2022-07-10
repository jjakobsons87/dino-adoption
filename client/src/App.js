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
import Home from './pages/Home'
import Profile from './pages/Profile';
import Adoption from './pages/Adoption';
import Shop from './pages/Shop';

// component imports
import Footer from "./components/Footer/index.js"

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
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
                path="/adoption" 
                element={<Adoption />} 
              />
               <Route 
                path="/shop" 
                element={<Shop />} 
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
