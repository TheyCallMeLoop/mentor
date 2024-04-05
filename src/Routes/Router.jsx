/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../Component/navbar/header";
import DashboardHeader from "../Component/navbar/dashboardHeader";
import Footer from "../Component/footer/footer";
const LandingPage = lazy(() => import("../Component/screen/home"));
const Dashboard = lazy(() => import("../Component/screen/dashboard"));

const Router = () => {
  const location = useLocation();
  const exclutedPath = [
    "/signin",
    "/signup",
    "/forgot",
    "/Dashboard",
    "/wallet",
    "/stacking",
    "/profile",
    "/plans",
    "/faqs",
  ];
  const exclutedDashboardPath = [
    "/Dashboard",
    "/wallet",
    "/stacking",
    "/profile",
    "/plans",
    "/faqs",
  ];
  return (
    <>
      {exclutedDashboardPath.includes(location.pathname) && <DashboardHeader />}
      {!exclutedPath.includes(location.pathname) && <Header />}
      <Suspense
        fallback={
          <div className="lazy_spiner">
          <Spinner animation="grow"  style={{color:'#0066f5'}}  />

          </div>
        }
      >

        {useRoutes([
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "Dashboard",
            element: <Dashboard />,
          },
        ])}
      </Suspense>
      <Footer />
    </>
  );
};

export default Router;
