import { useState } from 'react';
import AdForm from './components/AdForm/AdForm';
import AdResults from './components/AdResults/AdResults';
import type { AdVariant } from './lib/types';
import styles from './App.module.css';

function App() {
  const [variants, setVariants] = useState<AdVariant[]>([]);

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Ad Copy Generator</h1>
      <AdForm onResults={setVariants} />
      <AdResults variants={variants} />
    </main>
  );
}

export default App;
