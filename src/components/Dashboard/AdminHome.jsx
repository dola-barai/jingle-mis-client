import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Helmet>
               <title>JINGLE | Admin Home</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-purple-600">Hi, Welcome Back, {user.displayName}</h3>
        </div>
    );
};

export default AdminHome;