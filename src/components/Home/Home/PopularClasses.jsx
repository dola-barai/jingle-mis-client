import Aos from "aos";
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';
import SectionTitle from "../../../Shared/SecTitle/SecTitle";
import img1 from '../../../assets/gl.jpg'
import img2 from '../../../assets/vl.jpg'
import img3 from '../../../assets/dl.jpg'
import img4 from '../../../assets/sl.jpg'
import img5 from '../../../assets/gl2.jpg'
import img6 from '../../../assets/s1l.jpg'
import { useEffect } from "react";

const PopularClasses = () => {
    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={"Popular Classes"}
                subHeading={"Student's preferred"}
            ></SectionTitle>
            <div>
                <div className="grid md:grid-cols-3  gap-6 ml-5 md:ml-10 mb-10 " >

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-right'>
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">
                                    Guitar Lessons by Karan Johnson
                                    <div className="badge badge-secondary">50 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-down'>
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black">
                                    Violin Lessons by Emily Thompson
                                    <div className="badge badge-secondary">48 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-left'>
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">
                                    Drum Lessons by Mark Davis
                                    <div className="badge badge-secondary">45 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-right'>
                            <figure><img src={img4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">
                                    Saxophone Lessons by Jessica Ramirez
                                    <div className="badge badge-secondary">40 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-up'>
                            <figure><img src={img5} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">
                                    Guitar Lessons by Jessica Fannale
                                    <div className="badge badge-secondary">39 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>

                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={2}
                        perspective={500}
                        scale={1}
                        transitionSpeed={100}
                        gyroscope={true}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl" data-aos='fade-left'>
                            <figure><img src={img6} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">
                                    Saxophone Lessons by Tiana Tabassum
                                    <div className="badge badge-secondary">38 </div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </Tilt>


                </div>
            </div>
        </div>
    );
};

export default PopularClasses;