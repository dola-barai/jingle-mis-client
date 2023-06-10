import SectionTitle from "../../../Shared/SecTitle/SecTitle";
import img1 from '../../../assets/gl.jpg'
import img2 from '../../../assets/vl.jpg'
import img3 from '../../../assets/dl.jpg'
import img4 from '../../../assets/sl.jpg'
import img5 from '../../../assets/gl2.jpg'
import img6 from '../../../assets/s1l.jpg'
const PopularClasses = () => {
    return (
        <div>
            <SectionTitle
                heading={"Popular Classes"}
                subHeading={"Student's preferred"}
            ></SectionTitle>
            <div className="md:mx-20">
            <div className="md:grid sm:ml-40 md:grid-cols-3   gap-6 mx-auto mb-10">
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Guitar Lessons by Karan Johnson
                        <div className="badge badge-secondary">50 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Violin Lessons by Emily Thompson
                        <div className="badge badge-secondary">48 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Drum Lessons by Mark Davis
                        <div className="badge badge-secondary">45 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Saxophone Lessons by Jessica Ramirez
                        <div className="badge badge-secondary">40 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img5} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Guitar Lessons by Jessica Fannale
                        <div className="badge badge-secondary">39 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img6} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Saxophone Lessons by Tiana Tabassum
                        <div className="badge badge-secondary">38 </div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Book Now</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default PopularClasses;