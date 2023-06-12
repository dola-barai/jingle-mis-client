import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3 className="text-3xl font-semibold text-purple-600">Hi, Welcome Back, {user.displayName}</h3>
        </div>
    );
};

export default AdminHome;