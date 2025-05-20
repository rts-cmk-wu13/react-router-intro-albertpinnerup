import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import MyScooter from "./pages/myscooter/MyScooter";
import Settings from "./pages/settings/Settings";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <BackgroundHandler>
                    <Home />
                </BackgroundHandler>
            ),
        },
        {
            path: "/myscooter",
            element: (
                <BackgroundHandler>
                    <MyScooter />
                </BackgroundHandler>
            ),
        },
        {
            path: "/settings",
            element: (
                <BackgroundHandler>
                    <Settings />
                </BackgroundHandler>
            ),
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

function BackgroundHandler({ children }) {
    const location = useLocation();

    useEffect(() => {
        document.body.className = "";

        if (location.pathname === "/") {
            document.body.classList.add("home");
        } else if (location.pathname === "/myscooter") {
            document.body.classList.toggle("myscooter");
        } else if (location.pathname === "/settings") {
            document.body.classList.add("settings");
        }

        console.log("Updated body class:", document.body.className);
    }, [location]);

    return children;
}

export default App;
