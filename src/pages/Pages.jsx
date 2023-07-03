import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLayout from "./SuspenseLayout";
import RequireAuth from "../features/requireAuth/withRequireAuth";
import { PATHS } from "../app/constants/paths";
import DashboardLayout from "../shared/UI/Layout/DashboardLayout";
import ClientEdit from "./Dashboards/ClientDashboard/ClientEdit";
import Clientcreate from "./Dashboards/ClientDashboard/ClientCreate";
import Loading from "./Loading";
import VendorCreate from "./Dashboards/VendorDashboard/VendorCreate";
import VendorEdit from "./Dashboards/VendorDashboard/VendorEdit";

const AuthorizationPage = lazy(() => import("./Authorization/Authorization"));
const ForgotPassword = lazy(() => import("./ForgotPassword/forgotPassword"));
const PageNotFound = lazy(() => import("./PageNotFound/pageNotFound"));

// @ts-ignore

const History = lazy(() => import("./Dashboards/History"));
const Vendors = lazy(() => import("./Dashboards/VendorDashboard/Vendors"));
const Softwares = lazy(() => import("./Dashboards/Softwares"));
const Users = lazy(() => import("./Dashboards/Users"));
const Clients = lazy(() => import("./Dashboards/ClientDashboard/Clients"));
// @ts-ignore
const Client = lazy(() => import("./Dashboards/ClientDashboard/Client"));
const ClientCreate = lazy(() =>
  import("./Dashboards/ClientDashboard/ClientCreate")
);

export const Routing = () => {
  // @ts-ignore
  return (
    <Routes>
      <Route
        path={PATHS.HOME}
        element={
          <SuspenseLayout>
            <AuthorizationPage />{" "}
          </SuspenseLayout>
        }
      />

      <Route path={PATHS.FORGORPASSWORD} element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="/"
        element={
          <SuspenseLayout>
            <DashboardLayout />
          </SuspenseLayout>
        }
      >
        <Route
          path={PATHS.CLIENTS}
          element={
            <SuspenseLayout>
              <Clients />
            </SuspenseLayout>
          }
        ></Route>
        <Route
          path={PATHS.CLIENT_LINK_NAME}
          element={
            <SuspenseLayout>
              <Client />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.CLIENT_LINK_NAME_EDIT}
          element={
            <SuspenseLayout>
              <ClientEdit />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.CREATE}
          element={
            <SuspenseLayout>
              <ClientCreate />
            </SuspenseLayout>
          }
        />

        <Route
          path={PATHS.HISTORY}
          element={
            <SuspenseLayout>
              <History />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.VENDORS}
          element={
            <SuspenseLayout>
              <Vendors />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.VENDORS_CREATE}
          element={
            <SuspenseLayout>
              <VendorCreate />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.VENDOR_LINK_NAME_EDIT}
          element={
            <SuspenseLayout>
              <VendorEdit />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.SOFTWARES}
          element={
            <SuspenseLayout>
              <Softwares />
            </SuspenseLayout>
          }
        />
        <Route
          path={PATHS.USERS}
          element={
            <SuspenseLayout>
              <Users />
            </SuspenseLayout>
          }
        />
      </Route>
    </Routes>
  );
};
