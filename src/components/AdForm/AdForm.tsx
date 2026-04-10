import { useState, type SubmitEvent } from 'react';
import type { AdInput, AdResponse, AdVariant } from '../../lib/types';
import styles from './AdForm.module.css';

interface AdFormProps {
  onResults: (variants: AdVariant[]) => void;
}

const INITIAL_FORM: AdInput = {
  productName: '',
  description: '',
  audience: '',
  usp: '',
  tone: 'Professional',
  language: 'English',
  variantCount: 3,
};

function AdForm({ onResults }: AdFormProps) {
  const [form, setForm] = useState<AdInput>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/generate-ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: AdResponse = await response.json();
      onResults(data.variants);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Product name</span>
        <input
          type="text"
          required
          value={form.productName}
          onChange={(e) => setForm({ ...form, productName: e.target.value })}
        />
      </label>

      <label className={styles.field}>
        <span>Product description</span>
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </label>

      <label className={styles.field}>
        <span>Target audience</span>
        <input
          type="text"
          required
          value={form.audience}
          onChange={(e) => setForm({ ...form, audience: e.target.value })}
        />
      </label>

      <label className={styles.field}>
        <span>Unique selling point</span>
        <input
          type="text"
          required
          value={form.usp}
          onChange={(e) => setForm({ ...form, usp: e.target.value })}
        />
      </label>

      <label className={styles.field}>
        <span>Tone</span>
        <select
          value={form.tone}
          onChange={(e) =>
            setForm({ ...form, tone: e.target.value as AdInput['tone'] })
          }
        >
          <option value="Professional">Professional</option>
          <option value="Friendly">Friendly</option>
          <option value="Urgent">Urgent</option>
          <option value="Playful">Playful</option>
        </select>
      </label>

      <label className={styles.field}>
        <span>Output language</span>
        <select
          value={form.language}
          onChange={(e) =>
            setForm({
              ...form,
              language: e.target.value as AdInput['language'],
            })
          }
        >
          <option value="English">English</option>
          <option value="Norwegian">Norwegian</option>
        </select>
      </label>

      <label className={styles.field}>
        <span>Number of variants</span>
        <select
          value={form.variantCount}
          onChange={(e) =>
            setForm({
              ...form,
              variantCount: Number(e.target.value) as AdInput['variantCount'],
            })
          }
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
        </select>
      </label>

      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Ads'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}

export default AdForm;
