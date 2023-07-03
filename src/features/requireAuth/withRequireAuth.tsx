import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// @ts-ignore
import withDashboardLayout from "../../shared/UI/Layout/DashboardLayout.jsx";
import { Suspense } from "react";

const withRequireAuth = (component: () => React.ReactNode) => () => {
  // @ts-ignore
  const { auth } = useSelector((store) => store.auth);
  const location = useLocation();
  return auth ? (
    component()
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default withRequireAuth;
