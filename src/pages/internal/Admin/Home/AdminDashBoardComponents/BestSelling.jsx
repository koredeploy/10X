import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAdminContext from "../../../../../hooks/useAdminContext";
import axios from "axios";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const courses = [
//   {
//     id: crypto.randomUUID(),
//     title: "The Zero Call Close",
//     category: "Video",
//     units: 185599,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "The Zero Call Close",
//     category: "Book",
//     units: 185599,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "The Zero Call Close",
//     category: "Video",
//     units: 185599,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "The Zero Call Close",
//     category: "Video",
//     units: 185599,
//   },
// ];

const BestSelling = () => {
  const {bestSellingCourse, loading} = useAdminContext()
  // console.log(API_URL);
  console.log(bestSellingCourse);


//  try {
//   const res = await axios.get(`${API_URL}/api/v1/course/top-selling`,{
//     hearders: {
//      Authorization: `Bearer ${token}`
//    }
//  })
//  console.log(res);
//  } catch (error) {
//   console.log(error);
//  }
//   }

//   useEffect(()=>{
//     topSelling()
//   },[])
//   console.log(token);
  return (
    <main
      className="shadow-xl overflow-x-auto shadow-[#032BF214] border-[rgba(0,0,0,0.1)] border-2 p-5 rounded-md w-full "
      style={{ height: "100%", width: "100%" }}
    >
      <div className=" flex items-center w-full justify-between ">
        <h1 className="xl:text-lg font-semibold text-darkBlue py-2">
          Best Selling Courses
        </h1>
      </div>

      <table>
        <thead className="w-full text-left table-auto">
          <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
            <th className="px-3 py-3 lg:min-w-[170px] xl:min-w-[207px] ">
              {" "}
              Course Name
            </th>
            <th className="px-3 py-3 lg:min-w-[170px] xl:min-w-[207px]  text-center">
              {" "}
              Category
            </th>
            <th className="px-3 py-3 lg:min-w-[170px] xl:min-w-[207px]  text-center">
              {" "}
              Units Sold
            </th>
          </tr>
        </thead>

        {loading && <tbody>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
         
          </tbody>}

        <tbody>
          {bestSellingCourse?.map((b) => (
            <tr className="border-b m" key={b._id}>
              <td className=" text-md px-3 text-darkBlue font-semibold underline py-5">
                {b.course.title}
              </td>
              <td className={` py-3 px-3 text-center w-10`}>
                <div></div>
                <p
                  className={` text-sm bg-[#CFE6FF] px-3 py-1 font-semibold  w-20 text-center mx-auto rounded-md  ${
                    b.course.category.toLowerCase() === "book" && "text-[#AD70FF]"
                  }`}
                >
                  {b.course.category}
                </p>
              </td>

              <td className="p-3 text-sm text-grey text-center">{b.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BestSelling;
