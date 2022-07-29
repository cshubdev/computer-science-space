import React from 'react';
import LessonCard from '@site/src/components/LessonCard';
import styles from './Lessons.module.scss';
import lessonsData from '../../../data/Lessons';

function Lessons() {
  return (
    <div className={styles.Lessons}>
      {lessonsData.map((lesson) => (
        <LessonCard
          Title={lesson.title}
          Icon={lesson.icon}
          URL={lesson.url}
          Description={lesson.Description}
        />
      ))}
    </div>
  );
}

export default Lessons;
