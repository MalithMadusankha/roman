import React from "react";
import { useLocation, Route, Routes, Navigate, Outlet } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  const myStyle = {
    backgroundImage:
      "url('https://www.blueoceanstrategy.com/wp-content/uploads/2022/01/Dating-strategies.webp')",
    height: "100vh",
    // marginTop: "-70px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/auth") {
  //       return (
  //         <Route
  //           path={prop.layout + prop.path}
  //           component={prop.component}
  //           key={key}
  //         />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  return (
    <>
      <div ref={mainContent}>
        <div style={myStyle}>
          <Container className="">
            <Row className="justify-content-center pt-5">
              <Outlet />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Auth;
