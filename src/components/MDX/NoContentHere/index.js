import React from 'react';
import PropTypes from 'prop-types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './NoContentHere.module.scss';
import { PullRequestIcon } from '../../icons';

function NoContentHere({ URL }) {
  const { siteConfig } = useDocusaurusContext();
  const ContributingURL = 'https://bb-tr-kaynak.netlify.app/docs/contributing/';

  return (
    <div className={styles.AlertNoContent}>
      <h1>Bu dokümanları harika hale getirmemize yardım edin!</h1>
      <p>
        Tüm {siteConfig.title} belgeleri açık kaynak kodludur. Bir şeyler gör
        <br />
        bu yanlış mı yoksa belirsiz mi? Bir çekme isteği gönderin.
      </p>
      <a href={URL} target="_blank" className={styles.BTN} rel="noreferrer">
        <PullRequestIcon /> <span>Bir katkıda bulun</span>
      </a>
      <p>
        Veya
        <a href={ContributingURL}> nasıl katkıda bulunacağınızı öğrenin</a>.
      </p>
    </div>
  );
}

NoContentHere.propTypes = {
  URL: PropTypes.string.isRequired,
};

export default NoContentHere;
