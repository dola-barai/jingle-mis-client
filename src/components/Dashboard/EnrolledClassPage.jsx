import { Helmet } from "react-helmet";
import useEnrolledClass from "../../hooks/useEnrolledClass";
import MyEnrolledClass from "./MyEnrolledClass";

const EnrolledClassPage = () => {
    const [ enrolledClass ] = useEnrolledClass()
    return (
        <div>
            <Helmet>
               <title>JINGLE | Enrolled Classes</title>
            </Helmet>
            <h3 className='text-3xl font-semibold '>My Enrolled Classes</h3>
            <div className="mt-12 mx-20 grid grid-cols-1 gap-5 mb-12">
                {
                    enrolledClass.map(enrolled => (<MyEnrolledClass
                    key={enrolled._id}
                    enrolled={enrolled}
                    ></MyEnrolledClass>))
                }

            </div>

        </div>
    );
};

export default EnrolledClassPage;