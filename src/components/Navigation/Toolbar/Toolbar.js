import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
    </header>
  );
};

export default Toolbar;