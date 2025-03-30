import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../../types/menuItem';

interface AdminSideBarProps {
  menuItems: MenuItem[];
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({ menuItems }) => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggleExpand = (index: number): void => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <div className='sticky top-0 pt-2 bg-sky-200'>
        <Link to="/admin">
          <img src="/images/logo.png" alt="logo" className="mb-4" style={{ borderRadius: '50%', width: '100px' }} />
        </Link>
        <div className='mx-3'>
          <div className='d-flex'>
          {/* ${curentAdmin.nv_avt} 
          {curentAdmin.nv_hoten}
          {curentAdmin.nv_email}
          */}
            <img
                src={`/image/Avt/logo.png`}
                alt="..."
                className="mb-4"
                style={{ borderRadius: '50%', width: '50px' }}
              />
              <div className="text-white text-start mx-2">
                <span className="h6">Name: Long</span>
                <br></br>
                <span>User:  test@gmail.com</span>
              </div>
          </div>
          {menuItems.map((item, index) => {
            return (
              <div key={index} className="item">
                <div
                  className="header"
                  aria-expanded={clicked === index ? 'true' : 'false'}
                >
                  <Link to={item.to || '#'} className="name menuItem">
                    <Icon icon={item.icon} className="iconItem" />
                    <span>{item.name}</span>
                  </Link>
                  {item.children != null && (
                    <button
                      className="btnExpand"
                      onClick={() => toggleExpand(index)}
                    >
                      <Icon icon={faChevronDown} />
                    </button>
                  )}
                </div>
                <div className="body">
                  {item.children != null &&
                    item.children.map((childItem, idx) => (
                      <Link to={childItem.to || '#'} key={idx} className="menuItem">
                        <Icon icon={childItem.icon} className="iconItem" />
                        <span>{childItem.name}</span>
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )

}

export default AdminSideBar;