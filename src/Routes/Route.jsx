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
import Payment from "../components/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import EnrolledClassPage from "../components/Dashboard/EnrolledClassPage";
import PaymentHistoryPage from "../components/Dashboard/PaymentHistoryPage";
import AddClass from "../components/Dashboard/InstructorBoard/AddClass";
import MyClasses from "../components/Dashboard/InstructorBoard/MyClasses";
import ManageClasses from "../components/Dashboard/ManageClasses";
import UpdateClass from "../components/Dashboard/InstructorBoard/UpdateClass";

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: 'sHome',
        element: <StudentHome></StudentHome>
      },
      {
        path: 'allUsers', 
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'mySelectedClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'enrolledClass',
        element: <EnrolledClassPage></EnrolledClassPage>
      },
      {
        path: 'pHistory',
        element: <PaymentHistoryPage></PaymentHistoryPage>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClasses',
        element: <MyClasses></MyClasses>,

      },
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      }
    ]
  },
  {
    path: "/updateClass/:id",
    element: <UpdateClass></UpdateClass>,
    loader: ({params}) => fetch(`https://jingle-mis-server.vercel.app/newClass/${params.id}`)
  }
 

]);

export default router;