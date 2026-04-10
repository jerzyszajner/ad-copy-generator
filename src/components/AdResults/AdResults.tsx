import AdVariant from '../AdVariant/AdVariant';
import type { AdVariant as AdVariantType } from '../../lib/types';
import styles from './AdResults.module.css';

interface AdResultsProps {
  variants: AdVariantType[];
}

function AdResults({ variants }: AdResultsProps) {
  if (variants.length === 0) {
    return <p className={styles.empty}>Fill the form to generate ads</p>;
  }

  return (
    <div className={styles.results}>
      {variants.map((variant, index) => (
        <AdVariant key={index} variant={variant} />
      ))}
    </div>
  );
}

export default AdResults;
