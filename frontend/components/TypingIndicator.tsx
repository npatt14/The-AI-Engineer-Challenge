import styles from "./TypingIndicator.module.css";

export function TypingIndicator() {
  return (
    <p
      className={`mac-doc-text ${styles.line}`}
      aria-live="polite"
      aria-label="Coach is typing"
    >
      <span className={styles.label}>Coach: </span>
      <span className={styles.dots}>...</span>
    </p>
  );
}
