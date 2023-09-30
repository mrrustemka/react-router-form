import React from "react";
import { ContactPage, contactPageAction } from "./ContactPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ThankYouPage } from "./ThankYouPage";
// import logo from "./logo.svg";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="contact" /> },
  { path: "/contact", element: <ContactPage />, action: contactPageAction },
  { path: "/thank-you/:name", element: <ThankYouPage /> },
]);

function App() {
  return (
    <div className="text-center w-72 m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
