"use client";

import {
  APP_TITLE,
  CLEAR_LABEL,
  FILE_MENU,
  NEW_LABEL,
  NO_CONVERSATIONS,
} from "@/lib/copy";
import type { SavedConversation } from "@/lib/conversations";
import styles from "./DesktopMenuBar.module.css";

type Props = {
  fileMenuOpen: boolean;
  conversations: SavedConversation[];
  activeId: string | null;
  disabled?: boolean;
  onToggleFile: () => void;
  onSelectConversation: (id: string) => void;
  onNew: () => void;
  onClear: () => void;
  onCloseMenu: () => void;
};

export function DesktopMenuBar({
  fileMenuOpen,
  conversations,
  activeId,
  disabled,
  onToggleFile,
  onSelectConversation,
  onNew,
  onClear,
  onCloseMenu,
}: Props) {
  return (
    <header className="mac-menubar">
      <nav className={styles.menus} aria-label="Application menu">
        <button
          type="button"
          className={`${styles.menuBtn} ${styles.appleBtn}`}
          aria-label="Apple menu"
          disabled
        >
          {""}
        </button>
        <div className={styles.menuWrap}>
          <button
            type="button"
            className={`${styles.menuBtn} ${fileMenuOpen ? styles.menuBtnOpen : ""}`}
            onClick={onToggleFile}
            disabled={disabled}
            aria-expanded={fileMenuOpen}
            aria-haspopup="menu"
          >
            {FILE_MENU}
          </button>
          {fileMenuOpen && (
            <>
              <div
                className={styles.backdrop}
                onClick={onCloseMenu}
                aria-hidden="true"
              />
              <div className="mac-menu-dropdown" role="menu">
                <button
                  type="button"
                  role="menuitem"
                  className="mac-menu-item"
                  onClick={() => {
                    onNew();
                    onCloseMenu();
                  }}
                  disabled={disabled}
                >
                  {NEW_LABEL}
                </button>
                <div className="mac-menu-divider" role="separator" />
                <div className="mac-menu-heading">Open</div>
                {conversations.length === 0 ? (
                  <div className={styles.emptyItem}>{NO_CONVERSATIONS}</div>
                ) : (
                  <ul className={styles.convList}>
                    {conversations.map((c) => (
                      <li key={c.id}>
                        <button
                          type="button"
                          role="menuitem"
                          className={`mac-menu-item ${activeId === c.id ? styles.convActive : ""}`}
                          onClick={() => onSelectConversation(c.id)}
                        >
                          <span className={styles.convTitle}>{c.title}</span>
                          <span className={styles.convDate}>
                            {new Date(c.updatedAt).toLocaleString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            })}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mac-menu-divider" role="separator" />
                <button
                  type="button"
                  role="menuitem"
                  className="mac-menu-item"
                  onClick={() => {
                    onClear();
                    onCloseMenu();
                  }}
                  disabled={disabled}
                >
                  {CLEAR_LABEL}
                </button>
              </div>
            </>
          )}
        </div>
        <button type="button" className={styles.menuBtn} disabled>
          Edit
        </button>
      </nav>
      <div className={styles.spacer} />
      <div className={styles.appMenu} aria-hidden="true">
        {APP_TITLE}
      </div>
    </header>
  );
}
