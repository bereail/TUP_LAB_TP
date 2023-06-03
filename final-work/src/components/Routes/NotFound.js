import React, { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import "./App.css";

import SignIn from "./components/Forms/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Protected from "./components/Protected/Protected";
import NotFound from "./components/Routes/NotFound";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = () => {
    setIsSignedIn(true);
  };

  const logoutHandler = () => {
    setIsSignedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/signIn",
      element: <SignIn onSignIn={signInHandler} />,
    },
    {
      path: "/home",
      element: isSignedIn ? (
        <Protected isSignIn={isSignedIn}>
          <Dashboard onLogout={logoutHandler} />
        </Protected>
      ) : (
        <SignIn onSignIn={signInHandler} />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;