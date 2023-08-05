import { Swiper, SwiperSlide } from "swiper/react";
import './Reviews.css'
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import SectionTitle from "../../../Shared/SecTitle/SecTitle";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const videoElement = document.getElementById("background-video");
        videoElement.play().catch((error) => {
            console.error("Video playback failed:", error);
        });
    }, []);


    useEffect(() => {
        fetch('https://jingle-mis-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="md:mx-20 md:mb-3">
            <SectionTitle
                subHeading={"reviews"}
                heading={"Parent's Reviews"}
            ></SectionTitle>
            <div className="bg pb-12">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 5000 }}
                >
                    <video
                        id="background-video"
                        className="background-video"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="https://video-previews.elements.envatousercontent.com/h264-video-previews/5e0e4c8d-133b-4a93-9d65-6c2a779c5a00/14066524.mp4" />
                    </video>

                    {
                        reviews.map((review) => <SwiperSlide
                            key={review._id}
                        >
                            <div
                                className="flex flex-col items-center text-black md:mx-32 "  
                            >
                                <Rating className="mb-4 pt-16" style={{ maxWidth: 100 }} value={review.rating} readOnly />
                                <p className="text-center mb-2">{review.comment}</p>
                                <img className="rounded-full h-16" src={review.image} alt="" />
                                <h3 className="text-2xl mb-12 text-yellow-600">{review.user_name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;