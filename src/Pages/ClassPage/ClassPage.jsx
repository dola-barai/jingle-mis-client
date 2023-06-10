import { Navigate, useLocation } from "react-router-dom";
import CoverC from "../../Shared/CoverC";
import useClasses from "../../hooks/useClasses";
import Classes from "./Classes";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import "./ClassPage.css";
import { Helmet } from "react-helmet";

const ClassPage = () => {
    const [ classes ] = useClasses();
    const location = useLocation()
    const {user} = useContext(AuthContext)

    const handleView = () => {
        if (!user) {
          Swal.fire('You have to log in first to view details.')
          
          return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
        } 
    };
    
    return (
        <div>
            <Helmet>
               <title>JINGLE | Classes</title>
            </Helmet>
            <CoverC></CoverC>
            <div className="mt-12 mx-20 grid grid-cols-1 gap-5 mb-12">
                {
                    classes.map(singleClass => (
                        <Classes 
                        key={singleClass._id}
                        className={singleClass.availableSeats === 0 ? "class-card-zero-seats" : ""}
                        singleClass={singleClass}
                        handleView={handleView}
                        ></Classes>
                    ))
                }
            </div>
        </div>
    );
};

export default ClassPage;