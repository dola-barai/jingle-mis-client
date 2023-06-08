import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-max py-20 bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img  src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1686202919~exp=1686203519~hmac=717089ba539cb589763aba8d843fa76b533a6fbe680b9ba2c7117e9b0b1388ab" alt="" />
                    </div>
                    <div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
                            <h3 className="text-3xl font-semibold text-center pt-6 text-white">Registration Form</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name*</span>
                                    </label>
                                    <input type="text" name="name" {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email*</span>
                                    </label>
                                    <input type="email" name="email" {...register("email", { required: true })} placeholder="example@gmail.com" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password*</span>
                                    </label>
                                    <input type="password" name="password" {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        }
                                    )} placeholder="******" className="input input-bordered" />
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Confirm Password*</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", { required: true })} placeholder="********" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL*</span>
                                    </label>
                                    <input type="text" name="photo" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photo && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white" type="submit" value="Create Account" />
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className='text-center mb-3 text-white'><small>Already have an account <Link to='/login'>Please Login</Link></small></p>                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;