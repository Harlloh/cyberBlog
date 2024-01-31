import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home";
import Cryptoservices from "./services/services";
import Contact from "./contact/contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Cryptoservices />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
