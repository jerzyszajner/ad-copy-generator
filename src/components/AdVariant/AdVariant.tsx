import type { AdVariant as AdVariantType } from '../../lib/types';
import styles from './AdVariant.module.css';

interface AdVariantProps {
  variant: AdVariantType;
}

function AdVariant({ variant }: AdVariantProps) {
  return (
    <article className={styles.variant}>
      <section className={styles.group}>
        <h3 className={styles.label}>Headlines</h3>
        <ul className={styles.list}>
          {variant.headlines.map((headline, index) => (
            <li key={index} className={styles.item}>
              {headline}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.group}>
        <h3 className={styles.label}>Descriptions</h3>
        <ul className={styles.list}>
          {variant.descriptions.map((description, index) => (
            <li key={index} className={styles.item}>
              {description}
            </li>
          ))}
        </ul>
      </section>

      <p className={styles.rationale}>{variant.rationale}</p>
    </article>
  );
}

export default AdVariant;
