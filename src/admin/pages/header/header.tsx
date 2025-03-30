import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

interface Admin {
  nv_hoten: string;
  nv_avt: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const storedAdmin = localStorage.getItem('admin');
  const [adminCheck, setAdminCheck] = useState<Admin | null>(
    storedAdmin ? JSON.parse(storedAdmin) : null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!adminCheck) {
      navigate('/admin/login');
    }
  }, [adminCheck, navigate]);

  const logout = () => {
    localStorage.removeItem('admin');
    setAdminCheck(null);
    navigate('/admin/login');
  };

  return (
    <nav className="bg-purple-100 py-3 px-6 flex justify-end relative">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 font-bold hover:text-purple-700 focus:outline-none"
        >
          <span>Hello {adminCheck?.nv_hoten}</span>
          <img
            src={`/image/Avt/${adminCheck?.nv_avt}`}
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
            <Link
              to="/admin/myinfo"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <Icon icon={faCircleInfo} className="mr-2" /> Info
            </Link>
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
            >
              <Icon icon={faRightFromBracket} className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
