import FileDropzone from "./FileDropZone";
import propTypes from "prop-types";
import { useFormContext } from "react-hook-form";

const CreateCourseDetails = ({ loading, onSubmit  }) => {
  // const { handleSubmit } = useFormContext();

  const {
    register,
    formState: { errors },
  } = useFormContext();
  // const handleNext = () => {
  //   setShowNext(true);
  // };
  return (
    <div>
      <div className=" flex justify-between items-center gap-5">
        <div>
          <h1 className="text-[#0027BA] text-xl md:text-3xl font-bold">
            Create New Course
          </h1>
          <p className="text-[#818181] sm:text-sm w-[90%] md:w-full pt-1 md:pt-2">
            Please fill in all the details of your course.
          </p>
        </div>
        <button
            type="submit"
            onClick={onSubmit}
            className="text-white bg-[#032BF2] w-32 h-12 rounded-lg "
          >
            {loading ? "loading..." : "Publish"}
          </button>
        {/* <button
          onClick={handleNext}
          className="text-white bg-[#032BF2] w-32 h-12 rounded-lg "
        >
          Next
        </button> */}
      </div>
      <div className=" mt-8 mb-9 px-6 rounded-lg border shadow-md py-7">
        <h1 className="text-[#A5A5A5] text-sm font-medium ">COURSE DETAILS</h1>

        <hr className=" my-6 border border-gray-400 " />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Course Title
            </label>
            <input
              type="text"
              id="course-title"
              {...register("title", { required: "Course title is required" })}
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Name your course......"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
            <label
              htmlFor="description"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Course Description
            </label>
            <textarea
              id="description"
              rows={3}
              type="text"
              {...register("description", {
                required: "Course description is required",
              })}
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Short course description"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}

            <label
              htmlFor="price"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Price *
            </label>
            <input
              id="price"
              placeholder="100,000.00"
              {...register("price", { required: "Price is required" })}
              type="number"
              className="px-3 py-4 border-2 placeholder:text-gray-500 border-gray-400 rounded-md "
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>
          <div>
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="w-full">
                <label
                  className="font-semibold text-base text-left w-full text-[#6476BA]"
                  htmlFor="category"
                >
                  Course category{" "}
                </label>
                <div className="grid grid-cols-2 gap-4 w-full lg:w-52 py-3">
                  <div className="flex items-center ps-4  shadow border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      {...register("category", {
                        required: "Category is required",
                      })}
                      value="video"
                      name="category"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="bordered-radio-1"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Video
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border shadow border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-2"
                      type="radio"
                      {...register("category", {
                        required: "Category is required",
                      })}
                      value="book"
                      name="category"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Book
                    </label>
                  </div>
                </div>
                {errors.category && (
                  <span className="text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full ">
                <label className="text-[#6476BA] font-semibold text-left" htmlFor="url">
                  Url Link *
                </label>
                <input
                {...register("url", {
                  required: "url link is required",
                })}
                  className="px-3 min-w-60 h-[45px] my-3 border-2 border-gray-400 rounded-md "
                  type="text"
                  placeholder="Enter url"
                />
            {errors.url && (
              <span className="text-red-500"> {errors.url.message} </span>
            )}
              </div>
            </div>
            {/* drag & drop */}
            <FileDropzone />
          </div>
          {/* <button type="submit">submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default CreateCourseDetails;

CreateCourseDetails.propTypes = {
  setShowNext: propTypes.bool,
};
