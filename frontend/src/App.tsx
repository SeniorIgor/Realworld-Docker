import { FC } from 'react';

import { ImageSection } from '@/components/ImageSection';

import Star from '@/assets/images/svg/star.svg';

import styles from './App.module.sass';

export const App: FC = () => (
  <div className="wrapper">
    <h1 className={styles.container}>Hi there!!!</h1>
    <ImageSection />
    <Star />
  </div>
);
