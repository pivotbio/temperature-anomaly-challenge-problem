import MainLayout from "@/layouts/main";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);
