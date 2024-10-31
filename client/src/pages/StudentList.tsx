import React from "react";
import Filter from "../components/Filter";

export default function StudentList() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
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
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">3</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Mikiyas Zenebe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">25</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Computer</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  09090909090
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">
            {" "}
            Showing 1 to 5 of 12 Entries{" "}
          </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Prev
            </button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
