import React, { useState } from 'react'
import Topbar from '../topbar/Topbar'
import ContentMain from '../../contentMain/ContentMain'
import Analytics from '../../specific/analytics/Analytics'
import Users from '../../specific/users/Users'
import './dashboard.css'

const Dashboard = ({ activeContent }) => {
  return (
    <div className='main-content'>
      <Topbar />
      {activeContent === 'home' && <ContentMain />}
      {activeContent === 'analytics' && <Analytics />}
      {activeContent === 'users' && <Users />}
    </div>
  );
};

export default Dashboard
