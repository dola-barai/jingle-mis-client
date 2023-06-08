import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-6">
            <button onClick={handleGoogleSignIn} className="btn btn-circle">
                <FcGoogle className="h-10 w-10"></FcGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;