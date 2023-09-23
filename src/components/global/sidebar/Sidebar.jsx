import React, { useContext, useEffect, useState } from 'react'
import './sidebar.css'
import { personsImgs } from '../../../images'
import { navigationLinks } from '../../../Data'
import { SidebarContext } from '../../context/sidebarContext'
const Sidebar = ({ onLinkClick }) => {

    const [activeLinkIdx, setActiveLinkIdx] = useState(0);
    const [sidebarClass, setSidebarClass] = useState("");
    const {isSidebarOpen} = useContext(SidebarContext);

    useEffect(()=>{
        if(isSidebarOpen){
            setSidebarClass('sidebar-change');
        }
        else{
            setSidebarClass('');
        }
    },[isSidebarOpen]);

    const handleTabClick = (index) => {
      setActiveLinkIdx(index);
      const clickedLink = navigationLinks[index];
      onLinkClick(clickedLink.title.toLowerCase());
    };
      
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='user-info'>
        <div className='info-img img-fit-cover'>
          <img src={personsImgs.person_two} alt='profile' />
        </div>
        <span className='info-name'> Admin</span>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {navigationLinks.map((link, index) => (
            <ul to={navigationLinks.title} className='nav-items' key={link.id}>
              <li
                className={`nav-link ${index === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleTabClick(index)} // Handle tab click
              >
                <img src={link.image} className='nav-link-icon' alt={link.title} />
                <span className='nav-link-text'>{link.title}</span>
              </li>
            </ul>
          ))}
        </ul>
      </nav>
      
    </div>
  )
}

export default Sidebar
