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
import Message from "../Message";

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
            <Message></Message>
        </div>
    );
};

export default Home;