import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useSelectedClass from "../../hooks/useSelectedClass";
import useStudent from "../../hooks/useStudent";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = ({toggleTheme, isDarkTheme}) => {
    const [isStudent] = useStudent()

    const [selectedClass] = useSelectedClass()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect(() => {

    }, [])

    const navOptions = <>
        <li><Link className="hover:text-red-800" to='/'>Home</Link></li>
        <li><Link className="hover:text-red-800" to='/instructors'>Instructors</Link></li>
        <li><Link className="hover:text-red-800" to='/classes'>Classes</Link></li>
        <li><Link className="hover:text-red-800" to='/dashboard'>Dashboard</Link></li>
        {
            isStudent &&
            (
                <>
                    <li>
                        <Link to='/dashboard/mySelectedClass'>
                            <div className="badge badge-secondary">+{selectedClass?.length || 0}</div>
                        </Link>
                    </li>
                </>
            )
        }
    </>
    return (
        <div className="font-semibold ">
            <div className="navbar z-10 bg-opacity-50 w-full bg-indigo-700 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="h-12 rounded-full" src={logo} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    isDarkTheme ? <button onClick={toggleTheme}><FaToggleOff className="h-6 w-6 me-4"></FaToggleOff></button> :
                    <button onClick={toggleTheme}><FaToggleOn className="h-6 w-6 me-4"></FaToggleOn></button>
                }
                    {
                        user ? <>
                            <img className="h-12 rounded-full" src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className="btn btn-ghost hover:text-red-800">Logout</button>
                        </> : <>
                            <Link className="hover:text-red-800" to='/login'>Login</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;