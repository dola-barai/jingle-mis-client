import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner";
import MusicPlay from "../MusicPlay";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";
import { Helmet } from "react-helmet-async";
import QuickFacts from "../QuickFacts";
import Blogs from "./Blogs";

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>JINGLE | Home</title>
            </Helmet>
            <Banner></Banner>
            <MusicPlay></MusicPlay>
            <PopularClasses></PopularClasses>
            <Blogs></Blogs>
            <PopularInstructors></PopularInstructors>
            <QuickFacts></QuickFacts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;