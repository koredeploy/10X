import {  createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext()


const UserProvider = ({children}) => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL
    const [userInfo, setUserInfo] = useState()
    // const [getData, setGetData] = useState()
    const [course, setCourse] = useState([]);

  const userToken = Cookies.get("userToken");
  let decode = null;

  if (userToken) {
    decode = jwtDecode(userToken);
  }

    const getUserInfo = async () => {
        try {
          const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          // console.log(data);
          if (data.success) {
            setUserInfo(data);
           
          }
        } catch (error) {
          console.log(error);
        }
      };

      
  const getPaidCourses = async () => {
    const {
      data: { data },
    } = await axios(`${API_URL}/api/v1/users/${decode?.id}/course`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    // console.log(data);
    setCourse(data);
  };

      useEffect(() => {
        if (userToken) {
            getUserInfo()
            getPaidCourses()
        }
      },[userToken])






    const UserData = {API_URL, userInfo, getUserInfo, course, userToken};
    
    return <UserContext.Provider value={UserData }>
        {children}
    </UserContext.Provider>
}

export default UserProvider