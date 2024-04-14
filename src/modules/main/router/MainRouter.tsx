import { RouteObject } from "react-router-dom";
import { DashboardRoute } from "../dashboard/router/DashboardRoute";
import { LayoutsRoute } from "../layouts/LayoutsRoute";
import { MetricsRoute } from "../metrics/MetricsRoute";
import { WidgetsRoute } from "../widgets/WidgetsRoute";

export const MainRouter: RouteObject[] = [
    {
        path: "main/",
        children: [
            { path: "dashboard/", children: DashboardRoute },
            { path: "metrics/", children: MetricsRoute },
            { path: "layouts/", children: LayoutsRoute },
            { path: "widgets/", children: WidgetsRoute },
        ],
    },
];
