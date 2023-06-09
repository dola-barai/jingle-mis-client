import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Classes = ({ singleClass }) => {
    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div>
            <div className="hero bg-base-200 rounded-2xl" data-aos='zoom-in-up'>
                <div className="hero-content flex-col lg:flex-row">
                <img className="h-96 w-96 rounded-xl" src={singleClass.image} />
                    <div className="">
                        <h1 className="text-4xl font-bold">Course Name: {singleClass.name}</h1>
                        <p className="text-2xl py-3">Instructor Name: {singleClass.instructor}</p>
                        <p className="text-xl py-3">Available Seats: <span className="badge badge-secondary"> {singleClass.availableSeats}</span></p>
                        <p className="text-xl py-3">Price: {singleClass.price}</p>
                        <button className="btn btn-sm btn-primary">Select Course</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Classes;