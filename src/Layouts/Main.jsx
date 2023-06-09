import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PopularClasses from "../components/Home/Home/PopularClasses";
import PopularInstructors from "../components/Home/Home/PopularInstructors";
import Board from "../components/Home/Home/Board";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Board></Board>
            <Footer></Footer>
        </div>
    );
};

export default Main;