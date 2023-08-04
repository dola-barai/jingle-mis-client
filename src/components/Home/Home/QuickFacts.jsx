import SectionTitle from "../../../Shared/SecTitle/SecTitle";
import './QuickFacts.css'

const QuickFacts = () => {
    return (
        <div>
            <SectionTitle
                heading={"Quick Facts"}
                subHeading={"The Numbers"}
            ></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-56 bgg p-12">
            <div className="flex justify-center ">
                  <div className="me-4">
                    <img className="h-16 rounded-full" src="https://img.freepik.com/free-vector/itunes-icon-app_23-2147521833.jpg?1&w=740&t=st=1691170659~exp=1691171259~hmac=921b8873cd22d4b4846ce4fdbbf372702274a62764ed314548da58b317a84349" alt="" />
                   </div>
                   <div className="text-left">
                        <div>
                           <h2 className="text-xl font-semibold font-serif mt-1 text-white">1234</h2>
                           <p className="text-lg text-white font-serif">Students</p>
                        </div>
                   </div> 
            </div>
            <div className="flex justify-center ">
                  <div className="me-4">
                    <img className="h-16 rounded-full" src="https://img.freepik.com/free-vector/world-teachers-day-poster-design_1308-117234.jpg?w=740&t=st=1691172471~exp=1691173071~hmac=78d5b98ebef1755ead682b590df78c374ab58ecccd35a4561d7a2c399fa44bae" alt="" />
                   </div>
                   <div className="text-left">
                        <div>
                           <h2 className="text-xl font-semibold font-serif mt-1 text-white">24</h2>
                           <p className="text-lg text-white font-serif">Teachers</p>
                        </div>
                   </div> 
            </div>
            <div className="flex justify-center ">
                  <div className="me-4">
                    <img className="h-16 rounded-full" src="https://img.freepik.com/free-vector/drum-with-musical-notes-white-background_1308-90547.jpg?w=740&t=st=1691172622~exp=1691173222~hmac=e589dd76a8423f976b0f948e106aa4ee5310e30abd2ab60bb1c37455dd82b114" alt="" />
                   </div>
                   <div className="text-left">
                        <div>
                           <h2 className="text-xl font-semibold font-serif mt-1 text-white">14</h2>
                           <p className="text-lg text-white font-serif">Classes</p>
                        </div>
                   </div> 
            </div>
            <div className="flex justify-center ">
                  <div className="me-4">
                    <img className="h-16 rounded-full" src="https://img.freepik.com/free-vector/acoustic-guitar_23-2147513686.jpg?1&w=740&t=st=1691172700~exp=1691173300~hmac=32e99912c09699bff8c675378288e16dec79b839203907dd7b8318c090c52127" alt="" />
                   </div>
                   <div className="text-left">
                        <div>
                           <h2 className="text-xl font-semibold font-serif mt-1 text-white">12</h2>
                           <p className="text-lg text-white font-serif">Lessons</p>
                        </div>
                   </div> 
            </div>
            </div>
        </div>
    );
};

export default QuickFacts;