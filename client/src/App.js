import AdoptionPage from "./components/Adoption/index.js";
import Footer from "./components/Footer/index.js"
import AccessoriesPage from "./components/Accessories/index.js"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
      <main>
        <AccessoriesPage></AccessoriesPage>
        <AdoptionPage></AdoptionPage>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
