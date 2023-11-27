import styles from './GenreMusicSpinner.module.css';

const GenreMusicSpinner = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default GenreMusicSpinner;
