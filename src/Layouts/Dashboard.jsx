import { NavLink, Outlet } from "react-router-dom";
import { BsFillBookmarksFill } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';
import useSelectedClass from "../hooks/useSelectedClass";
import { FaChalkboardTeacher, FaHome, FaMoneyBill, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
    const [selectedClass] = useSelectedClass();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            </div>
            <div className="drawer-side  font-semibold bg-gradient-to-r from-indigo-500 to-purple-500">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/aHome">
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageClasses">
                                    <FaUsers />
                                    Manage Classes
                                </NavLink>
                            </li>
                        </>
                    )}

                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/iHome">
                                    <FaHome />
                                    Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addClass">
                                    <FaUsers />
                                    Add a Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myClasses">
                                    <FaUsers />
                                    My Classes
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isStudent && (
                        <>
                            <li>
                                <NavLink to="/dashboard/sHome">
                                    <FaHome></FaHome>
                                    Student Home
                                </NavLink>
                            </li>
                            <li className="bg-transparent">
                                <NavLink to="/dashboard/mySelectedClass">
                                    <BsFillBookmarksFill></BsFillBookmarksFill>
                                    My Selected Classes
                                    <span className="badge badge-secondary">
                                        +{selectedClass?.length || 0}
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrolledClass">
                                    <FaHome></FaHome>
                                    My Enrolled Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/pHistory">
                                    <FaMoneyBill></FaMoneyBill>
                                    Payment History
                                </NavLink>
                            </li>
                        </>
                    )}




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    <li><NavLink to="/classes"><SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;