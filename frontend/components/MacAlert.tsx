import styles from "./MacAlert.module.css";

type Props = {
  message: string;
  onDismiss: () => void;
};

export function MacAlert({ message, onDismiss }: Props) {
  return (
    <div className={styles.overlay} role="alertdialog" aria-modal="true">
      <div className="mac-dialog">
        <div className="mac-dialog-inner">
          <svg
            className="mac-dialog-icon"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <polygon
              points="16,2 30,28 2,28"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinejoin="miter"
            />
            <rect x="15" y="11" width="2" height="9" fill="#000000" />
            <rect x="15" y="22" width="2" height="2.5" fill="#000000" />
          </svg>
          <div>
            <p className={`mac-doc-text ${styles.body}`}>{message}</p>
            <div className={styles.actions}>
              <button
                type="button"
                className="mac-button mac-button-default"
                onClick={onDismiss}
                autoFocus
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
