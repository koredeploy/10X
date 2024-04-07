import React from "react";
import Courses from "../../../components/admin/dashboard/Courses";
import BestSelling from "../../../components/admin/dashboard/BestSelling";
import PopularCat from "../../../components/admin/dashboard/PopularCat";
import Recent from "../../../components/admin/dashboard/Recent";
import Library from "../../../components/admin/dashboard/Library";

const Dashboard = () => {
  return (
    <main className="container mx-auto mb-10">
      <Courses />
      <section className=" md:flex justify-between  w-full mt-5">
        <div className="w-[70%]">
          <BestSelling />
        </div>
        <div className="w-[30%]">
          <PopularCat />
        </div>
      </section>

      <section className=" md:flex justify-between  w-full mt-5">
        <div className="w-[60%]">
          <Recent />
        </div>
        <div className="w-[40%]">
          <Library />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
