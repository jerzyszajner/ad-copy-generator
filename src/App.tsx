import AdForm from './components/AdForm/AdForm';
import AdResults from './components/AdResults/AdResults';
import type { AdVariant as AdVariantType } from './lib/types';
import styles from './App.module.css';

const MOCK_VARIANTS: AdVariantType[] = [
  {
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
  },
  {
    headlines: [
      'Your Morning, Reimagined',
      'Wake Up To Perfect Coffee',
      'Rediscover Your Ritual',
    ],
    descriptions: [
      'Turn every morning into a moment you look forward to with specialty beans.',
      'Feel the difference in every cup. Roasted with care, delivered with love.',
    ],
    rationale:
      'Emotional angle that appeals to the sensory and ritual aspects of the morning coffee experience.',
  },
];

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Ad Copy Generator</h1>
      <AdForm onResults={(variants) => console.log(variants)} />
      <AdResults variants={MOCK_VARIANTS} />
    </main>
  );
}

export default App;
