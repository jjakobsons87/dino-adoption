import AdoptionPage from "./components/Adoption/index.js";
import Footer from "./components/Footer/index.js"

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
        <AdoptionPage></AdoptionPage>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
