import AdForm from './components/AdForm/AdForm';
import AdVariant from './components/AdVariant/AdVariant';
import type { AdVariant as AdVariantType } from './lib/types';
import styles from './App.module.css';

const MOCK_VARIANT: AdVariantType = {
  headlines: [
    'Fresh Coffee Delivered',
    'Brew Café At Home',
    'Premium Beans, Fast',
  ],
  descriptions: [
    'Single-origin beans roasted weekly and shipped to your door within 48h.',
    'Skip the queue. Enjoy barista-grade coffee at home from just 89 NOK/bag.',
  ],
  rationale:
    'Rational angle focused on convenience and quality, targeting busy professionals who value specialty coffee.',
};

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Ad Copy Generator</h1>
      <AdForm onResults={(variants) => console.log(variants)} />
      <AdVariant variant={MOCK_VARIANT} />
    </main>
  );
}

export default App;
