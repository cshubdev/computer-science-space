import React from 'react';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';
import styles from './CommunityCard.module.scss';
import { TwitterIcon, DiscordIcon, GithubIcon } from '../icons';

function CommunityCardIcon(icon) {
  switch (icon) {
    case 'Twitter':
      return <TwitterIcon />;
    case 'Discord':
      return <DiscordIcon />;
    case 'Github':
      return <GithubIcon />;
    default:
  }
}

function CommunityCard({ URL, Title, Description, Icon }) {
  return (
    <Link className={styles.CommunityCard} to={URL}>
      <div className={styles.CommunityCard__Header}>
        {CommunityCardIcon(Icon)} <h5>{Title}</h5>
      </div>
      <p className={styles.CommunityCard__Description}>{Description}</p>
    </Link>
  );
}

CommunityCard.propTypes = {
  URL: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};

export default CommunityCard;
