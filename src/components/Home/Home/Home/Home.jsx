import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner";
import MusicPlay from "../MusicPlay";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";
import { Helmet } from "react-helmet-async";
import QuickFacts from "../QuickFacts";
import Blogs from "./Blogs";
import Slides from "../Slides";
import FaQ from "../FAQ";

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>JINGLE | Home</title>
            </Helmet>
            <Banner></Banner>
            <Slides></Slides>
            <MusicPlay></MusicPlay>
            <PopularClasses></PopularClasses>
            <Blogs></Blogs>
            <PopularInstructors></PopularInstructors>
            <QuickFacts></QuickFacts>
            <Reviews></Reviews>
            <FaQ></FaQ>
        </div>
    );
};

export default Home;