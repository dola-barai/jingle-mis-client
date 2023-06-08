import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-max py-20 bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686198326~exp=1686198926~hmac=31c7064d141e810d59ff017a0a84ba171b0bc816ff8cfbfc2ae49179498f5775" alt="" />
                    </div>
                    <div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-indigo-500">
                        <h3 className="text-3xl font-semibold text-center pt-6 text-white">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="example@gmail.com" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6 })} placeholder="********" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                            </div>
                            <div className="form-control mt-6">
                               <input className="btn btn-primary text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="text-center mb-2 text-white"><small>New Here? <Link to="/register">Create an account</Link> </small></p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;