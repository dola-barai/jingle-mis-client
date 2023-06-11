import useInsClasses from "../../hooks/useInsClasses";

import Swal from "sweetalert2";
const ManageClasses = () => {
    const [instructorAddClasses] = useInsClasses()

    const handleApprove = (newClass) => {
        fetch(`http://localhost:5000/newClass/${newClass._id}`, {
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

    return (
        <div>
            <div className="overflow-x-auto mt-32">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
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
                                <td>{newClass.cname}</td>
                                <td>{newClass.iName}</td>
                                <td>{newClass.email}</td>
                                <td>{newClass.price}</td>
                                <td>{newClass.seats}</td>
                                <td>{newClass.role === 'Approve' ? 'Approved' :
                                    <button onClick={() => handleApprove(newClass)} className="btn btn-ghost btn-sm me-2 bg-base-200  text-green-400 rounded-full">Accept</button>
                                }
                                    {newClass.role === 'reject' ? 'reject' :
                                        <button className="btn btn-ghost bg-base-200 text-red-700 btn-sm rounded-full">Reject</button>
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

export default ManageClasses;