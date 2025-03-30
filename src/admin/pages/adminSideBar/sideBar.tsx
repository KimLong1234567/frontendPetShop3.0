import { useState } from 'react';
import { MenuItem } from '../../../types/menuItem';
import {
  faChartLine,
  faBarsStaggered,
  faBookBookmark,
  faCartFlatbed,
  faCaretRight,
  faCalendarDays,
  faClockRotateLeft,
  faCommentDots,
  faPaw,
  faCartPlus,
  faBookJournalWhills,
  faUsers,
  faUserTag,
  faMessage,
  faCircleUser,
  faFileContract,
  faCircleInfo,
  faCalendarPlus,
} from '@fortawesome/free-solid-svg-icons';
import AdminSideBar from './index';


const adminIcon: MenuItem[] = 
[
  { icon: faChartLine, name: 'Overview', link: '/admin' },
  {
    icon: faCalendarDays,
    name: 'Statistical',
    children: [
      {
        icon: faClockRotateLeft,
        name: 'Profit over time',
        to: '/admin/profitovertime',
      },
      {
        icon: faClockRotateLeft,
        name: 'Profit by product',
        to: '/admin/profitbyproduct',
      },
    ],
  },
  {
    icon: faBarsStaggered,
    name: 'Category Management',
    children: [
      { icon: faCaretRight, name: 'Product type', to: '/admin/category' },
    ],
  },
  {
    icon: faBookBookmark,
    name: 'Product Management',
    children: [
      { icon: faPaw, name: 'Products', to: '/admin/product' },
      { icon: faCommentDots, name: 'Comment', to: '/admin/comment' },
    ],
  },
  {
    icon: faCartFlatbed,
    name: 'Order Management',
    children: [
      { icon: faCartPlus, name: 'Orders', to: '/admin/order' },
      { icon: faBookJournalWhills, name: 'Bills', to: '/admin/bill' },
    ],
  },
  {
    icon: faPaw,
    name: 'Pet Manage',
    children: [{ icon: faPaw, name: 'View Pet', to: '/admin/viewpet' }],
  },
  {
    icon: faCircleUser,
    name: 'Account Management',
    children: [
      { icon: faUsers, name: 'Employee Accounts', to: '/admin/employee' },
      { icon: faUserTag, name: 'Customer Account', to: '/admin/customer' },
    ],
  },
  {
    icon: faMessage,
    name: 'Customer Care',
    children: [
      {
        icon: faCaretRight,
        name: 'Customers Feedback',
        to: '/admin/feedbacks',
      },
    ],
  },
  {
    icon: faFileContract,
    name: 'Control Products Receipt',
    children: [
      {
        icon: faCircleInfo,
        name: "Details of the goods' receipt",
        to: '/admin/phieunhap',
      },
      {
        icon: faCalendarPlus,
        name: 'Make a fresh entry form',
        to: '/admin/themphieunhap',
      },
    ],
  },
]

function SideBar() { 
  const [menuItems] = useState<MenuItem[]>(adminIcon);
  return (
    <AdminSideBar menuItems={menuItems} />
  )
}

export default SideBar;