import styles from './index.module.css'

function UpButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.root} onClick={handleClick}>^</div>
  )
}

export default UpButton