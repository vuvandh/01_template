import { RouteObject } from "react-router-dom";
import Crm from "../components/crm/Crm";
import Crypto from "../components/crypto/Crypto";
import Listing from "../components/listing/Listing";

export const DashboardRoute: RouteObject[] = [
    { path: "crm", element: <Crm /> },
    { path: "crypto", element: <Crypto /> },
    { path: "listing", element: <Listing /> },
];
