import useInsClasses from "../../../hooks/useInsClasses";

const MyClasses = () => {
    const [instructorAddClasses] = useInsClasses()
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
                                <td>{newClass.role === 'Approve' ? 'SUCCESS' :
                                    <button  className="btn btn-ghost me-2  text-red-500 rounded-full">Pending</button>
                                    }
                                    {newClass.role === 'reject' ? 'reject' :
                                    <h3></h3>
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