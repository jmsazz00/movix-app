import { createBrowserRouter } from "react-router-dom";
import CountryTeamsBox from "./components/CountryTeamsBox";
import TopTeams from "./components/TopTeams";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import TeamDetailPage from "./pages/TeamDetailPage";
import StadiumPage from "./pages/StadiumPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          { path: "/", element: <TopTeams /> },
          { path: "c/:country", element: <CountryTeamsBox /> },
        ],
      },
      { path: "t/:name", element: <TeamDetailPage /> },
      { path: "s/:stadium", element: <StadiumPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
