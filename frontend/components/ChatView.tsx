"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@/lib/messages";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import styles from "./ChatView.module.css";

type Props = {
  messages: Message[];
  isThinking: boolean;
};

export function ChatView({ messages, isThinking }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  return (
    <div
      className={`mac-scroll ${styles.doc}`}
      role="log"
      aria-live="polite"
    >
      <div className={styles.content}>
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {isThinking && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
