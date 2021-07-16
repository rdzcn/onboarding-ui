import React from "react";
import { BrowserRouter } from "react-router-dom";
import Theming from "./assets/styles/theme/Theming";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { ProfilesProvider } from "./contexts/profile.context";

const App = () => (
  <Theming>
    <BrowserRouter>
      <Header />
      <ProfilesProvider>
        <Content />
      </ProfilesProvider>
    </BrowserRouter>
  </Theming>
);

export default App;
