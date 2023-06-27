import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import SumCalculator from "./Componentss/SumCalculator.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Config/Reducer";

import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Components/NotFound.jsx";
import ConfirmEmail from "./Components/ConfirmEmail.jsx";

const theStore = legacy_createStore(Reducer);
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={theStore}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/confirm/:Email/:Year/:Month/:Day"
          element={<ConfirmEmail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>
);
