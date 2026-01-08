import { useState } from "react";
import StudentRow from "./studentsrow"; // make sure this path is correct

function Form() {
  const [searchTerm, setSearchTerm] = useState("");

  // Example student data
  const students = [
    { roll: 1, name: "Alice", status: "present" },
    { roll: 2, name: "Bob", status: "absent" },
    { roll: 3, name: "Charlie", status: "present" },
    { roll: 4, name: "David", status: "absent" },
  ];

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Class selection */}
          <div>
            <label className="block mb-2">Select className</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>className 1</option>
              <option>className 2</option>
              <option>className 3</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2">Attendance Date</label>
            <input type="date" className="w-full px-4 py-2 border rounded-lg" />
          </div>

          {/* Search */}
          <div>
            <label className="block mb-2">Search Student</label>
            <input
              type="text"
              placeholder="Enter student name..."
              className="w-full px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg">
              Mark Attendance
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 border-t pt-4">
          <span>Present: {students.filter((s) => s.status === "present").length}</span>
          <span>Absent: {students.filter((s) => s.status === "absent").length}</span>
          <span>Total: {students.length}</span>
        </div>
      </div>

      {/* Student Table */}
      {filteredStudents.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">Roll</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <StudentRow key={student.roll} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Form;
