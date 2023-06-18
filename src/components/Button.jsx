import styles from './Button.module.css';

export default function Button({
  handleClick = () => { },
  type = 'button',
  variant = 'primary',
  label = 'Submit'
}) {
  return (
    <button type={type} onClick={handleClick} className={`${styles.btn} ${styles[variant]}`}>
      {label}
    </button>
  )
}
