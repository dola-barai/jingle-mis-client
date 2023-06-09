import CoverC from "../../Shared/CoverC";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import useClasses from "../../hooks/useClasses";
import Classes from "./Classes";

const ClassPage = () => {
    const [ classes ] = useClasses();
    return (
        <div>
            <Navbar></Navbar>
            <CoverC></CoverC>
            <div className="mt-12 mx-32 grid grid-cols-1 gap-5 ">
                {
                    classes.map(singleClass => (
                        <Classes 
                        key={singleClass._id}
                        singleClass={singleClass}
                        ></Classes>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClassPage;