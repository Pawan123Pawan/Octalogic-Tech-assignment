import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import Modal from "./Modal";
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, updateCourse } from "../store/slice/courseListSlice";

const CourseList = () => {
  const courses = useSelector((state) => state.course);
  const [dropdownStates, setDropdownStates] = useState(
    new Array(courses.length).fill(false)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(10);
  const dispatch = useDispatch();
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "text-green-800 bg-green-200";
      case "Closed":
        return "text-red-800 bg-red-200";
      case "Archived":
        return "text-gray-800 bg-gray-200";
      default:
        return "";
    }
  };

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourseIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewAllClick = () => {
    setDisplayLimit(courses.length);
  };

  const filteredCourses = courses.filter((course) =>
    course?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const coursesToDisplay = filteredCourses.slice(0, displayLimit);

  const handleAddOrUpdateCourse = (course) => {
    if (selectedCourseIndex !== null) {
      const updatedCourse = { ...course, id: courses[selectedCourseIndex].id }; 
      dispatch(updateCourse(updatedCourse));
    } else {
      dispatch(addCourse(course));
    }
    setIsModalOpen(false);
    setSelectedCourseIndex(null);
  };


  return (
    <div className="bg-gray-100 flex-1 px-8 py-5 relative">
      <h1 className="text-3xl text-[#83858b] font-semibold mb-8">Courses</h1>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl text-gray-500 font-semibold">COURSE LIST</h1>
        <div className="bg-white flex gap-2 px-4 py-2 border border-gray-300 rounded-md items-center">
          <IoMdSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md px-8 overflow-y-scroll h-[60%] pb-10">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Name
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Description
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Instructor
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Instrument
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Day of Week
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                # of Students
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Price
              </th>
              <th className="py-4 text-left text-sm font-bold text-gray-900">
                Status
              </th>
              <th className="py-4 text-right text-sm font-bold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {coursesToDisplay.map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2">{course.name}</td>
                <td className="py-2">{course.description}</td>
                <td className="py-2">{course.instructor}</td>
                <td className="py-2">{course.instrument}</td>
                <td className="py-2">{course.dayOfWeek}</td>
                <td className="py-2">{course.numberOfStudents}</td>
                <td className="py-2">{course.price}</td>
                <td className="py-2">
                  <span
                    className={`py-1 px-3 rounded-md text-sm font-semibold ${getStatusClass(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="py-2 px-6 text-right relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-600 hover:text-gray-700 text-xl"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  {dropdownStates[index] && (
                    <div className="bg-white w-[180px] p-5 flex flex-col gap-1 rounded-md items-start text-gray-700 font-[500] absolute top-8 right-0 z-40">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedCourseIndex(index);
                          setIsModalOpen(true);
                        }}
                      >
                        Edit course
                      </div>
                      <div className="cursor-pointer">Close course</div>
                      <div className="cursor-pointer">Archive course</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayLimit < courses.length && (
        <p
          className="text-[#b94891] text-sm font-[600] cursor-pointer text-right mt-3"
          onClick={handleViewAllClick}
        >
          View All Courses
        </p>
      )}
      <div className="absolute bottom-8 right-12">
        <button
          onClick={handleOpenModal}
          className="px-2 py-2 bg-pink-400 text-white rounded flex items-center shadow"
        >
          <LuPlus className="mr-1" /> Add Course
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddOrUpdateCourse={handleAddOrUpdateCourse}
          selectedCourse={selectedCourseIndex !== null ? courses[selectedCourseIndex] : null}
        />
      </div>
    </div>
  );
};

export default CourseList;
