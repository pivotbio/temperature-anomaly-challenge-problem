import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "@/routes";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import axios from "axios";

// Set axios defaults, typically one would snag this from an env or config file
axios.defaults.baseURL = "http://localhost:5173/";
axios.defaults.headers = {
  Accept: "application/json",
};

const queryClient = new QueryClient();

export const AppProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRoutes} />
    </QueryClientProvider>
  );
};
