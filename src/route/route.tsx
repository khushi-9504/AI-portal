import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { EmployeeList, Profile } from "../pages";
import SignUp from "../components/Auth/SignUp/SignUp";
import Login from "../components/Auth/Login/Login";
import EditProfile from "../pages/Profile/EditProfile";
import PrivateRoute from "./PrivateRouting/PrivateRoute";
import ForgotPassword from "../pages/Employees/EmployeeList";

const router = createBrowserRouter([
  // Public Routes
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  // Protected Routes (requires login)
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "employees",
        element: <EmployeeList />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
