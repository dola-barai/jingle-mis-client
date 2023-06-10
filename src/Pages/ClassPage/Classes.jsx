import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Classes = ({ singleClass, handleView, className }) => {

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div >
            <div  className="hero bg-opacity-40  bg-gradient-to-t from-purple-200 to-indigo-200 rounded-2xl" data-aos='zoom-in-up'>
                <div   className={`class-card ${className}`}>
                <div  className="hero-content flex-col lg:flex-row">
                <img className="h-80 w-80 rounded-xl" src={singleClass.image} />
                    <div className="">
                        <h1 className="text-4xl font-bold">Course Name: {singleClass.name}</h1>
                        <p className="text-2xl py-3">Instructor Name: {singleClass.instructor}</p>
                        <p className="text-xl py-3">Available Seats: <span className="badge badge-secondary"> {singleClass.availableSeats}</span></p>
                        <p className="text-xl py-3">Price: {singleClass.price}</p>
                        <Link to='/view'><button  disabled={singleClass.availableSeats === 0} onClick={handleView} className="btn btn-sm btn-primary">Select Course</button></Link>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Classes;