import React from "react";
import { useLocation } from "react-router-dom";
import SelectLanguage from "../../components/selectLanguage/SelectLanguage";
import SelectProfile from "../../components/selectProfile/SelectProfile";
import { LandingContainer } from "./landing.styles";

const Landing = () => {
  const { pathname } = useLocation();

  return (
    <LandingContainer>
      {pathname === "/landing/language" ? <SelectLanguage /> : null}
      {pathname === "/landing/profiles" ? <SelectProfile /> : null}
    </LandingContainer>
  );
};

export default Landing;
