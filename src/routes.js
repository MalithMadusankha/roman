import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import Login from "views/user/Login";
import Icons from "views/examples/Icons.js";
import Welcome from "views/user/Welcome";
import ManageUser from "views/user/ManageUser";
import Membership from "views/Membership";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-warning",
    component: Index,
    layout: "/admin",
    invisible: false,
  },

  {
    path: "/users",
    name: "Manage Users",
    icon: "ni ni-single-02 text-warning",
    component: ManageUser,
    layout: "/admin",
    invisible: false,
  },
  {
    path: "/membership",
    name: "Membership",
    icon: "ni ni-paper-diploma text-warning",
    component: Membership,
    layout: "/admin",
    invisible: false,
  },
  {
    path: "/offers",
    name: "Offers",
    icon: "ni ni-shop text-warning",
    component: Maps,
    layout: "/admin",
    invisible: false,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-warning",
    component: Icons,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/welcome",
    name: "Welcome",
    icon: "ni ni-planet text-warning",
    component: Welcome,
    layout: "/wc",
    invisible: true,
  },

  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-warning",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-warning",
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    invisible: true,
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
