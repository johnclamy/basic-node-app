import styles from './Button.module.css';

export default function Button({
  handleClick = () => { },
  type = 'button',
  variant = 'primary',
  label = 'submit'
}) {
  return (
    <button type={type} onClick={handleClick} className={styles[variant]}>{label}</button>
  )
}
