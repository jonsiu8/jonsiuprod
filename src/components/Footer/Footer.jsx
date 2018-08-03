import React from 'react';
import styles from './Footer.module.scss';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright} <a>Photos</a> {' by '}{' '}
    <a>JonSiu Productions</a>.
  </footer>
);

export default Footer;
