import { Link } from "react-router-dom";
import useInsClasses from "../../../hooks/useInsClasses";

const MyClasses = () => {
    const [insClasses] = useInsClasses();
    const {_id} = insClasses;
    return (
        <div>
            <div className="overflow-x-auto mt-32">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            insClasses.map((newClass, index) => <tr key={newClass._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className="h-6" src={newClass.image} alt="" />
                                </td>
                                <td>{newClass.cname}</td>
                                <td>{newClass.iName}</td>
                                <td>{newClass.email}</td>
                                <td>{newClass.price}</td>
                                <td>{newClass.seats}</td>
                                <td>{newClass.role === 'Approve' &&
                                    <span className="text-purple-600 font-bold">SUCCESS</span>
                                }

                                    {newClass.role === 'Reject' &&
                                        <span className="text-red-600 font-bold">Rejected</span>
                                    }

                                    {newClass.role === 'Pending' &&
                                        <>
                                        <span className="text-green-600 font-bold me-2">Pending</span>
                                        <Link to={`/updateClass/${_id}`}><button className="btn btn-sm btn-primary">Update</button></Link>
                                        </>

                                    }
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;