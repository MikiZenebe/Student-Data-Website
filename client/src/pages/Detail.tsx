import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams<{ id: any }>();

  const { students, loading, error } = useSelector(
    (state: RootState) => state.students
  );

  const student = students.find((student) => student._id === id);
  console.log(student);
  if (loading)
    return (
      <div className="flex mx-auto justify-center items-center h-[70vh]">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black flex justify-center items-center mx-auto " />
      </div>
    );
  if (error) return <p>{error}</p>;
  if (!student)
    return (
      <div className="flex justify-center items-center mx-auto h-[60vh] text-6xl font-semibold">
        😔 Student not found 😔
      </div>
    );

  return (
    <div>
      {loading ? (
        <div className="flex mx-auto justify-center items-center h-[70vh]">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black flex justify-center items-center mx-auto " />
        </div>
      ) : (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Student Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is detail information about the student.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <td className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {student?.fullName}
                </td>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Age</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {student?.age}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Course</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {student.course}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {student.contactInfo}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
