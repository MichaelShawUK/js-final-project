import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Thread from "./Components/Thread";
import NewPost from "./Components/NewPost";
import {
  getCollectionDocs,
  getCommentDocs,
  getDocDbId,
  updateCommentId,
} from "./utils/updateFirestore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/:postId",
        element: <Thread />,
      },
      {
        path: "/newpost",
        element: <NewPost />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
