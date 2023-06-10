import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ClassPage from "../Pages/ClassPage/ClassPage";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../components/Dashboard/MySelectedClass";
import Dashboard from "../Layouts/Dashboard";
import StudentHome from "../components/Dashboard/StudentHome";
import AllUsers from "../components/Dashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/instructors',
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: '/classes',
        element: <ClassPage></ClassPage>
      },
      {
        path: "/view",
        element: <PrivateRoute></PrivateRoute>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'sHome',
        element: <StudentHome></StudentHome>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'mySelectedClass',
        element: <MySelectedClass></MySelectedClass>
      }
    ]
  }
 

]);

export default router;