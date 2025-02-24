/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">Access Denied</h1>
      <p className="text-gray-500 mt-2">You do not have permission to view this page.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to Login
      </Link>
    </div>
  );
};

export default Unauthorized;
