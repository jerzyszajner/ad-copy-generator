import AdForm from './components/AdForm/AdForm';
import AdVariant from './components/AdVariant/AdVariant';
import type { AdVariant as AdVariantType } from './lib/types';
import styles from './App.module.css';

const MOCK_VARIANT: AdVariantType = {
  headlines: [
    'Fresh Coffee Delivered',
    'Brew Café At Home',
    'Premium Specialty Beans Roasted And Shipped Weekly',
  ],
  descriptions: [
    'Single-origin beans roasted weekly and shipped to your door within 48h.',
    'Skip the queue and enjoy truly barista-grade specialty coffee delivered daily, right from just 89 NOK per bag.',
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
