import { Home, Resume, Portfolio, Contact, NotFound } from "./pages";

export const routes = [
  { path: "/", component: Home },
  { path: "/resume", component: Resume },
  { path: "/portfolio", component: Portfolio },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound }
];
