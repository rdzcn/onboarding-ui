// import React from "react";
import Landing from "../../pages/landing/Landing";

// const Welcome = React.lazy(() => import("../../pages/welcome/Welcome"));

export default [
  {
    id: "landing",
    route: ["/", "/landing", "/landing/:id"],
    component: Landing,
  },
  // {
  //   id: "welcome",
  //   route: "/welcome",
  //   component: Welcome,
  // },
];
