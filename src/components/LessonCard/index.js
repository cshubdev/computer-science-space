import React from 'react';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';
import styles from './LessonCard.module.scss';
import { AlgorithmIcon, DatastructureIcon, GitIcon } from '../icons';

function LessonsModuleCardIcon(icon) {
  switch (icon) {
    case 'Algorithms':
      return <AlgorithmIcon />;
    case 'Data Structure':
      return <DatastructureIcon />;
    case 'GIT':
      return <GitIcon />;
    default:
  }
}

function LessonCard({ Title, Description, Icon, URL }) {
  return (
    <Link className={styles.Card} to={URL}>
      <div className={styles.Card__Header}>
        <h5 className={styles.Title}>{Title}</h5>
        <div className={styles.Icon}>{LessonsModuleCardIcon(Icon)}</div>
      </div>
      <p className={styles.Card__Body}>{Description}</p>
    </Link>
  );
}

LessonCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default LessonCard;
