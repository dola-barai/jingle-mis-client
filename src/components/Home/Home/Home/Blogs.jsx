import Tilt from 'react-parallax-tilt';

import SectionTitle from '../../../../Shared/SecTitle/SecTitle';

const Blogs = () => {
    return (
        <div>

            <div className='mx-auto bgImageP py-12'>

            <SectionTitle
                heading={"Blogs"}
                subHeading={"Published"}
            ></SectionTitle>

                <div className='grid grid-cols-1 mx-16 md:grid-cols-3 gap-4 '>
                    {/* First */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_3.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/premium-photo/microphone-night-colorful-light_79295-18502.jpg?w=360"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>

                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold  hover:text-orange-500'>Harmony Haven: Exploring the Melodies of Music</p>
                            </div>
                        </div>

                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/premium-photo/microphone-night-colorful-light_79295-18502.jpg?w=360" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Harmony Haven: Exploring the Melodies of Music</p>
                                        
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'> Harmony Haven is a music blog dedicated to exploring the world of melodies and harmonies. From classical symphonies to contemporary tunes, we delve into the rich tapestry of music across genres. Discover in-depth analyses, artist spotlights, album reviews, and more. Join us on a melodic journey to celebrate the beauty and power of music.</h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Second */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_2.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/premium-photo/girl-with-guitar_152625-1705.jpg?w=360"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold hover:text-orange-500'>Rhythmic Notes: Unveiling the Soul of Sound</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_2" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/premium-photo/girl-with-guitar_152625-1705.jpg?w=360" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Rhythmic Notes: Unveiling the Soul of Sound</p>
                                        
                            
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'>Rhythmic Notes is your ultimate destination for understanding the soulful essence of music. We believe that rhythm is the heartbeat of every song, and we explore the emotional impact it has on our lives. Dive into captivating articles that discuss musics cultural significance, interviews with musicians, and discussions about the connection between rhythm and human emotions.</h2>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Third */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_1.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/free-photo/medium-shot-woman-playing-guitar_23-2148243228.jpg?w=360&t=st=1691173494~exp=1691174094~hmac=27c3c77e76810b732916aaa586a0a07f917005f3526ece14edf005491eaf5ee9"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold  hover:text-orange-500'>Sonic Journeys: A Music Discovery Blog</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_1" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/free-photo/medium-shot-woman-playing-guitar_23-2148243228.jpg?w=360&t=st=1691173494~exp=1691174094~hmac=27c3c77e76810b732916aaa586a0a07f917005f3526ece14edf005491eaf5ee9" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Sonic Journeys: A Music Discovery Blog</p>

                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'>Embark on a thrilling Sonic Journey with us as we navigate the vast landscapes of undiscovered music. Our blog is dedicated to unearthing hidden gems, rising talents, and groundbreaking tracks from all corners of the world. Whether you are a music connoisseur or simply looking for fresh tunes, Sonic Journeys promises to be your guide to the most exciting musical discoveries. Join the adventure!





</h2>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;