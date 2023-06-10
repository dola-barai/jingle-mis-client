import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {
    const [selectedClass] = useSelectedClass();
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0);
    
    const handleDelete = () => {
        
    }
    
    return (
        <div className="w-full">
            <Helmet>
                <title>JINGLE | My Selected Class</title>
            </Helmet>
            <div className="uppercase font-semibold text-center">
                <h3 className="text-3xl mb-3">Total Selected Classes: {selectedClass.length}</h3>
                <h3 className="text-3xl mb-3">Total Price: ${total}</h3>
                <Link to="/dashboard/payment"><button className="btn btn-primary">PAY For Classes</button></Link>
            </div>
            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) => <tr
                            key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>  
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;