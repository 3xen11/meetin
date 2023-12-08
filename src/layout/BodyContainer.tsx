'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationTypes } from '../provider/store/types';

const BodyContainer = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <div
      className={`${
        darkMode ? 'bg-darkMode-background' : 'bg-lightMode-background'
      } min-h-screen flex flex-col`}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
