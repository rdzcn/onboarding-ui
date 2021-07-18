import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SelectLanguage from "../../components/selectLanguage/SelectLanguage";
import SelectProfile from "../../components/selectProfile/SelectProfile";
import { LandingContainer } from "./landing.styles";

const Landing = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === "/") {
      history.replace("/landing/language");
    }
  }, []);

  return (
    <LandingContainer>
      {pathname === "/landing/language" ? <SelectLanguage /> : null}
      {pathname === "/landing/profiles" ? <SelectProfile /> : null}
    </LandingContainer>
  );
};

export default Landing;
