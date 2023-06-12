import { Helmet } from "react-helmet";

const MyEnrolledClass = ({ enrolled }) => {
    return (
        <div>
            <Helmet>
               <title>JINGLE | My Enrolled Classes</title>
            </Helmet>
            <div className="card bg-gradient-to-r from-indigo-300 to-purple-300 shadow-xl">
                <div className="card-body">

                    <h2>Enrolled Classes: </h2>
                    <h3>{enrolled.itemNames.map((itemName, index) => (
                        <li key={index}>{itemName}</li>
                    ))}</h3>
                    <p>Enrolled Date: {enrolled.date}</p>
                    <p>Total Price: {enrolled.price}</p>
                </div>
            </div>

        </div>
    );
};

export default MyEnrolledClass;