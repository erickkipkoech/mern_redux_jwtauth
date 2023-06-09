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
import About from "./components/screens/About.jsx";
import Contact from "./components/screens/Contact.jsx";
import LoginScreen from "./components/auth-screens/LoginScreen.jsx";
import RegisterScreen from "./components/auth-screens/RegisterScreen.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import UploadProjects from "./components/screens/UploadProjects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/collection" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/add_projects" element={<UploadProjects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
