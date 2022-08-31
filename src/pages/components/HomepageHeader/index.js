import React from 'react';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.scss';

function HomepageHeader({ children }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.HomepageHeader}>
      <div className={styles.HomepageHeader__Header}>
        <h1 className={styles.Title}>
          {siteConfig.title}
          <span>.</span>
        </h1>
        <p className={styles.Description}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.Started_BTN} to="/docs/">
            Başlayın
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

HomepageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomepageHeader;
