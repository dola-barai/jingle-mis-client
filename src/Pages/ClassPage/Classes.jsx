import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import {  Navigate } from "react-router-dom";
import useClasses from "../../hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Classes = ({ singleClass, className }) => {
    const {name, image, price, instructor, _id} = singleClass;
    const [, refetch] = useClasses()
    const {user} = useContext(AuthContext);

    const handleAddToCart = (singleClass) => {
        console.log(singleClass);
        if(user){
            const selectedClass = {classId: _id, name, image, price, instructor, email: user.email}
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Navigate('/login', {state: {from: location}})
                }
              })
        }
    }

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
                        <button onClick={() => handleAddToCart(singleClass)}  disabled={singleClass.availableSeats === 0}  className="btn btn-sm btn-primary">Select Course</button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Classes;