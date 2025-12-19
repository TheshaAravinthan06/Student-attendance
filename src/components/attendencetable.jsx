function Table () { 
    return (
        <>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <table className="w-full">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="px-6 py-4 text-left">Roll No</th>
            <th className="px-6 py-4 text-left">Student Name</th>
            <th className="px-6 py-4 text-center">Status</th>
            <th className="px-6 py-4 text-left">Remarks</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b bg-green-50">
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">Alice Johnson</td>
            <td className="px-6 py-4 text-center">
              <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                Present
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

          <tr className="border-b bg-red-50">
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Bob Smith</td>
            <td className="px-6 py-4 text-center">
              <button className="bg-red-500 text-white px-4 py-1 rounded-full">
                Absent
              </button>
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                placeholder="Sick leave"
                className="w-full px-2 py-1 border rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
        <button className="border px-6 py-2 rounded-lg">Export CSV</button>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Save Attendance
        </button>
      </div>

      </div>
        </>
    );  
}


export default Table;