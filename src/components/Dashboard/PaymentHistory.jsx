import { Helmet } from 'react-helmet';

const PaymentHistory = ({enrolled}) => {
    return (
        <div className='ml-10 mt-10'>
            <Helmet>
                <title>JINGLE | Payment History</title>
            </Helmet>
            
            <div className="card bg-gradient-to-r from-indigo-300 to-purple-300 shadow-xl">
                <div className="card-body">
                    <h3>Payment ID: {enrolled._id}</h3>
                    <p>Enrolled Date: {enrolled.date}</p>
                    <p>Total Price: {enrolled.price}</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;