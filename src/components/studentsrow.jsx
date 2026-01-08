import { useState, useEffect } from "react";

function StudentRow({ student }) {
  // State for attendance status
  const [status, setStatus] = useState(student.status);

  // State for remarks
  const [remarks, setRemarks] = useState("");

  // Unique key for localStorage (using student roll)
  const storageKey = `remarks_${student.roll}`;

  // Load remarks from localStorage when component mounts
  useEffect(() => {
    const savedRemarks = localStorage.getItem(storageKey);
    if (savedRemarks) {
      setRemarks(savedRemarks);
    }
  }, [storageKey]);

  // Save remarks to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, remarks);
  }, [storageKey, remarks]);

  // Toggle attendance status
  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "present" ? "absent" : "present"));
  };

  return (
    <tr className="border-b bg-green-50">
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={toggleStatus}
          className={`px-4 py-1 rounded-full text-white ${
            status === "present" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "present" ? "Present" : "Absent"}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="Add remarks..."
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </td>
    </tr>
  );
}

export default StudentRow;
