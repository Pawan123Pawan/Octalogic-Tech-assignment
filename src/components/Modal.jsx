import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onAddOrUpdateCourse, selectedCourse }) => {
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    numberOfStudents: "",
    price: "",
    status: "Active",
  });

  useEffect(() => {
    if (selectedCourse) {
      setCourseData(selectedCourse);
    } else {
      setCourseData({
        name: "",
        description: "",
        instructor: "",
        instrument: "",
        dayOfWeek: "",
        numberOfStudents: "",
        price: "",
        status: "Active",
      });
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrUpdateCourse(courseData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4">
          {selectedCourse ? "Edit Course" : "Add New Course"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            placeholder="Instructor"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="instrument"
            value={courseData.instrument}
            onChange={handleChange}
            placeholder="Instrument"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="dayOfWeek"
            value={courseData.dayOfWeek}
            onChange={handleChange}
            placeholder="Day of Week"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="numberOfStudents"
            value={courseData.numberOfStudents}
            onChange={handleChange}
            placeholder="Number of Students"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <select
            name="status"
            value={courseData.status}
            onChange={handleChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="Active">Active</option>
            <option value="Closed">Closed</option>
            <option value="Archived">Archived</option>
          </select>
          <div className="flex justify-end items-center gap-1">
            <button
              type="submit"
              className="bg-pink-400 text-white px-4 py-2 rounded"
            >
              {selectedCourse ? "Update Course" : "Add Course"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
