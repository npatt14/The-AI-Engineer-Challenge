"use client";

import { PLACEHOLDER, SEND_LABEL } from "@/lib/copy";
import styles from "./ChatInput.module.css";

type Props = {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
};

export function ChatInput({ value, disabled, onChange, onSend }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) onSend();
    }
  };

  return (
    <div className={styles.wrap}>
      <textarea
        className={`mac-textfield ${styles.input}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDER}
        disabled={disabled}
        rows={2}
        aria-label="Message"
      />
      <button
        type="button"
        className={`mac-button mac-button-default ${styles.send}`}
        onClick={onSend}
        disabled={disabled || !value.trim()}
      >
        {SEND_LABEL}
      </button>
    </div>
  );
}
