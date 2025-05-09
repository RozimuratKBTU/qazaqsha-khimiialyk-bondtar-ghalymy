
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-4">Бет табылмады</p>
        <p className="text-gray-500 mb-6">Сіз іздеген бет жоқ немесе жылжытылған</p>
        <Link to="/" className="text-white bg-wiki-blue px-6 py-2 rounded hover:bg-blue-700 transition-colors">
          Басты бетке оралу
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
