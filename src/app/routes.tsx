import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Industries from "./pages/industries";
import Blog from "./pages/blog";
import Careers from "./pages/careers";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "industries", Component: Industries },
      { path: "blog", Component: Blog },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
    ],
  },
]);
