import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Protected from "./components/Routes/Protected";
import NotFound from "./components/Routes/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/Forms/SignIn/SignIn";
import SignUp from "./components/Forms/SignUp/SignUp";
import BooksHome from "./components/Home/BooksHome";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/signIn",
      element: <SignIn onLogin={loginHandler} />,
    },
    {
      path: "/signUp",
      element: <SignUp />
    },  
    {
      path: "/",
      element: <BooksHome />      
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;


/*      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onLogout={logoutHandler} />
        </Protected>*/