import SectionTitle from "../../../Shared/SecTitle/SecTitle";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

import img1 from '../../../assets/i1.png'
import img2 from '../../../assets/i2.png'
import img3 from '../../../assets/i3.png'
import img4 from '../../../assets/i4.png'
import img5 from '../../../assets/i5.png'
import img6 from '../../../assets/i6.png'

const PopularInstructors = () => {
    return (
        <div>
            <SectionTitle
                heading={"Popular Instructors"}
                subHeading={"Student's preferred"}
            ></SectionTitle>
            <div className="mb-12">
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img1} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Karan Johnson</h3>
                        <h4 className="mb-4">Professional Guitarist</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img2} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Emily Thompson</h3>
                        <h4 className="mb-4">Professional Violinist</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img3} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Mark Davis</h3>
                        <h4 className="mb-4">Professional Drum Player</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img4} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Jessica Ramirez</h3>
                        <h4 className="mb-4">Professional Saxophonist</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img5} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Jessica Fannale</h3>
                        <h4 className="mb-4">Professional Guitarist</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img className="w-48 rounded-full " src={img6} alt="" />
                        <h3 className="text-xl  font-bold mt-4">Tiana Tabassum</h3>
                        <h4 className="mb-4">Professional Saxophonist</h4>
                        <div className="flex gap-8 ml-8">
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagramSquare></FaInstagramSquare>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;