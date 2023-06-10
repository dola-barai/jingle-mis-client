import logo from "../../../public/logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer font-semibold classs-center text-white bg-gradient-to-r from-indigo-500 to-purple-500  p-10">
                <div className="mx-auto">
                   <img className="h-40 rounded-full" src={logo}/>
                </div>
                <div className="mx-auto">
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">19-D/3, Ring Rd, Dhaka</a>
                    <a className="link link-hover">Support: jingle@international-school.com</a>
                    <a className="link link-hover">Phone: 01334567890, 01900000000</a>
                </div>
                <div className="mx-auto">
                    <span className="footer-title">Working Hours</span>
                    <a className="link link-hover">Sunday-10 am to 7 pm</a>
                    <a className="link link-hover">Monday-10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday-10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday-10 am to 7 pm</a>
                    <a className="link link-hover">Thursday-10 am to 7 pm</a>
                </div>
                
            </div>
            <hr />
            <div>
                <div className="footer footer-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-base-content">
                    <p className="text-xl text-white font-bold">© JINGLE - Music Instrument Learning School 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;