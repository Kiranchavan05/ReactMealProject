import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './component/Demo/DemoList';
import Button from './component/UI/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  // const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList   />
      
    </div>
  );
}

export default App;
