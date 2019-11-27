/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import cn from 'classnames';

import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { selectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';
import { languages } from '../../i18n';

import styles from './styles.scss';

export class LocaleToggle extends React.Component { // eslint-disable-line
  state = { isOpen: false };

  getFlagUrl = (locale) => {
    switch (locale) {
      case 'es':
        return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/ua.svg';
      case 'pt-BR':
        return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/br.svg';
      case 'ar':
        return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/sa.svg';
      case 'ko':
        return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/kr.svg';
      case 'ja':
        return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/jp.svg';
      default:
        return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/ua.svg`;
    }
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { locale } = this.props;

    return (
     <div className={styles.localeToggle}>
        <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
          <DropdownToggle className={styles.localeDropdownContent}>
            <span>UA</span>
            <img src={this.getFlagUrl(locale)} alt={locale} />
          </DropdownToggle>
        </ButtonDropdown>
      </div>
    );
  }
}



LocaleToggle.propTypes = {
  changeLocale: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeLocale,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
