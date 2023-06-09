import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Instructors = ({instructor}) => {

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return (
      <div className="card mt-12 mb-12 w-96 bg-gradient-to-t from-purple-200 to-indigo-200 shadow-xl " data-aos='zoom-in-up'>
      <figure className="px-5 pt-5">
        <img src={instructor.image} className="rounded-xl h-80 " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {instructor.name}</h2>
        <p>Email: {instructor.email}</p>
        <p>Class: {instructor.classes}</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-primary">See Classes</button>
        </div>
      </div>
    </div>
    );
};

export default Instructors;