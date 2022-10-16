import React from 'react';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './HomepageHeader.module.scss';

function HomepageHeader({ children }) {
  return (
    <div className={styles.HomepageHeader}>
      <div className={styles.HomepageHeader__Header}>
        <h1 className={styles.Title}>
          <Translate id="webTitle.Title" description="Website Title">
            Computer Science Space
          </Translate>
          <span>.</span>
        </h1>
        <p className={styles.Description}>
          <Translate
            id="webDescription.Description"
            description="Website Description"
          >
            A Computer Science portal for enthusiasts. It contains well-written,
            well-thought-out and well-explained computer science and programming
            articles.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className={styles.Started_BTN} to="/docs/">
            <Translate
              id="getStarted.GetStartedButton"
              description="Get Started Button"
            >
              Get Started
            </Translate>
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
