import React from "react";
import logo from "../../../assets/10X LOGO.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import emailIcon from "../../../assets/purchase-email.svg";
import lock from "../../../assets/purchase-lock.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../hooks/useAdminContext";
import Cookies from "js-cookie";

const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const {API_URL} = useAdminContext()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("password", data.password)
    formData.append("role", "admin")
    try {
        const {data} = await axios.post(`${API_URL}/api/v1/auth/login`, formData)
        console.log(data);

        if (data.success) {
            Cookies.set("token", data.token)
            navigate("/admin/home")

        }
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div>
      <div className="h-screen grid place-items-center w-full">
        <form className="flex flex-col gap-20 items-center px-3 " onSubmit={handleSubmit(onSubmit)}>
         <div >
         <Link>
            <img src={logo} alt="" />
          </Link>
          </div>

          <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-center text-blue font-[800]">
              Welcome Back, Administrator
            </h2>
            <p className="text-center text-xl font-medium text-grey">
              Please enter your details to continue{" "}
            </p>
          </div>

          <div className="flex w-full flex-col gap-8 my-4">
            <div className="relative w-full  flex items-center">
              <img src={emailIcon} className=" absolute h-[18px]  left-4" alt="" />
              <input
                type="email"
                className="w-full border px-11 border-grey outline-none h-12 rounded-lg text-grey text-[15px] "
                placeholder="Email Address"
                {...register("email")}
              />
            </div>
            <div className="relative w-full  flex items-center">
              <img src={lock} className=" absolute h-[17px]  left-4" alt="" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-grey outline-none h-12  rounded-lg px-11 text-grey text-[15px] "
                placeholder="Password"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>
    <div className="w-full space-y-3">
    <div className="w-full flex justify-between items-center text-grey mt-4">
            <label className="font-semibold text-xs flex items-center gap-1 cursor-pointer ">
              <input
                type="checkbox"
                className="size-4 rounded-md cursor-pointer"
                name=""
                id=""
              />{" "}
              Remember Me
            </label>
            <p className="font-semibold text-xs underline">
              <Link>Forgot password?</Link>
            </p>
          </div>

          <button className="w-full bg-blue font-bold text-white h-[45px] rounded-xl ">
            Log In
          </button>
    </div>
         
          </div> 
  
          
 
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
