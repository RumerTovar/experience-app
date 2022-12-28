import styles from './Input.module.css';
import { countries } from '../../data/countries';

export default function InputSelect({ label, name, onChange, value }) {
 return (
  <>
   <p className={styles.label}>{label}</p>
   <select
    className={styles.input}
    name='country'
    defaultValue={'United States'}
    onChange={onChange}>
    {countries.map((el) => {
     const index = el.name.indexOf(',');

     if (index !== -1) {
      const country = el.name.substring(0, index);
      return (
       <option key={el.code} value={el.name}>
        {country}
       </option>
      );
     }

     return (
      <option key={el.code} value={el.name}>
       {el.name}
      </option>
     );
    })}
   </select>
  </>
 );
}
