const FaQ = () => {
    return (
        <div className="mx-20 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img className="md:ps-40" src="https://media1.giphy.com/media/3odxflN8NqzeSIRyvb/giphy.gif?cid=ecf05e47cqlpke1meqwy0afwn0fq40ty1y0qcmigb9y8ium9&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
                </div>
                <div>
                     <p className="text-yellow-600 mb-2 italic mb-3">FAQs</p>
                    <h2 className="text-4xl font-semibold mb-8">Frequently Asked Questions</h2>
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        What instruments do you offer lessons for?
                        </div>
                        <div className="collapse-content ">
                            <p className="text-left">At our music instrument school, we offer lessons for a wide range of instruments, including piano, guitar, violin, drums, flute, saxophone, clarinet, trumpet, and many more. Our expert instructors are skilled in teaching various musical styles and levels, catering to both beginners and advanced students.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        What qualifications do your instructors have?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">Our music instructors are highly qualified and experienced professionals. They hold degrees in music or have extensive performance and teaching backgrounds. We carefully select instructors who are passionate about teaching and dedicated to nurturing the musical talents of our students.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        Do I need to own my instrument before starting lessons?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">While it is beneficial to have access to your instrument for regular practice, it is not mandatory to own one before starting lessons. We understand that beginners might want to explore different instruments before making a purchase. During the initial stages, we can provide instruments for in-class practice until you are ready to invest in your own.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        Is there a performance opportunity for students?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">Yes, we believe that performance is a crucial aspect of music education. We organize regular recitals, concerts, and showcases where students can showcase their progress and talents in front of an audience. Participating in performances helps boost confidence and provides valuable stage experience.</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default FaQ;