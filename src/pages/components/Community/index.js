import React from 'react';
import CommunityCard from '@site/src/components/CommunityCard';
import styles from './Community.module.scss';
import communityData from '../../../data/Community';

function Community() {
  return (
    <div className={styles.Community}>
      <div className={styles.Community__Header}>
        <h1>Topluluk</h1>
        <p>Topluluğumuza dahil olun. Hepiniz hoş geldiniz!</p>
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
