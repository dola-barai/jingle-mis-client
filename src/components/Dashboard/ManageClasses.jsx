
import Modal from 'react-modal';
import useInsPClasses from "../../hooks/useInsPClasses";

import Swal from "sweetalert2";
import { useState } from 'react';
import { Helmet } from 'react-helmet';
const ManageClasses = () => {
    const [instructorAddClasses] = useInsPClasses()

    const handleApprove = (newClass) => {
        fetch(`https://jingle-mis-server.vercel.app/newClass/approve/${newClass._id}`, {
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
        fetch(`https://jingle-mis-server.vercel.app/newClass/reject/${newClass._id}`, {
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

    const [showModal, setShowModal] = useState(false);

    const handleFeedback = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };



    return (
        <div>
            <Helmet>
               <title>JINGLE | Manage Classes</title>
            </Helmet>
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
                                            <div>
                                                <h3 onClick={() =>handleFeedback(newClass)} className="btn btn-sm btn-info text-amber-900  me-2">Feedback</h3>
                                                <Modal
                                                    className='w-96 h-32 mx-auto my-20'
                                                    isOpen={showModal}
                                                    onRequestClose={closeModal}
                                                    contentLabel="Feedback Modal"
                                                >
                                                    <form> 
                                                        <textarea
                                                            placeholder="Enter your feedback..."
                                                        ></textarea> <br />
                                                        <button type="submit">Send Feedback</button>
                                                    </form>
                                                    <button onClick={closeModal}>Close Modal</button>
                                                </Modal>
                                            </div>
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