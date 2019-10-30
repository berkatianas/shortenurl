import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Home />
          <Footer />
        </header>
      </div>
    </Provider>
  );
};

export default App;
