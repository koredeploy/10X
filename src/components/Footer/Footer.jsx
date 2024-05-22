import React from "react";
import logo from "../../assets/footer.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="">
      <section className="pb-7">
        <main className=" p-5  md:flex justify-between container mx-auto w-11/12 gap-3">
          <section className="hidden md:block ">
            <img src={logo} alt="" className=" md:w-[200px] md:h-[70px]" />

            <div className="flex gap-10 mt-5">
              <div className="flex gap-3 flex-col text font-[650]">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>Services</Link>
                <Link to={"/resource"}>Resource Hub</Link>
                <Link to={"/about"}>About us</Link>
              </div>

              <div className="flex gap-3 flex-col text font-[650]">
                <Link to={"/resource"}>Become a Client</Link>
                <Link to={"/resource"}>Training</Link>
                <Link>Community</Link>
                <Link to={"/login"}>Log in</Link>
              </div>
            </div>
          </section>

          <section className="mt-10 md:mt-0 text ">
            <h1 className="font-[870] text-lg text-center md:text-start">
              7+ Figures and Beyond
            </h1>
            <p className="text-sm max-w-[300px] md:max-w-[350px] mx-auto md:mx-0 text-center md:text-start">
              Subscribe to our newsletter and keep up to date with the latest
              news, tips & tricks from Revenue Growth
            </p>

            <form className="mt-4 relative flex justify-center flex-col items-center">
              <input
                type="email"
                className="w-[400px] h-[67px] max-w-full ps-3 rounded-2xl outline-none bg-transparent border-2 placeholder:text-sm md:relative md:pe-[160px] pe-[120px]"
                placeholder="Enter your email"
              />
              <button className="w-[347px] max-w-full mt-4 md:w-[144px] h-[67px] md:h-[43px] bg-[#fefefe] text-blue font-[650] rounded-lg md:absolute md:right-3 md:-top-1">
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-center md:text-start text-sm">
              For media inquiries, please contact us at
            </p>
            <p className=" underline text-center md:text-start text-sm">
              7+figures@revenuegrowth.com
            </p>
          </section>
        </main>

        <div className="bg-white w-11/12 h-[1px] mx-auto hidden md:block" />
        <section className="md:hidden mx-4 space-y-4 mt-3 flex flex-col text-[#fefefe] font-[650]">
          <hr className="bg-white w-[540px] md:w-[900px] lg:w-[910px] max-w-full mx-auto " />
          <Link to={"/"}>Home</Link>
          <hr className="bg-white w-[930px] max-w-full mx-auto" />
          <Link to={"/about"}>Service</Link>
          <hr className="bg-white w-[930px] max-w-full mx-auto" />
          <Link to={"/resource"}>Resource Hub</Link>
          <hr className="bg-white w-[930px] max-w-full mx-auto" />
          <Link to={"/about"}>About Us</Link>
          <hr className="bg-white w-[930px] max-w-full mx-auto" />
        </section>
        <div className="mx-4 md:hidden flex justify-between items-start text-[#fefefe] underline mt-10">
          <Link>Terms of Use</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className="mt-10 text-center rights md:hidden">
          <p>2024 Revenue Growth. All rights reserved</p>
        </div>
        <div className="hidden  md:flex gap-4 px-3 my-10 md:ms-14 text-[#fefefe] underline xl:justify-center">
          <p>2024 Revenue Growth. All rights reserved</p>
          <Link>Terms of Use</Link>
          <Link>Privacy Policy</Link>
        </div>
      </section>
    </footer>
  );
};
