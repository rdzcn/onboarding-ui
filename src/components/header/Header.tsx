import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { HeaderLogo, HeaderWrapper } from "./header.styles";
import Select from "../../lib/select/Select";

const Header = () => {
  const { pathname } = useLocation();
  const isSelectLanguage = useMemo(() => !pathname.includes("landing"), [
    pathname,
  ]);

  return (
    <HeaderWrapper>
      <HeaderLogo src="/images/kadmos_logo.png" alt="Kadmos Logo" />
      {isSelectLanguage && <Select isHeader />}
    </HeaderWrapper>
  );
};

export default Header;
