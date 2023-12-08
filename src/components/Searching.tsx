import React from 'react';

import { NavigationTypes } from '../provider/store/types';
import { useSelector } from 'react-redux';

const Searching = () => {
  const { darkMode, searching } = useSelector(
    (store: NavigationTypes) => store.navigation
  );

  return (
    <div
      className={`${
        darkMode ? 'bg-[#424242]' : 'bg-[#eeeeee] border-b-2'
      } w-full flex h-52  ${searching ? '' : 'hidden'}`}
    >
      <div className="w-11/12 max-w-[1500px]  mx-auto bg-red-600 p-4">test</div>
    </div>
  );
};

export default Searching;
