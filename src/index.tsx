import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const root = document.getElementById("root");
if (!root) {
    throw new Error("Failed to find the root element");
}

const container = createRoot(root);

const router = createBrowserRouter([
    {   
        path: "/", 
        element: <App />, 
        children: [
            {
                path: "/about",
                element: 
                    <Suspense fallback={<div>Loading About...</div>}>
                        <LazyAbout />
                    </Suspense>,
            },
            {
                path: "/shop",
                element: 
                    <Suspense fallback={<div>Loading Shop...</div>}>
                        <Shop />
                    </Suspense>,
            }
        ]
    },
]);

container.render(
    <RouterProvider router={router} />  
);