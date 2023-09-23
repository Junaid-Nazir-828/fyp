import Sidebar from './components/global/sidebar/Sidebar';
import Dashboard from './components/global/dashboard/Dashboard';
import { useState } from 'react';


function Main() {
  const [activeContent, setActiveContent] = useState('home'); // Default to 'home'

  const handleSidebarLinkClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="app">
      <Sidebar onLinkClick={handleSidebarLinkClick} />
      <Dashboard activeContent={activeContent} />
    </div>
  );
}

export default Main;