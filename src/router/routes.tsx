import { RouteObject } from "react-router-dom";
import { MainRouter } from "../modules/main/router/MainRouter";
import MainLayout from "../modules/layout/components";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: MainRouter,
    },
];
