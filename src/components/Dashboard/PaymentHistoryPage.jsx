import { Helmet } from "react-helmet";
import useEnrolledClass from "../../hooks/useEnrolledClass";


const PaymentHistoryPage = () => {

    const [enrolledClass] = useEnrolledClass()
    return (
        <div>
            <Helmet>
                <title>JINGLE | Enrolled Classes</title>
            </Helmet>
            <h3 className='text-3xl font-semibold '>Payment History</h3>
            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Payment ID</th>
                            <th>TransactionId</th>
                            <th>Courses Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item._id}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>
                                    <h3>{item.itemNames.map((itemName, index) => (
                                        <li key={index}>{itemName}</li>
                                    ))}</h3>
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.date}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistoryPage;