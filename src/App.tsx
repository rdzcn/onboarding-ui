import React from "react";
import { BrowserRouter } from "react-router-dom";
import Theming from "./assets/styles/theme/Theming";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

const App = () => (
  <Theming>
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  </Theming>
);

export default App;
