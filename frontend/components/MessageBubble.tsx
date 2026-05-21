import type { Message } from "@/lib/messages";
import styles from "./MessageBubble.module.css";

type Props = {
  message: Message;
};

export function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";
  return (
    <p
      className={`mac-doc-text ${styles.line} ${isUser ? styles.userLine : styles.coachLine}`}
    >
      {isUser && <span className={styles.label}>You: </span>}
      {!isUser && message.id !== "welcome" && (
        <span className={styles.label}>Coach: </span>
      )}
      {message.content}
    </p>
  );
}
