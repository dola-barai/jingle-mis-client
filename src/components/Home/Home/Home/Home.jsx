import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>JINGLE | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;