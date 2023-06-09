import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useInstructorsDetails from "../../hooks/useInstructorsDetails";
import Instructors from "./Instructors";
import Cover from "../../Shared/Cover";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />


const InstructorsPage = () => {
    const [instructors] = useInstructorsDetails();
    return (
        <div className="">
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="grid grid-cols-3 gap-5 mx-5">
               {
                instructors.map(instructor => (<Instructors
                key={instructor._id}
                instructor={instructor}
                ></Instructors>))
               } 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InstructorsPage;