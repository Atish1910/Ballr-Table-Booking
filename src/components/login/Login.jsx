import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Login() {
    const { 
        register,
        watch,
        handleSubmit,
        reset,
        formState : {errors , isSubmitting}
        
    } = useForm();

    function onlogin(){
        console.log("You just submitted form");
    }
    
    return (
        <section className="login_01">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <h1>Ballr - Welcome to Ballr PR/Admin Application</h1>
                    <div className="col-lg-6 border rounded-3 py-4">
                        <form onSubmit={handleSubmit(onlogin)}>
                            <input 
                                type="number" 
                                className={`form-control mb-3 ${errors.phoneNo ? "input-errors" : ""}`} 
                                placeholder="Enter Phone Number"
                                {
                                    ...register("phoneNo",
                                        {
                                            required : true,
                                            minLength : {value : 10, message : "please Enter 10 digit Mobile Number"},
                                            maxLength : {value : 10, message : "please Enter 10 digit Mobile Number"}
                                        }
                                    )
                                }
                            />
                            <input 
                                type="password" 
                                className={`form-control mb-3 ${errors.password ? "input-errors" : ""}` } 
                                placeholder="Password"
                                {
                                    ...register("password", 
                                        {
                                            required : true
                                        }
                                    )
                                }
                            />
                            {
                                errors.phoneNo && <p className="text-danger">{errors.message}</p>
                            }
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Login</button>
                            </div>
                        </form>
                        {/* Register Button */}
                        <div className="text-center mt-3">
                            <p>Don't have an account?</p>
                            <button className="btn btn-primary" onClick={() => navigate("/register")}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
