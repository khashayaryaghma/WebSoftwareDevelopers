import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
import logo from "./assets/images/logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Helmet>
            <title>Web Development</title>
            <link rel="icon" type="image/png" href={logo} />
        </Helmet>
        <GlobalStyles />
        <App />
    </React.StrictMode>
);
