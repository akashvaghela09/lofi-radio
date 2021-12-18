import React from 'react';
import styles from  './App.module.css';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className={styles.App}>
      <AllRoutes />
    </div>
  );
}

export default App;
