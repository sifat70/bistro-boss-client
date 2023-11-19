import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                .then(() =>{
                    console.log('user profile info updated')
                    reset();
                    Swal.fire({
                        title: "User Login",
                        text: "Login successfully",
                        icon: "success"
                      });
                      navigate('/')
                })
                .catch(error => console.log(error))
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Input your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500"> name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-500"> Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-500"> email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20, })} placeholder="password" className="input input-bordered" />
                                {/* pattern: /[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ password validation */}
                                {errors.password?.type === 'required' && <span className="text-red-500"> password required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500"> password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500"> password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500"> password must have one uppercase one lower case one number less than 20 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;