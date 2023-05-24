import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import Home from "./components/screens/Home.jsx";
import ShowProjects from "./components/screens/ShowProjects.jsx";
import ProjectDetails from "./components/screens/ProjectDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route index={true} path="/" element={<Home/>} />
    <Route path="/collection" element={<ProjectDetails />} />
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
