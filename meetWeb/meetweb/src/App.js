import React from "react";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "~/routes";
import history from "~/services/history";
import "~/config/ReactotronConfig";

import store from "./store";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
