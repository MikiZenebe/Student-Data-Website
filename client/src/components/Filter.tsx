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
