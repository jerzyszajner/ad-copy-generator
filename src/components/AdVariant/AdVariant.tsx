import type { AdVariant as AdVariantType } from '../../lib/types';
import styles from './AdVariant.module.css';

interface AdVariantProps {
  variant: AdVariantType;
}

const HEADLINE_MAX = 30;
const DESCRIPTION_MAX = 90;

function AdVariant({ variant }: AdVariantProps) {
  return (
    <article className={styles.variant}>
      <section className={styles.group}>
        <h3 className={styles.label}>Headlines</h3>
        <ul className={styles.list}>
          {variant.headlines.map((headline, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.text}>{headline}</span>
              <span
                className={`${styles.counter} ${
                  headline.length > HEADLINE_MAX ? styles.counterOver : ''
                }`}
              >
                {headline.length}/{HEADLINE_MAX}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.group}>
        <h3 className={styles.label}>Descriptions</h3>
        <ul className={styles.list}>
          {variant.descriptions.map((description, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.text}>{description}</span>
              <span
                className={`${styles.counter} ${
                  description.length > DESCRIPTION_MAX ? styles.counterOver : ''
                }`}
              >
                {description.length}/{DESCRIPTION_MAX}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className={styles.rationale}>{variant.rationale}</p>
    </article>
  );
}

export default AdVariant;
