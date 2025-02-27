import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import ColorModeProvider from "./theme.tsx";
import GoUpButton from "./components/common/GoUpButton.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <GoUpButton />
      </QueryClientProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
