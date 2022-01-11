import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './navigation.scss';

import sevenWonders from '../../data/seven-wonders.js';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='inner-content'>
        <header>
          <Link to='/' className='header-link'>
            <Logo className='main-logo' aria-labelledby='main-title' />
            <h1 id='main-title' className='main-title heading-large'>
              7 World Wonders
            </h1>
          </Link>
        </header>
        <ul className='navigation-list'>
          {sevenWonders.map(({ id, introBlock: { title } }) => (
            <li key={title} className='navigation-list-item'>
              <NavLink to={`/${id}`} className='navigation-link copy-small'>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
