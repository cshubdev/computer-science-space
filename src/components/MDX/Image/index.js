import React from 'react';
import PropTypes from 'prop-types';
import { useColorMode } from '@docusaurus/theme-common';
import BasicZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styles from './Image.module.scss';

function Image({ children, copyRight }) {
  const { colorMode } = useColorMode();
  return (
    <div className={styles.Image}>
      <BasicZoom
        overlayBgColorEnd={
          colorMode === 'dark' ?
            'rgba(0, 0, 0, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
        }
      >
        {children}
      </BasicZoom>
      <p className={styles.CopyrightImage}>{copyRight}</p>
    </div>
  );
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
  copyRight: PropTypes.string.isRequired,
};

export default Image;
