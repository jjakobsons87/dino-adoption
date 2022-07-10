import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

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
import Accessories from './pages/Accessories';

// component imports
import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index";

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
        {/* <Header /> */}
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
               <Route 
                path="/accessories" 
                element={<Accessories />} 
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
