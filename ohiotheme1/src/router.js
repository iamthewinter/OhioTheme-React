import Home from "./components/Home/Home";

const router = [
  {
    id: Math.random(),
    name: "Home",
    path: "/",
    exact: true,
    component: <Home />,
    fallback: <Home />,
  },
  {
    id: Math.random(),
    name: "Contact",
    path: "/contact",
    exact: true,
    component: <Contact />,
  },
  {
    id: Math.random(),
    name: "Blog",
    path: "/blog",
    exact: true,
    component: <Blog />,
  },
  {
    id: Math.random(),
    name: "Portfolio",
    path: "/portfolio",
    exact: true,
    component: <Portfolio />,
  },
  {
    id: Math.random(),
    name: "Standard",
    path: "/standard",
    exact: true,
    component: <Standard />,
  },
];

export default router;