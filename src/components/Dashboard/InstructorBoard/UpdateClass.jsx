import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SecTitle/SecTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const UpdateClass = () => {
    const upClass = useLoaderData()
    const {_id} = upClass;
    console.log(upClass);
    const {user} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = updatedClass => {

       // const updatedClass = {
       //     photoURL: image,
       //     cname: cname,
       //     iName: iName,
       //     email: email,
       //     price: price,
       //     role: role
       // }
        console.log(updatedClass);
        
        fetch(`http://localhost:5000/newClass/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="mx-20">
        <SectionTitle
            heading={"Update A Class"}
            subHeading={""}
        ></SectionTitle>
        <div>
    
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-2 my-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("iName", { required: true, maxLength: 80 })}
                        defaultValue={user.displayName}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span></label>
                    <input  type="email"  {...register("email", { required: true })} 
                    defaultValue={user.email}
                    placeholder="Instructor Email" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("cname", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="grid grid-cols-2 gap-2">
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Price*</span>                    </label>
                <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Available Seats*</span>                    </label>
                <input type="number"  {...register("seats", { required: true })} placeholder="seats" className="input input-bordered w-full " />
            </div>
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text">Item Image</span>
                </label>
                <input type="text" defaultValue={upClass.image} {...register("image", { required: true })} placeholder="image" className="input input-bordered w-full "/>
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text">Role</span>
                </label>
                <input type="text" defaultValue='Pending' {...register("role", { required: true })} placeholder="role" className="input input-bordered w-full "/>
            </div>


            <input className="btn btn-sm mt-4" type="submit" value="Update Class" />
        </form>
    </div>
    );
};

export default UpdateClass;