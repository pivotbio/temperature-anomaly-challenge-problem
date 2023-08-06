import { MemoryRouter } from "react-router";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

axios.defaults.baseURL = "http://localhost:5173";
axios.defaults.headers = {
  Accept: "application/json",
};

export default function render(
  ui,
  { initialEntries = ["/"], ...options } = {},
) {
  // eslint-disable-next-line
  const TestEnvironmentWrapper = ({ children }) => (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );

  return rtlRender(ui, { wrapper: TestEnvironmentWrapper, ...options });
}
