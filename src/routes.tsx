import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TeamDetailPage from "./pages/TeamDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/t/:name", element: <TeamDetailPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
