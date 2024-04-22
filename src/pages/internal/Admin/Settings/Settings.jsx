import {useEffect, useState} from 'react'
import admin from "../../../../assets/admin-img.svg";
import deleteIcon from "../../../../assets/delete-icon.svg";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAdminContext from '../../../../hooks/useAdminContext';

const Settings = () => {
  const {API_URL, getUser, userInfo, token} = useAdminContext()
  console.log(userInfo);
  const [image, setImage] = useState(userInfo?.data?.photo)
  const [user, setUser] = useState(userInfo?.data)
  // const [email, setEmail] = useState("")
  const {register, handleSubmit} = useForm()

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      
    }
  };

 

  const updatePassword = async (data) => {

    const formData = new FormData();
    formData.append("currentPassword", data?.currentPassword);
    formData.append("newPassword", data?.newPassword);
    try {
      const {data} = await axios.put(`${API_URL}/api/v1/auth/updatepassword`,formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }



  const updateDetails = async (data) => {
    console.log(data);
    const formData = new FormData()
    formData.append("fullname", data.fullname)
    formData.append("email", data.email)
    

    if (data.photo) {
      formData.append("photo", data.photo[0])
    }

    else {
      formData.append("photo",user?.photo)
    }
    // formData.append("role", data.role)

    // console.log(formData);

    
    try {
      const res = await axios.put("https://one0x-revenue.onrender.com/api/v1/auth/updatedetails",formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(res.data);
      if (res.data.success) {
        getUser()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=' container w-11/12 mx-auto my-2'>

      <div className='my-7 text-center md:text-left'>
      <h2 className='text-[#0027BA] font-semibold md:text-2xl text-xl'>Profile Settings</h2>
      <p className='text-[#818181] font-medium'>Update your profile and personal information</p>
    <hr className="bg-grey h-[2px] my-3 max-w-[1070px]"/>
      </div>

      <div className='flex lg:flex-row flex-col items-center gap-6'>
        <div className='xl:w-[637px] lg:w-2/3 w-full p-3 border-[rgba(0,0,0,0.1)] shadow-md border-2 rounded-xl'>
          <form>
            <h2 className='text-[#0027BA] font-semibold text-lg my-3'>Personal Information</h2>
            <hr className="bg-grey h-[1.5px] "/>
            <div className='flex md:flex-row flex-col my-3 items-center gap-2'>
              <img src={image} className=' w-20 h-20 object-cover rounded-lg' alt="" />
              <div className='flex gap-2'>

              <button className='h-[41px] bg-blue rounded-lg px-3 text-white font-semibold text-xs relative cursor-pointer' type="button"><input type="file" accept='image/*' {...register("photo")} onChange={handleImageChange} onMouseOver={(e) => e.target.title = ""}  className='w-full h-full opacity-0 absolute inset-0   cursor-pointer' />Upload new picture</button>
              <button className='h-[41px] flex items-center justify-center px-5 gap-2 border-[#F87171] border-2 rounded-lg text-[#F87171] font-semibold' type="button"><img src={deleteIcon} alt="" />Delete</button>
              </div>
            </div>

            <div className='flex md:flex-row flex-col my-6 gap-3 w-full'>
              <div className='flex flex-col xl:w-1/2 w-full gap-1'>
                <label className='text-[#0027BA] font-medium'>First Name</label>
                <input type="text" placeholder='First Name' {...register("fullname")} defaultValue={user?.fullname} className=' w-full px-4 placeholder:text-[#6476BA] text-[#6476BA] h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>
              <div className='flex flex-col xl:w-1/2 w-full gap-1'>
                <label className='text-[#0027BA] font-medium'>Last Name</label>
                <input type="text" placeholder='Last Name' className='w-full text-[#6476BA] placeholder:text-[#6476BA]  px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>
            </div>
            <div  className='flex flex-col mb-6 gap-1'>
                <label className='text-[#0027BA] font-medium'>Email</label>
                <input type="email" placeholder='Email Address' {...register("email")} defaultValue={user?.email} className=' h-12 px-4 text-[#6476BA] placeholder:text-[#6476BA] rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>

              <div className='flex gap-3 md:justify-end justify-center'>
                <button className='h-[41px] border-blue border-2 rounded-lg px-5 text-blue font-semibold text-sm'>Discard</button>
                <button className='h-[41px] bg-blue rounded-lg px-5 text-white font-semibold text-xs' type="button" onClick={handleSubmit(updateDetails)}>Save Changes</button>
              </div>
            
          </form>
        </div>


        <div className=' lg:max-w-[401px] lg:w-1/2 w-full h-full border-[#0000001A] border-2 shadow-md rounded-xl'>
          <form className='flex flex-col p-4  gap-3'>
          <h2 className='text-[#0027BA] font-semibold text-lg mt-3'>Security</h2>
          <hr className="bg-grey h-[1.5px]"/>

          <div  className='flex flex-col gap-1'>
                <label className='text-[#0027BA] font-medium'>Current Password</label>
                <input type="password" {...register("currentPassword")} className=' px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>
          <div  className='flex flex-col gap-1'>
                <label className='text-[#0027BA] font-medium'>New Password</label>
                <input type="password" {...register("newPassword")}  className=' px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>
          <div  className='flex flex-col gap-1'>
                <label className='text-[#0027BA] font-medium'>Confirm Password</label>
                <input type="password" className=' px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div>
              <div className='flex gap-3 md:justify-end justify-center my-3'>
                <button className='h-[41px] border-blue border-2 rounded-lg px-5 text-blue font-semibold text-sm' type="button">Discard</button>
                <button className='h-[41px] bg-blue rounded-lg px-5 text-white font-semibold text-xs' onClick={handleSubmit(updatePassword)}>Save Changes</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings