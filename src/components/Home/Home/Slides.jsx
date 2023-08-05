import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/home/s1.png'
import img2 from '../../../assets/home/s2.png'
import img3 from '../../../assets/home/s3.png'
import img4 from '../../../assets/home/s4.png'
import img5 from '../../../assets/home/s5.png'

import SectionTitle from "../../../Shared/SecTitle/SecTitle";

const Slides = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    heading={"Instruments"}
                    subHeading={"Popular"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={img1} />
                        <h3 className="text-4xl uppercase text-center font-serif -mt-16 text-white">Violin</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                        <h3 className="text-4xl uppercase text-center font-serif -mt-16 text-white">Saxophone</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                        <h3 className="text-4xl uppercase text-center font-serif -mt-16 text-white">Guitar</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                        <h3 className="text-4xl uppercase text-center font-serif -mt-16 text-white">Drums</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} />
                        <h3 className="text-4xl uppercase text-center font-serif -mt-16 text-white">Bassoon</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Slides;