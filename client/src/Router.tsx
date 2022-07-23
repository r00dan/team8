import { RouteObject, useRoutes } from "react-router-dom";

import { AuthPage, MainPage } from 'pages';

export enum Route {
  MAIN = '/',
  AUTH = '/auth',
}

const routeList: RouteObject[] = [
  {
    path: Route.MAIN,
    element: <MainPage />
  },
  {
    path: Route.AUTH,
    element: <AuthPage />
  },
];

export function Router() {
  return useRoutes(routeList);
}
