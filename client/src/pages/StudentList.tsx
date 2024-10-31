import { useEffect } from "react";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";

import { getStudentsFetch, setPage } from "../redux/reducer/studentReducer";
import { RootState } from "../redux/store";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function StudentList() {
  const dispatch = useDispatch();
  const { students, filters, pagination, error, loading } = useSelector(
    (state: RootState) => state.students
  );

  useEffect(() => {
    dispatch(getStudentsFetch());
  }, [dispatch, pagination.currentPage, filters]);

  const handleChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      {loading ? (
        <div className="flex mx-auto justify-center items-center h-[70vh]">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black flex justify-center items-center mx-auto " />
        </div>
      ) : (
        <>
          {error && toast.error(error)}
          <Filter />
          <div className="overflow-y-hidden rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black/80 text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">No</th>
                    <th className="px-5 py-3">Full Name</th>
                    <th className="px-5 py-3">Age</th>
                    <th className="px-5 py-3">Course</th>
                    <th className="px-5 py-3">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  {Array.isArray(students) &&
                    students.map((student, i) => {
                      return (
                        <tr className="hover:bg-gray-700" key={student._id}>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <Link
                              to={`/student/${student._id}`}
                              className="whitespace-no-wrap"
                            >
                              {i + 1}
                            </Link>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <div className="flex items-center">
                              <div className="">
                                <Link
                                  to={`/student/${student._id}`}
                                  className="whitespace-no-wrap"
                                >
                                  {student.fullName}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{student.age}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {student.course}
                            </p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            {student.contactInfo}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
              <span className="text-xs text-gray-600 sm:text-sm">
                {" "}
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              <div className="mt-2 inline-flex sm:mt-0">
                <button
                  className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-black hover:text-white cursor-pointer"
                  disabled={pagination.currentPage === 1}
                  onClick={() => handleChange(pagination.currentPage - 1)}
                >
                  Prev
                </button>
                <button
                  className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-black hover:text-white cursor-pointer"
                  disabled={pagination.currentPage === pagination.totalPages}
                  onClick={() => handleChange(pagination.currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
