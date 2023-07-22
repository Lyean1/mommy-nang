import React, { useState } from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`navbar ${collapsed ? 'collapsed' : ''}`}>
      <div className="navbar__title">{title}</div>
      <div className={`navbar__toggle ${collapsed ? 'collapsed' : ''}`} onClick={handleToggle}>
        <div className="icon"></div>
      </div>
      <ul className={`navbar__links ${collapsed ? '' : 'collapsed'}`}>
        <li className="navbar__link">Home</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Services</li>
        <li className="navbar__link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
