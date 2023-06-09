import { Parallax } from 'react-parallax';
import './CoverC.css'
const CoverC = () => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        strength={-200}
    >
        <div className="hero h-[700px]" >
            <div className="hero-overlay bgImage bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase text-purple-800 bg-white py-24 bg-opacity-50">All Available Classes</h1>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default CoverC;