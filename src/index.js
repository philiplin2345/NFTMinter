import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
const APP_ID = "fsBimZnwW7dgeOvr8OCkaaenqFuCHyme2bniYVmN";
const SERVER_URL = "https://ddckh0vxmjej.grandmoralis.com:2053/server";

/** Get your free Moralis Account https://moralis.io/ */
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <MoralisDappProvider>
        <App />
      </MoralisDappProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);