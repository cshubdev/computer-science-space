import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './BrowserPreview.module.scss';

function BrowserPreview({ children, url }) {
  return (
    <div className={styles.BrowserPreview}>
      <div className={styles.BrowserPreviewHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#FC424A' }} />
          <span className={styles.dot} style={{ background: '#FFB826' }} />
          <span className={styles.dot} style={{ background: '#A077EB' }} />
        </div>
        <div
          className={clsx(styles.BrowserPreviewAddressBar, 'text--truncate')}
        >
          {url}
        </div>
        <div className={styles.BrowserPreviewMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.BrowserPreviewBody}>{children}</div>
    </div>
  );
}

BrowserPreview.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};

BrowserPreview.defaultProps = {
  url: 'http://localhost:3000',
};

export default BrowserPreview;
