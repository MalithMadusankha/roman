import React from "react";
import { useLocation, Route, Routes, Navigate, Outlet } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import Index from "views/Index";
import ManageUser from "views/user/ManageUser";
import Membership from "views/Membership";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
    console.log(props);
  }, [location, props]);

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     console.log("prop.layout", prop.layout);
  //     if (prop.layout === "/admin") {
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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo-light.jpg"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar {...props} brandText={getBrandText(location.pathname)} />
        <Outlet />
        {/* <Routes>
          {getRoutes(routes)}
          <Route path="index" element={<Index />} />
          <Route path="users" element={<ManageUser />} />
          <Route path="membership" element={<Membership />} />
          <Route path="offers" element={<ManageUser />} />
        </Routes> */}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
