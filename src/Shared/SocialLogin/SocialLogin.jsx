import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const handleGoogleSignIn = () => {

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