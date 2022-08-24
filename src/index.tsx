import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from "./components/App";

const container = document.querySelector('#app');
const root = createRoot(container!);

root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);