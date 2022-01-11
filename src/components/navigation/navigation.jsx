import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation section-container">
      <div className="inner-content">
        <header className="header">
          <Logo className="main-logo" aria-labelledby="main-title" />
          <h1 id="main-title" className="main-title heading-large">
            7 World Wonders
          </h1>
        </header>
        <ul className="navigation-list">
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Great Wall of China
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Chichén Itzá
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Petra
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Machu Picchu
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Christ the Redeemer
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Colosseum
            </a>
          </li>
          <li className="navigation-list-item">
            <a href="#" className="navigation-link copy-small">
              Taj Mahal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
