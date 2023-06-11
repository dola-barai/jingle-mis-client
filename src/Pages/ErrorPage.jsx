import { Link } from "react-router-dom";


const ErrorPage = () => {
    
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1686513772~exp=1686514372~hmac=1c52e665e5865fae8fa2db568cb2a32aacb310a2bef03ad502b27bbcec276e89")` }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;