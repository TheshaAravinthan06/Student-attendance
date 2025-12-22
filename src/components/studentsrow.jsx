function StudentRow({ student }) {
  return (
    <tr className="border-b bg-green-50">
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4 text-center">
        <button className={`px-4 py-1 rounded-full text-white ${
          student.status === 'present' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {student.status === 'present' ? 'Present' : 'Absent'}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="Add remarks..."
          className="w-full px-2 py-1 border rounded"
        />
      </td>
    </tr>
  );
}

export default  StudentRow;
 