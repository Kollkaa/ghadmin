/**
*
* LeftMenuHeader
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo-strapi.png"
import styles from './styles.scss';

function LeftMenuHeader() {
  return (
    <div className={styles.leftMenuHeader}>
      <Link to="/" className={styles.leftMenuHeaderLink}>
        <span className={styles.projectName}>
          <img height = "50px" style = {{marginTop : '5px'}} src={logo}/>
          </span>
      </Link>
    </div>
  );
}

export default LeftMenuHeader;
