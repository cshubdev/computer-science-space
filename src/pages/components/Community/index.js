import React from 'react';
import CommunityCard from '@site/src/components/CommunityCard';
import styles from './Community.module.scss';
import communityData from '../../../data/Community';

function Community() {
  return (
    <div className={styles.Community}>
      <div className={styles.Community__Header}>
        <h1>Community</h1>
        <p>Get involved in our community. Everyone is welcome!</p>
      </div>
      <div className={styles.Community__Body}>
        {communityData.map((community) => (
          <CommunityCard
            Title={community.title}
            Icon={community.icon}
            URL={community.url}
            Description={community.Description}
          />
        ))}
      </div>
    </div>
  );
}

export default Community;
