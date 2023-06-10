
import useInstructorsDetails from "../../hooks/useInstructorsDetails";
import Instructors from "./Instructors";
import Cover from "../../Shared/Cover";
import { Helmet } from "react-helmet";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />


const InstructorsPage = () => {
    const [instructors] = useInstructorsDetails();
    return (
        <div className="">
            <Helmet>
               <title>JINGLE | Instructors</title>
            </Helmet>
            <Cover></Cover>
            <div className="grid grid-cols-3 gap-5 mx-5">
               {
                instructors.map(instructor => (<Instructors
                key={instructor._id}
                instructor={instructor}
                ></Instructors>))
               } 
            </div>
        </div>
    );
};

export default InstructorsPage;