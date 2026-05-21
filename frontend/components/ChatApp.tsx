"use client";

import { useCallback, useEffect, useState } from "react";
import { sendChat } from "@/lib/api";
import { STATUS } from "@/lib/copy";
import {
  conversationTitle,
  hasUserMessages,
  loadConversations,
  saveConversation,
  type SavedConversation,
} from "@/lib/conversations";
import {
  createMessage,
  createWelcomeMessage,
  type Message,
} from "@/lib/messages";
import { ChatInput } from "./ChatInput";
import { ChatView } from "./ChatView";
import { DesktopMenuBar } from "./DesktopMenuBar";
import { MacAlert } from "./MacAlert";
import { MacWindow } from "./MacWindow";

function newConversationId(): string {
  return crypto.randomUUID();
}

export function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([
    createWelcomeMessage(),
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<SavedConversation[]>([]);
  const [fileMenuOpen, setFileMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [status, setStatus] = useState<string>(STATUS.ready);
  const [error, setError] = useState<string | null>(null);

  const refreshConversations = useCallback(() => {
    setConversations(loadConversations());
  }, []);

  useEffect(() => {
    refreshConversations();
  }, [refreshConversations]);

  const persistCurrent = useCallback(
    (msgs: Message[], id: string | null) => {
      if (!hasUserMessages(msgs)) return id;
      const convId = id ?? newConversationId();
      saveConversation({
        id: convId,
        title: conversationTitle(msgs),
        messages: msgs,
        updatedAt: Date.now(),
      });
      refreshConversations();
      return convId;
    },
    [refreshConversations]
  );

  const startFresh = useCallback(() => {
    setMessages([createWelcomeMessage()]);
    setActiveId(null);
    setInput("");
    setError(null);
    setStatus(STATUS.ready);
    setFileMenuOpen(false);
  }, []);

  const handleNew = useCallback(() => {
    if (hasUserMessages(messages)) {
      persistCurrent(messages, activeId);
    }
    startFresh();
  }, [messages, activeId, persistCurrent, startFresh]);

  const handleClear = useCallback(() => {
    startFresh();
  }, [startFresh]);

  const handleSelectConversation = useCallback(
    (id: string) => {
      const conv = loadConversations().find((c) => c.id === id);
      if (!conv) return;
      setMessages(conv.messages);
      setActiveId(conv.id);
      setInput("");
      setError(null);
      setStatus(STATUS.ready);
      setFileMenuOpen(false);
    },
    []
  );

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isThinking) return;

    const userMessage = createMessage("user", text);
    const withUser = [...messages, userMessage];
    setMessages(withUser);
    setInput("");
    setIsThinking(true);
    setStatus(STATUS.thinking);
    setError(null);

    let convId = activeId;
    if (!convId) convId = newConversationId();

    try {
      const { reply } = await sendChat(text);
      const withReply = [...withUser, createMessage("assistant", reply)];
      setMessages(withReply);
      setActiveId(persistCurrent(withReply, convId));
      setStatus(STATUS.ready);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setStatus(STATUS.error);
      setActiveId(persistCurrent(withUser, convId));
    } finally {
      setIsThinking(false);
    }
  }, [input, isThinking, messages, activeId, persistCurrent]);

  return (
    <>
      <DesktopMenuBar
        fileMenuOpen={fileMenuOpen}
        conversations={conversations}
        activeId={activeId}
        disabled={isThinking}
        onToggleFile={() => setFileMenuOpen((o) => !o)}
        onSelectConversation={handleSelectConversation}
        onNew={handleNew}
        onClear={handleClear}
        onCloseMenu={() => setFileMenuOpen(false)}
      />
      <MacWindow status={status}>
        <ChatView messages={messages} isThinking={isThinking} />
        <ChatInput
          value={input}
          disabled={isThinking}
          onChange={setInput}
          onSend={handleSend}
        />
      </MacWindow>
      {error && <MacAlert message={error} onDismiss={() => setError(null)} />}
    </>
  );
}
