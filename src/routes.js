import Home from "./pages/Home";
import App from "./App";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
           {
              path: "/",
              element: <Home />,
              children: [
                  {
                      path: "/profile/:id",
                      element: <UserProfile />
                  }
              ]
          }, 
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/login",
              element: <Login />
          }
      ]
  }
];


export default routes;