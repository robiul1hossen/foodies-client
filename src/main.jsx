import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AllReviews from "./pages/AllReviews.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";
import AddReview from "./pages/AddReview.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import EditReview from "./pages/EditReview.jsx";
import PrivateRoute from "./layouts/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/all-reviews",
        Component: AllReviews,
      },
      {
        path: "/review-details/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
