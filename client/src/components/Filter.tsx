import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  filterStudentStart,
  setFilters,
} from "../redux/reducer/studentReducer";

export default function Filter() {
  const dispatch = useDispatch();
  const { filters, courses } = useSelector(
    (state: RootState) => state.students
  );

  console.log(courses);

  useEffect(() => {
    dispatch({ type: "FETCH_COURSE" });
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
    dispatch(filterStudentStart());
  };

  return (
    <div className="my-5 w-screen max-w-screen-md">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <form className="flex flex-col">
            <div className="flex items-center justify-between mb-5 gap-[2rem]">
              <div className="relative w-[500px] lg:w-[1000px] flex  items-center  rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4  pl-12  outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>
              <div className="w-full justify-end  md:flex">
                <button className="rounded-lg bg-black px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                  Search
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-600">
                  Filter By Courses
                </label>

                <select
                  name="course"
                  value={filters.course}
                  onChange={handleFilterChange}
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-black focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
                >
                  <option value="">All Course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
