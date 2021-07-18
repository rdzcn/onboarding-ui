import React from "react";
import { BrowserRouter } from "react-router-dom";
import Theming from "./assets/styles/theme/Theming";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { ProfilesProvider } from "./contexts/profile.context";
import { TextsProvider } from "./contexts/text.context";
import "./config/init18n";

const App = () => (
  <Theming>
    <BrowserRouter>
      <Header />
      <TextsProvider>
        <ProfilesProvider>
          <Content />
        </ProfilesProvider>
      </TextsProvider>
    </BrowserRouter>
  </Theming>
);

export default App;
