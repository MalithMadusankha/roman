import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const WelcomAuth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

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

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/wc") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div ref={mainContent}>
        <div>
          <Container className="">
            <Row className="justify-content-center pt-5">
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/wc/welcome" />
              </Switch>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default WelcomAuth;
