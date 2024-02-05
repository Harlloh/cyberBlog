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
import Blog from "./blog/Blog";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Cryptoservices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
