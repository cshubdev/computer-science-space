import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import HomepageHeader from './components/HomepageHeader';
import Lessons from './components/Lessons';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.BG}>
        <main className={styles.Container}>
          <HomepageHeader />
          <Lessons />
        </main>
      </div>
    </Layout>
  );
}
