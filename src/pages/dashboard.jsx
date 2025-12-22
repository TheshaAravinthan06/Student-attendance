

import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the dashboard! Here you can find an overview of your data.</p>
      <Link to='/Students-attendance/student'className="text-blue-500 underline mt-4 inline-block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Attendance Page
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;