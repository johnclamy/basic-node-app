import styles from './Button.module.css';

export default function Button({
  type = "submit",
  variant = "primary",
  label = "Submit",
  // handleClick = () => {},
}) {
  return (
    <button
      type={type}
      // onClick={handleClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {label}
    </button>
  );
}
