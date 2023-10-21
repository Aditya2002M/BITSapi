import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BMR from "./pages/BMR";
import News from "./pages/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import { store } from "./store";
import { Provider } from "react-redux";
import Target from "./pages/Target";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
 
  {
    path: "/BMR",
    element: <BMR />,
  },
  {
    path: "/target",
    element: <Target />,
  },
  {
    path: "/news",
    element: <News/>,
  }
]);

function App() {
  axios.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }

    return config;
  }, (error) => {
    Promise.reject(error);
  });

  return (
    <div className="App">
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;