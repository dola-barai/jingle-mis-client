import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useStudent from "../hooks/useStudent";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const PrivateRoute = ({ children }) => {
    const [isStudent] = useStudent();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user || isStudent || isAdmin || isInstructor){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;