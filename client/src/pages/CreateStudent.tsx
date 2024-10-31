import React from "react";

export default function CreateStudent() {
  return (
    <div className="lg:m-10">
      <form className="relative border border-gray-300 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6  lg:p-10">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Add a your information.
        </h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="">Full Name </label>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="">Age</label>
            <input
              type="number"
              placeholder="Age"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
        </div>
        <div>
          <label className="">Course</label>
          <input
            type="text"
            placeholder="Course"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className="">Contact Information</label>
          <input
            type="number"
            placeholder="0909090909"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>

        <div>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-black hover:bg-black/50 p-2 text-center font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
}
