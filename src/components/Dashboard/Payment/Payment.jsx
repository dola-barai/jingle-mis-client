import { Helmet } from 'react-helmet';
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from '../../../Shared/SecTitle/SecTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useSelectedClass from '../../../hooks/useSelectedClass';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectedClass] = useSelectedClass();
    const total = selectedClass.reduce( (sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Helmet>
                <title>JINGLE | Payment</title>
            </Helmet>
            <SectionTitle
                heading={"Payment"}
                subHeading={""}
            ></SectionTitle>
        
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;