import React from 'react';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './DiscordCard.module.scss';
import { WhiteDiscordIcon } from '../icons';

function DiscordCard({ URL }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.DiscordCard}>
      <div className={styles.DiscordCard__Logo}>
        <WhiteDiscordIcon />
      </div>
      <div className={styles.DiscordCard__Content}>
        <div className={styles.DiscordCard__Content__Title}>
          Join our Discord Channel
        </div>
        <div className={styles.DiscordCard__Description}>
          {siteConfig.title} geliştirme hakkında her şeyi tartışmak için
          Discord'da #contributors kanalımız var. Ayrıca yardım kanalındaki
          diğer kullanıcılara yardım ederek de çok yardımcı olabilirsiniz.
          Katkıda bulunmakla ilgili herhangi bir sorunuz varsa, lütfen Discord
          sunucumuzu ziyaret edin!
        </div>
        <Link className={styles.DiscordCard__btn} to={URL}>
          Discord Channel
        </Link>
      </div>
    </div>
  );
}

DiscordCard.propTypes = {
  URL: PropTypes.string.isRequired,
};

export default DiscordCard;
