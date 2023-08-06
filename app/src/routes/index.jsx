import MainLayout from "@/layouts/main";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AnomalyMap from "@/features/AnomalyMap";

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
    children: [
      {
        path: "/",
        element: <AnomalyMap />,
      },
    ],
  },
]);
