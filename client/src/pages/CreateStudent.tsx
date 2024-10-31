import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentsStart } from "../redux/reducer/studentReducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newStudent: any = { _id: "", fullName, age, course, contactInfo };
      dispatch(addStudentsStart(newStudent));

      if (newStudent) {
        toast.success("Student Data Created 🚀🚀🚀");
        navigate("/");

        setFullName("");
        setAge("");
        setCourse("");
        setContactInfo("");
      }
    } catch (error) {
      toast.success(error);
      navigate("/create");
    }
  };

  return (
    <div className="lg:m-10">
      <form
        onSubmit={handleSubmit}
        className="relative border border-gray-300 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6  lg:p-10"
      >
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="">Age</label>
            <input
              type="number"
              placeholder="Age"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="">Course</label>
          <input
            type="text"
            placeholder="Course"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="">Contact Information</label>
          <input
            type="number"
            placeholder="0909090909"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-black hover:bg-black/50 p-2 text-center font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
}
