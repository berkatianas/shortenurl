import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Provider>
  );
};

export default App;
