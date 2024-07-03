import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ColorModeProvider from "./theme.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, 
      refetchOnWindowFocus: false, 
      staleTime: 60000, 
      cacheTime: 60000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
