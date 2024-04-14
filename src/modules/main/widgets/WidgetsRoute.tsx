import { RouteObject } from "react-router-dom";
import Widgets from "./Widgets";

export const WidgetsRoute: RouteObject[] = [
    {
        path: "",
        element: <Widgets />,
    },
];
