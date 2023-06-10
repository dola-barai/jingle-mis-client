import { NavLink, Outlet} from "react-router-dom";
import { BsFillBookmarksFill } from 'react-icons/bs';

import useSelectedClass from "../hooks/useSelectedClass";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const [selectedClass] = useSelectedClass();

    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                

            </div>
            <div className="drawer-side bg-gradient-to-r from-indigo-500 to-purple-500">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                <li><NavLink to="/dashboard/sHome"><FaHome></FaHome> Student Home</NavLink></li>
                    <li className="bg-transparent">
                        <NavLink to="/dashboard/mySelectedClass"><BsFillBookmarksFill></BsFillBookmarksFill> My Selected Classes
                           <span className="badge badge-secondary">+{selectedClass?.length || 0}</span>
                        </NavLink>
                    </li>            
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;