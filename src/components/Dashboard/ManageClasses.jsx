
import useInsClasses from "../../hooks/useInsClasses";

import Swal from "sweetalert2";
const ManageClasses = () => {
    const [instructorAddClasses] = useInsClasses()

    const handleApprove = (newClass) => {
        fetch(`http://localhost:5000/newClass/approve/${newClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Status Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleReject = (newClass) => {
        fetch(`http://localhost:5000/newClass/reject/${newClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Status Rejected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <div className="overflow-x-auto mt-10">
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
                            instructorAddClasses.map((newClass, index) => <tr key={newClass._id}>
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
                                    <><span className="text-purple-700 bg-lime-200 p-2 rounded-xl">Approved</span>
                                        <button disabled onClick={() => handleReject(newClass)} className="btn btn-ghost bg-red-100 me-2 text-red-500 btn-sm rounded-xl">Reject</button>
                                    </>

                                }
                                    {newClass.role === 'Reject' &&
                                        <>
                                            <button disabled onClick={() => handleApprove(newClass)} className="btn btn-ghost btn-sm me-2 bg-base-200  text-green-400 rounded-xl">Accept</button>
                                            <span className="text-white bg-red-600 p-2 me-2 rounded-xl">Rejected</span>
                                        </>

                                    }
                                    {newClass.role === 'Pending' &&
                                        <>
                                            <span className="text-green-600 font-bold me-2">Pending</span>

                                            <button onClick={() => handleApprove(newClass)} className="btn btn-ghost btn-sm me-2  bg-base-200  text-green-400 rounded-full">Accept</button>
                                            <button onClick={() => handleReject(newClass)} className="btn btn-ghost me-2 bg-red-100 text-red-500 btn-sm rounded-full">Reject</button>
                                        </>
                                    }
                                    
                            </td>

                            </tr>)
                        }
                </tbody>
            </table>
        </div>
        </div >
    );
};

export default ManageClasses;