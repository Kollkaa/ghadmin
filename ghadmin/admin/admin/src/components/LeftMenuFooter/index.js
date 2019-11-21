/**
*
* LeftMenuFooter
*
*/

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';

import LeftMenuLink from '../LeftMenuLink';

import styles from './styles.scss';
import messages from './messages.json';
import {colors} from "strapi-helper-plugin";
defineMessages(messages);

function LeftMenuFooter({ version }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className={styles.leftMenuFooter}>

      <div>
        <div><label className={styles.poweredBy}>Генеральний штаб ЗС України</label></div>
      <div><label className={styles.poweredBy}>version:0.0.1.beta</label></div>
      </div>
    </div>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
